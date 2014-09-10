var		angkot_speed = 0;
var 	posisi_x_tokai;
var 	posisi_y_tokai;
//window.screen.availHeight

var 	layar_game 					= new Object();
		layar_game.x 				= screen.width; //window.screen.availWidth- 50 ;
		layar_game.y 				= screen.height; //window.screen.availWidth- 50 ;
		
		layar_game.roket_altitude 	= 800;
		layar_game.roket_speed 		= 2;
		layar_game.jumlah_ayam 		= 15;
		layar_game.score			= 0;
		layar_game.tokai_speed		= 3;
		layar_game.tokai_y_move		= 0;
		layar_game.tokai_speed		= 8;
		
var 	peluncur					= new Object();
		peluncur.posisi_x			= 0;
		peluncur.posisi_y			= 0;
		peluncur.posisi_ammo		= 0;
		peluncur.ammo				= 20;
		peluncur.flag_shoot			= false;
		peluncur.pump_times			= 0;
		peluncur.power				= function(){ return 0;};
		peluncur.type				= 0;
		
var 	game_env = {};
		game_env.keypress = new Array();
		game_env.keyboard_listener;

var 	suara = {};
		suara.kokang 		= 	new Audio("snd/kokang.wav");
		suara.kena 			= 	new Audio("snd/kena.wav");
		suara.ayam 			=	new Audio("snd/ayam.wav");
		suara.ledak 		=	new Audio("snd/ledak.wav");
		suara.jet 			=	new Audio("snd/jet.wav");
		suara.kucing 		=	new Audio("snd/kucing.wav");
		suara.music 		=	new Audio("snd/music.wav");
		suara.pistol 		=	new Audio("snd/mg.wav");
		suara.mobil 		=	new Audio("snd/car.wav");
		//suara.mobil.loop	= 	true;
		suara.music.loop 	= 	true;
		
		
		
var		gambar 			= function(){};
		gambar.tokai 	= "img/tokai.png";
		gambar.ayam 	= "img/cik.png";
		gambar.kucing 	= "img/kucing.png";
		gambar.roket 	= "img/roket.png";
		gambar.angkot 	= "img/angkot.png";
		gambar.istana 	= "img/istana.png";
		gambar.peluru 	= "img/peluru.png";
		gambar.mg 		= "img/mg.png";

var flag_randomize =0;
var flag_ayam_jalan = 1;
var flag_drop_tokai = false
function setPicture(id,gambar_sprite)
			{ 
											
				$('#istana_ayam').css({	'visibility':'hidden'
									/*'width':'100',
									'height':'100',
									'background':'url('+gambar_sprite+')', 
									'background-repeat':'no-repeat', 
									'background-position':'center',
									'position':'absolute',
									'z-index':'100',
									'top':'0'*/	
							});
													
			};
		 	
	
var 	KEY = { LEFT:37,
				UP:38,
				RIGHT:39,
				W:87,
				S:83, 
				D:68};

var  posisi_x_peluru=0;

var  touch_left_interval=0;
var  touch_right_interval=0;

var y_move=0;
var x_move =0;
var x_peluncur=740;
var y_peluncur=0;
var flag_shoot = false;
var pump = 0;
var ammo = 20;
var chick =5;
var chick_x_move = 0;
var posisi_hit_point_ayam;
var bullet_move=0;
var chicken_move =0;

function move_left()
	{
		if(x_peluncur < layar_game.x)
				{
					x_move+=5;
						$('#rifle').css({'right':700+x_move});
						$('#senapan_mesin').css({'right':670+x_move});
						if(!flag_shoot)
							{
								$('#ball').css({'right':740+x_move});
							};	
					posisi_launcher();
				};
	};

function move_right()
	{
		if(x_peluncur-30 > 0)
				{
					x_move-=5;
					$('#rifle').css({'right':700+x_move});
					$('#senapan_mesin').css({'right':670+x_move});
					if(!flag_shoot)
						{
							$('#ball').css({'right':740+x_move});
						};	
					posisi_launcher();
			};
	};

