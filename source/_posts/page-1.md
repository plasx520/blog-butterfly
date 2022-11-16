---
title: 换背景
top_img: 'linear-gradient(143deg, #00fff3, #ef00ff, #42abcc, #ffe400)'
abbrlink: 5774c795
date: 2022-09-25 14:01:11
tags:
---


> 这个页面是用来测试渐变背景的效果。
> 阅读体验及个标签样式请自己进行调整。

<!-- more -->




<div id="article-container" style="padding:10px;">
	<p>
		<button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:#5fcdff;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;">
			<i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景
		</button>
	</p>
	<h2 id="图片（手机）">
		<a href="#图片（手机）" class="headerlink" title="图片（手机）"></a>图片（手机）
	</h2>
	<div class="bgbox">
		<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.xjh.me/random_img.php?return=302)" class="pimgbox" onclick="changeBg('url(https://img.xjh.me/random_img.php?return=302)')"></a>
	</div>
	<h2 id="图片（电脑）">
		<a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>随机二次元壁纸
	</h2>
	<div class="bgbox">
		<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.dmoe.cc/random.php)" class="imgbox" onclick="changeBg('url(https://www.dmoe.cc/random.php)')"></a>
		<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://api.ixiaowai.cn/api/api.php)" class="imgbox" onclick="changeBg('url(https://api.ixiaowai.cn/api/api.php)')"></a>
		<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://api.mtyqx.cn/tapi/random.php)" class="imgbox" onclick="changeBg('url(https://api.mtyqx.cn/tapi/random.php)')"></a>
		<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.seovx.com/d/?mom=302" class="imgbox" onclick="changeBg('url(https://cdn.seovx.com/d/?mom=302)')"></a>
	</div>
	<h2 id="图片（电脑）">
		<a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>随机壁纸
	</h2>
	<div class="bgbox">
		<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.seovx.com/ha/?mom=302)" class="imgbox" onclick="changeBg('url(https://cdn.seovx.com/ha/?mom=302)')"></a>
		<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.seovx.com/?mom=302)" class="imgbox" onclick="changeBg('url(https://cdn.seovx.com/?mom=302)')"></a>
		<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://api.btstu.cn/sjbz/api.php)" class="imgbox" onclick="changeBg('url(https://api.btstu.cn/sjbz/api.php)')"></a>
		<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://api.ixiaowai.cn/gqapi/gqapi.php)" class="imgbox" onclick="changeBg('url(https://api.ixiaowai.cn/gqapi/gqapi.php)')"></a>
	</div>
	<h2 id="渐变色">
		<a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色
	</h2>
	<div class="bgbox">
		<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
		<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(90deg,rgba(247,149,51,.1) 0,rgba(243,112,85,.1) 15%,rgba(239,78,123,.1) 30%,rgba(161,102,171,.1) 44%,rgba(80,115,184,.1) 58%,rgba(16,152,173,.1) 72%,rgba(7,179,155,.1) 86%,rgba(109,186,130,.1) 100%)" onclick="changeBg('linear-gradient(90deg,rgba(247,149,51,.1) 0,rgba(243,112,85,.1) 15%,rgba(239,78,123,.1) 30%,rgba(161,102,171,.1) 44%,rgba(80,115,184,.1) 58%,rgba(16,152,173,.1) 72%,rgba(7,179,155,.1) 86%,rgba(109,186,130,.1) 100%)')"></a>
		<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #005f58, #00205a)" onclick="changeBg('linear-gradient(to right, #005f58, #00205a)')"></a>
		<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #38ff00, #00dfff)" onclick="changeBg('linear-gradient(to right, #38ff00, #00dfff)')"></a>
	</div>
	<h2 id="纯色">
		<a href="#纯色" class="headerlink" title="纯色"></a>纯色
	</h2>
	<div class="bgbox">
		<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #7D9D9C" onclick="changeBg('#7D9D9C')"></a>
		<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #000000ab" onclick="changeBg('#000000ab')"></a>
		<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #ededed" onclick="changeBg('#ededed')"></a>
		<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #00aac3" onclick="changeBg('#00aac3')"></a>
	</div>
