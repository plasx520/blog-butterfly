---
title: hexo主题butterfly4.5.1css美化教程二
tags:
  - 教程
  - Hexo
  - 主題
  - butterfly
  - css美化
categories: css
keywords: 'hexo,butterfly,主題,css,美化教程,hexo美化'
description: hexo butterfly主题css美化教程
top_img: 'https://s2.loli.net/2022/11/20/1OkYauiA5meZJHd.webp'
cover: 'https://s2.loli.net/2022/11/20/KTbLngmwpGjQ8XO.webp'
comments: true
abbrlink: eb769414
date: 2022-11-20 15:40:14
updated: 2022-11-20 15:40:14
---





美化魔改避免不了的就是css框架美化教程

<!-- more -->

这是一篇纯css引入美化教程

代码来源

>HEO老大哥自用css
>
>代码来源https://blog.zhheo.com/
>
>代码依赖色彩库








{% note danger modern %}
所有代码均可新建css后引入
{% endnote %}

引入位置

~~~HTML
inject:

     head:

          - <link rel="stylesheet" href="/css/新建名称.css">  
~~~



### 搜索框背景虚化模糊

~~~css
 /* 搜索背景模糊 */
  #search-mask {
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    background: var(--heo-maskbg);
  }
~~~

### 消息弹窗美化

顶部消息弹窗美化教程

如果需要提示复制请移步{% btn '/posts/3296cbc9.html',复制提示,far fa-hand-point-right,pink larger %}

~~~css
/* 消息弹窗 */
.snackbar-container {
    background: var(--heo-main) !important;
    color: var(--heo-white) !important;
    border-radius: 0 !important;
    display: flex;
    justify-content: center !important;
    max-width: none !important;
    min-width: 100% !important;
    margin: 0px !important;
    left: 0px !important;
    height: 60px !important;
    transform: none !important;
  }
  
  .snackbar-container p {
    font-weight: bold !important;
    text-align: center !important;
    font-size: 0.8rem !important;
    display: flex !important;
    justify-content: center !important;
  }
  
  .snackbar-container .action {
    color: var(--heo-white) !important;
    padding: 4px 6px !important;
    font-weight: bold;
    border-radius: 8px !important;
    transition: 0.3s;
    border: var(--style-border) !important;
  }
  
  .snackbar-container .action:hover {
    color: var(--heo-main) !important;
    background: var(--heo-white) !important;
  }
  
  .snackbar-container::after {
    position: absolute;
    width: 0;
    height: 100%;
    left: 0;
    top: 0;
    background: var(--heo-white);
    opacity: 0.1;
    content: "";
    animation: snackbar-progress var(--heo-snackbar-time) linear forwards;
    pointer-events: none;
  }
  
  @keyframes snackbar-progress {
    from {
      width: 0;
    }
  
    to {
      width: 100%;
    }
  }
~~~
### 滚动条

~~~css

/* 滚动条 */
*::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

*::-webkit-scrollbar-thumb {
  background: var(--heo-scrollbar);
  border-radius: 8px;
  cursor: pointer;
}

*::-webkit-scrollbar-thumb:hover {
  background: var(--heo-main);
  opacity: 1;
  display: block !important;
}

*::-webkit-scrollbar-track {
  background-color: var(--heo-none);
}

html {
  overflow-y: overlay;
}
 
~~~

### 文章目录模糊效果

~~~css

  /* 文章目录 */
  #aside-content #card-toc .toc-content .toc-link.active {
    line-height: 1.2;
    border-radius: 12px;
    border-left-color: var(--heo-hovertext);
    background-color: var(--heo-card-bg);
    color: var(--heo-lighttext);
    font-weight: bold;
    font-size: 20px;
  }
  
  [data-theme=dark].toc .toc-item.active .toc-link .toc-text {
    color: var(--heo-white);
  }
  
  #aside-content #card-toc .toc-content .toc-item.active .toc-link {
    opacity: 1;
    border-radius: 8px;
  }
  
  #aside-content #card-toc .toc-content .toc-link {
    line-height: 1.2;
    padding: 8px;
    border-left: 0px solid transparent;
    border-radius: 12px;
    color: var(--heo-secondtext);
    cursor: default;
  }
  
  #aside-content #card-toc .toc-content .toc-link:not(.active) span {
    opacity: 0.6;
    cursor: pointer;
    filter: blur(1px);
    transition: 0.3s;
  }
  
  #aside-content #card-toc:hover .toc-content .toc-link:not(.active) span {
    filter: blur(0px);
    opacity: 1;
  }
  
  #aside-content #card-toc .toc-content .toc-link:not(.active) span:hover {
    color: var(--heo-lighttext);
  }
