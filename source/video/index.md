---
title: 我的视频
date: 2020-07-17 20:54:09
comment: true
top_img: false
showToc: true
aside: false
type: "video"
---

<script src="https://unpkg.com/jquery@latest/dist/jquery.min.js"></script>
<script>
function selectVideo(id){
    var src=$("#video-item-"+id).attr("data-src");
    $("#video-select").html("<iframe id='video-iframe' src='"+src+"' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true'> </iframe>");
    var iframe = document.getElementById("video-select")
    if(iframe.attachEvent){
      iframe.attachEvent("onreadystatechange", function() {
        if (iframe.readyState === "complete" || iframe.readyState == "loaded") {
          iframe.detachEvent("onreadystatechange", arguments.callee);
        if (document.getElementsByClassName('video-mirror').length>0) {
          console.log("1true")
          $(".video-mirror").attr("style","transform:scaleX(-1);")
          }
        }
      });
    }else{
      iframe.addEventListener("load", function() {
        this.removeEventListener("load", arguments.call, false);
      if (document.getElementsByClassName('video-mirror').length>0) {
        console.log("2true")
        $(".video-mirror").attr("style","transform:scaleX(-1);")
      }
      }, false);
    }
}
$(document).ready(selectVideo(0));
</script>