</div>
### 代码
~~~html
<div id="article-container" style="padding:10px;">
	<p>
		<button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:#5fcdff;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;">
			<i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景
		</button>
	</p>
	<h2 id="图片（手机）">
		<a href="#图片（手机）" class="headerlink" title="图片（手机）"></a>图片（手机）
	</h2>
	<div class="bgbox">
		<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.xjh.me/random_img.php?return=302)" class="pimgbox" onclick="changeBg('url(https://img.xjh.me/random_img.php?return=302)')"></a>
	</div>
	<h2 id="图片（电脑）">
		<a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>随机二次元壁纸
	</h2>
	<div class="bgbox">
		<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.dmoe.cc/random.php)" class="imgbox" onclick="changeBg('url(https://www.dmoe.cc/random.php)')"></a>
		<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://api.ixiaowai.cn/api/api.php)" class="imgbox" onclick="changeBg('url(https://api.ixiaowai.cn/api/api.php)')"></a>
		<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://api.mtyqx.cn/tapi/random.php)" class="imgbox" onclick="changeBg('url(https://api.mtyqx.cn/tapi/random.php)')"></a>
		<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.seovx.com/d/?mom=302" class="imgbox" onclick="changeBg('url(https://cdn.seovx.com/d/?mom=302)')"></a>
	</div>
	<h2 id="图片（电脑）">
		<a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>随机壁纸
	</h2>
	<div class="bgbox">
		<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.seovx.com/ha/?mom=302)" class="imgbox" onclick="changeBg('url(https://cdn.seovx.com/ha/?mom=302)')"></a>
		<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.seovx.com/?mom=302)" class="imgbox" onclick="changeBg('url(https://cdn.seovx.com/?mom=302)')"></a>
		<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://api.btstu.cn/sjbz/api.php)" class="imgbox" onclick="changeBg('url(https://api.btstu.cn/sjbz/api.php)')"></a>
		<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://api.ixiaowai.cn/gqapi/gqapi.php)" class="imgbox" onclick="changeBg('url(https://api.ixiaowai.cn/gqapi/gqapi.php)')"></a>
	</div>
	<h2 id="渐变色">
		<a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色
	</h2>
	<div class="bgbox">
		<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
		<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(90deg,rgba(247,149,51,.1) 0,rgba(243,112,85,.1) 15%,rgba(239,78,123,.1) 30%,rgba(161,102,171,.1) 44%,rgba(80,115,184,.1) 58%,rgba(16,152,173,.1) 72%,rgba(7,179,155,.1) 86%,rgba(109,186,130,.1) 100%)" onclick="changeBg('linear-gradient(90deg,rgba(247,149,51,.1) 0,rgba(243,112,85,.1) 15%,rgba(239,78,123,.1) 30%,rgba(161,102,171,.1) 44%,rgba(80,115,184,.1) 58%,rgba(16,152,173,.1) 72%,rgba(7,179,155,.1) 86%,rgba(109,186,130,.1) 100%)')"></a>
		<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #005f58, #00205a)" onclick="changeBg('linear-gradient(to right, #005f58, #00205a)')"></a>
		<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #38ff00, #00dfff)" onclick="changeBg('linear-gradient(to right, #38ff00, #00dfff)')"></a>
	</div>
	<h2 id="纯色">
		<a href="#纯色" class="headerlink" title="纯色"></a>纯色
	</h2>
	<div class="bgbox">
		<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #7D9D9C" onclick="changeBg('#7D9D9C')"></a>
		<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #000000ab" onclick="changeBg('#000000ab')"></a>
		<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #ededed" onclick="changeBg('#ededed')"></a>
		<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #00aac3" onclick="changeBg('#00aac3')"></a>
	</div>
</div>
~~~