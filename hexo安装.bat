@echo off&setlocal enabledelayedexpansion
title hexo��װ ���䰮��ѩ blog.4t.pw
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
echo               hexo��װ����                
echo.     
echo    1 = ��װ        2 = �鿴�汾 
echo.
echo    3 = �鿴�ں�    4 = �����ļ�
echo.
echo    5 = ����Ԥ��    6 = �������� 
echo.
echo    7 = ������Ⱦ    8 = �����ļ�
echo.
echo    9 = ����hexo    0 = ��ҳ��
echo.
echo    j = ��������    q = �˳�
echo.
echo =============================================

:sss
echo.
set /p xz=        ������������еĲ�����
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
if "%xz%"=="" echo.&echo   �ȿ�...�����û�������κ����ݣ���������������ѡ��!&ping -n 3 127.1>nul&goto meun
echo. 
echo   �Բ������������ %xz% ����ϵͳ�޴�ѡ�3����Զ��Զ��������˵���
ping -n 3 127.1>nul 
goto meun
:1
cls
echo.
echo     ����Ϊ�㰲װHexo���ͳ������Ե�..
start cmd /c "npm install -g hexo-cli"
echo.
echo     ��ϲ�㣬��װ�ɹ���
echo.
echo.
echo     3����Զ��������˵�
ping -n 3 127.1>nul 
goto meun
:2
cls
echo.
echo.
echo     ��Ϊ��򿪰汾�鿴�����Ե�....
start cmd /k "hexo v"
echo.
echo     �򿪳ɹ���
echo.
echo.
echo     3����Զ��������˵�
ping -n 3 127.1>nul 
goto meun
:3
cls
echo.
echo     �鿴node��npm�Ƿ�װ�ɹ�
start cmd /k "echo node �ں˰汾Ϊ&& node -v && echo npm �ں˰汾Ϊ&&  npm -v"
echo.
echo.
echo     3����Զ��������˵�
echo.
ping -n 3 127.1>nul 
goto meun
:4
cls
echo.
echo     ���洴���ļ���blog
start cmd /c "md %userprofile%\Desktop\blog && cd %userprofile%\Desktop\blog && hexo init"
echo.
echo     �Ѵ���blog�ļ�
echo.
echo     3����Զ��������˵�
echo.
ping -n 3 127.1>nul 
goto meun
:5
cls

echo.
echo     ����Ԥ��
echo.
start cmd /k "cd %userprofile%\Desktop\blog && hexo new test && hexo g && hexo s"
start http://localhost:4000
echo     ��վ�Ѵ�
echo.
echo     3����Զ��������˵�
echo.
ping -n 3 127.1>nul 
goto meun
:6
cls
echo.
echo     ���¼�������
start cmd /k "cd %userprofile%\Desktop\blog && npm install --save hexo-renderer-jade hexo-generator-feed hexo-generator-sitemap hexo-browsersync hexo-generator-archive && hexo clean&& hexo g && hexo s"
echo.
echo     �������
echo.
echo     3����Զ��������˵�
echo.
ping -n 3 127.1>nul 
goto meun
:7
cls
echo.
echo     ������Ⱦ
start cmd /k "cd %userprofile%\Desktop\blog && hexo clean && hexo s"
echo.
echo   ������棬������Ⱦ����������
echo.
echo     3����Զ��������˵�
echo.
ping -n 3 127.1>nul 
goto meun
:8
cls
echo.
echo     �����ļ�
start cmd /k "cd %userprofile%\Desktop\blog && hexo clean && hexo g"
echo.
echo   �����ļ�
echo.
echo     3����Զ��������˵�
echo.
ping -n 3 127.1>nul 
goto meun
:9
cls
echo.
echo         ������
start cmd /k "npm update hexo -g"
echo.
echo   ����hexo�����°汾
echo.
echo     3����Զ��������˵�
echo.
ping -n 3 127.1>nul 
goto meun
:0
cls
echo.
echo     �� Ԥ����ַ
start cmd /c "start http://localhost:4000"
echo.
echo   �� http://localhost:4000
echo.
echo     3����Զ��������˵�
echo.
ping -n 3 127.1>nul 
goto meun
:j
cls
echo.
echo    ������������
start cmd /k "cd %userprofile%\Desktop\blog && hexo algolia"
echo.
echo   ������������
echo.
echo     3����Զ��������˵�
echo.
ping -n 3 127.1>nul 
goto meun
:q
exit