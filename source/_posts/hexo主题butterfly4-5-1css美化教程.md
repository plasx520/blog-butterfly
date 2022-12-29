---
title: hexo主题butterfly4.5.1css美化教程一
tags:
  - 教程
  - Hexo
  - 主題
  - butterfly
  - css美化
categories: css
keywords: 'hexo,butterfly,主題,css,美化教程,hexo美化'
description: hexo butterfly主题css美化教程
top_img: https://s2.loli.net/2022/11/20/1OkYauiA5meZJHd.webp
cover: https://s2.loli.net/2022/11/20/KTbLngmwpGjQ8XO.webp
comments: true
abbrlink: b48f40bd
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



## 洪哥色彩库

{% note danger simple %}以下css可能会依赖色彩库

如果出错请添加以下代码到css文件内

{% endnote %}

~~~css
@charset "UTF-8";

:root {
  --heo-white: #fff;
  --heo-white-op: rgba(255, 255, 255, 0.2);
  --heo-black: #000;
  --heo-black-op: rgba(0, 0, 0, 0.2);
  --heo-none: #00000000;
  --heo-gray: #999999;
  --heo-gray-op: #9999992b;
  --heo-vip: #e5a80d;
  --heo-main: var(--heo-theme);
  --heo-main-op: var(--heo-theme-op);
  --heo-main-op-deep: var(--heo-theme-op-deep);
  --heo-main-none: var(--heo-theme-none);
  --heo-shadow-theme: 0 8px 12px -3px var(--heo-theme-op);
  --heo-shadow-blackdeep: 0 2px 16px -3px rgba(0, 0, 0, .15);
  --heo-shadow-main: 0 8px 12px -3px var(--heo-main-op);
  --heo-shadow-blue: 0 8px 12px -3px rgba(40, 109, 234, .20);
  --heo-shadow-white: 0 8px 12px -3px rgba(255, 255, 255, .20);
  --heo-shadow-black: 0 0 12px 4px rgba(0, 0, 0, .05);
  --heo-shadow-yellow: 0px 38px 77px -26px rgba(255, 201, 62, .12);
  --heo-shadow-red: 0 8px 12px -3px #ee7d7936;
  --heo-shadow-green: 0 8px 12px -3px #87ee7936;
  --heo-logo-color: linear-gradient(215deg, #4584ff 0%, #cf0db9 100%);
  --heo-snackbar-time: 5s;
  --style-border: 1px solid var(--heo-card-border);
  --style-border-always: 1px solid var(--heo-card-border);
  --style-border-hover: 1px solid var(--heo-main);
  --style-border-hover-always: 1px solid var(--heo-main);
  --style-border-dashed: 1px dashed var(--heo-theme-op);
}

::selection {
  background: var(--heo-fontcolor);
  color: var(--heo-background);
}

[data-theme=light] {
  --heo-theme: #425AEF;
  --heo-theme-op: #4259ef23;
  --heo-theme-op-deep: #4259efdd;
  --heo-theme-none: #4259ef01;
  --heo-blue: #425AEF;
  --heo-red: #D8213C;
  --heo-pink: #FF7C7C;
  --heo-green: #28a63f;
  --heo-yellow: #c28b00;
  --heo-yellow-op: #d99c001a;
  --heo-orange: #e38100;
  --heo-fontcolor: #363636;
  --heo-background: #f7f9fe;
  --heo-reverse: #000;
  --heo-maskbg: rgba(255, 255, 255, 0.6);
  --heo-maskbgdeep: rgba(255, 255, 255, 0.85);
  --heo-hovertext: var(--heo-main);
  --heo-ahoverbg: #F7F7FA;
  --heo-lighttext: var(--heo-main);
  --heo-secondtext: rgba(60, 60, 67, 0.6);
  --heo-scrollbar: rgba(60, 60, 67, 0.4);
  --heo-card-btn-bg: #edf0f7;
  --heo-post-blockquote-bg: #fafcff;
  --heo-post-tabs-bg: #f2f5f8;
  --heo-secondbg: #f1f3f8;
  --heo-shadow-nav: 0 5px 12px -5px rgba(102, 68, 68, 0.05);
  --heo-card-bg: #fff;
  --heo-card-bg-op: var(--heo-black-op);
  --heo-card-bg-none: rgba(255, 255, 255, 0);
  --heo-shadow-lightblack: 0 5px 12px -5px rgba(102, 68, 68, 0.00);
  --heo-shadow-light2black: 0 5px 12px -5px rgba(102, 68, 68, 0.00);
  --heo-card-border: #e3e8f7;
  --heo-shadow-border: 0 8px 16px -4px #2c2d300c;
  --style-border-forever: 2px solid var(--heo-main);
}

[data-theme=dark] {
  --heo-theme: #0084FF;
  --heo-theme-op: #0084FF23;
  --heo-theme-op-deep: #0084ffdd;
  --heo-theme-none: #0084FF00;
  --heo-blue: #0084FF;
  --heo-red: #FF3842;
  --heo-pink: #FF7C7C;
  --heo-green: #57bd6a;
  --heo-yellow: #ffc93e;
  --heo-yellow-op: #ffc93e30;
  --heo-orange: #ff953e;
  --heo-fontcolor: #F7F7FA;
  --heo-background: #18171d;
  --heo-reverse: #fff;
  --heo-maskbg: rgba(0, 0, 0, 0.6);
  --heo-maskbgdeep: rgba(0, 0, 0, 0.85);
  --heo-hovertext: #0A84FF;
  --heo-ahoverbg: #fff;
  --heo-lighttext: #f2b94b;
  --heo-secondtext: #a1a2b8;
  --heo-scrollbar: rgba(200, 200, 223, 0.4);
  --heo-card-btn-bg: #30343f;
  --heo-post-blockquote-bg: #000;
  --heo-post-tabs-bg: #121212;
  --heo-secondbg: #30343f;
  --heo-shadow-nav: 0 5px 20px 0px rgba(28, 28, 28, 0.4);
  --heo-card-bg: #1d1e22;
  --heo-card-bg-op: var(--heo-white-op);
  --heo-card-bg-none: #1d1b2600;
  --heo-shadow-lightblack: 0 5px 12px -5px rgba(102, 68, 68, 0.0);
  --heo-shadow-light2black: 0 5px 12px -5px rgba(102, 68, 68, 0.0);
  --heo-card-border: #282829;
  --heo-shadow-border: 0 8px 16px -4px #00000050;
  --style-border-forever: 2px solid var(--heo-lighttext);
}

~~~



### 代码框展示图标

`/* 代码展开图标 */`

让你的代码块展开{% label 按钮高亮 purple %}提示响应

~~~css
/* 代码展开图标 */
#article-container .code-expand-btn i {
  color: var(--heo-fontcolor);
  font-size: 1rem;
}

