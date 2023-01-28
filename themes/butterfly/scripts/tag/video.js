
  function video(args) {
  args = args.join('\n').split(',');
  let dizhi = args[0];
  let fm = args[1];
  return ` <link type="text/css" rel="stylesheet" href="https://www.wulihub.com.cn/gc/QajMe1/ckplayer/css/ckplayer.css" />
  <script type="text/javascript" src="https://www.wulihub.com.cn/gc/QajMe1/ckplayer/js/ckplayer.min.js" charset="UTF-8"></script>
  <div class="video" style="width: 100%; height: 500px;max-width: 800px;">播放容器</div>
<script type="text/javascript">
  var videoObject = {
  container: '.video',//视频容器的ID
volume: 0.8,//默认音量，范围0-1
poster: '${fm}',//封面图片地址
autoplay: false,//是否自动播放
video: '${dizhi}',//视频地址
theatre:true,//是否启用剧场模式按钮，默认不启用
rightBar:true,//是否开启右边控制栏
smallWindows:true,//是否启用小窗口模式
smallWindowsDrag:true,//小窗口开启时是否可以拖动
screenshot:true,//截图功能是否开启
  };
var player=new ckplayer(videoObject)//调用播放器并赋值给变量player
</script>`
}
hexo.extend.tag.register('video',video, { ends: false })
