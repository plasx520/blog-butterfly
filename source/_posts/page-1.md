---
title: 换背景
top_img: 'linear-gradient(143deg, #00fff3, #ef00ff, #42abcc, #ffe400)'
abbrlink: 5774c795
date: 2022-09-25 14:01:11
tags:
---


> 这个页面是用来测试渐变背景的效果。
> 阅读体验及个标签样式请自己进行调整。

<!-- more -->

## 背景调节

<div id='demo_style' style='text-align:center;margin:0 auto;'>


### 渐变类

<div data-type="photo" class='bg_test' style="display:inline-block;width: 200px;height:200px;background: url(&quot;https://ae01.alicdn.com/kf/H5662031fbf344418aa2c8bf74c68826eV.png&quot;),linear-gradient(45deg, #6dd0f2 15%, #f59abe 85%);text-align: center;line-height: 200px;margin-bottom:5px;cursor: pointer;">粉蓝色有图片</div>

<div data-type="photo" class='bg_test' style="display:inline-block;width: 200px;height:200px;background: linear-gradient(45deg, #6dd0f2 15%, #f59abe 85%);text-align: center;line-height: 200px;cursor: pointer;">粉蓝色无图片</div>

<div data-type="photo" class='bg_test' style="display:inline-block;width: 200px;height:200px;background: linear-gradient(102.7deg,#fddaff 8.2%,#dfadfc 19.6%,#adcdfc 36.8%,#adfcf4 73.2%,#caf8d0 90.9%);text-align: center;line-height: 200px;cursor: pointer;">美美哒渐变</div>

<div data-type="color" class='bg_test' style="display:inline-block;width: 200px;height:200px; background: linear-gradient(90deg,rgba(247,149,51,.1) 0,rgba(243,112,85,.1) 15%,rgba(239,78,123,.1) 30%,rgba(161,102,171,.1) 44%,rgba(80,115,184,.1) 58%,rgba(16,152,173,.1) 72%,rgba(7,179,155,.1) 86%,rgba(109,186,130,.1) 100%);text-align: center;line-height: 200px;cursor: pointer;">博主同款</div>

<div data-type="photo" class='bg_test' style="display:inline-block;width: 200px;height:200px; background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);    background-size: 400% 400%;animation: gradientBG 15s ease infinite;text-align: center;line-height: 200px;cursor: pointer;">动态渐变</div>

<div data-type="photo" class='bg_test' style="display:inline-block;width: 200px;height:200px; background: linear-gradient(to right bottom, rgb(0, 255, 240), rgb(92, 159, 247) 40%, rgb(211, 34, 255) 80%);text-align: center;line-height: 200px;cursor: pointer;">紫蓝色渐变</div>

### 渐变加图片类

<div data-type="photo" class='bg_test' style="display:inline-block;width: 200px;height:200px; background: linear-gradient(60deg, rgba(255, 165, 150, 0.5) 5%, rgba(0, 228, 255, 0.35)), url(https://ae01.alicdn.com/kf/H18a4b998752a4ae68b8e85d432a5aef0l.png),url(https://ae01.alicdn.com/kf/H21b5f6b8496141a1979a33666e1074d9x.jpg)0% 0% / cover;text-align: center;line-height: 200px;cursor: pointer; background-size: cover;">紫蓝色渐变</div>

### 图片类

<div data-type="photo" class='bg_test' style="display:inline-block;width: 200px;height:200px; background: url(https://random.52ecy.cn/random.php);text-align: center;line-height: 200px;cursor: pointer; background-size: cover;">随机壁纸</div>

<div data-type="photo" class='bg_test' style="display:inline-block;width: 200px;height:200px; background: url(https://api.dujin.org/bing/1920.php);text-align: center;line-height: 200px;cursor: pointer; background-size: cover;">随机二次元图</div>


</div>

## 测试文章

### 春

盼望着，盼望着，东风来了，春天的脚步近了。

一切都像刚睡醒的样子，欣欣然张开了眼。山朗润起来了，水长起来了，太阳的脸红起来了。

小草偷偷地从土里钻出来，嫩嫩的，绿绿的。园子里，田野里，瞧去，一大片一大片满是的。坐着，躺着，打两个滚，踢几脚球，赛几趟跑，捉几回迷藏。风轻悄悄的，草绵软软的。



1. 有序列表
2. 有序
3. 有

- 无需列表
- 测试

{% note default icon %}
default
{% endnote %}

{% note primary icon %}
primary
{% endnote %}

{% note success icon %}
success
{% endnote %}

{% note info icon %}
info
{% endnote %}

{% note warning icon %}
warning
{% endnote %}

{% note danger icon %}
danger
{% endnote %}

{% note primary no-icon%}

#### Primary Header**Welcome** to [Hexo!](https://hexo.io)

{% endnote %}


<script>var article_container=document.getElementById("demo_style"),opt=document.getElementById("opt");article_container.addEventListener("click",function(e){var t=e.target;"DIV"===t.nodeName&&"bg_test"===t.className&&(web_bg.style.background=t.style.background,web_bg.style.animation=t.style.animation),Cookies.set("bg",t.style.background,{expires:1}),Cookies.set("animation",t.style.animation,{expires:1}),Cookies.set("type",t.getAttribute("data-type"),{expires:1})}),opt.addEventListener("click",function(e){var t=e.target;if("A"===t.nodeName){var a=t.getAttribute("data-opacity");if(a){Cookies.set("opacity",a,{expires:1});var n="--light_bg_color: rgb(255, 255, 255,"+a+");",i="--dark_bg_color: rgba(18,18,18,"+a+");";document.getElementById("content-inner").setAttribute("style",n+i)}}e.preventDefault()});</script>

