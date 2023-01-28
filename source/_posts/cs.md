---
title: 测试
tags:
  - 教程
  - Hexo
  - 主題
  - butterfly
categories: 类别
keywords: 'hexo,butterfly,主題,doc,教程,文檔'
description: 描述 Butterfly安裝文檔-快速開始
top_img: 'https://s2.loli.net/2022/10/28/PyKjf1CZ3ezUxSI.jpg'
sticky: 10
cover: 'https://s2.loli.net/2022/11/04/y8rclikszbXZ7HK.webp'
comments: true
abbrlink: 9daba997
date: 2022-11-05 20:42:55
swiper_index: 2
updated:
---






<kbd>ctrl</kbd>
{% xiazai https://s2.loli.net/2022/11/04/y8rclikszbXZ7HK.webp,https://s2.loli.net/2022/11/04/y8rclikszbXZ7HK.webp,https://s2.loli.net/2022/11/04/y8rclikszbXZ7HK.webp,这个密码是：666那个密码是999 %}




```MARKDOWN
{% checkbox 纯文本测试 %}
{% checkbox checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% checkbox red, 支持自定义颜色 %}
{% checkbox green checked, 绿色 + 默认选中 %}
{% checkbox yellow checked, 黄色 + 默认选中 %}
{% checkbox cyan checked, 青色 + 默认选中 %}
{% checkbox blue checked, 蓝色 + 默认选中 %}
{% checkbox plus green checked, 增加 %}
{% checkbox minus yellow checked, 减少 %}
{% checkbox times red checked, 叉 %}
```

{% checkbox 纯文本测试 %}
{% checkbox checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% checkbox red, 支持自定义颜色 %}
{% checkbox green checked, 绿色 + 默认选中 %}
{% checkbox yellow checked, 黄色 + 默认选中 %}
{% checkbox cyan checked, 青色 + 默认选中 %}
{% checkbox blue checked, 蓝色 + 默认选中 %}
{% checkbox plus green checked, 增加 %}
{% checkbox minus yellow checked, 减少 %}
{% checkbox times red checked, 叉 %}

```MARKDOWN
{% radio 纯文本测试 %}
{% radio checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% radio red, 支持自定义颜色 %}
{% radio green, 绿色 %}
{% radio yellow, 黄色 %}
{% radio cyan, 青色 %}
{% radio blue, 蓝色 %}
```

{% radio 纯文本测试 %}
{% radio checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% radio red, 支持自定义颜色 %}
{% radio green, 绿色 %}
{% radio yellow, 黄色 %}
{% radio cyan, 青色 %}
{% radio blue, 蓝色 %}

```
1. 带 {% u 下划线 %} 的文本
2. 带 {% emp 着重号 %} 的文本
3. 带 {% wavy 波浪线 %} 的文本
4. 带 {% del 删除线 %} 的文本
5. 键盘样式的文本 {% kbd command %} + {% kbd D %}
6. 密码样式的文本：{% psw 这里没有验证码 %}
```

1. 带 {% u 下划线 %} 的文本
2. 带 {% emp 着重号 %} 的文本
3. 带 {% wavy 波浪线 %} 的文本
4. 带 {% del 删除线 %} 的文本
5. 键盘样式的文本 {% kbd command %} + {% kbd D %}
6. 密码样式的文本：{% psw 这里没有验证码 %}

```
{% folding 查看图片测试 %}

![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg)

{% endfolding %}

{% folding cyan open, 查看默认打开的折叠框 %}

这是一个默认打开的折叠框。

{% endfolding %}

{% folding green, 查看代码测试 %}
假装这里有代码块（代码块没法嵌套代码块）
{% endfolding %}

{% folding yellow, 查看列表测试 %}

- haha
- hehe

{% endfolding %}

{% folding red, 查看嵌套测试 %}

{% folding blue, 查看嵌套测试2 %}

{% folding 查看嵌套测试3 %}

hahaha <span><img src='https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/tieba/%E6%BB%91%E7%A8%BD.png' style='height:24px'></span>

{% endfolding %}

{% endfolding %}

{% endfolding %}
```

{% folding 查看图片测试 %}

![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg)

{% endfolding %}

{% folding cyan open, 查看默认打开的折叠框 %}

这是一个默认打开的折叠框。

{% endfolding %}

{% folding green, 查看代码测试 %}
假装这里有代码块（代码块没法嵌套代码块）
{% endfolding %}

{% folding yellow, 查看列表测试 %}

- haha
- hehe

{% endfolding %}

{% folding red, 查看嵌套测试 %}

{% folding blue, 查看嵌套测试2 %}

{% folding 查看嵌套测试3 %}

hahaha <span><img src='https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/tieba/%E6%BB%91%E7%A8%BD.png' style='height:24px'></span>

{% endfolding %}

{% endfolding %}

{% endfolding %}

```
{% poem 水调歌头,苏轼 %}
丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。
明月几时有？把酒问青天。
不知天上宫阙，今夕是何年？
我欲乘风归去，又恐琼楼玉宇，高处不胜寒。
起舞弄清影，何似在人间？

转朱阁，低绮户，照无眠。
不应有恨，何事长向别时圆？
人有悲欢离合，月有阴晴圆缺，此事古难全。
但愿人长久，千里共婵娟。
{% endpoem %}
```

{% poem 水调歌头,苏轼 %}
丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。
明月几时有？把酒问青天。
不知天上宫阙，今夕是何年？
我欲乘风归去，又恐琼楼玉宇，高处不胜寒。
起舞弄清影，何似在人间？

转朱阁，低绮户，照无眠。
不应有恨，何事长向别时圆？
人有悲欢离合，月有阴晴圆缺，此事古难全。
但愿人长久，千里共婵娟。
{% endpoem %}

```
{% progress 10 red 进度条样式预览 %}
{% progress 30 yellow 进度条样式预览 %}
{% progress 50 green 进度条样式预览 %}
{% progress 70 cyan 进度条样式预览 %}
{% progress 90 blue 进度条样式预览 %}
{% progress 100 gray 进度条样式预览 %}
```

{% progress 10 red 进度条样式预览 %}
{% progress 30 yellow 进度条样式预览 %}
{% progress 50 green 进度条样式预览 %}
{% progress 70 cyan 进度条样式预览 %}
{% progress 90 blue 进度条样式预览 %}
{% progress 100 gray 进度条样式预览 %}

```
{% nota 把鼠标移动到我上面试试 ,可以看到注解内容出现在顶栏 %}
```

{% nota 把鼠标移动到我上面试试 ,66666666666 %}

```
最近我学到了不少新玩意儿（虽然对很多大佬来说这些已经是旧技术了），比如CSS的{% bubble 兄弟相邻选择器,"例如 h1 + p {margin-top:50px;}" %}，{% bubble flex布局,"Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性","#ec5830" %}，{% bubble transform变换,"transform 属性向元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜。","#1db675" %}，animation的{% bubble 贝塞尔速度曲线,"贝塞尔曲线(Bézier curve)，又称贝兹曲线或贝济埃曲线，是应用于二维图形应用程序的数学曲线。一般的矢量图形软件通过它来精确画出曲线，贝兹曲线由线段与节点组成，节点是可拖动的支点，线段像可伸缩的皮筋","#de4489" %}写法，还有今天刚看到的{% bubble clip-path,"clip-path属性使用裁剪方式创建元素的可显示区域。区域内的部分显示，区域外的隐藏。","#868fd7" %}属性。这些对我来说很新颖的概念狠狠的冲击着我以前积累起来的设计思路。
```

最近我学到了不少新玩意儿（虽然对很多大佬来说这些已经是旧技术了），比如CSS的{% bubble 兄弟相邻选择器,"例如 h1 + p {margin-top:50px;}" %}，{% bubble flex布局,"Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性","#ec5830" %}，{% bubble transform变换,"transform 属性向元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜。","#1db675" %}，animation的{% bubble 贝塞尔速度曲线,"贝塞尔曲线(Bézier curve)，又称贝兹曲线或贝济埃曲线，是应用于二维图形应用程序的数学曲线。一般的矢量图形软件通过它来精确画出曲线，贝兹曲线由线段与节点组成，节点是可拖动的支点，线段像可伸缩的皮筋","#de4489" %}写法，还有今天刚看到的{% bubble clip-path,"clip-path属性使用裁剪方式创建元素的可显示区域。区域内的部分显示，区域外的隐藏。","#868fd7" %}属性。这些对我来说很新颖的概念狠狠的冲击着我以前积累起来的设计思路。

{% bubble 测试,"22222","#868fd7" %}





```
{% link2 获取网站的Favicon图标并显示在你的网页上,owen0o0,https://github.com/owen0o0/getFavicon %}
```

{% wblj 网站名称,这是一个不正经的描述,https://blog.zhheo.com/ %}
{% wblj 百度,天下尽可皆知,https://www.baidu.com %}



```
{% link 怕冷爱上雪, https://blog.4t.pw, https://jsd.onmicrosoft.cn/npm/plasx@1.0.3/img/favicon.webp %}
```

<div class="linkdh">
{% link 怕冷爱上雪, https://blog.4t.pw, https://jsd.onmicrosoft.cn/npm/plasx@1.0.3/img/favicon.webp %}
</div>


![](https://drfs.ctcontents.com/file/14237530/739234875/4eab8a/img/1.png)
![https://drfs.ctcontents.com/file/14237530/739259879/1aa152/img/dawenjian/110.jpg](https://drfs.ctcontents.com/file/14237530/739259879/1aa152/img/dawenjian/110.jpg)








{% video https://drfs.ctcontents.com/file/14237530/739260174/113603/img/dawenjian/12.mp4 , https://s2.loli.net/2022/11/08/hNw7WIOCQ2ARiFb.webp  %} 





<BR>

>{% mima 高速下载地址 %}
>{% btn 'https://butterfly.js.org/',高速下载,far fa-hand-point-right,pink larger %}
>{% endmima %}

```
{% msgbox title %}
{% msgguest name,avatar %}
对话内容
{% endmsgguest %}
{% msgadmin name,avatar %}
对话内容
{% endmsgadmin %}
{% endmsgbox %}
```

```
{% msgbox "🧊Akilarの糖果屋🍭" %}
{% msgguest "waha|blog.raiseme.net" %}
markdown还有比typora更好用的吗?
{% endmsgguest %}
{% msgadmin %}
Atom党加一
{% endmsgadmin %}
{% msgguest "xl","https://gcore.jsdelivr.net/gh/zykjofficial/zykjofficial.github.io@master/img/avatar.png" %}
markdown我用typora
{% endmsgguest %}
{% msgguest "青葱|ciraosindex.top","https://npm.elemecdn.com/akilar-friends@latest/avatar/www.itciraos.cn.jpg" %}
我顶vscode
{% endmsgguest %}
{% msgguest "冰卡诺|zfe.one","https://npm.elemecdn.com/akilar-friends@latest/avatar/zfe.space.jpg" %}
我用石墨
{% endmsgguest %}
{% msgguest "冰卡诺|zfe.one","https://npm.elemecdn.com/akilar-friends@latest/avatar/zfe.space.jpg" %}
![](/assets/1671589422883.png)
{% endmsgguest %}
{% msgadmin %}
我就知道会有这个
{% endmsgadmin %}
{% msgguest "陈殇|blog.chen-shang.top","https://npm.elemecdn.com/akilar-friends@latest/avatar/weikecc.top.jpg" %}  
冰老师用铅笔？
{% endmsgguest %}
{% msgguest "青葱|ciraosindex.top","https://npm.elemecdn.com/akilar-friends@latest/avatar/www.itciraos.cn.jpg" %}
大佬，就是不一样
{% endmsgguest %}
{% msgguest "xl","https://gcore.jsdelivr.net/gh/zykjofficial/zykjofficial.github.io@master/img/avatar.png" %}
大佬，就是不一样
{% endmsgguest %}
{% endmsgbox %}
```

{% msgbox "🧊Akilarの糖果屋🍭" %}
{% msgguest "waha|blog.raiseme.net" %}
markdown还有比typora更好用的吗?
{% endmsgguest %}
{% msgadmin %}
Atom党加一
{% endmsgadmin %}
{% msgguest "xl","https://gcore.jsdelivr.net/gh/zykjofficial/zykjofficial.github.io@master/img/avatar.png" %}
markdown我用typora
{% endmsgguest %}
{% msgguest "青葱|ciraosindex.top","https://npm.elemecdn.com/akilar-friends@latest/avatar/www.itciraos.cn.jpg" %}
我顶vscode
{% endmsgguest %}
{% msgguest "冰卡诺|zfe.one","https://npm.elemecdn.com/akilar-friends@latest/avatar/zfe.space.jpg" %}
我用石墨
{% endmsgguest %}
{% msgguest "冰卡诺|zfe.one","https://npm.elemecdn.com/akilar-friends@latest/avatar/zfe.space.jpg" %}
![](/img/bj.webp)
{% endmsgguest %}
{% msgadmin %}
我就知道会有这个
{% endmsgadmin %}
{% msgguest "陈殇|blog.chen-shang.top","https://npm.elemecdn.com/akilar-friends@latest/avatar/weikecc.top.jpg" %}  
冰老师用铅笔？
{% endmsgguest %}
{% msgguest "青葱|ciraosindex.top","https://npm.elemecdn.com/akilar-friends@latest/avatar/www.itciraos.cn.jpg" %}
大佬，就是不一样
{% endmsgguest %}
{% msgguest "xl","https://gcore.jsdelivr.net/gh/zykjofficial/zykjofficial.github.io@master/img/avatar.png" %}
大佬，就是不一样
{% endmsgguest %}
{% endmsgbox %}
