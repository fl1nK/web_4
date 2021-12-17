var heigthWork
var widthWork
var canvas
var width
var height
var ctx

var speed
var sizeball
var cololball

var keyname = 0
var time = 0
var speed
var speedx = 0
var speedy = 0

var x = width / 2
var y = height / 2

const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function () {

   const myObj = JSON.parse(this.responseText);

   speed = myObj.speed
   speedx = speed
   sizeball = myObj.sizeball
   cololball = myObj.cololball

}
xmlhttp.open("GET", "content.json");
xmlhttp.send();


function random(min, max) {
   const num = Math.floor(Math.random() * (max - min + 1)) + min;
   return num;
}


function play() {

   heigthWork = document.getElementById('item1').scrollHeight;
   widthWork = document.getElementById('item1').scrollWidth;

   canvas = document.querySelector('.myCanvas');
   canvas.width = width = widthWork - 10
   canvas.height = height = heigthWork - 60
   ctx = canvas.getContext('2d');

   x = width / 2
   y = height / 2

   image = new Image();
   image.src = 'pictures.png';
   image.onload = function () {

      ctx.drawImage(image, 0, 0, width, height);

      ctx.fillStyle = cololball
      ctx.fillRect(x, y, sizeball, sizeball);
   }

   localStorage.clear()

   document.getElementById('controls').hidden = false;
   document.getElementById('myCanvas').hidden = false;
   document.getElementById('musor').hidden = true;
   document.getElementById('text').textContent = 'Анімацію відкрили'
   time = Date.now()
   playtime = 'Анімацію відкрили'
   localStorage.setItem(keyname, playtime)
   keyname++



}

function reloadBall() {
   x = width / 2
   y = height / 2
}

var stopped;
var requestId = 0;

function loop() {
   ctx.drawImage(image, 0, 0, width, height);

   ctx.fillStyle = cololball
   ctx.fillRect(x, y, sizeball, sizeball);


   if ((x + sizeball) >= width) {
      stopp()
      openReload()
   }
   if ((x) <= 0) {
      stopp()
      openReload()
   }
   if ((y + sizeball) >= height) {
      stopp()
      openReload()
   }
   if ((y) <= 0) {
      stopp()
      openReload()
   }

   var s = random(0, 100)
   if (s == 0) {
      speedx = speed
      speedy = 0

      stime = 'Квадрат повернув праворуч: ' + (Date.now() - time) / 1000
      localStorage.setItem(keyname, stime)
      keyname++
   }
   if (s == 1) {
      speedx = -speed
      speedy = 0

      stime = 'Квадрат повернув ліворуч: ' + (Date.now() - time) / 1000
      localStorage.setItem(keyname, stime)
      keyname++
   }
   if (s == 2) {
      speedx = 0
      speedy = speed

      stime = 'Квадрат повернув вниз: ' + (Date.now() - time) / 1000
      localStorage.setItem(keyname, stime)
      keyname++
   }
   if (s == 3) {
      speedx = 0
      speedy = -speed

      stime = 'Квадрат повернув вверх: ' + (Date.now() - time) / 1000
      localStorage.setItem(keyname, stime)
      keyname++
   }

   x += speedx
   y += speedy

   if (!stopped) {
      requestId = requestAnimationFrame(loop);
   }
}

function startt() {
   requestId = window.requestAnimationFrame(loop);
   stopped = false;
}
function stopp() {
   if (requestId) {
      window.cancelAnimationFrame(requestId);
   }
   stopped = true;
}

function startPress() {
   document.getElementById('start').style = 'display:none'
   document.getElementById('stop').style = 'display:'
   document.getElementById('text').textContent = 'Анімація почалась'
   stoptime = 'Анімація почалась: ' + (Date.now() - time) / 1000
   localStorage.setItem(keyname, stoptime)
   keyname++
}

function stopPress() {
   document.getElementById('start').style = 'display:'
   document.getElementById('stop').style = 'display:none'
   document.getElementById('text').textContent = 'Анімація зупинилась'

   stoptime = 'Анімація зупинилась: ' + (Date.now() - time) / 1000
   localStorage.setItem(keyname, stoptime)
   keyname++
}

function reloadPress() {
   document.getElementById('start').style = 'display:'
   document.getElementById('reload').style = 'display:none'
   document.getElementById('text').textContent = 'Анімація перезапустилася'
   reloadtime = 'Анімація перезапустилася: ' + (Date.now() - time) / 1000
   localStorage.setItem(keyname, reloadtime)
   keyname++
}



function hide() {
   document.getElementById('controls').hidden = true;
   document.getElementById('myCanvas').hidden = true;
   document.getElementById('musor').hidden = false;
   stopp()
   reloadd()
   document.getElementById('start').style = 'display:'
   document.getElementById('reload').style = 'display:none'
   document.getElementById('stop').style = 'display:none'
   document.getElementById('text').textContent = 'Анімація закрили'

   closetime = 'Анімацію закрили: ' + (Date.now() - time) / 1000
   localStorage.setItem(keyname, closetime)
   keyname++
}

function writels() {

   let text = document.getElementById('allTextInfo').innerHTML
   for (let i = 0; i < localStorage.length; i++) {
      text = text + localStorage.getItem(i) + ';<br>'
   }

   document.getElementById('allTextInfo').innerHTML = text

   keyname = 0
   localStorage.clear()
}

function reloadd() {

   reloadBall()
   ctx.drawImage(image, 0, 0, width, height);
   ctx.fillStyle = cololball;
   ctx.fillRect(x, y, 10, 10);
}

function openReload() {
   document.getElementById('stop').style = 'display:none'
   document.getElementById('reload').style = 'display:'
   document.getElementById('text').textContent = 'Квадрат врізався в стінку'

   reloadtime = 'Квадрат врізався в стінку: ' + (Date.now() - time) / 1000
   localStorage.setItem(keyname, reloadtime)
   keyname++
}
