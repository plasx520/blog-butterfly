---
title: 外置标签
tags:
  - 教程
  - Hexo
  - 主題
  - butterfly
categories: 美女
keywords: 'hexo,butterfly,主題,doc,教程,文檔'
description: 描述 Butterfly安裝文檔-快速開始
top_img: 'https://s2.loli.net/2022/10/28/PyKjf1CZ3ezUxSI.jpg'
sticky: 10
cover: 'https://s2.loli.net/2022/11/04/y8rclikszbXZ7HK.webp'
comments: false
abbrlink: 7915d7de
date: 2022-11-08 20:42:55
updated:
---



外置标签

<!-- more -->
# 效果
{% card 诡秘之主,https://book.qidian.com/info/1010868264/,https://bookcover.yuewen.com/qdbimg/349573/1010868264/300 %}
注意填写内容时不要有英文符号，不然会出bug

| 参数 | 描述                                                         | 默认值                 |
| ---- | ------------------------------------------------------------ | ---------------------- |
| 标题 | 作品的`名字`                                                 | 未知                   |
| 链接 | 作品的详情页，填写后会显示`查看详情`按钮                     | 无                     |
| 背景 | 背景 `图片Url`（必须是图片，想要实现颜色可自行更改代码）     | 纯色#333               |
| 评分 | 范围 `0-5`，可以是小数，如3.5和3.1表示三星半，图标只有半星的） | 0                      |
| 评价 | 点评内容                                                     | 此作品博主暂未作出评价 |
| 图标 | 左上角图标，请填写fontawsome图标                             | 无                     |
| 标签 | 右上角标签                                                   | 无                     |
| 宽度 | 卡片宽度，`需要填单位`，如：100px 或 10rem                   | 220px                  |
| 高度 | 卡片高度，要求同上                                           | 300px                  |

~~~php+HTML
// 使用js是为了高亮代码，不必在意
// 参数如下：
{% card 标题,链接,背景,评分,评价,图标,标签,宽度,高度 %}
// 示例如下：
{% card 诡秘之主,https://book.qidian.com/info/1010868264/,https://bookcover.yuewen.com/qdbimg/349573/1010868264/300,4.5,第一次接触这种西方文学小说，刚开始感觉看不懂，断断续续看了很多次。后来越看越觉好看，每次看甚至都需要查“文档”,fa-solid fa-book-open,小说 %}
// 你也可以什么都不填，将会全部使用默认值，如下：
{% card %}
// 你也可以省略部分内容，如下：
{% card 诡秘之主,https://book.qidian.com/info/1010868264/,https://bookcover.yuewen.com/qdbimg/349573/1010868264/300 %}
// 位置在后面的参数不填的话可以直接省略，但是如果中间的不想填必须留空，如下：
{% card 诡秘之主,,,,,fa-solid fa-book-open,小说 %}
~~~

在 `\themes\butterfly\scripts\tag` 文件夹下面新建 `card.js` 并粘贴如下代码：

~~~js
/**
 * card
 * {% card name,url,bg,star,text,icon,tag,w,h %}
 * {% card 标题,链接,背景,评分,评价,图标,标签,宽度,高度 %}
 */

'use strict'

// 分数转成星星
function tostar(num) {
    let tmp = ''
    for (let i = 0; i < Math.floor(num); i++) { tmp += '<i class="fa-solid fa-star"></i>' } // 整数部分加实心星星
    if (num - Math.floor(num) != 0) tmp += '<i class="fa-solid fa-star-half-alt"></i>' // 小数部分转成半星
    for (let i = 0; i < 5 - Math.ceil(num); i++) { tmp += '<i class="fa-regular fa-star"></i>' } // 不够5个补空心星星
    return tmp
}

function card(args) {
    args = args.join(' ').split(',')

    // 获取参数
    let name = (args[0] || '未知').trim()
    let url = (args[1] || '').trim()
    let bg = (args[2] ? `background-image: url(${args[2]});` : 'background-color: #333;').trim()
    let star = tostar(Number(args[3]) || 0)
    let text = (args[4] || '此作品博主暂未作出评价').trim()
    let icon = (args[5] || '').trim()
    let tag = (args[6] || '').trim()
    let w = args[7] || '200px'
    let h = args[8] || '275px'

    return `<div title="${name}" referrerPolicy="no-referrer" class="card_box" style="${bg} width:${w}; height:${h};">
    <div class="card_mask">
      <span>${text}</span>
      ${url?'<a href="'+url+'">查看详情</a>':''}
    </div>
    <div class="card_top">
      <i class="${icon}"></i>
      <span>${tag}</span>
    </div>
    <div class="card_content">
      <span>${name}</span>
      <div>${star}</div>
    </div>
  </div>`
}

hexo.extend.tag.register('card', card, { ends: false })
~~~

### card.styl

在 `\themes\butterfly\source\css\_tags` 文件夹下面新建 `card.styl` 并粘贴如下代码：

~~~css
.card_box
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-position: center;
  background-size: cover;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  padding: 10px;
  color: #fff !important;
  margin: 10px auto;
  &::after
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    background: rgba(0,0,0,0.2);
    transition: .5s
    z-index: 0;
  &:hover
    .card_mask
      opacity: 1
      pointer-events: auto;
  .card_top
    display: flex;
    z-index: 1;
    align-items: center;
    justify-content: space-between;
  .card_mask
    position: absolute;
    pointer-events: none;
    z-index: 2;
    transition: .5s;
    opacity: 0;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    padding: 20px;
    background: #333;
    span
      display: block;
      height: calc(100% - 40px);
      overflow: hidden;
    a
      text-align: center;
      background: #fff;
      color: #333 !important;
      border-radius: 5px;
      position: absolute;
      width: calc(100% - 40px);
      bottom: 20px;
      left: 20px;
      &:hover
        text-decoration: none !important;
        color: white !important;
        background: #49b1f5

  .card_content
    z-index: 1;
    span
      font-size: 18px;
      font-weight: bold;

[data-theme='dark']
  .card_box
    color: #ddd !important;
    &::after
      background: rgba(0,0,0,0.4);
~~~

## 后记

各位可以根据自身需求在此基础上进行完善，如果设计出了更好看的ui记得喊喊我，我真的想不出怎么美化了。
有其他问题评论即可，看到之后会回信。