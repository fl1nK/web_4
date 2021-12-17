var heigthWork
var widthWork
var widthControle
var heightControle = 50
var widthAnim
var heightAnim

var canvas
var width
var height
var ctx
var image

var speed = 1
var sizeball
var cololball

var keyname = 0
var time = 0
var speedx = speed
var speedy = 0

var rect
var rectX
var rectY

var bgPath
var timer

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}


const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function () {

    const myObj = JSON.parse(this.responseText);

    sizeball = myObj.sizeball
    cololball = myObj.cololball
    bgPath = myObj.image

}
xmlhttp.open("GET", "content.json");
xmlhttp.send();

function play() {

    heigthWork = document.getElementById('item1').offsetHeight;
    widthWork = document.getElementById('item1').offsetWidth;

    var controls = document.h = document.getElementById('controls')
    widthControle = widthWork
    controls.style.minWidth = controls.style.maxWidth = `${widthControle}px`
    controls.style.minHeight = controls.style.maxHeight = `${heightControle}px`

    var anim = document.h = document.getElementById('anim')

    widthAnim = widthWork - 10
    heightAnim = heigthWork - 10 - heightControle

    anim.style.minWidth = anim.style.maxWidth = `${widthAnim}px`
    anim.style.minHeight = anim.style.maxHeight = `${heightAnim}px`
    anim.style.margin = "auto"
    anim.style.border = "5px solid green"
    anim.style.backgroundImage = `url(${bgPath})`
    anim.style.backgroundPosition = "center center"


    rectX = widthAnim / 2
    rectY = heightAnim / 2 + 50
    console.log(rectY);
    console.log(heightAnim);


    rect = document.getElementById("rect")
    rect.style.minWidth = rect.style.maxWidth = rect.style.minHeight = rect.style.maxHeight = `${sizeball}px`
    rect.style.position = "fixed"

    rect.style.left = `${rectX}px`
    rect.style.top = `${rectY}px`
    rect.style.backgroundColor = cololball
    anim.append(rect)

    localStorage.clear()
    document.getElementById('controls').hidden = false;
    document.getElementById('musor').hidden = true;
    document.getElementById('text').textContent = 'Анімацію відкрили'
    time = Date.now()
    playtime = 'Анімацію відкрили'
    localStorage.setItem(keyname, playtime)
    keyname++

}

function reloadRect() {

    rectX = widthAnim / 2
    rectY = heightAnim / 2 + 50
    rect.style.left = `${rectX}px`
    rect.style.top = `${rectY}px`
}


function startt() {
    timer = setInterval(function () {

        if ((rectX - 5) >= widthAnim) {
            stopp()
            openReload()
        }
        if ((rectX - sizeball) <= 0) {
            stopp()
            openReload()
        }
        if ((rectY) >= heightAnim + 60) {
            stopp()
            openReload()
        }
        if ((rectY) <= 55) {
            stopp()
            openReload()
        }

        var s = random(0, 1000)
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

        rectY += speedy
        rect.style.top = `${rectY}px`

        rectX += speedx
        rect.style.left = `${rectX}px`


    }, 1);
}

function stopp() {
    clearInterval(timer)
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

function openReload() {
    document.getElementById('stop').style = 'display:none'
    document.getElementById('reload').style = 'display:'
    document.getElementById('text').textContent = 'Квадрат врізався в стінку'

    reloadtime = 'Квадрат врізався в стінку: ' + (Date.now() - time) / 1000
    localStorage.setItem(keyname, reloadtime)
    keyname++
}

function hide() {
    document.getElementById('controls').hidden = true;
    document.getElementById('anim').hidden = true;
    document.getElementById('musor').hidden = false;
    stopp()
    reloadRect()
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

$(window).unload(function () {
    localStorage.clear();
});