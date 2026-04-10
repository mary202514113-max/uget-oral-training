#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""生成 Day 48 音频文件"""

import asyncio
import edge_tts
from pathlib import Path

# Day 48 的 answer 文本
DAY48_TEXT = """Excellent question - ESG and digitalization are crucial for modern supply chains. Let me explain our two-pronged approach. On the sustainability side: 1) Our PCR (Post-Consumer Recycled) pallets contain 30% recycled HDPE material, reducing carbon footprint by 15%. 2) Our RFID-tagged containers enable closed-loop returnable packaging systems, eliminating single-use waste. 3) We provide a Life Cycle Assessment report showing CO2 savings compared to wooden or corrugated alternatives. On the digitalization side: 1) Our IoT-enabled smart pallets with embedded sensors track location, temperature, and handling conditions in real time. 2) Our mobile app provides full inventory visibility and predictive maintenance alerts. 3) We offer integration with ERP systems like SAP and Oracle for automated replenishment. This combination helps clients achieve both sustainability KPIs and supply chain efficiency simultaneously."""

VOICE_MAP = {
    "american": "en-US-JennyNeural",
    "british": "en-GB-SoniaNeural",
}

OUTPUT_DIR = Path("D:/优盖特客户数据/外贸口语培训小程序/uget-oral-training/assets/audio")

async def generate_audio(accent: str, voice: str, text: str):
    output_file = OUTPUT_DIR / f"day-48-{accent}.mp3"
    communicate = edge_tts.Communicate(text=text, voice=voice)
    await communicate.save(str(output_file))
    print(f"✅ 已生成 Day 48 {accent}: {output_file}")

async def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    
    tasks = [
        generate_audio("american", VOICE_MAP["american"], DAY48_TEXT),
        generate_audio("british", VOICE_MAP["british"], DAY48_TEXT),
    ]
    
    await asyncio.gather(*tasks)
    print("✅ Day 48 音频生成完成！")

if __name__ == "__main__":
    asyncio.run(main())
