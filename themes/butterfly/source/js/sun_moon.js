function switchNightMode() {
    document.querySelector('body').insertAdjacentHTML('beforeend', '<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"></div></div>'),
      setTimeout(function() {
        document.querySelector('body').classList.contains('DarkMode') ? (document.querySelector('body').classList.remove('DarkMode'), localStorage.setItem('isDark', '0'), document.getElementById('modeicon').setAttribute('xlink:href', '#icon-moon')) : (document.querySelector('body').classList.add('DarkMode'), localStorage.setItem('isDark', '1'), document.getElementById('modeicon').setAttribute('xlink:href', '#icon-sun')),
          setTimeout(function() {
            document.getElementsByClassName('Cuteen_DarkSky')[0].style.transition = 'opacity 3s';
            document.getElementsByClassName('Cuteen_DarkSky')[0].style.opacity = '0';
            setTimeout(function() {
              document.getElementsByClassName('Cuteen_DarkSky')[0].remove();
            }, 1e3);
          }, 2e3)
      })
    const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
    if (nowMode === 'light') {
      activateDarkMode()
      saveToLocal.set('theme', 'dark', 2)
      GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
      document.getElementById('modeicon').setAttribute('xlink:href', '#icon-sun')
    } else {
      activateLightMode()
      saveToLocal.set('theme', 'light', 2)
      document.querySelector('body').classList.add('DarkMode'), document.getElementById('modeicon').setAttribute('xlink:href', '#icon-moon')
    }
    // handle some cases
    typeof utterancesTheme === 'function' && utterancesTheme()
    typeof FB === 'object' && window.loadFBComment()
    window.DISQUS && document.getElementById('disqus_thread').children.length && setTimeout(() => window.disqusReset(), 200)
  }
// 存数据
// name：命名 data：数据
function saveData(name, data) {
    localStorage.setItem(name, JSON.stringify({ 'time': Date.now(), 'data': data }))
}

// 取数据
// name：命名 time：过期时长,单位分钟,如传入30,即加载数据时如果超出30分钟返回0,否则返回数据
function loadData(name, time) {
    let d = JSON.parse(localStorage.getItem(name));
    // 过期或有错误返回 0 否则返回数据
    if (d) {
        let t = Date.now() - d.time
        if (t < (time * 60 * 1000) && t > -1) return d.data;
    }
    return 0;
}

// 上面两个函数如果你有其他需要存取数据的功能，也可以直接使用

// 读取背景
try {
    let data = loadData('blogbg', 1440)
    if (data) changeBg(data, 1)
    else localStorage.removeItem('blogbg');
} catch (error) { localStorage.removeItem('blogbg'); }

// 切换背景函数
// 此处的flag是为了每次读取时都重新存储一次,导致过期时间不稳定
// 如果flag为0则存储,即设置背景. 为1则不存储,即每次加载自动读取背景.
function changeBg(s, flag) {
    let bg = document.getElementById('web_bg')
    if (s.charAt(0) == '#') {
        bg.style.backgroundColor = s
        bg.style.backgroundImage = 'none'
    } else bg.style.backgroundImage = s
    if (!flag) { saveData('blogbg', s) }
}

// 以下为2.0新增内容

// 创建窗口
var winbox = ''