#article-container .code-expand-btn {
  background-color: var(--heo-mask);
  background: var(--heo-secondbg);
  transition: 0.3s;
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

#article-container .code-expand-btn:hover {
  background: var(--heo-main);
}

#article-container .code-expand-btn:hover i {
  color: var(--heo-white);
}
/* 文章代码框 */
figure {
    margin-top: 0.5rem !important;
  }
  
  #article-container figure.highlight .highlight-tools {
    background: var(--heo-secondbg) !important;
  }
  
  #article-container .gutter {
    opacity: 0.6;
  }
  
  #article-container .code-lang {
    margin-left: 6px;
  }
  
  #article-container .highlight-tools .code-lang {
    text-transform: capitalize;
    left: 1.9rem;
  }
  
  #article-container figure.highlight table::-webkit-scrollbar {
    color: var(--heo-blue);
    background: var(--heo-secondbg);
    height: 8px;
  }
  
  #article-container figure.highlight table::-webkit-scrollbar-thumb {
    background: var(--heo-gray);
  }
  
  #article-container figure.highlight table::-webkit-scrollbar-thumb:hover {
    background: var(--heo-main);
  }
~~~

###  文章中的加粗文本颜色 

加粗标签的文本颜色自行设置颜色` #695`颜色自行设置

`color: #695;`属性可以自行设置也可以默认的heo颜色库选择又便于切换夜间模式