function touch_left()
	{
		touch_left_interval = setInterval('move_left()',30);
	};

function touch_right()
	{
		touch_right_interval = setInterval('move_right()',30);
	};


function setAngkotSpeed()
	{
		
		flag_randomize ++;
		if(flag_randomize>50)
		{
		angkot_speed = Math.floor((Math.random()*10)+1);
		flag_randomize = 0;
		if (angkot_speed < 6 )
			{
				
			};
		};
	};
	


function dropTokai()
	{
		
		//cek posisi kucing
		
		//if(chick_x_move > x_peluncur && chick_x_move < x_peluncur + 10 )
		
		if(flag_randomize)
		{	
			if(!flag_drop_tokai)
			{
				posisi_x_tokai = chick_x_move;
				
					$(".tokai").css({	'right':chick_x_move,
										'visibility':'visible' 
									});
					
					flag_drop_tokai = true;
					
					
			};
		};
		
		if (flag_drop_tokai)
			{
				
				layar_game.tokai_y_move+=layar_game.tokai_speed/4;
				//alert(layar_game.tokai_speed);
				
				posisi_y_tokai = 450+layar_game.tokai_y_move;
				
				$(".tokai").css({'top':posisi_y_tokai});
				
				//cek colide
			
				if((posisi_y_tokai-450) > 380 && ((posisi_x_tokai > x_peluncur-50)&& (posisi_x_tokai < x_peluncur+25)))
				{
					
					suara.kena.play(); 	
				};


				
				if(layar_game.tokai_y_move > 400)
					{
						flag_drop_tokai = false;
						layar_game.tokai_y_move = 0;
						posisi_x_tokai= 0;
						posisi_y_tokai= 0;
				};
			
			};
			
	};
	

function restart_game()
	{
			peluncur.ammo				= 20;
			ubahkonten('ammo_left',peluncur.ammo);
			layar_game.jumlah_ayam 		= 15;
			ubahkonten('chicken_left',layar_game.jumlah_ayam);
			layar_game.score			= 0;
			ubahkonten('score_point',layar_game.score);
			reset_posisi_ayam();
			setTimeout("chicken_move_thread()",1000);
			$('#game_over').css({'visibility':'hidden'});
			$('#pompa').css({'left':'400px'});
			flag_ayam_jalan = true;
						
	};
	
	
function pump_rifle()
	{
		if(!flag_shoot)
			{
				if (pump < 4)
					{
						pump++;
						ubahkonten('pompa_senapan',pump);
						suara.kokang.play();	
					};
			
			};
	};


function chicken_falling()
		{
						
		};
				
function reload_rocket()
			{
				
				$('#ball').css({'bottom':30});
				y_move = 0;
				flag_shoot = false;
				$('#ball').css({'right':740+x_move});
				bullet_move=0;
				flag_shoot = false;
				pump = 0;
				ubahkonten('pompa_senapan',pump);
				setTimeout("$('#explode').css({'visibility':'hidden'});",500);
				if(peluncur.ammo>0)
					{
						peluncur.ammo = peluncur.ammo - 1;
						ubahkonten('ammo_left',peluncur.ammo);
					};
			};
			
function launch_rocket()
			{		
			
				if(peluncur.ammo>0)
					{
							flag_shoot = true;
							y_move+=layar_game.roket_speed;
							$('#ball').css({'bottom':30 + y_move });
							checkColide();
							if(y_move >= layar_game.roket_altitude)
								{	
									reload_rocket();
								};
					}
					else {
							flag_shoot = true;
							reload_rocket();
							//alert ("Abis Pelor !!!");
						};	
						
					if (peluncur.ammo==0)
						{
							$('#game_over').css({'visibility':'visible'});
							
							flag_ayam_jalan=false;
						};
			
			
			};	

