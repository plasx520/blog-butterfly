categoriesBarActive()
topCategoriesBarScroll()

//分类条
function categoriesBarActive(){
  var urlinfo = window.location.pathname;
  urlinfo = decodeURIComponent(urlinfo)
  console.log(urlinfo);
  //判断是否是首页
  if (urlinfo == '/'){
    if (document.querySelector('#category-bar')){
      document.getElementById('首页').classList.add("select")
    }
  }else {
    // 验证是否是分类链接
    var pattern = /\/categories\/.*?\//;
    var patbool = pattern.test(urlinfo);
    console.log(patbool);
    // 获取当前的分类
    if (patbool) {
      var valuegroup = urlinfo.split("/");
      console.log(valuegroup[2]);
      // 获取当前分类
      var nowCategorie = valuegroup[2];
      if (document.querySelector('#category-bar')){
        document.getElementById(nowCategorie).classList.add("select");
      }
    }
  }
  
}

//鼠标控制横向滚动
function topCategoriesBarScroll(){
  if (document.getElementById("category-bar-items")){
    let xscroll = document.getElementById("category-bar-items");
  xscroll.addEventListener("mousewheel", function (e) {
    //计算鼠标滚轮滚动的距离
    let v = -e.wheelDelta / 2;
    xscroll.scrollLeft += v;
    //阻止浏览器默认方法
    e.preventDefault();
}, false);
  }
}
if (document.getElementById('post-cover')) {
} else {
  this.r = Math.floor(Math.random()*120+50);
  this.g = Math.floor(Math.random()*140+50);
  this.b = Math.floor(Math.random()*140+50);
  this.cs = 'rgba('+ this.r +','+ this.g +','+ this.b +',0.85)';
  this.tm = 'rgba('+ this.r +','+ this.g +','+ this.b +',0.2)';
  document.styleSheets[0].addRule(":root[data-theme=light]", "--heo-lighttext:" + this.cs + "!important")
  document.styleSheets[0].addRule(":root[data-theme=light] ", "--heo-theme:" + this.cs + "!important")
  document.styleSheets[0].addRule(":root[data-theme=dark]", "--heo-theme:" + this.cs + "!important")
  document.styleSheets[0].addRule(":root[data-theme=light] ", "--heo-zhuti:" + this.tm + "!important")
  document.styleSheets[0].addRule(":root[data-theme=dark]", "--heo-zhuti:" + this.tm + "!important")
  this.r2 = Math.floor(Math.random()*255+80);
  this.g2 = Math.floor(Math.random()*255+80);
  this.b2 = Math.floor(Math.random()*255+80);
  this.cs2 = 'rgba('+ this.r2 +','+ this.g2 +','+ this.b2 +',0.95)';
  document.styleSheets[0].addRule(":root[data-theme=dark]", "--heo-lighttext:" + this.cs2 + "!important")
}

