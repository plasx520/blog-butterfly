---
title: HexoMAC代码框样式美化
tags:
  - 教程
  - Hexo
  - css
  - butterfly
categories: 魔改
keywords: 'hexo,butterfly,主題,doc,教程,文檔'
description: 代码框样式美化HexoMAC代码框样式美化
top_img: >-
  https://drfs.ctcontents.com/file/14237530/748136219/71f0e0/img/wenzhang/526354356.png
cover: >-
  https://drfs.ctcontents.com/file/14237530/748136219/71f0e0/img/wenzhang/526354356.png
comments: true
abbrlink: 2c9505a3
updated:
---
# 

MAC黑色：

~~~css
#article-container figure.highlight,#article-container pre{color:#f8f8f2;background:#696969}#article-container figure.highlight .highlight-tools{background:#3f3f3f;color:#fff}#article-container figure.highlight .gutter pre{color:#d3d3d3;background:grey}#article-container figure.highlight figcaption a{color:#a9a9a9!important}
~~~
MAC白色：
~~~css
#article-container figure.highlight,#article-container pre{color:#a9a9a9;background:#f3f3f3}#article-container figure.highlight .highlight-tools{color:#a9a9a9;background:#eee}#article-container figure.highlight .gutter pre{color:#999;background:#f3f3f3}#article-container figure.highlight figcaption a{color:#f3f3f3!important}
~~~

# 正文

1. 打开站点的主题配置文件`_config.butterfly.yml`，找到`inject`，在`head`处直接引入以下链接：

~~~
- <link rel="stylesheet" href="/css/颜色.css">

~~~

# 前言

本文将介绍如何美化MAC代码框。具体效果如下：

MAC白色样式：

[![img](https://s2.loli.net/2022/12/17/qFYaS2ZuVQPxgiy.png)](https://gcore.jsdelivr.net/gh/CNhuazhu/Image/MACwhite.png)

MAC黑色样式：

[![img](https://s2.loli.net/2022/12/17/ufORQNKYZ4jUSkx.png)](https://gcore.jsdelivr.net/gh/CNhuazhu/Image/MACblack.png)

