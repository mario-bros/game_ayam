<!doctype html>
<html>
<head>
<title>chicken sniper</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>

<link href="css/game.css" rel="stylesheet" type="text/css" />
	<script language="JavaScript" type="text/JavaScript" src="script/jquery-1.9.1.js"></script>
	<script language="JavaScript" type="text/JavaScript" src="script/myjs.js"></script>
	<script language="JavaScript" type="text/JavaScript" src="script/game_script.js"></script>
<body>
 <div id="judul" align="center">
GAME TEMBAK SAWUNG NAEK ANGKOT SI BRON
<br>(tekan S untuk load, panah kiri kanan untuk gerak, panah atas untuk menembak,D senapan mesin) 
</div>

<div id="scoring">
	<h1>Score :<span id="score_point">0</span></h1>
	Chicken Left  :<h3><span id="chicken_left">15</span></h3>
	</br> Ammo Left :<h3><span id="ammo_left">20</span></h3>
	</br> Machine Gun Ammo :<h3><span id="mg_ammo_left">20</span></h3>
	</br> Pompa Senapan :<h3><span id="pompa_senapan">0</span></h3>
	</br> Posisi Roket :<span id="posisi_roket">0</span>
	</br> Posisi peluncur :<span id="posisi_peluncur">0</span>
	</br> Posisi Ayam :<span id="posisi_ayam">0</span>
	</br> Bom :<span id="bom_ayam">0</span>
	<div class="tombol" align="center"  onclick="restart_game();">
			Restart
	</div>
</div>

<div id='mycanvas'>

<img src="img/bgr.jpg" width="100%" height="100%">

<div id="rifle">
	<img src="img/kucing.png" width="50" height="60">
</div>
<div id="ball">
	<img src="img/roket.png" width="30" height="60">
</div>
<div id="ayam">
	<img src="img/cik.png" width="50" height="50">
</div>
<div id="angkot">
	<img src="img/angkot.png" width="100" height="50">
</div>
<div id="explode">
	<img src="img/explosion.gif" width="100" height="100">
</div>

<div id="senapan_mesin">
	<img src="img/mg.png" width="40" height="80">
	
</div>


<div class='tokai'>
<img src="img/tokai.png" width="20" height="20">
</div>


<div id="game_over">

	-------GAME OVER (abis pelor / ayam dah abis)--------
	<br/> Tekan Restart
</div>
</div>
</body>
</html>
