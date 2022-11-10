---
title: 水波纹
top_img: 'linear-gradient(143deg, #00fff3, #ef00ff, #42abcc, #ffe400)'
abbrlink: ddcb8131
date: 2022-09-25 15:01:11
tags:
---
# 网页添加水波纹

<!-- more -->
1.在\themes\butterfly\source\js目录下创建一个ripples.js文件，并将如下代码写入该文件：

~~~js
$(document).ready(function () {
  try {
    $("#page-header").ripples({
      resolution: 512,
      dropRadius: 10, //px
      perturbance: 0.04,
    });
  } catch (e) {
    $(".error").show().text(e);
  }
});
~~~

# 加载配置文件

开启 pjax

~~~yaml
inject:
  head:
  bottom:
    - <script defer src="https://rmt.dogedoge.com/fetch/~/source/jsdelivr/npm/jquery@latest/dist/jquery.min.js"></script>
    - <script defer data-pjax src="https://cdn.jsdelivr.net/gh/sirxemic/jquery.ripples/dist/jquery.ripples.js"></script>
    - <script defer data-pjax src="/js/ripples.js"></script>
~~~

未开启 pjax

~~~yaml
inject:
  head:
  bottom:
    - <script defer src="https://rmt.dogedoge.com/fetch/~/source/jsdelivr/npm/jquery@latest/dist/jquery.min.js"></script>
    - <script defer src="https://cdn.jsdelivr.net/gh/sirxemic/jquery.ripples/dist/jquery.ripples.js"></script>
    - <script defer src="/js/ripples.js"></script>

~~~



{% note 样式参数 %}
文本内容
{% endnote %}

# 自定义表情
~~~
{% note 'fab fa-cc-visa' simple %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' simple %}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' simple %}
小心开车 安全至上
{% endnote %}
{% note red 'fas fa-fan' simple%}
这是三片呢？还是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' simple %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' simple %}
剪刀石头布
{% endnote %}
{% note green 'fab fa-internet-explorer' simple %}
前端最讨厌的浏览器
{% endnote %}
~~~
{% note 'fab fa-cc-visa' simple %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' simple %}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' simple %}
小心开车 安全至上
{% endnote %}
{% note red 'fas fa-fan' simple%}
这是三片呢？还是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' simple %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' simple %}
剪刀石头布
{% endnote %}
{% note green 'fab fa-internet-explorer' simple %}
前端最讨厌的浏览器
{% endnote %}
## 2
~~~
{% note red %}
red
{% endnote %}

{% note quote %}
quote
{% endnote %}

{% note radiation yellow %}
radiation
{% endnote %}

{% note bug red %}
bug
{% endnote %}

{% note idea blue %}
idea
{% endnote %}

{% note link green %}
link
{% endnote %}

{% note paperclip blue %}
paperclip
{% endnote %}

{% note todo green %}
todo
{% endnote %}

{% note guide green %}
guide
{% endnote %}

{% note download green %}
download
{% endnote %}

{% note message gray %}
message
{% endnote %}

{% note up green %}
up
{% endnote %}

{% note undo light %}
undo
{% endnote %}
~~~
{% note red %}
red
{% endnote %}

{% note quote %}
quote
{% endnote %}

{% note radiation yellow %}
radiation
{% endnote %}

{% note bug red %}
bug
{% endnote %}

{% note idea blue %}
idea
{% endnote %}

{% note link green %}
link
{% endnote %}

{% note paperclip blue %}
paperclip
{% endnote %}

{% note todo green %}
todo
{% endnote %}

{% note guide green %}
guide
{% endnote %}

{% note download green %}
download
{% endnote %}

{% note message gray %}
message
{% endnote %}

{% note up green %}
up
{% endnote %}

{% note undo light %}
undo
{% endnote %}
## 3
{% note no-icon %}默认 提示块标签{% endnote %}

{% note default no-icon %}default 提示块标签{% endnote %}

{% note primary no-icon %}primary 提示块标签{% endnote %}

{% note success no-icon %}success 提示块标签{% endnote %}

{% note info no-icon %}info 提示块标签{% endnote %}

{% note warning no-icon %}warning 提示块标签{% endnote %}

{% note danger no-icon %}danger 提示块标签{% endnote %}

---
{% note disabled %}默认 提示块标签{% endnote %}

{% note default disabled %}default 提示块标签{% endnote %}

{% note primary disabled %}primary 提示块标签{% endnote %}

{% note success disabled %}success 提示块标签{% endnote %}

{% note info disabled %}info 提示块标签{% endnote %}

{% note warning disabled %}warning 提示块标签{% endnote %}

{% note danger disabled %}danger 提示块标签{% endnote %}
---
{% note flat %}默认 提示块标签{% endnote %}

{% note default flat %}default 提示块标签{% endnote %}

{% note primary flat %}primary 提示块标签{% endnote %}

{% note success flat %}success 提示块标签{% endnote %}

{% note info flat %}info 提示块标签{% endnote %}

{% note warning flat %}warning 提示块标签{% endnote %}

{% note danger flat %}danger 提示块标签{% endnote %}
---
{% note modern %}默认 提示块标签{% endnote %}

{% note default modern %}default 提示块标签{% endnote %}

{% note primary modern %}primary 提示块标签{% endnote %}

{% note success modern %}success 提示块标签{% endnote %}

{% note info modern %}info 提示块标签{% endnote %}

{% note warning modern %}warning 提示块标签{% endnote %}

{% note danger modern %}danger 提示块标签{% endnote %}
---
{% note simple %}默认 提示块标签{% endnote %}

{% note default simple %}default 提示块标签{% endnote %}

{% note primary simple %}primary 提示块标签{% endnote %}

{% note success simple %}success 提示块标签{% endnote %}

{% note info simple %}info 提示块标签{% endnote %}

{% note warning simple %}warning 提示块标签{% endnote %}

{% note danger simple %}danger 提示块标签{% endnote %}
---
臣亮言：{% label 先帝 %}创业未半，而{% label 中道崩殂 blue %}。今天下三分，{% label 益州疲敝 pink %}，此诚{% label 危急存亡之秋 red %}也！然侍衞之臣，不懈于内；{% label 忠志之士 purple %}，忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气；不宜妄自菲薄，引喻失义，以塞忠谏之路也。
宫中、府中，俱为一体；陟罚臧否，不宜异同。若有{% label 作奸 orange %}、{% label 犯科 green %}，及为忠善者，宜付有司，论其刑赏，以昭陛下平明之治；不宜偏私，使内外异法也。
### 友情链接

{% flink %}
- class_name: 友情链接
  class_desc: 那些人，那些事
  link_list:
    - name: ZYKJ's Blog
      link: https://zykj.js.org
      avatar: http://q2.qlogo.cn/headimg_dl?dst_uin=1400000222&spec=640
      descr: 做个普普通通的人.
    - name: Hexo
      link: https://hexo.io/zh-cn/
      avatar: https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg
      descr: 快速、简单且强大的网誌框架

- class_name: 网站
  class_desc: 值得推荐的网站
  link_list:
    - name: Youtube
      link: https://www.youtube.com/
      avatar: https://i.loli.net/2020/05/14/9ZkGg8v3azHJfM1.png
      descr: 视频网站
    - name: Weibo
      link: https://www.weibo.com/
      avatar: https://i.loli.net/2020/05/14/TLJBum386vcnI1P.png
      descr: 中国最大社交分享平台
    - name: Twitter
      link: https://twitter.com/
      avatar: https://i.loli.net/2020/05/14/5VyHPQqR6LWF39a.png
      descr: 社交分享平台
      {% endflink %}


### 给特哈普
