<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Sprites</title>

<style type="text/css">
.hi {
    width: 50px;
    height: 72px;
    background-image: url("http://files.simurai.com/misc/sprite.png");
    -webkit-animation: play .8s steps(10) infinite;
       -moz-animation: play .8s steps(10) infinite;
        -ms-animation: play .8s steps(10) infinite;
         -o-animation: play .8s steps(10) infinite;
            animation: play .8s steps(10) infinite;
}

@-webkit-keyframes play {
   from { background-position:    0px; }
     to { background-position: -500px; }
}

@-moz-keyframes play {
   from { background-position:    0px; }
     to { background-position: -500px; }
}

@-ms-keyframes play {
   from { background-position:    0px; }
     to { background-position: -500px; }
}

@-o-keyframes play {
   from { background-position:    0px; }
     to { background-position: -500px; }
}

@keyframes play {
   from { background-position:    0px; }
     to { background-position: -500px; }
}

</style>
</head>

<body>
<div class="hi"></div>
</body>
</html>
