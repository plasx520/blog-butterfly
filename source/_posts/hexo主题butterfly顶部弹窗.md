---
title: hexo主题butterfly顶部复制提示弹窗
tags:
  - 教程
  - Hexo
  - 主題
  - butterfly
  - css
categories: css
keywords: 'hexo,butterfly,主題,弹窗,教程,hexo弹窗教程'
description: 修改默认小弹窗，改为顶部大弹窗
top_img: https://s2.loli.net/2022/11/20/xaIXChnRSpzrc2F.webp
sticky: 2
cover: https://s2.loli.net/2022/11/20/xaIXChnRSpzrc2F.webp
comments: true
abbrlink: 3296cbc9
date: 2022-11-20 16:00:49
updated: 2022-11-20 16:00:49
---





给全站添加复制提示弹窗，进站提示弹窗

<!-- more -->

<input  id="button" type="button" value="点击查看效果" onclick="buttonClick();"> 


## 欢迎弹窗提示页面

新建`hygl.js`

~~~js
if (GLOBAL_CONFIG.Snackbar) {
    btf.snackbarShow('欢迎光临')
}
~~~

引入时注意不要添加pjax字样不然会进一个页面显示一次，未开启`pjax`的小伙伴不建议添加

引入格式

~~~tsx
  bottom: #     
      # 欢迎光临
     - <script src="/js/hygl.js"></script>
~~~



## 复制提示

新建`fuzhi.js`

~~~js
/** 监听copy事件 */
document.addEventListener("copy",function(e){
  //复制的内容
  btf.snackbarShow('复制成功，请遵循GPL协议', false, 3000)
})

~~~

引入格式 **注意：添加` data-pjax=""` 负责可能会失效**

~~~tsx
  bottom: #     
     # 复制提示
     - <script charset="utf-8" data-pjax="" src="/js/fuzhi.js"></script>
~~~

## F12提示

开发者模式已打开，请遵循GPL协议

可以添加到复制的js文件内 引入格式 **注意：添加` data-pjax=""` 负责可能会失效**

~~~js
// 检测按键
window.onkeydown = function (e) {
  if (e.keyCode === 123) {
    btf.snackbarShow('开发者模式已打开，请遵循GPL协议', false, 3000)
  }
}
~~~

## css
css修改默认小弹窗
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
    animation: snackbar-progress 2s linear forwards;
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
<script>  
function buttonClick(){  
   btf.snackbarShow('快乐的一只沙雕点击了我的按钮看到了效果', false, 8000);  
}  
</script> 