~~~css
  /* 文章中的加粗文本颜色 */
b,
strong {
  color: var(--heo-lighttext);
}
~~~

### 文章超链接添加美化按钮颜色

不在依赖挂载标签就可实现美化链接

~~~css

/* 文章中的超链接 */
#article-container a {
  text-decoration: none;
  border-bottom: 2px solid var(--heo-lighttext);
  color: var(--heo-fontcolor);
  font-weight: bold;
  border-radius: 4px 4px 0 0;
}

#article-container a:not(.fancybox):hover {
  text-decoration: none;
  border-bottom: 2px solid var(--heo-none);
  color: var(--heo-white);
  background: var(--heo-main);
  border-radius: 4px;
  box-shadow: var(--heo-shadow-main);
}

#article-container a.fancybox {
  border-bottom: 0;
  padding: 0;
  margin: auto;
  display: contents;
  width: fit-content;
}

#article-container a.fancybox img {
  cursor: pointer;
}

.site-card-avatar a.fancybox {
  padding: 0 !important;
}

#article-container p {
  margin: 1rem 0;
  text-align: left;
  letter-spacing: 0.6px;
}

#article-container code {
  color: var(--heo-white);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  margin: 0px 4px;
  background: var(--heo-pink);
  line-height: 2;
  box-shadow: var(--heo-shadow-border);
}

#article-container code::selection {
  background: var(--heo-main) !important;
}
~~~

### 文章侧边栏按钮式美化

~~~css
/* 文章页侧边栏固定位置 */
@media screen and (max-width: 1300px) {
  #aside-content .sticky_layout {
    top: 60px;
  }
}

@media screen and (min-width: 768px) {
  #aside-content .sticky_layout {
    margin-top: 1rem;
  }
}

@media screen and (min-width: 1300px) {
  #aside-content .sticky_layout {
    margin-top: 1rem;
  }
}

#aside-content .sticky_layout {
  top: 80px;
  transition: top 0s;
}

#aside-content .sticky_layout .card-widget:first-child {
  margin-top: 0;
}

#aside-content .card-widget:hover {
  box-shadow: var(--heo-shadow-border);
}

#aside-content #card-funds {
  margin-bottom: 1rem;
  min-height: 260px;
}

#page-header.nav-visible+.layout>.aside-content>.sticky_layout {
  top: 80px;
}

#aside-content {
  width: 300px;
}

@media screen and (max-width: 1300px) {
  #aside-content {
    width: 300px;
  }
}

@media screen and (max-width: 900px) {
  #aside-content {
    display: none;
  }
}

/* 最新文章侧边栏 */
.card-widget.card-recent-post {
  padding: 0.4rem 0.6rem !important;
}

/* 最新文章侧边栏时间显示 */
#aside-content .aside-list>.aside-list-item .content>time {
  display: none;
}

/* 最新文章侧边栏标题 */
#aside-content .aside-list>.aside-list-item .content>.title {
  -webkit-line-clamp: 3;
  font-weight: bold;
  padding: 2px 0;
}

/* 最新文章侧边栏悬浮 */
#aside-content .aside-list>.aside-list-item {
  padding: 8px;
  padding-top: 6px !important;
  padding-bottom: 6px !important;
  border-radius: 12px;
  transition: 0.3s;
  margin: 4px 0;
  cursor: pointer;
}

@media screen and (min-width: 1300px) {
  #aside-content .aside-list>.aside-list-item:hover {
    transform: scale(1.03);
  }

  #aside-content .aside-list>.aside-list-item:active {
    transform: scale(0.97);
  }
}

#aside-content .aside-list>.aside-list-item:hover .thumbnail>img {
  transform: scale(1);
}

#aside-content .aside-list>.aside-list-item:not(:last-child) {
  border-bottom: 0px dashed var(--heo-background) !important;
}

#aside-content .aside-list>.aside-list-item .thumbnail {
  -webkit-mask-image: -webkit-radial-gradient(center, rgb(255, 255, 255), rgb(0, 0, 0));
  border-radius: 8px;
  border: var(--style-border);
}

