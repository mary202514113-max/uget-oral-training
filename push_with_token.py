#!/usr/bin/env python3
"""
使用 GitHub Token 推送
"""
import subprocess
import os

git_path = r'C:\Program Files\Git\bin\git.exe'
work_dir = r'c:\Users\Lenovo\WorkBuddy\20260403194237'

# 从环境变量获取 token
token = os.environ.get('GITHUB_TOKEN')
if not token:
    print("请设置 GITHUB_TOKEN 环境变量")
    print("示例: $env:GITHUB_TOKEN='ghp_xxxxxxxxxxxx'")
    exit(1)

# 设置带 token 的远程 URL
remote_url = f"https://{token}@github.com/mary202514113-max/uget-oral-training.git"

# 配置远程 URL
result = subprocess.run(
    [git_path, 'remote', 'set-url', 'origin', remote_url],
    cwd=work_dir, capture_output=True, text=True
)
if result.returncode != 0:
    print(f"设置远程 URL 失败: {result.stderr}")
    exit(1)

print("远程 URL 已更新（带 token）")

# 推送
print("开始推送...")
result = subprocess.run(
    [git_path, 'push', 'origin', 'main'],
    cwd=work_dir, capture_output=True, text=True, timeout=180
)

print(f"返回码: {result.returncode}")
if result.stdout:
    print(f"输出: {result.stdout}")
if result.stderr:
    print(f"错误: {result.stderr}")

# 恢复原始远程 URL（去掉 token）
subprocess.run(
    [git_path, 'remote', 'set-url', 'origin', 'https://github.com/mary202514113-max/uget-oral-training.git'],
    cwd=work_dir, capture_output=True
)

if result.returncode == 0:
    print("\n✓ 推送成功！")
    print("GitHub Pages 将在 1-2 分钟后更新:")
    print("https://mary202514113-max.github.io/uget-oral-training/")
else:
    print("\n✗ 推送失败")
