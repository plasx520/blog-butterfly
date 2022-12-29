---
title: Hexo博客 | Hexo竟然可以展示PDF
tags:
  - 教程
  - Hexo
  - pdf
  - 插件
categories: hexo插件
keywords: 'hexo,butterfly,主題,doc,教程,文檔'
description: hexo功能加强，增加pdf在线阅读功能
top_img: >-
  https://drfs.ctcontents.com/file/14237530/748136398/14ef9a/img/wenzhang/11111.jpg
cover: >-
  https://drfs.ctcontents.com/file/14237530/748136399/f9558b/img/wenzhang/22222.jpg
comments: true
abbrlink: b2fdb571
updated:
---
# 

hexo-pdf插件一键搞定，页面展示PDF



## 安装hexo-pdf

```PLAINTEXT
npm install --save hexo-pdf
```

## 使用

使用本地资源，可以在markdown文件路径下创建一个同名文件夹，其内放pdf文件
例如：

在需要的文章添加如下语句：

```HTML
{% pdf mydocument.pdf %}
```

使用外部资源同理，

```PLAINTEXT
{% pdf https://cdn.jsdelivr.net/gh/Justlovesmile/CDN/pdf/小作文讲义.pdf %}
```

