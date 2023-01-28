---
title: CMD快速辅助工具
tags:
  - 教程
  - Hexo
  - 辅助
  - 命令
categories: 辅助
swiper_index: 100
keywords: 'hexo,hexo辅助工具,hexo快捷键,文檔'
description: hexo命令较为麻烦，所以简单化
top_img: https://s2.loli.net/2022/11/19/qFsn9wJgeCRZk7A.webp
cover: https://s2.loli.net/2022/11/19/qFsn9wJgeCRZk7A.webp
comments: true
abbrlink: db0a31c8
date: 2022-11-19 14:37:59
updated: 2022-11-19 14:37:59
---





hexo辅助工具快速命令

<!-- more -->

**注意：本命令为桌面blog文件夹如许设置其他文件夹自行修改代码**

### 新建页面

`%userprofile%\Desktop\·`%userprofile%\为当前用户名自己设置自己的路径

~~~bash
@echo off
set /p cili=输入页面名称、右键粘贴:
cd %userprofile%\Desktop\blog && hexo new page %cili%
pause
~~~

### 新建文章

~~~bash
@echo off
set /p cili=输入文章名称、右键粘贴:
cd %userprofile%\Desktop\blog && hexo new %cili%
pause
~~~

### 控制台

![image-20221119150846606](https://s2.loli.net/2022/11/19/dWZMrk3RlJ564ON.png)

~~~bash
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
echo    j = 监视文件    q = 退出
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
echo     监视文件变动
start cmd /k "cd %userprofile%\Desktop\blog && hexo generate --watch "
echo.
echo   hexo generate --watch #监视文件变动
echo.
echo     3秒后自动返回主菜单
echo.
ping -n 3 127.1>nul 
goto meun
:q
exit
~~~

默认路径为桌面blog文件夹可自行修改，复制代码新建文文本文档粘贴代码修改后缀为.bat即可