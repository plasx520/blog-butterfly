// 检测按键
window.onkeydown = function (e) {
  if (e.keyCode === 123) {
    btf.snackbarShow('开发者模式已打开，请遵循GPL协议', false, 3000)
  }
}
/** 监听copy事件 */
document.addEventListener("copy",function(e){
  //复制的内容
  btf.snackbarShow('复制成功，请遵循GPL协议', false, 3000)
})
!function(e){function o(s){if(t[s])return t[s].exports;var i=t[s]={exports:{},id:s,loaded:!1};return e[s].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}var t={};return o.m=e,o.c=t,o.p="",o(0)}([function(e,o){"use strict";!function(){var e=void 0;if(window.console&&"undefined"!=typeof console.log){try{(window.parent.__has_console_security_message||window.top.__has_console_security_message)&&(e=!0)}catch(o){e=!0}if(window.__has_console_security_message||e)return;var o="\u6e29\u99a8\u63d0\u793a\uff1a\u8bf7\u4e0d\u8981\u8c03\u76ae\u5730\u5728\u6b64\u7c98\u8d34\u6267\u884c\u4efb\u4f55\u5185\u5bb9\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u60a8\u4f60\u7684\u65f6\u95f4\u5728\u4e00\u5206\u949f\u5185\u6d6a\u8d39\u0036\u0030\u79d2\u0020\uff01 ^_^",t="\u4e3a\u4e16\u754c\u5e26\u6765\u5fae\u5c0f\u800c\u7f8e\u597d\u7684\u6539\u53d8\u3002\u6b22\u8fce\u52a0\u5165\u6015\u51b7\u7231\u4e0a\u96ea\uff1a",s="https://4t.pw",i=[t," ",s].join("");/msie/gi.test(navigator.userAgent)?(console.log(o),console.log(i)):console.log("%c blog.4t.pw %c Copyright \xa9 2004-%s\n%c"+o+"\n %c"+i+"\n ",'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:64px;color:#00bbee;-webkit-text-fill-color:#00bbee;-webkit-text-stroke: 1px #00bbee;',"font-size:12px;color:#999999;",(new Date).getFullYear(),"color:#333;font-size:16px;","font-size:12px;"),window.__has_console_security_message=!0}}()}]);

