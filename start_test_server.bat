@echo off
cd /d "%~dp0"
echo 启动HTTP服务器在端口8765...
echo 测试页面: http://localhost:8765/test_audio.html
echo 主应用: http://localhost:8765/training_app.html
echo.
python -m http.server 8765 --bind 0.0.0.0
pause