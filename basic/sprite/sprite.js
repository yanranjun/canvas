// 获取对象
var canvas = document.getElementById('canvas'),
    readout = document.getElementById('readout'),
    context = canvas.getContext('2d'),
    spriteSheet = new Image();

// function -----------

// 获取窗口的坐标转换为canvas的坐标
function windowToCanvas(canvas, x , y) {
  var bbox = canvas.getBoundingClientRect();
  return {
    x: x-bbox.left * (canvas.width /bbox.width),
    y: y -bbox.top * (canvas.height /bbox.height)
  };
} 

// 绘制背景
function drawBackground() {
  var VERTICAL_LINE_SPACING = 12,
      i = context.canvas.height;
      context.clearRect(0, 0 , canvas.width, canvas.height);
      context.strokeStyle = 'lightgray';
      context.lineWidth = 0.5;
      while(i > VERTICAL_LINE_SPACING*4) {
        context.beginPath();
        context.moveTo(0, i);
        context.lineTo(context.canvas.width, i);
        context.stroke();
        i -= VERTICAL_LINE_SPACING;
      }
}

// 画精灵
function drawSpritesheet() {
  context.drawImage(spriteSheet, 0, 0);
}

// 画中间的竖线
function drawGuidellines(x, y) {
  context.strokeStyle = 'rgba(0, 0, 230, 0.8)';
  context.lineWidth = 0.5;
  drawVerticalLine(x);
  drawHorizontalLine(y);
}

// 修改
function updateReadout(x, y) {
  readout.innerText = '(' + x.toFixed(0) + ', ' + y.toFixed(0) + ')';
}

// 画垂直线条
function drawHorizontalLine(y) {
  context.beginPath();
  context.moveTo(0, y+0.5);
  context.lineTo(context.canvas.width, y+0.5)
  context.stroke()
}

// 
function drawVerticalLine(x) {
  context.beginPath();
  context.moveTo(x+0.5, 0);
  context.lineTo(x+0.5, context.canvas.height);
  context.stroke();
}

// event handlers

canvas.onmousemove = function(e) {
  var loc = windowToCanvas(canvas, e.clientX, e.clientY);

  drawBackground()
  drawSpritesheet()
  drawGuidellines(loc.x, loc.y)
  updateReadout(loc.x, loc.y);
}

// initialization
spriteSheet.src = './timg.jpeg';
spriteSheet.onload = function(e) {
  drawSpritesheet()
}
drawBackground()
