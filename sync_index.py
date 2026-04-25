"""把 training_app.html 的课程数据同步到 index.html，保证两个文件课程一致"""
import re

def extract_lessons_block(html_text):
    """找到 lessonsData = [ ... ]; 中的数组内容，返回 (start, end)"""
    positions = [m.start() for m in re.finditer(r'lessonsData\s*=\s*\[', html_text)]
    if not positions:
        return None, None

    # 找含最多 day: 的那个块
    candidates = []
    for pos in positions:
        bracket_start = html_text.index('[', pos)
        # 找对应的 ]; 结尾（而非中途的 }）
        # 方法：从文件末尾向前找 ];\n（数组结尾的特征）
        search_from = bracket_start + 1
        # 找最靠近末尾的 ]; 配对
        # 简单策略：直接找最后出现的合法数组结尾
        # 即：]; 后面是换行或 // 或 <script 结束
        end_pattern = re.search(r'\];\s*(?=\n\s*(?:<script|//\s*=|function|const\s+\w))', html_text[bracket_start:])
        if end_pattern:
            block_end = bracket_start + end_pattern.end()
        else:
            # 备用：数括号深度
            depth = 1
            i = bracket_start + 1
            while depth > 0 and i < len(html_text):
                if html_text[i] == '[':
                    depth += 1
                elif html_text[i] == ']':
                    depth -= 1
                i += 1
            block_end = i

        block = html_text[bracket_start:block_end]
        days = re.findall(r'^\s*day:\s*(\d+)', block, re.MULTILINE)
        candidates.append((len(days), pos, block_end))

    candidates.sort(reverse=True)
    return candidates[0][1], candidates[0][2]


with open('training_app.html', encoding='utf-8') as f:
    trn_html = f.read()
with open('index.html', encoding='utf-8') as f:
    idx_html = f.read()

# ─── 修复：删除空的 let lessonsData = []; 声明，防止双声明导致数据损坏 ───
# 这一行是 2026-04-25 事故的根因，永久加入同步脚本
idx_html = re.sub(r'let lessonsData = \[\];\n?', '', idx_html)

trn_start, trn_end = extract_lessons_block(trn_html)
idx_start, idx_end = extract_lessons_block(idx_html)

print(f"training_app.html: char {trn_start}-{trn_end}, len {trn_end - trn_start}")
print(f"index.html: char {idx_start}-{idx_end}, len {idx_end - idx_start}")

trn_block = trn_html[trn_start:trn_end]
trn_days = re.findall(r'^\s*day:\s*(\d+)', trn_block, re.MULTILINE)
idx_block = idx_html[idx_start:idx_end]
idx_days = re.findall(r'^\s*day:\s*(\d+)', idx_block, re.MULTILINE)

max_trn = max(int(d) for d in trn_days) if trn_days else 0
max_idx = max(int(d) for d in idx_days) if idx_days else 0
print(f"training_app: {len(trn_days)} lessons, max day {max_trn}")
print(f"index.html: {len(idx_days)} lessons, max day {max_idx}")

new_idx_html = idx_html[:idx_start] + trn_block + idx_html[idx_end:]
new_days = re.findall(r'^\s*day:\s*(\d+)', new_idx_html, re.MULTILINE)
max_new = max(int(d) for d in new_days) if new_days else 0
print(f"After sync: {len(new_days)} lessons, max day {max_new}")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_idx_html)
print(f"index.html updated! {len(new_idx_html)//1024} KB ({len(new_idx_html):,} bytes)")
