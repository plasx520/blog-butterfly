@echo off&setlocal enabledelayedexpansion
title hexo安装 怕冷爱上雪 blog.4t.pw
mode con cols=45 lines=22
color 2F
PUSHD %~DP0 & cd /d "%~dp0"
%1 %2
mshta vbscript:createobject("shell.application").shellexecute("%~s0","goto :runas","","runas",1)(window.close)&goto :eof
:runas
:meun
set xz=<nul
set ms=<nul
set bf=<nul
cls
echo.
echo =============================================
echo.
echo               hexo安装工具                
echo.     
echo    1 = 安装        2 = 查看版本 
echo.
echo    3 = 查看内核    4 = 创建文件
echo.
echo    5 = 部署预览    6 = 重启主题 
echo.
echo    7 = 重新渲染    8 = 生成文件
echo.
echo    9 = 升级hexo    0 = 打开页面
echo.
echo    j = 生成搜索    q = 退出
echo.
echo =============================================

:sss
echo.
set /p xz=        请输入您想进行的操作：
if /i "%xz%"=="1" goto 1
if /i "%xz%"=="2" goto 2
if /i "%xz%"=="3" goto 3
if /i "%xz%"=="4" goto 4
if /i "%xz%"=="5" goto 5
if /i "%xz%"=="6" goto 6
if /i "%xz%"=="q" goto q
if /i "%xz%"=="7" goto 7
if /i "%xz%"=="8" goto 8
if /i "%xz%"=="9" goto 9
if /i "%xz%"=="0" goto 0
if /i "%xz%"=="j" goto j
echo.
cls
if "%xz%"=="" echo.&echo   咳咳...你好像没有输入任何内容，请重新输入您的选择!&ping -n 3 127.1>nul&goto meun
echo. 
echo   对不起，您输入的是 %xz% ，本系统无此选项，3秒后自动自动返回主菜单！
ping -n 3 127.1>nul 
goto meun
:1
cls
echo.
echo     正在为你安装Hexo博客程序，请稍等..
start cmd /c "npm install -g hexo-cli"
echo.
echo     恭喜你，安装成功！
echo.
echo.
echo     3秒后自动返回主菜单
ping -n 3 127.1>nul 
goto meun
:2
cls
echo.
echo.
echo     正为你打开版本查看，请稍等....
start cmd /k "hexo v"
echo.
echo     打开成功！
echo.
echo.
echo     3秒后自动返回主菜单
ping -n 3 127.1>nul 
goto meun
:3
cls
echo.
echo     查看node和npm是否安装成功
start cmd /k "echo node 内核版本为&& node -v && echo npm 内核版本为&&  npm -v"
echo.
echo.
echo     3秒后自动返回主菜单
echo.
ping -n 3 127.1>nul 
goto meun
:4
cls
echo.
echo     桌面创建文件夹blog
start cmd /c "md %userprofile%\Desktop\blog && cd %userprofile%\Desktop\blog && hexo init"
echo.
echo     已创建blog文件
echo.
echo     3秒后自动返回主菜单
echo.
ping -n 3 127.1>nul 
goto meun
:5
cls

echo.
echo     部署预览
echo.
start cmd /k "cd %userprofile%\Desktop\blog && hexo new test && hexo g && hexo s"
start http://localhost:4000
echo     网站已打开
echo.
echo     3秒后自动返回主菜单
echo.
ping -n 3 127.1>nul 
goto meun
:6
cls
echo.
echo     重新加载主题
start cmd /k "cd %userprofile%\Desktop\blog && npm install --save hexo-renderer-jade hexo-generator-feed hexo-generator-sitemap hexo-browsersync hexo-generator-archive && hexo clean&& hexo g && hexo s"
echo.
echo     清楚缓存
echo.
echo     3秒后自动返回主菜单
echo.
ping -n 3 127.1>nul 
goto meun
:7
cls
echo.
echo     重新渲染
start cmd /k "cd %userprofile%\Desktop\blog && hexo clean && hexo s"
echo.
echo   清楚缓存，重新渲染，开启服务
echo.
echo     3秒后自动返回主菜单
echo.
ping -n 3 127.1>nul 
goto meun
:8
cls
echo.
echo     生成文件
start cmd /k "cd %userprofile%\Desktop\blog && hexo clean && hexo g"
echo.
echo   生成文件
echo.
echo     3秒后自动返回主菜单
echo.
ping -n 3 127.1>nul 
goto meun
:9
cls
echo.
echo         升级中
start cmd /k "npm update hexo -g"
echo.
echo   升级hexo到最新版本
echo.
echo     3秒后自动返回主菜单
echo.
ping -n 3 127.1>nul 
goto meun
:0
cls
echo.
echo     打开 预览地址
start cmd /c "start http://localhost:4000"
echo.
echo   打开 http://localhost:4000
echo.
echo     3秒后自动返回主菜单
echo.
ping -n 3 127.1>nul 
goto meun
:j
cls
echo.
echo    生成搜索引擎
start cmd /k "cd %userprofile%\Desktop\blog && hexo algolia"
echo.
echo   生成搜索引擎
echo.
echo     3秒后自动返回主菜单
echo.
ping -n 3 127.1>nul 
goto meun
:q
exit