#aside-content .aside-list>.aside-list-item:hover {
  background: var(--heo-main);
  color: var(--heo-white);
  transition: 0.3s;
  box-shadow: var(--heo-shadow-main);
}

#aside-content .aside-list>.aside-list-item:hover a {
  color: var(--heo-white) !important;
}

/* 侧边栏按钮文字 */
a.card-archive-list-link-more {
  color: var(--heo-white) !important;
  background: var(--heo-card-btn-bg);
  margin-top: 8px;
}

#aside-content .card-archives ul.card-archive-list>.card-archive-list-item a,
#aside-content .card-categories ul.card-category-list>.card-category-list-item a {
  border-radius: 8px;
  margin: 4px 0;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  border: var(--style-border);
}

#aside-content .card-archives ul.card-archive-list>.card-archive-list-item a span:first-child,
#aside-content .card-categories ul.card-category-list>.card-category-list-item a span:first-child {
  width: auto;
}

#aside-content .card-archives ul.card-archive-list,
#aside-content .card-categories ul.card-category-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

.card-allinfo hr {
  display: flex;
  position: relative;
  margin: 1rem 0;
  border: 1px dashed var(--heo-theme-op);
}

.card-allinfo .item-headline {
  display: none;
}

span.card-archive-list-count {
  width: auto;
  text-align: left;
  font-size: 1.1rem;
  line-height: 0.9;
  font-weight: bold;
}

.card-archive-list-count-group {
  display: flex;
  flex-direction: row;
  align-items: baseline;
}

#aside-content .card-archives ul.card-archive-list>.card-archive-list-item a span:last-child,
#aside-content .card-categories ul.card-category-list>.card-category-list-item a span:last-child {
  width: fit-content;
  margin-left: 4px;
}

.card-archive-list-count-unit {
  width: auto;
  text-align: left;
  font-size: 14px;
  font-weight: bold;
}

.card-archive-list-date {
  font-size: 14px;
  opacity: 0.6;
}

li.card-archive-list-item {
  width: 100%;
  flex: 0 0 48%;
}

.card-category-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card-category-list-item {
  width: 45%;
}

.card-category-list-count {
  display: none !important;
}

.card-category-list-name {
  width: 100% !important;
  text-align: center;
}

/* 侧边栏统计 */
.webinfo-item {
  display: flex;
  white-space: nowrap;
}

.webinfo-item-title {
  display: flex;
}

.webinfo-item-title i {
  line-height: 2;
  margin-right: 6px;
  width: 16px;
  text-align: center;
}

/* 侧边栏配置 */
@media screen and (min-width: 1300px) {
  #aside-content {
    padding-left: 1rem;
  }

  #aside-content .sticky_layout {
    top: calc(60px + 0.5rem);
  }

  #page-header.nav-visible+.layout>.aside-content>.sticky_layout {
    top: calc(60px + 0.5rem);
  }

  [data-theme=dark] #aside-content>.card-widget.card-info {
    border: var(--style-border);
  }

  .coverdiv {
    height: 130%;
  }

}


/* madium-zoom */
.medium-zoom-overlay {
  background: var(--heo-maskbg) !important;
  z-index: 99998 !important;
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.medium-zoom-image--opened {
  border-radius: 2px;
}

/* 通用 */
#toggle-sidebar {
  bottom: 80px;
}

/* 按钮样式 */
.button--animated {
  border-radius: 8px !important;
  transition: 0.3s;
}

#error-wrap .error-content .error-info a:hover {
  background-color: var(--heo-blue);
  transition: 0.3s;
  transform: scale(1.03);
  box-shadow: var(--heo-shadow-blue);
}

.button--animated:before {
  display: none;
}

/* hexo-widget-tree 侧边文章导航 */
a.tree-list-post-link {
  font-size: 0.8rem;
  line-height: 1.2 !important;
}

li.tree-list-item {
  line-height: 1.9;
  margin: 0.3rem 0;
}
~~~

