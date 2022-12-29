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
