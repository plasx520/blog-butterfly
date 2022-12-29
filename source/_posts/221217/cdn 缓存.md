---
title: jsdelivr cdn 缓存清理
tags:
  - cdn
  - Hexo
categories: cdn
keywords: 'hexo,cdn,jsdelivr,doc,教程,文檔'
description: jsdelivr缓存清楚教程
top_img: >-
  https://drfs.ctcontents.com/file/14237530/748135707/029a2b/img/wenzhang/infographic-bg.png
cover: >-
  https://drfs.ctcontents.com/file/14237530/748135712/8b8de5/img/wenzhang/OIP.jpg
comments: true
abbrlink: 3a4575d7
updated:
---
# 1. cdn 缓存

jsDelivr 提供的全球 CDN 加速，CDN的分流作用不仅减少了用户的访问延时，也减少的源站的负载。因为 jsDelivr 是开源的免费 cdn，所以我个人一直在使用他，当然，你可以使用腾讯云，每个月 10G 基本上也足够用了，老用户甚至还要 50G 每月的流量，也着实很香。

**缺点：**

当网站更新时，如果CDN节点上数据没有及时更新，即便用户在浏览器使用 Ctrl +F5（win）或者 command+shift+R（mac）的强制刷新方式使浏览器端的缓存失效，也会因为CDN边缘节点没有同步最新数据而导致用户端未能及时更新。

# 2. jsdelivr的cdn使用规则

其实如何使用 jsdelivr，在[官网](https://www.jsdelivr.com/features)上面就有介绍了，不过还是简单介绍下我经常使用的 github



```ruby
https://cdn.jsdelivr.net/gh/user/repo@version/file
```

具体实例：

master 仓库的 https://github.com/ZhaoUncle/images



```bash
#github 原图
https://github.com/ZhaoUncle/images/blob/master/blog/avatar.png
#master 默认不需要加版本号
https://cdn.jsdelivr.net/gh/ZhaoUncle/image@main/blog/avatar.png
#如果你有多个分支多版本管理
https://cdn.jsdelivr.net/gh/ZhaoUncle/image@main/blog/avatar.png
```

# 3. jsdelivr 缓存刷新方法

对于 jsDelivr，缓存刷新的方式也很简单，只需将想刷新的链接的开头的cdn 更改为 purge，不过官网说后面会推出刷新工具，我这边还在观望中

```
https://cdn.jsdelivr.net/
```

切换为

```
https://purge.jsdelivr.net/
```

**实验：**https://purge.jsdelivr.net/gh/ZhaoUncle/images@master/static/waifu.css

我直接在浏览器访问这个接口得出以下数据，返回status: ok，就代表完成了。

[![img](https://cdn.jsdelivr.net/gh/ZhaoUncle/image@main/blog/image-20200930110114144.png)](https://cdn.jsdelivr.net/gh/ZhaoUncle/image@main/blog/image-20200930110114144.png)

# 4. 发现推送上去，但是 cdn 打不开？啥原因

其实也就是 cdn 缓存边缘节点还没缓存过去，方法如 3 那样直接 purge 访问强制刷新到边缘节点就好啦。