function createWinbox() {
    let div = document.createElement('div')
    document.body.appendChild(div)
    winbox = WinBox({
        id: 'changeBgBox',
        index: 999,
        title: "切换背景",
        x: "center",
        y: "center",
        minwidth: '300px',
        height: "60%",
        background: 'var(--leonus-blue)',
        onmaximize: () => { div.innerHTML = `<style>body::-webkit-scrollbar {display: none;}div#changeBgBox {width: 100% !important;}</style>` },
        onrestore: () => { div.innerHTML = '' }
    });
    winResize();
    window.addEventListener('resize', winResize)

    // 每一类我放了一个演示，直接往下复制粘贴 a标签 就可以，需要注意的是 函数里面的链接 冒号前面需要添加反斜杠\进行转义
    winbox.body.innerHTML = `
    <div id="article-container" style="padding:10px;">
    
    <p><button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:#5fcdff;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>
	
    <h2 id="图片（手机）"><a href="#图片（手机）" class="headerlink" title="图片（手机）"></a>图片（手机）</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.xjh.me/random_img.php?return=302)" class="pimgbox" onclick="changeBg('url(https\://img.xjh.me/random_img.php?return=302)')"></a>
    </div>
    
    <h2 id="图片（电脑）"><a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>随机二次元壁纸</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.dmoe.cc/random.php)" class="imgbox" onclick="changeBg('url(https\://www.dmoe.cc/random.php)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://api.ixiaowai.cn/api/api.php)" class="imgbox" onclick="changeBg('url(https\://api.ixiaowai.cn/api/api.php)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://api.mtyqx.cn/tapi/random.php)" class="imgbox" onclick="changeBg('url(https\://api.mtyqx.cn/tapi/random.php)')"></a>
	<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.seovx.com/d/?mom=302" class="imgbox" onclick="changeBg('url(https\://cdn.seovx.com/d/?mom=302)')"></a>
    </div>
    <h2 id="图片（电脑）"><a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>随机壁纸</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.seovx.com/ha/?mom=302)" class="imgbox" onclick="changeBg('url(https\://cdn.seovx.com/ha/?mom=302)')"></a>
	<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.seovx.com/?mom=302)" class="imgbox" onclick="changeBg('url(https\://cdn.seovx.com/?mom=302)')"></a>
	<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://api.btstu.cn/sjbz/api.php)" class="imgbox" onclick="changeBg('url(https\://api.btstu.cn/sjbz/api.php)')"></a>
	<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://api.ixiaowai.cn/gqapi/gqapi.php)" class="imgbox" onclick="changeBg('url(https\://api.ixiaowai.cn/gqapi/gqapi.php)')"></a>
    </div>
    
    
    <h2 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
	<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(90deg,rgba(247,149,51,.1) 0,rgba(243,112,85,.1) 15%,rgba(239,78,123,.1) 30%,rgba(161,102,171,.1) 44%,rgba(80,115,184,.1) 58%,rgba(16,152,173,.1) 72%,rgba(7,179,155,.1) 86%,rgba(109,186,130,.1) 100%)" onclick="changeBg('linear-gradient(90deg,rgba(247,149,51,.1) 0,rgba(243,112,85,.1) 15%,rgba(239,78,123,.1) 30%,rgba(161,102,171,.1) 44%,rgba(80,115,184,.1) 58%,rgba(16,152,173,.1) 72%,rgba(7,179,155,.1) 86%,rgba(109,186,130,.1) 100%)')"></a>
	<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #005f58, #00205a)" onclick="changeBg('linear-gradient(to right, #005f58, #00205a)')"></a>
	<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #38ff00, #00dfff)" onclick="changeBg('linear-gradient(to right, #38ff00, #00dfff)')"></a>
	
    </div>
    
    <h2 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #7D9D9C" onclick="changeBg('#7D9D9C')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #000000ab" onclick="changeBg('#000000ab')"></a>
	<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #ededed" onclick="changeBg('#ededed')"></a> 
	<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #00aac3" onclick="changeBg('#00aac3')"></a> 
    </div>
`;
}

// 适应窗口大小
function winResize() {
    var offsetWid = document.documentElement.clientWidth;
    if (offsetWid <= 768) {
        winbox.resize(offsetWid * 0.95 + "px", "90%").move("center", "center");
    } else {
        winbox.resize(offsetWid * 0.6 + "px", "70%").move("center", "center");
    }
}

// 切换状态，窗口已创建则控制窗口显示和隐藏，没窗口则创建窗口
function toggleWinbox() {
    if (document.querySelector('#changeBgBox')) winbox.toggleClass('hide');
    else createWinbox();
}
// F12显示文字
// 控制台打印自定义内容
if (window.console) {
    var getTimeState_console = function () {
      var t = new Date().getHours(),
        e = "";
      return (
        4 >= t || t > 22
          ? (e = "Good Night 🛌<br>")
          : 4 < t && t <= 10
          ? (e = "Good Morning 🌮")
          : 10 < t && t <= 12
          ? (e = "Good Noon 🍱")
          : 12 < t && t <= 17
          ? (e = "Good Afternoon ☕")
          : 17 < t && t <= 22 && (e = "Good Evening 🍇"),
        e
      );
    };
    Function.prototype.makeMulti = function () {
      let l = new String(this);
      l = l.substring(l.indexOf("/*") + 3, l.lastIndexOf("*/"));
      return l;
    };
    let string = function () {
      /*
能看到这句话说明我们有缘分，记得别再熬夜了我的程序员朋友。  
      */
    };
    console.log('\n' + ' %c 如果可以 交个朋友吧' + ' %c http://4t.pw ' + '\n', 'color: #fadfa3; background: #002d54; padding:5px 0;', 'background: #00ebff; padding:5px 0;');
    console.log(string.makeMulti());
    console.log(getTimeState_console());
    console.log("禁止代码%c不是我的风格", "color:#1fc7b6;font-weight:bold");
    console.log("在这里相遇很幸运 💛💙");
  }
if (GLOBAL_CONFIG.Snackbar) {
    btf.snackbarShow('欢迎光临')
}
