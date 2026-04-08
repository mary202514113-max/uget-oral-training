import argparse
import asyncio
import json
import re
from pathlib import Path

import edge_tts

VOICE_MAP = {
    "american": "en-US-JennyNeural",
    "british": "en-GB-SoniaNeural",
}

OUTPUT_TEMPLATE = "day-{day:02d}-{accent}.mp3"
LESSON_START_PATTERN = re.compile(r"(?m)^\s*\{\s*day:\s*(\d+),")
ANSWER_PATTERN = re.compile(r'answer:\s*"((?:\\.|[^"\\])*)"', re.S)


def parse_args():
    parser = argparse.ArgumentParser(description="为口语训练小程序批量生成示范音频")
    parser.add_argument("--html", default="training_app.html", help="课程 HTML 文件路径")
    parser.add_argument("--output", default="assets/audio", help="音频输出目录")
    parser.add_argument("--force", action="store_true", help="覆盖已存在的音频文件")
    parser.add_argument("--concurrency", type=int, default=3, help="并发生成数量")
    return parser.parse_args()


def decode_js_string(raw: str) -> str:
    return json.loads(f'"{raw}"')


def extract_lessons(html_text: str):
    matches = list(LESSON_START_PATTERN.finditer(html_text))
    lessons = []
    for index, match in enumerate(matches):
        day = int(match.group(1))
        start = match.start()
        end = matches[index + 1].start() if index + 1 < len(matches) else len(html_text)
        block = html_text[start:end]
        answer_match = ANSWER_PATTERN.search(block)
        if not answer_match:
            continue
        answer = decode_js_string(answer_match.group(1)).strip()
        if answer:
            lessons.append((day, answer))
    return lessons


async def generate_single(day: int, accent: str, text: str, output_file: Path, semaphore: asyncio.Semaphore):
    async with semaphore:
        communicate = edge_tts.Communicate(text=text, voice=VOICE_MAP[accent])
        await communicate.save(str(output_file))
        print(f"已生成 Day {day:02d} {accent}: {output_file}")


async def main():
    args = parse_args()
    root = Path(__file__).resolve().parent
    html_path = (root / args.html).resolve()
    output_dir = (root / args.output).resolve()
    output_dir.mkdir(parents=True, exist_ok=True)

    html_text = html_path.read_text(encoding="utf-8")
    lessons = extract_lessons(html_text)
    if not lessons:
        raise RuntimeError("未从 training_app.html 中提取到课程示范文本")

    semaphore = asyncio.Semaphore(max(1, args.concurrency))
    tasks = []
    skipped = 0

    for day, text in lessons:
        for accent in VOICE_MAP:
            output_file = output_dir / OUTPUT_TEMPLATE.format(day=day, accent=accent)
            if output_file.exists() and not args.force:
                skipped += 1
                continue
            tasks.append(generate_single(day, accent, text, output_file, semaphore))

    if tasks:
        await asyncio.gather(*tasks)

    print(f"完成：共提取 {len(lessons)} 天课程，跳过 {skipped} 个已存在文件。")


if __name__ == "__main__":
    asyncio.run(main())
