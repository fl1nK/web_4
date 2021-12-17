<!DOCTYPE HTML>
<html>

<head>
   <link rel="stylesheet" type="text/css" href="test_css.css">
</head>

<body>
   <div class="grid-container">

      <div class="item1" id="item1">

         <div id="musor">
            <p>ТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекст</p>
         </div>

         <div class="controls" id="controls" hidden=true>
            <form class="myForm" name="FormControl">
               <label id="text">ghbdtdsnfsdaggdsdgds</label>
               <input type="button" id="reload" value="Reload" onclick="reloadRect(), reloadPress()" style="display:none">
               <input type="button" id="stop" value="Stop" onclick="stopp(),stopPress()" style="display:none">
               <input type="button" id="start" value="Start" onclick="startt(), startPress()">
               <input type="button" value="Close" onclick="hide(),  writels()">
            </form>
         </div>

         <div id="anim">
            <div id="rect"></div>
         </div>

      </div>
      <div class="item2">2</div>
      <div class="item3">3</div>
      <div class="item4">
         <form name="myForm" id="form">
            <input type="button" value="Play" onclick="play()">
         </form>
         <div id="allTextInfo">Текст инфа:<br></div>
      </div>
      <div class="item5"><input type="button" value="Canvas" onclick="location.href='test2.php'"></div>
      <div class="item6">6</div>
   </div>
</body>
<script src="script1.js"></script>

</html>