---
title: butterfly版权栏养个鱼
tags:
  - 教程
  - Hexo
  - 主題
  - butterfly
categories: 魔改
keywords: 'hexo,butterfly,主題,doc,教程,文檔'
description: hexo Butterfly版权栏改成鱼池
top_img: >-
  https://drfs.ctcontents.com/file/14237530/748136103/7083a7/img/wenzhang/fish.png
cover: >-
  https://drfs.ctcontents.com/file/14237530/748136103/7083a7/img/wenzhang/fish.png
comments: true
abbrlink: 263068a8
updated:
---
# hexo butterfly 养鱼来了

## js

![](https://drfs.ctcontents.com/file/14237530/748136103/7083a7/img/wenzhang/fish.png)

没有请创建 `blog/source/js/fishes.js` 写入

```js
fish();
function fish() {
  return (
    $("footer").append(
      '<div class="container" id="jsi-flying-fish-container"></div>'
    ),
    $(".container").css({
      width: "100%",
      height: "160px",
      margin: 0,
      padding: 0,
    }),
    $("#footer-wrap").css({
      position: "absolute",
      "text-align": "center",
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
    }),
    this
  );
}
var RENDERER = {
  POINT_INTERVAL: 5,
  FISH_COUNT: 2,
  MAX_INTERVAL_COUNT: 50,
  INIT_HEIGHT_RATE: 0.5,
  THRESHOLD: 50,

  init: function () {
    this.setParameters();
    this.reconstructMethods();
    this.setup();
    this.bindEvent();
    this.render();
  },
  setParameters: function () {
    this.$window = $(window);
    this.$container = $("#jsi-flying-fish-container");
    this.$canvas = $("<canvas />");
    this.context = this.$canvas
      .appendTo(this.$container)
      .get(0)
      .getContext("2d");
    this.points = [];
    this.fishes = [];
    this.watchIds = [];
  },
  createSurfacePoints: function () {
    var count = Math.round(this.width / this.POINT_INTERVAL);
    this.pointInterval = this.width / (count - 1);
    this.points.push(new SURFACE_POINT(this, 0));

    for (var i = 1; i < count; i++) {
      var point = new SURFACE_POINT(this, i * this.pointInterval),
        previous = this.points[i - 1];

      point.setPreviousPoint(previous);
      previous.setNextPoint(point);
      this.points.push(point);
    }
  },
  reconstructMethods: function () {
    this.watchWindowSize = this.watchWindowSize.bind(this);
    this.jdugeToStopResize = this.jdugeToStopResize.bind(this);
    this.startEpicenter = this.startEpicenter.bind(this);
    this.moveEpicenter = this.moveEpicenter.bind(this);
    this.render = this.render.bind(this);
  },
  setup: function () {
    this.points.length = 0;
    this.fishes.length = 0;
    this.watchIds.length = 0;
    this.intervalCount = this.MAX_INTERVAL_COUNT;
    this.width = this.$container.width();
    this.height = this.$container.height();
    this.fishCount =
      (((this.FISH_COUNT * this.width) / 500) * this.height) / 500;
    this.$canvas.attr({ width: this.width, height: this.height });

    this.skyGradient = this.context.createLinearGradient(0, 0, 0, this.height);
    this.skyGradient.addColorStop(0, "hsl(180, 80%, 70%)");
    this.skyGradient.addColorStop(1, "hsl(180, 80%, 90%)");

    this.seaGradient = this.context.createLinearGradient(0, 0, 0, this.height);
    this.seaGradient.addColorStop(0, "hsl(180, 80%, 60%)");
    this.seaGradient.addColorStop(0.5, "hsl(180, 80%, 50%)");
    this.seaGradient.addColorStop(1, "hsl(210, 80%, 50%)");

    this.fishes.push(new FISH(this));
    this.createSurfacePoints();
  },
  watchWindowSize: function () {
    this.clearTimer();
    this.tmpWidth = this.$window.width();
    this.tmpHeight = this.$window.height();
    this.watchIds.push(setTimeout(this.jdugeToStopResize, this.WATCH_INTERVAL));
  },
  clearTimer: function () {
    while (this.watchIds.length > 0) {
      clearTimeout(this.watchIds.pop());
    }
  },
  jdugeToStopResize: function () {
    var width = this.$window.width(),
      height = this.$window.height(),
      stopped = width == this.tmpWidth && height == this.tmpHeight;

    this.tmpWidth = width;
    this.tmpHeight = height;

    if (stopped) {
      this.setup();
    }
  },
  bindEvent: function () {
    this.$window.on("resize", this.watchWindowSize);
    this.$container.on("mouseenter", this.startEpicenter);
    this.$container.on("mousemove", this.moveEpicenter);
  },
  getAxis: function (event) {
    var offset = this.$container.offset();

    return {
      x: event.clientX - offset.left + this.$window.scrollLeft(),
      y: event.clientY - offset.top + this.$window.scrollTop(),
    };
  },
  startEpicenter: function (event) {
    this.axis = this.getAxis(event);
  },
  moveEpicenter: function (event) {
    var axis = this.getAxis(event);

    if (!this.axis) {
      this.axis = axis;
    }
    this.generateEpicenter(axis.x, axis.y, axis.y - this.axis.y);
    this.axis = axis;
  },
  generateEpicenter: function (x, y, velocity) {
    if (
      y < this.height / 2 - this.THRESHOLD ||
      y > this.height / 2 + this.THRESHOLD
    ) {
      return;
    }
    var index = Math.round(x / this.pointInterval);

    if (index < 0 || index >= this.points.length) {
      return;
    }
    this.points[index].interfere(y, velocity);
  },
  controlStatus: function () {
    for (var i = 0, count = this.points.length; i < count; i++) {
      this.points[i].updateSelf();
    }
    for (var i = 0, count = this.points.length; i < count; i++) {
      this.points[i].updateNeighbors();
    }
    if (this.fishes.length < this.fishCount) {
      if (--this.intervalCount == 0) {
        this.intervalCount = this.MAX_INTERVAL_COUNT;
        this.fishes.push(new FISH(this));
      }
    }
  },
  render: function () {
    requestAnimationFrame(this.render);
    this.controlStatus();

    this.context.fillStyle = this.skyGradient;
    this.context.fillRect(0, 0, this.width, this.height);
    this.context.fillStyle = this.seaGradient;
    this.context.beginPath();
    this.context.moveTo(0, this.height);

    for (var i = 0, count = this.points.length; i < count; i++) {
      this.points[i].render(this.context);
    }
    this.context.lineTo(this.width, this.height);
    this.context.closePath();
    this.context.fill();

    for (var i = 0, count = this.fishes.length; i < count; i++) {
      this.fishes[i].render(this.context);
    }
  },
};
var SURFACE_POINT = function (renderer, x) {
  this.renderer = renderer;
  this.x = x;
  this.init();
};
SURFACE_POINT.prototype = {
  SPRING_CONSTANT: 0.03,
  SPRING_FRICTION: 0.9,
  WAVE_SPREAD: 0.3,
  ACCELARATION_RATE: 0.01,

  init: function () {
    this.initHeight = this.renderer.height * this.renderer.INIT_HEIGHT_RATE;
    this.height = this.initHeight;
    this.fy = 0;
    this.force = { previous: 0, next: 0 };
  },
  setPreviousPoint: function (previous) {
    this.previous = previous;
  },
  setNextPoint: function (next) {
    this.next = next;
  },
  interfere: function (y, velocity) {
    this.fy =
      this.renderer.height *
      this.ACCELARATION_RATE *
      (this.renderer.height - this.height - y >= 0 ? -1 : 1) *
      Math.abs(velocity);
  },
  updateSelf: function () {
    this.fy += this.SPRING_CONSTANT * (this.initHeight - this.height);
    this.fy *= this.SPRING_FRICTION;
    this.height += this.fy;
  },
  updateNeighbors: function () {
    if (this.previous) {
      this.force.previous =
        this.WAVE_SPREAD * (this.height - this.previous.height);
    }
    if (this.next) {
      this.force.next = this.WAVE_SPREAD * (this.height - this.next.height);
    }
  },
  render: function (context) {
    if (this.previous) {
      this.previous.height += this.force.previous;
      this.previous.fy += this.force.previous;
    }
    if (this.next) {
      this.next.height += this.force.next;
      this.next.fy += this.force.next;
    }
    context.lineTo(this.x, this.renderer.height - this.height);
  },
};
var FISH = function (renderer) {
  this.renderer = renderer;
  this.init();
};
FISH.prototype = {
  GRAVITY: 0.4,

  init: function () {
    this.direction = Math.random() < 0.5;
    this.x = this.direction
      ? this.renderer.width + this.renderer.THRESHOLD
      : -this.renderer.THRESHOLD;
    this.y = this.getRandomValue(
      (this.renderer.height * 6) / 10,
      (this.renderer.height * 9) / 10
    );
    this.previousY = this.y;
    this.vx = this.getRandomValue(4, 10) * (this.direction ? -1 : 1);
    this.vy = this.getRandomValue(-5, -2);
    this.ay = this.getRandomValue(-0.2, -0.05);
    this.theta = 0;
    this.phi = 0;
    this.isOut = false;
  },
  getRandomValue: function (min, max) {
    return min + (max - min) * Math.random();
  },
  controlStatus: function (context) {
    this.previousY = this.y;
    this.x += this.vx;
    this.y += this.vy;
    this.vy += this.ay;

    if (this.y < this.renderer.height * this.renderer.INIT_HEIGHT_RATE) {
      this.vy += this.GRAVITY;
      this.isOut = true;
    } else {
      if (this.isOut) {
        this.ay = this.getRandomValue(-0.2, -0.05);
      }
      this.isOut = false;
    }
    if (!this.isOut) {
      this.theta += Math.PI / 20;
      this.theta %= Math.PI * 2;
      this.phi += Math.PI / 30;
      this.phi %= Math.PI * 2;
    }
    this.renderer.generateEpicenter(
      this.x + (this.direction ? -1 : 1) * this.renderer.THRESHOLD,
      this.y,
      this.y - this.previousY
    );

    if (
      (this.vx > 0 && this.x > this.renderer.width + this.renderer.THRESHOLD) ||
      (this.vx < 0 && this.x < -this.renderer.THRESHOLD)
    ) {
      this.init();
    }
  },
  render: function (context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(Math.PI + Math.atan2(this.vy, this.vx));
    context.scale(1, this.direction ? 1 : -1);

    context.fillStyle = "hsl(180, 30%, 80%)";
    context.beginPath();
    context.moveTo(-30, 0);
    context.bezierCurveTo(-20, 15, 15, 10, 40, 0);
    context.bezierCurveTo(15, -10, -20, -15, -30, 0);
    context.fill();

    context.save();
    context.translate(40, 0);
    context.scale(0.9 + 0.2 * Math.sin(this.theta), 1);
    context.fillStyle = "hsl(180, 30%, 80%)";
    context.beginPath();
    context.moveTo(0, 0);
    context.quadraticCurveTo(5, 10, 20, 8);
    context.quadraticCurveTo(12, 5, 10, 0);
    context.quadraticCurveTo(12, -5, 20, -8);
    context.quadraticCurveTo(5, -10, 0, 0);
    context.fill();
    context.restore();

    context.save();
    context.translate(-3, 0);
    context.rotate(Math.PI / 3 + (Math.PI / 10) * Math.sin(this.phi));
    context.fillStyle = "hsl(220, 80%, 40%)";
    context.beginPath();
    context.moveTo(-5, 0);
    context.bezierCurveTo(-10, -10, -10, -30, 0, -40);
    context.bezierCurveTo(12, -25, 8, -10, 0, 0);
    context.closePath();
    context.fill();
    context.restore();

    context.strokeStyle = "hsl(220, 80%, 40%)";
    context.beginPath();
    context.arc(-15, -3, 5, 0, Math.PI * 2, false);
    context.stroke();

    context.fillStyle = "hsl(220, 80%, 40%)";
    context.beginPath();
    context.arc(-15, -3, 3, 0, Math.PI * 2, false);
    context.fill();
    context.restore();

    this.controlStatus(context);
  },
};
$(function () {
  RENDERER.init();
});
```

## 配置

### 开启 pjax

`_configy.butterfly.yml` 相应位置修改



```yaml

inject:
  head:
  bottom:
    - <script defer src="https://rmt.dogedoge.com/fetch/~/source/jsdelivr/npm/jquery@latest/dist/jquery.min.js"></script>
    - <script defer data-pjax src="/js/fishes.js"></script>
```

### 未开启 pjax

`_configy.butterfly.yml` 相应位置修改

```yaml
inject:
  head:
  bottom:
    - <script defer src="https://rmt.dogedoge.com/fetch/~/source/jsdelivr/npm/jquery@latest/dist/jquery.min.js"></script>
    - <script defer src="/js/fishes.js"></script>
```

# 前言

**页脚养鱼**效果我也是折腾了蛮久的，奈何自己太菜，出现了一些问题也不知道怎么解决，查询一些博客，相关的描述也很简单。这里参考了`Ln`大佬的博客，总算是搞定了。

> Ln’s Blog ——《如何在页脚养鱼》：https://weilining.github.io/204.html

最终效果在本站页脚，向下滑动即可看到。

------

# 操作方法

参考文章一共介绍了两种方法，第一种是有针对于`Butterfly`主题的修改。第二种方法是通用方法（其他也主题可参考）

## 方法一

打开站点的主题配置文件`_config.butterfly.yml`，找到`inject`，在`bottom`处直接引入以下链接：

```
- <script src="https://gcore.jsdelivr.net/gh/xiabo2/CDN@latest/fishes.js"></script>
```

## 方法二

1. 找到`footer.pug`文件：`\themes\butterfly\layout\includes\footer.pug`，写入以下内容：

   ```
   #jsi-flying-fish-container.container
      script(src='js/fish.js')
   style.
      
          @media only screen and (max-width: 767px){
          #sidebar_search_box input[type=text]{width:calc(100% - 24px)}
       }
   ```

2. 打开站点的主题配置文件`_config.butterfly.yml`，找到`inject`，在`bottom`处直接引入https://gcore.jsdelivr.net/gh/xiabo2/CDN@latest/fish.js

   ```
   - <script src="https://gcore.jsdelivr.net/gh/xiabo2/CDN@latest/fish.js"></script>
   ```

   **注意**：引入的js文件需要依赖`jquery`，所以在之前如果没有引用过的就需要在`bottom`处的最开始引入：

   ```
   - <script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script>
   ```

3. 这样效果就出现了。但是引入之后页脚会过高，需要修改`footer.styl`文件：`\themes\butterfly\source\css\_layout\footer.styl`:

   ```
   #footer
     position: relative
     background: $light-blue
     background-attachment: local
     background-position: bottom
     background-size: cover
   
     if hexo-config('footer_bg') != false
       &:before
         position: absolute
         width: 100%
         height: 100%
         background-color: alpha($dark-black, .1) 
         content: ''
   
   #footer-wrap
     position: absolute
     padding: 1.2rem 1rem 1.4rem
     color: var(--light-grey)
     text-align: center
     left: 0
     right: 0
     top: 0
     bottom: 0
   
     a
       color: var(--light-grey)
   
       &:hover
         text-decoration: underline
   
     .footer-separator
       margin: 0 .2rem
   
     .icp-icon
       padding: 0 4px
       vertical-align: text-bottom
       max-height: 1.4em
       width auto
   ```

4. 参考文章的技术流程写到这里就结束了，如果还有页脚文字被遮挡的情况，可以修改页脚的透明度，在`\themes\butterfly\source\css`路径下创建一个`xxx.css`文件，在文件中添加如下代码：

   - 页脚半透明

     ```
     /* 页脚半透明 */
     #footer {
         background: rgba(255, 255, 255, 0);
         color: #000;
         border-top-right-radius: 20px;
         border-top-left-radius: 20px;
         backdrop-filter: saturate(100%) blur(5px)
     }
     
     #footer::before {
         background: rgba(255,255,255,0)
     }
     
     #footer #footer-wrap {
         color: var(--font-color);
     }
     
     #footer #footer-wrap a {
         color: var(--font-color);
     }
     ```

   - 页脚全透明

     ```
     /* 页脚透明 */
     #footer {
         background: transparent !important;
     }
     ```

   然后将该文件引入到`inject`的`head`处：

   ```
   - <link rel="stylesheet" href="/css/xxx.css">
   ```

5. 至此操作结束，去看看你的页脚有没有发生变化吧。

## 补充

还有一个更为简单的方法，引入带有颜色的页脚养鱼，效果如下：

![img](https://drfs.ctcontents.com/file/14237530/748136103/7083a7/img/wenzhang/fish.png)

只需要在`_config.butterfly.yml`文件中，找到`inject`，在`bottom`处直接引入：https://blog.4t.pw/js/wz/fishes.js

```
- <script defer src="https://blog.4t.pw/js/wz/fishes.js"></script> # 页脚养鱼(彩色)
```

**注意**：该操作同样需要在之前引入`jquery`。

------

# 结尾

在魔改的道路上乐此不疲，虽然有时真的很“崩溃”。