function posisi_launcher()
	{
		x_peluncur = x_move+700
		ubahkonten('posisi_peluncur',x_peluncur);
	};
				
function checkColide()
			{
				var posisi_y_peluru = y_move+60;						
				
				var koordinat = "("+ posisi_y_peluru + "," + (x_peluncur+40) +")";
				
				ubahkonten('posisi_roket',koordinat);
			// ayam cek
				
				if (posisi_y_peluru >= 350 && posisi_y_peluru <= 480 )
					{ 	
						//alert (posisi_x_peluru+55);
						//alert (chick_x_move);
						
						
						if ((posisi_x_peluru >= chick_x_move)&&((posisi_x_peluru )<=(chick_x_move+30)))
							{
								suara.ayam.play();
								
								suara.ledak.play();
								
								layar_game.score++;
								
								ubahkonten('score_point',layar_game.score);
							
								$('#explode').css({'visibility':'visible','right':posisi_x_peluru});
								layar_game.jumlah_ayam--;
								ubahkonten('chicken_left',layar_game.jumlah_ayam);
							///	clearInterval(chicken_move);
								
								//ini posisi animasi ayam jatoh
								//berentiin animasi ayam
								//flag_ayam_jalan = 0;
								
										   reset_posisi_ayam()
										reload_rocket();
								
							
							};
					
					};
			
			};



function reset_posisi_ayam()
	{ 			
				chick_x_move =0
				$('#ayam').css({'right':chick_x_move});
				$('#angkot').css({'right':chick_x_move});
	};
	
function chick_run()
			{
				chick_x_move +=angkot_speed/4;
				$('#ayam').css({'right':chick_x_move});
				$('#angkot').css({'right':chick_x_move});
				
				dropTokai();
				
				if (chick_x_move > layar_game.x)
					{ 	//ayam lolos
						//skor berkurang
						suara.kucing.play();
						//layar_game.score--;
						ubahkonten('score_point',layar_game.score);
						chick_x_move =0
						layar_game.jumlah_ayam--;
						ubahkonten('chicken_left',layar_game.jumlah_ayam);
						if(layar_game.jumlah_ayam==0)
						{	
							$('#game_over').css({'visibility':'visible'});
							suara.kucing.play();
							
						};
					};
			};
			
			
//pergerakan sprite			



//PELURU
function shoot()
	{	if(pump ==4)
		{
			if(bullet_move==0)
			{
			   	posisi_x_peluru = x_peluncur+55;
			};
			suara.jet.play();
            flag_shoot = true;	
		}
		else
		{			
		};
	};
	
$(
	function game_init()
		{	
			//alert (suara.music.canplay);
			suara.music.play();
			
			suara.music.volume =0.25;
			suara.kucing.volume =0.2;
			
			ubahkonten('ammo_left',ammo);
			
			ubahkonten('chicken_left',layar_game.jumlah_ayam);
			
			//start game loop
			game_env.loop = setInterval("game_loop()",10);
			
			//start keyboard detect 
			$(document).keydown(
								function(event) {game_env.keypress[event.which]=true; }
								);
			
			$(document).keyup(
								function(event) {game_env.keypress[event.which]=false;}
								);
			
		}
);


//

function game_loop()
{
	if(flag_ayam_jalan)
	{
		chick_run();
		setAngkotSpeed();
	};
	
	if(flag_shoot)
		{
			launch_rocket();
		};
	
	
	if(game_env.keypress[KEY.RIGHT])
		{
				move_right()
		};

	if(game_env.keypress[KEY.LEFT])
		{
				move_left();
		};

	if(game_env.keypress[KEY.UP])
		{
				shoot();
		};

	if(game_env.keypress[KEY.S])
		{
			pump_rifle();
		};
	if(game_env.keypress[KEY.D])
		{
				
			suara.pistol.play();
		};

};

// JavaScript Document