~~~

### 评论输入框提示

输入QQ号会自动获取昵称和头像🐧

~~~css
/* 设置文字内容 :qq显示的作用是选择第几个 */
.el-input.el-input--small.el-input-group.el-input-group--prepend:nth-child(1):before {
  content: '输入QQ号会自动获取昵称和头像🐧'
}
.el-input.el-input--small.el-input-group.el-input-group--prepend:nth-child(2):before {
  content: '收到回复将会发送到您的邮箱📧'
}
.el-input.el-input--small.el-input-group.el-input-group--prepend:nth-child(3):before {
  content: '可以通过昵称访问您的网站🔗'
}
.el-input.el-input--small.el-input-group.el-input-group--prepend:focus-within::before,
.el-input.el-input--small.el-input-group.el-input-group--prepend:focus-within::after {
  display: block
}
/* 主内容区 */
.el-input.el-input--small.el-input-group.el-input-group--prepend::before {
/* 先隐藏起来 */
display: none;
/* 绝对定位 */
position: absolute;
/* 向上移动60像素 */
top: -60px;
/* 文字强制不换行，防止left:50%导致的文字换行 */
white-space: nowrap;
/* 圆角 */
border-radius: 10px;
/* 距离左边50% */
left: 50%;
/* 然后再向左边挪动自身的一半，即可实现居中 */
transform: translate(-50%);
/* 填充 */
padding: 14px 18px;
background: #444;
color: #fff;
}
/* 小角标 */		   
.el-input.el-input--small.el-input-group.el-input-group--prepend::after {
  display: none;
  content: '';
  position: absolute;
/* 内容大小（宽高）为0且边框大小不为0的情况下，每一条边（4个边）都是一个三角形，组成一个正方形。
我们先将所有边框透明，再给其中的一条边添加颜色就可以实现小三角图标 */										
  border: 12px solid transparent;
  border-top-color: #444;
  left: 50%;
  transform: translate(-50%, -48px)
}

~~~

### 评论框显示简约

~~~css
/* 评论框 */
#twikoo .tk-content {
  background: rgb(235 235 235 / 60%);
  box-shadow: inset 0px 0px 3px 1px rgb(0 107 255 / 19%);
  padding: 10px 15px;
  border-radius: 10px
}
#twikoo .tk-content:hover {
  background: rgb(226 252 255 / 60%);
  box-shadow: inset 0px 0px 3px 1px rgb(0 107 255 / 47%);
  padding: 10px 15px;
  border-radius: 10px
}
~~~

### 手机端屏蔽归档

>移除手机端没用的功能
>
>移动端优化：去除归档、标签、最新文章、公告、评论、只保留网站统计

~~~css
/*移动端优化：去除归档、标签、最新文章、公告、评论、只保留网站统计*/																   
@media screen and (max-width:900px) {
  .user-map,
  .ads-wrap,
  .card-announcement,
  .card-recent-post,
  #card-newest-comments,
  .card-categories,
  .card-tags,
  .aside-content,
  .card-webinfo,
  .container.recent-post-item,
  .author-content,
  .touying,
  .ggl,
  .item-headline {
      display: none
  }
}
~~~

### 文章全屏隐藏侧边栏

在文章页插入此代码即可

{% note green 'fab fa-internet-explorer' flat %}
切记请勿写入css
{% endnote %}

~~~css
<style type="text/css">#post{background:#ffffff4a;}@media screen and (max-width: 1900px) { .aside-content,  .item-headline {   display: none;  }}.layout > div:first-child:not(.recent-posts) { width: 100%;}</style> 
~~~

### 页脚与头图透明

~~~css
/* 页脚与头图透明 */
#footer {
  background: transparent !important;
}
#page-header {
  background: transparent !important;
}

/* 白天模式遮罩透明 */
#footer::before {
  background: transparent !important;
}
#page-header::before {
  background: transparent !important;
}

