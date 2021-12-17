<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" type="text/css" href="test_css.css">
   <title>Document</title>
</head>

<body>

   <div class="grid-container">
      <div class="item1" id="item1">
         <div id="musor">
            <p>ТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекст</p>
         </div>
         <div class="controls" id="controls" hidden=true>
            <form class="myForm" name="FormControl">
               <label id="text">ghbdtdsnfsdaggdsdgds</label>
               <input type="button" id="reload" value="Reload" onclick="reloadd(), reloadPress()" style="display:none">
               <input type="button" id="stop" value="Stop" onclick="stopp(),stopPress()" style="display:none">
               <input type="button" id="start" value="Start" onclick="startt(), startPress()">
               <input type="button" value="Close" onclick="hide(),  writels()">
            </form>
         </div><canvas class="myCanvas" id="myCanvas" hidden=true style="border:5px solid #00ff00"></canvas>
      </div>
      <div class="item2">2</div>
      <div class="item3">3</div>
      <div class="item4">
         <form name="myForm" id="form">
            <input type="button" value="Play" onclick="play()">
         </form>
         <div id="allTextInfo">Текст инфа:<br></div>
      </div>
      <div class="item5" id="item5">
         <input type="button" value="НЕ Canvas" onclick="location.href='test.php'">
      </div>
      <div class="item6">6</div>
   </div>

</body>

<script src="script2.js"></script>

</html>