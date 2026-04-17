#!/usr/bin/env python3
"""
通过 Python 强制 git 走系统代理推送
"""
import subprocess
import os

# 设置环境变量，强制 git 走系统代理
env = os.environ.copy()
env['GIT_SSL_NO_VERIFY'] = '1'
env['HTTP_PROXY'] = ''
env['HTTPS_PROXY'] = ''
env['http_proxy'] = ''
env['https_proxy'] = ''

git_path = r'C:\Program Files\Git\bin\git.exe'
work_dir = r'c:\Users\Lenovo\WorkBuddy\20260403194237'

def run_git(args):
    cmd = [git_path] + args
    result = subprocess.run(cmd, cwd=work_dir, env=env, capture_output=True, text=True)
    print(f"命令: git {' '.join(args)}")
    print(f"返回码: {result.returncode}")
    if result.stdout:
        print(f"输出:\n{result.stdout}")
    if result.stderr:
        print(f"错误:\n{result.stderr}")
    return result.returncode == 0

print("开始推送...")
print("=" * 50)

# 先检查远程
run_git(['remote', '-v'])

# 推送
success = run_git(['push', 'origin', 'main'])

if success:
    print("\n✓ 推送成功！")
    print("GitHub Pages 将在 1-2 分钟后更新:")
    print("https://mary202514113-max.github.io/uget-oral-training/")
else:
    print("\n✗ 推送失败")