/* 夜间模式遮罩透明 */
[data-theme="dark"] #footer::before {
  background: transparent !important;
}
[data-theme="dark"] #page-header::before {
  background: transparent !important;
}
~~~

### 个人卡片渐变色

```css
/* 侧边栏个人信息卡片动态渐变色 */
#aside-content > .card-widget.card-info {
  background: linear-gradient(
    -45deg,
    #e8d8b9,
    #eccec5,
    #a3e9eb,
    #bdbdf0,
    #eec1ea
  );
  box-shadow: 0 0 5px rgb(66, 68, 68);
  position: relative;
  background-size: 400% 400%;
  -webkit-animation: Gradient 10s ease infinite;
  -moz-animation: Gradient 10s ease infinite;
  animation: Gradient 10s ease infinite !important;
}
@-webkit-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-moz-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* 黑夜模式适配 */
[data-theme="dark"] #aside-content > .card-widget.card-info {
  background: #191919ee;
}

/* 个人信息Follow me按钮 */
#aside-content > .card-widget.card-info > #card-info-btn {
  background-color: #3eb8be;
  border-radius: 8px;
}
```

### 这个教程是通过 css 样式调节各个页面透明度、模糊度（亚克力效果）、圆角、边框样式等，看起来会更加舒适。

```css
:root {
  --trans-light: rgba(255, 255, 255, 0.88);
  --trans-dark: rgba(25, 25, 25, 0.88);
  --border-style: 1px solid rgb(169, 169, 169);
  --backdrop-filter: blur(5px) saturate(150%);
}

/* 首页文章卡片 */
#recent-posts > .recent-post-item {
  background: var(--trans-light);
  backdrop-filter: var(--backdrop-filter);
  border-radius: 25px;
  border: var(--border-style);
}

/* 首页侧栏卡片 */
#aside-content .card-widget {
  background: var(--trans-light);
  backdrop-filter: var(--backdrop-filter);
  border-radius: 18px;
  border: var(--border-style);
}

/* 文章页、归档页、普通页面 */
div#post,
div#page,
div#archive {
  background: var(--trans-light);
  backdrop-filter: var(--backdrop-filter);
  border: var(--border-style);
  border-radius: 20px;
}

/* 导航栏 */
#page-header.nav-fixed #nav {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: var(--backdrop-filter);
}

[data-theme="dark"] #page-header.nav-fixed #nav {
  background: rgba(0, 0, 0, 0.7) !important;
}

/* 夜间模式遮罩 */
[data-theme="dark"] #recent-posts > .recent-post-item,
[data-theme="dark"] #aside-content .card-widget,
[data-theme="dark"] div#post,
[data-theme="dark"] div#archive,
[data-theme="dark"] div#page {
  background: var(--trans-dark);
}


/* 夜间模式页脚页头遮罩透明 */
[data-theme="dark"] #footer::before {
  background: transparent !important;
}
[data-theme="dark"] #page-header::before {
  background: transparent !important;
}

/* 阅读模式 */
.read-mode #aside-content .card-widget {
  background: rgba(158, 204, 171, 0.5) !important;
}
.read-mode div#post {
  background: rgba(158, 204, 171, 0.5) !important;
}

/* 夜间模式下的阅读模式 */
[data-theme="dark"] .read-mode #aside-content .card-widget {
  background: rgba(25, 25, 25, 0.9) !important;
  color: #ffffff;
}
[data-theme="dark"] .read-mode div#post {
  background: rgba(25, 25, 25, 0.9) !important;
  color: #ffffff;
}
```

- `--trans-light`：白天模式带透明度的背景色，如 `rgba(255, 255, 255, 0.88)` 底色是纯白色，其中 0.88 就透明度，在 0-1 之间调节，值越大越不透明；
- `--trans-dark`: 夜间模式带透明度的背景色，如 `rgba(25, 25, 25, 0.88)` 底色是柔和黑色，其中 0.88 就透明度，在 0-1 之间调节，值越大越不透明；
- `--border-style`: 边框样式，`1px solid rgb(169, 169, 169)` 指宽度为 1px 的灰色实体边框；
- `--backdrop-filter`: 背景过滤器，如 `blur(5px) saturate(150%)` 表示饱和度为 150% 的、高斯模糊半径为 5px 的过滤器，这是亚克力效果的一种实现方法；
- 大家可以根据自己喜好进行调节，不用拘泥于我的样式！
