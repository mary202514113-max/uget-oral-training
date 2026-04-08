#!/usr/bin/env python3
"""
GitHub API 推送脚本 - 绕过 git 命令行
用于推送 uget-oral-training 仓库更新
"""
import os
import base64
import json
import urllib.request
import urllib.error

# GitHub 配置
REPO_OWNER = "mary202514113-max"
REPO_NAME = "uget-oral-training"
BRANCH = "main"

# 需要推送的文件列表
FILES_TO_PUSH = [
    ("training_app.html", "c:/Users/Lenovo/WorkBuddy/20260403194237/training_app.html"),
    ("index.html", "c:/Users/Lenovo/WorkBuddy/20260403194237/index.html"),
]

# 音频文件
AUDIO_DIR = "c:/Users/Lenovo/WorkBuddy/20260403194237/assets/audio"
for f in os.listdir(AUDIO_DIR):
    if f.endswith('.mp3'):
        FILES_TO_PUSH.append((f"assets/audio/{f}", os.path.join(AUDIO_DIR, f)))

def get_file_sha(owner, repo, path, branch, token):
    """获取文件当前 SHA（如果存在）"""
    url = f"https://api.github.com/repos/{owner}/{repo}/contents/{path}?ref={branch}"
    req = urllib.request.Request(url)
    req.add_header("Authorization", f"token {token}")
    req.add_header("Accept", "application/vnd.github.v3+json")
    
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            return data.get('sha')
    except urllib.error.HTTPError as e:
        if e.code == 404:
            return None  # 文件不存在
        raise

def push_file(owner, repo, path, local_path, branch, token, message):
    """推送单个文件到 GitHub"""
    # 读取文件内容
    with open(local_path, 'rb') as f:
        content = f.read()
    
    # Base64 编码
    encoded = base64.b64encode(content).decode()
    
    # 获取现有文件 SHA（用于更新）
    sha = get_file_sha(owner, repo, path, branch, token)
    
    # 构建请求
    url = f"https://api.github.com/repos/{owner}/{repo}/contents/{path}"
    data = {
        "message": message,
        "content": encoded,
        "branch": branch
    }
    if sha:
        data["sha"] = sha
    
    req = urllib.request.Request(url, data=json.dumps(data).encode())
    req.add_header("Authorization", f"token {token}")
    req.add_header("Accept", "application/vnd.github.v3+json")
    req.add_header("Content-Type", "application/json")
    req.method = "PUT"
    
    try:
        with urllib.request.urlopen(req) as response:
            result = json.loads(response.read().decode())
            return True, result['content']['html_url']
    except urllib.error.HTTPError as e:
        error_body = e.read().decode()
        return False, f"HTTP {e.code}: {error_body}"

def main():
    # 从环境变量获取 token
    token = os.environ.get('GITHUB_TOKEN')
    if not token:
        print("错误: 请设置 GITHUB_TOKEN 环境变量")
        print("示例: $env:GITHUB_TOKEN='ghp_xxxxxxxxxxxx'")
        return 1
    
    commit_message = "Add Day 44 course: Production progress sync & exception alert communication"
    
    print(f"开始推送 {len(FILES_TO_PUSH)} 个文件到 GitHub...")
    print(f"仓库: {REPO_OWNER}/{REPO_NAME}, 分支: {BRANCH}")
    print()
    
    success_count = 0
    fail_count = 0
    
    for i, (path, local_path) in enumerate(FILES_TO_PUSH, 1):
        print(f"[{i}/{len(FILES_TO_PUSH)}] 推送 {path}...", end=" ")
        try:
            success, result = push_file(REPO_OWNER, REPO_NAME, path, local_path, BRANCH, token, commit_message)
            if success:
                print(f"✓ 成功")
                success_count += 1
            else:
                print(f"✗ 失败: {result}")
                fail_count += 1
        except Exception as e:
            print(f"✗ 错误: {e}")
            fail_count += 1
    
    print()
    print(f"推送完成: {success_count} 成功, {fail_count} 失败")
    
    if success_count > 0:
        print(f"\nGitHub Pages 将在 1-2 分钟后更新:")
        print(f"https://{REPO_OWNER}.github.io/{REPO_NAME}/")
    
    return 0 if fail_count == 0 else 1

if __name__ == "__main__":
    exit(main())
