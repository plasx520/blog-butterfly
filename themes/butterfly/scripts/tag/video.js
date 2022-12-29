function video(args) {
  args = args.join(' ').split(',');
  let dizhi = args[0];
  let fm = args[1];
  return `<link href="https://npm.elemecdn.com/video.js@7.20.3/dist/video-js.min.css" rel="stylesheet">
  <script src="https://npm.elemecdn.com/video.js@7.20.3/dist/video.min.js"></script>
  <video id="my-video" class="video-js" controls preload="none" controlsList="nodownload" poster="${fm}">
    <source src="${dizhi}" type="video/mp4">
    <p class="vjs-no-js">如果想使用video.js，请确保浏览器可以运行JavaScript，并且支持<a href="https://videojs.com/html5-video-support/" target="_blank">HTML5 video</a></p>
  </video>
  <style type="text/css">.video-js {width: 100% !important;height: 550px !important;}</style>`
}
hexo.extend.tag.register('video',video, { ends: false })
