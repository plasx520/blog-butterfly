function xiazai(args) {
	args = args.join(' ').split(',');
	let bd = args[0];
	let ct = args[1];
	let ty = args[2];
	let bz = args[3];
	return `<link href="/css/xiazai.css" rel="stylesheet"><div class="bianju">
	<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>
	<script src="https://cdn.bootcss.com/js-sha1/0.6.0/sha1.js"></script>
	<script src="/js/xiazai.js"></script>
	<button2 onclick="myFunction()" type="button" data-dl>
	  <span class="dl-icon"></span><span>开始下载</span>
	  </button2></div>
	  <script>
	function myFunction(){
	  url=("/xz/index.html?noticeId=" + str64 + "&bd=${bd}&ct=${ct}&ty=${ty}&bz=${bz}")
		  window.open(url, '_blank');
  } 
	  </script> `
  }
  hexo.extend.tag.register('xiazai',xiazai, { ends: false })
