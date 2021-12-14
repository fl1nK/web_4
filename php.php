<?php

$width = $_GET["width"];
$height = $_GET["height"];
$speed = $_GET["speed"];
$sizeball = $_GET["sizeball"];
$cololball = $_GET["cololball"];

echo ($width);

$txt = '{';
$txt = $txt . '"width":' . $width;
$txt = $txt . ',"height":' . $height;
$txt = $txt . ',"speed":' . $speed;
$txt = $txt . ',"sizeball":' . $sizeball;
$txt = $txt . ',"cololball":"' . $cololball . '"';
$txt =  $txt . '}';
$myfile = fopen("content.json", "w");
fwrite($myfile, $txt);
