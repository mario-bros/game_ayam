
// JavaScript Document
//VARIABEL VARIABEL
//inisiasi objek
//INI FUNGSI UNTUK GRID LIST

function populate(tabel_navigasi)
{
		tabel_navigasi.parsing = 	tabel_navigasi.file_loc+
									"jumlah_data_tampil="+tabel_navigasi.jumlah_data_tampil+
									"&dari_index="+tabel_navigasi.dari_index+
									tabel_navigasi.parameter();
		call_listener_get(tabel_navigasi.parsing,tabel_navigasi.posisi_letak);
};

function navigasi(type_nav,tabel_navigasi)
{
	// type navigasi adalah : first,prev,next,last
	// tabel naviasi adalah tabel dengan struktur
	/*
	var tabel_navigasi = 	{	'file_loc':'lokasi tabel diakhiri tanda ?',
						  	 	'jumlah_data':'0', //jumlah data dalam tabel
						   		'jumlah_data_tampil':'5',// jumlah data tabel inisiasi = 5
						   		'dari_index':'0',//dari
						   		'ke_index':'5',//ke
								'posisi_letak':'tabel_populasi'//posisi letak tabel di span / div
							    'parameter':'' //parameter yg di parsing
							};
	*/
	
		if(type_nav=='first')
		{
				dari_index_populasi =0;
				//alert(dari_index_populasi);
				tabel_navigasi.dari_index=0;
		}
		else if(type_nav =='prev')
		{
			
			tabel_navigasi.dari_index = parseInt(tabel_navigasi.dari_index)-parseInt(tabel_navigasi.jumlah_data_tampil);
			
			if(tabel_navigasi.dari_index<=0)
			{
				tabel_navigasi.dari_index=0;
			};
			
		}
		else if (type_nav =='next')
		{
				
				tabel_navigasi.dari_index = parseInt(tabel_navigasi.dari_index)+parseInt(tabel_navigasi.jumlah_data_tampil);
				sisa_tabel=parseInt(tabel_navigasi.jumlah_data) - parseInt(tabel_navigasi.dari_index); 
				
				if (sisa_tabel <=0)
				{
					tabel_navigasi.dari_index=parseInt(tabel_navigasi.dari_index)-parseInt(tabel_navigasi.jumlah_data_tampil);
				};
				
		}
		else if (type_nav =='last')
		{
				tabel_navigasi.dari_index = tabel_navigasi.jumlah_data -1;
		};
		
		 populate(tabel_navigasi);
		
};

//--------------END OF GRID LIST FUNCTION-----------------
function tutup_facebox()
{
    $(document).trigger('close.facebox');
};

function readonly(id,status)
{
	document.getElementById(id).readOnly=status;
};

function ambilWaktu()
{
	var d = new Date();
	var jam =  leading_zero(d.getHours(),2);
	var menit =leading_zero(d.getMinutes(),2);
	var detik = leading_zero(d.getSeconds(),2)
 return jam+":"+menit+":"+detik;	
};

function getLabel(id)
{
//mengembalikan isi label dari listmenu (bukan valuenya)
var isilabel = document.getElementById(id)[document.getElementById(id).selectedIndex].innerHTML;
return isilabel;
}


function jumlah_hari(date1,date2)
{
// First we split the values to arrays date1[0] is the year, [1] the month and [2] the day
date1 = date1.split('-');
date2 = date2.split('-');

// Now we convert the array to a Date object, which has several helpful methods
date1 = new Date(date1[0], date1[1], date1[2]);
date2 = new Date(date2[0], date2[1], date2[2]);

// We use the getTime() method and get the unixtime (in milliseconds, but we want seconds, therefore we divide it through 1000)
date1_unixtime = parseInt(date1.getTime() / 1000);
date2_unixtime = parseInt(date2.getTime() / 1000);

// This is the calculated difference in seconds
var timeDifference = date2_unixtime - date1_unixtime;

// in Hours
var timeDifferenceInHours = timeDifference / 60 / 60;

// and finaly, in days :)
var timeDifferenceInDays = timeDifferenceInHours  / 24;

return timeDifferenceInDays;

};



function leading_zero(num,places)
{
	
	var zero = places - num.toString().length +1;
	return Array(+(zero>0 && zero)).join("0")+num;
};

function pembulatan(num, dec) {
	var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
	return result;
}



function left(str, n){
	if (n <= 0)
	    return "";
	else if (n > String(str).length)
	    return str;
	else
	    return String(str).substring(0,n);
}
function right(str, n){
    if (n <= 0)
       return "";
    else if (n > String(str).length)
       return str;
    else {
       var iLen = String(str).length;
       return String(str).substring(iLen, iLen - n);
    }
}
function len(str)
{
		return String(str).length;
};

function ambilkonten(id)
{
	
	
	
		try{
			var isinya	= document.getElementById(id).innerHTML; 
			}
			catch(err)
			{
				//alert ("Kesalahan pada fungsi getValue\nID tidak terdefinisi: "+id);
			};
			
	return isinya;
};



function parsedate(id)
	{
			var tanggal = new Date();
			var year 	= tanggal.getFullYear ();
			var month 	= tanggal.getMonth()+1;
			var date	= tanggal.getDate();
			
			
			month = leading_zero(month,2);
			date = leading_zero(date,2);
			
			fulldate = year+'-'+month+'-'+ date;		
			setValue(id,fulldate);
	};

function tanggal_sekarang()
{
			var tanggal = new Date();
			var year 	= tanggal.getFullYear ();
			var month 	= tanggal.getMonth()+1;
			var date	= tanggal.getDate();
			
			
			month = leading_zero(month,2);
			date = leading_zero(date,2);
			
			fulldate = year+'-'+month+'-'+ date;	
		return fulldate;
};

function setCurrency(id_field)

{
	setValue(id_field, formatCurrency(getValue(id_field)));
};

function parse_if_number(id_source,id_dest)
{
		var num = getValue(id_source);
		
			 if (isNaN(num))
				{
					
					num = num.replace('.','');
					num = num.replace('\,','.');
					setValue(id_dest,getValue(id_source));
					}
				else
				{
					setValue(id_dest,getValue(id_source));
					
				};
};

function formatCurrency(num) 
{
		var num_awal = num;
		num = num.toString().replace(/|\./g,'');
		if(!isNaN(num))
		{
		//num = "0";
		sign = (num == (num = Math.abs(num)));
		num = Math.floor(num*100+0.50000000001);
		cents = num%100;
		num = Math.floor(num/100).toString();
		if(cents<10)
				cents = "0" + cents;
		for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
				num = num.substring(0,num.length-(4*i+3))+'.'+
				num.substring(num.length-(4*i+3));
		return (((sign)?'':'-') + num + ',' + cents);
		}
		else
		{
			return num_awal;
		};
};

function enter_key_pressed(id_focus,myfield,e)
{

	if (window.event)
	
			{
   				key = window.event.keyCode;
			}
		else if (e)
				{
				   key = e.which;
				}
		else
   				{	
   					return true;
				};
				
		keychar = String.fromCharCode(key);
		if ((key==13))
   
   			{
	   				setFocus(id_focus);
					return true;
   			};
};

function phoneonly(myfield, e, dec)
{
		var key;
		var keychar;

		if (window.event)
				{
   					key = window.event.keyCode;
				}
		else if (e)
				{
				   key = e.which;
				}
		else
   				{	
   					return true;
				};
		
		keychar = String.fromCharCode(key);

// karakter kontrol
		if ((key==null) || (key==0) || (key==8) || 
    		(key==9) || (key==13) || (key==27) )
   
   			{
	   				return true;
   			}
// Angka
		else if ((("+()-0123456789").indexOf(keychar) > -1))
   			{
   					return true;
   			}
// Desimal
		else if (dec && (keychar == ","))
   			{
   				myfield.form.elements[dec].focus();
   				return false;
  			 }
		else
			{
   				return false;
			};
};




function numbersonly(myfield, e, dec)
{
		var key;
		var keychar;

		if (window.event)
				{
   					key = window.event.keyCode;
				}
		else if (e)
				{
				   key = e.which;
				}
		else
   				{	
   					return true;
				};
		
		keychar = String.fromCharCode(key);

// karakter kontrol
		if ((key==null) || (key==0) || (key==8) || 
    		(key==9) || (key==13) || (key==27) )
   
   			{
	   				return true;
   			}
// Angka
		else if ((("-0123456789.").indexOf(keychar) > -1))
   			{
   					return true;
   			}
// Desimal
		else if (dec && (keychar == ","))
   			{
   				myfield.form.elements[dec].focus();
   				return false;
  			 }
		else
			{
   				return false;
			};
};


function disableElement(id)
	{
			document.getElementById(id).disabled = true;
		//	alert ("hai");
	};

function enableElement(id)
	{
			document.getElementById(id).enabled = true;
		//	alert ("hai");
	};

function rounding(angka)
		{
			return Math.round(angka*Math.pow(10,2))/Math.pow(10,2);
		};

//FUNGSI FUNGSI
//Untuk membentuk parameter terhadap field di form
// 2 array yg digunakan, arr I nama fieldnya arr II isi fieldnya
//metode yg digunakan adalah format post
//DEPRECATED !!!!!!

function param_construct(fieldArr,valArr)
{
	var l_arr= fieldArr.length;
	var itr = 0;
	var string_param="";
	for (itr==0;itr<l_arr;itr++)
			{
				string_param = string_param + fieldArr[itr]+"="+valArr[itr];
				if (itr != l_arr-1)
					{
						string_param = string_param + "&";
					};
			};

return string_param;
};

//fungsi untuk membuat parameter post
//button dan radio button yg false di exclude
function createFormParam(form_name,debug)
{
var x=document.getElementById(form_name);
var string = '';
var elemen ='';
var struktur_form = new Array();
var pola=0;
var panjang_array;
var jumlah_komponen=0;
try
{
	jumlah_komponen = x.length;
}
catch(err)
{//alert (jumlah_komponen);
	//	jumlah_komponen = 0;
		
};


for (var i=0;i < jumlah_komponen;i++)
  {
		var jenis = x.elements[i].type;
		
		if (( jenis == 'radio') && (x.elements[i].checked==true))
		{
			elemen =   x.elements[i].name +"=" + x.elements[i].value;
			string = string + elemen + "&";
			struktur_form[i] =  x.elements[i].name;
		};
		
		if ((jenis != 'radio')&&(jenis !='button')&&(jenis !='checkbox')&&(jenis!='fieldset')&&(jenis!='reset'))
		{
			elemen = 	x.elements[i].name + "=" + x.elements[i].value;
			string = string + elemen + "&";
			struktur_form[i] =  x.elements[i].name;
		};
		
		if ((jenis=='checkbox') && (x.elements[i].checked==true) )
		{
			elemen =   x.elements[i].name +"=" + x.elements[i].value;
			string = string + elemen + "&";
			struktur_form[i] =  x.elements[i].name;
		}
		else if
		((jenis=='checkbox') && (x.elements[i].checked==false) )
		{
			elemen =   x.elements[i].name +"=" + '';
			string = string + elemen + "&";
			struktur_form[i] =  x.elements[i].name;
		};
  };
  
  if (debug=='Y')
  {  
   panjang_array = struktur_form.length; 
  	 document.write('<code>');
     document.write ('\< ?php');
	 document.write('<br />');
	 
	 document.write('session_start();');
	 document.write('<br />');
	 document.write('error_reporting(0);');
	 document.write('<br />');
	 document.write('include \"../../connection/conDb.php\";');
	 document.write('<br />');
	 
	 for(x in  struktur_form)
	  {
		  	document.write("$"+struktur_form[x]+ "=$_POST['"+struktur_form[x]+"'];");
			document.write('<br />');
	  };
	  document.write('<br />');
	  document.write ('$koneksi 		= new mySqlConn();');
	  document.write('<br />');
	  document.write ('$koneksi->setConn(HOST,USER,PASSWORD,DATABASE);');
	  document.write('<br />');
	  document.write ('$koneksi->connectMySql();');
	  document.write('<br />');
	  document.write('<br />');
  	  document.write("$sql_val = \"select * from tm_insert where key_value=\'\".$key_value.\"';\";");
	  document.write('<br />');
	  document.write('$koneksi->runQry($sql_val);');
	  document.write('<br />');
	  document.write('$row = $koneksi->fetchRow();');
      document.write('<br />');
	  document.write('<br />');
	  document.write('if ($koneksi->rowNum() == 0) // add mode');
	  document.write('<br />');
	  document.write('{');		
	  document.write('<br />');
	  document.write ('$sql_val = \"insert into tabel_insert(');
	  document.write('<br />');
	 for(x in  struktur_form)
	  { 
	  	
		if (x < (panjang_array-1))
		{
		  	document.write(struktur_form[x]+",");
		}
		else
		{
				document.write(struktur_form[x]+")");
		};
		if (pola == 1)
			{
				document.write('<br />');
				pola = 0;
			};
		pola= pola+1;
	  };	
	  document.write (' values (\'\"');
	  pola=0;
	  document.write('<br />');
	   for(x in  struktur_form)
	  { 
	  
		if (x < (panjang_array-1))
		{
			document.write(".$"+struktur_form[x]+'.'+"\"\',\'\"");
			document.write('<br />');
	  }
		else
		{
			document.write(".$"+struktur_form[x]+'.'+"\"\')\;\"\;");
			document.write('<br />');	
		};
	  
	  };		
	  pola= pola+1;
	//  document.write('<br />');
	
  document.write('}'); 
  document.write('<br />');
  document.write ('elseif($koneksi->rowNum() > 0)');
  document.write('<br />');
  document.write('{');
  document.write('<br />'); 
  document.write ('$sql_val = \"update tabel_insert set \".');
  document.write('<br />');
  
	   for(x in  struktur_form)
	  { 
	  
		if (x < (panjang_array-1))
		{
			document.write("\""+struktur_form[x]+'=\'\".$'+struktur_form[x]+".\"\',\".");
			document.write('<br />');
	  }
		else
		{
			document.write("\""+struktur_form[x]+'=\'\".$'+struktur_form[x]+".\"\' where key_value =\'\". $key_value.\"\'\;\"\;");
			document.write('<br />');	
		};
	  
	  };		

  document.write('};');
  document.write('<br />');
  document.write('$koneksi->runQry($sql_val);');
  document.write('<br />');
  document.write('$koneksi->closeConn();');
  document.write('<br />');
  document.write ('\?\>');
  document.write('<br />');
  document.write ('------------DDL TABEL--------------');	
  document.write('<br />');  
  document.write ('CREATE TABLE  `tabel_insert`');
  document.write('<br />'); 
  document.write ('\(');
  document.write('<br />');
//------------- for(x in  struktur_form)
	   for(x in  struktur_form)
	  { 
			if (x < (panjang_array-1))
		{
			document.write(struktur_form[x]+' varchar(45) NOT NULL DEFAULT \'-\',');
			document.write('<br />');
		}
		else
		{
			document.write(struktur_form[x]+' varchar(45) NOT NULL, PRIMARY KEY ('+struktur_form[0]+')');
			document.write('<br />');
		};
	};
	
  document.write ('\)'); 
  document.write('<br />');
  document.write('ENGINE=InnoDB  DEFAULT CHARSET=latin1;');
  document.write('<br />');  
  document.write('</code>');
  document.write('<br />');  
  document.write('//-------------------RET DML SCRIPT----------');
  document.write('<br />'); 
  document.write ('\< ?php');
  document.write('<br />');
  document.write('session_start();');
  document.write('<br />');
  document.write('error_reporting(0);');
  document.write('<br />');
  document.write('include \"../../connection/conDb.php\";');
  document.write('<br />');
  document.write('<br />');
  document.write ('$koneksi 		= new mySqlConn();'); 
  document.write('<br />');
  document.write ('$koneksi->setConn(HOST,USER,PASSWORD,DATABASE);');
  document.write('<br />'); 
  document.write ('$koneksi->connectMySql();');
  document.write('<br />');
  document.write('<br />');
  
  
  document.write('$sql_val = 	\"SELECT  ');

for(x in  struktur_form)
	  { 
			if (x < (panjang_array-1))
				{
					document.write(struktur_form[x]+",");
					document.write('<br />');
				}  
			else
				{
					document.write(struktur_form[x] + " where key_value=$key_value\";");
					document.write('<br />');
				};
	};
  document.write('<br />');
  document.write('$koneksi->runQry($sql_val);');
  document.write('<br />');
  document.write('$row = $koneksi->fetchRow();');
  document.write('<br />');
  document.write('//----------------RET DML SCRIPT II----------');
  document.write('<br />'); 

		for(x in  struktur_form)
	  			{ 
					document.write('$'+struktur_form[x]+"= $row["+x+"];");
					document.write('<br />');		
				};
		 document.write ('\?\>');
  		 document.write('<br />');		
 		
		document.write('\< script language="javascript\" \>');
 		document.write('<br />');	

		document.write('//----------------RET DML SCRIPT III (javascript section)----------');
 		document.write('<br />'); 



//setValue('id_main_dok','<?php echo $id;?>');
        for(x in  struktur_form)
	  			{ 
					document.write("setValue(\'"+struktur_form[x]+"','< \?php echo $"+struktur_form[x]+"; \?>' );" );
					document.write('<br />');		
				};
	document.write(' \< /script \>');
 	document.write('<br />'); 
	};
  
  string = string.substring(0,(string.length-1));
  if (debug =='Y')
  {
	  alert (string);
  };
 
  return string;
};



// fungsi komplemen untuk 
//menjalankan javascript line
//pada objek html yang dipanggil pada xhtmlrequest

function setAndExecute(divId, innerHTML)  
 {  
    var div = document.getElementById(divId);  
    div.innerHTML = innerHTML;  
    var x = div.getElementsByTagName("script");   
    for(var i=0;i<x.length;i++)  
    {  
        eval(x[i].text);  
    }  
}  



//membersihkan isi pada input / id
function setClear(id)
{
	document.getElementById(id).value ='';	
};

function setValue(id,isi)
{
try{
	document.getElementById(id).value = isi;
}
catch (err)
{
//	alert (id+":"+isi);
//document.getElementById(id).value = '-';
};
};

//menset focus
function setFocus(id)
{
	setClear(id);
	document.getElementById(id).focus();	
};


//Fungsi untuk melakukan clear value pada form, dan mengembalikan focus pada
//indeks array id yg diinginkan
function clearFormContent(id_focus,start_idx)
{
	//menghapus entrian dan kembali ke focus awal
	
};

//custom exit
function exit_()
{
	window.location = "index.php";
};

//cek value angka atau bukan

function getValue(id)
{		
		
			try{
			var nilai = document.getElementById(id).value;
			}
			catch(err)
			{
				//alert ("Kesalahan pada fungsi getValue\nID tidak terdefinisi: "+id);
			};
			
			
			return nilai;
		
};

function isNumber(id)
{
		
		
};

//mengubah isi pada konten div / span
function ubahkonten(id,isi)
{

try{
	document.getElementById(id).innerHTML=isi;
}
catch(err)
{
	//alert('Fungsi ubahkonten\nId Tidak Terdefinisi : '+id);
};

};

//membuat objek
function createObject()

{
	var obj = null;
	if (window.ActiveXObject)
		{	
				obj= new ActiveXObject("Microsoft.XMLHTTP"); 
		}
	else if (window.XMLHttpRequest)
		{
				obj = new XMLHttpRequest();
		};
	if (obj==null)
		{
				document.write("gak bisa");
		};
	return obj;
};

//mengambil sumber modul dengan metode get
function call_listener_get(sumber_data,id_elemen)

{
	//alert(id_elemen);
	var objek = createObject();
	if (objek != null)
	{
		var elemen = document.getElementById(id_elemen);
		objek.open("GET",sumber_data);
		objek.onreadystatechange= function ()
		{
			if (objek.readyState == 4 && objek.status==200)
				{
					elemen.innerHTML=objek.responseText;
					setAndExecute(id_elemen, objek.responseText);
				};
		}
		objek.send(null);
      };
	
};

//mengambil sumber modul dengan metode post 
function call_listener_post(sumber_data,id_elemen,param)

{
	var objek = createObject();
	if (objek != null)
	{
		var elemen = document.getElementById(id_elemen);
		objek.open("POST",sumber_data,true);
		objek.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		objek.send(param);
		objek.onreadystatechange= function ()
		{
			if (objek.readyState == 4 && objek.status==200)
				{
					elemen.innerHTML=objek.responseText;
					setAndExecute(id_elemen, objek.responseText);
				};
		};
		objek.send(null);
      };
	
};


function showBarcode(id_source,id_pos)
		{
			var a = getValue(id_source);
			call_listener_get('showBarcode.php?kode='+a,id_pos);
		};


function showBarcode_val(val,id_pos)
		{
			//alert (val);
			call_listener_get('../showBarcode_sj.php?kode='+val,id_pos);
		};







function terbilang_master(bilangan) {
 
 bilangan    = String(bilangan);
 var angka   = new Array('0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
 var kata    = new Array('','Satu','Dua','Tiga','Empat','Lima','Enam','Tujuh','Delapan','Sembilan');
 var tingkat = new Array('','Ribu','Juta','Milyar','Triliun');
 
 var panjang_bilangan = bilangan.length;
 
 /* pengujian panjang bilangan */
 if (panjang_bilangan > 15) {
   kaLimat = "Diluar Batas";
   return kaLimat;
 }
 
 /* mengambil angka-angka yang ada dalam bilangan, dimasukkan ke dalam array */
 for (i = 1; i <= panjang_bilangan; i++) {
   angka[i] = bilangan.substr(-(i),1);
 }
 
 i = 1;
 j = 0;
 kaLimat = "";
 
 
 /* mulai proses iterasi terhadap array angka */
 while (i <= panjang_bilangan) {
 
   subkaLimat = "";
   kata1 = "";
   kata2 = "";
   kata3 = "";
 
   /* untuk Ratusan */
   if (angka[i+2] != "0") {
     if (angka[i+2] == "1") {
       kata1 = "Seratus";
     } else {
       kata1 = kata[angka[i+2]] + " Ratus";
     }
   }
 
   /* untuk Puluhan atau Belasan */
   if (angka[i+1] != "0") {
     if (angka[i+1] == "1") {
       if (angka[i] == "0") {
         kata2 = "Sepuluh";
       } else if (angka[i] == "1") {
         kata2 = "Sebelas";
       } else {
         kata2 = kata[angka[i]] + " Belas";
       }
     } else {
       kata2 = kata[angka[i+1]] + " Puluh";
     }
   }
 
   /* untuk Satuan */
   if (angka[i] != "0") {
     if (angka[i+1] != "1") {
       kata3 = kata[angka[i]];
     }
   }
 
   /* pengujian angka apakah tidak nol semua, lalu ditambahkan tingkat */
   if ((angka[i] != "0") || (angka[i+1] != "0") || (angka[i+2] != "0")) {
     subkaLimat = kata1+" "+kata2+" "+kata3+" "+tingkat[j]+" ";
   }
 
   /* gabungkan variabe sub kaLimat (untuk Satu blok 3 angka) ke variabel kaLimat */
   kaLimat = subkaLimat + kaLimat;
   i = i + 3;
   j = j + 1;
 
 }
 
 /* mengganti Satu Ribu jadi Seribu jika diperlukan */
 if ((angka[5] == "0") && (angka[6] == "0")) {
   kaLimat = kaLimat.replace("Satu Ribu","Seribu");
 }
 
 return kaLimat;
};



function terbilang(bilangan)

{
	var nilai = bilangan;

	var bulat = Math.floor(nilai);
	var pecahan_1 = nilai - bulat;

	var pecahan = Math.floor((nilai - bulat) * 100) 

 // alert(bulat+"  " + pecahan_1);

//cek ada pecahan atau tidak
// jika tidak
//jika ya
//





if (pecahan == 0)
{
	var terbilang_angka = terbilang_master(bulat);
}

else
{
	var terbilang_angka = terbilang_master(bulat)+" - " + terbilang_master(pecahan) +" Sen";
};

return terbilang_angka;	
};



//------------------------------------------FUNGSI-FUNGSI LISTBOX
// bentuk variabel selectbox adalah : document.nama_form.nama_list
//----------http://www.plus2net.com/javascript_tutorial/----------
function addOption(selectbox,text,value )
{
	var optn = document.createElement("OPTION");
	optn.text = text;
	optn.value = value;
	selectbox.options.add(optn);
};

function removeAllOptions(selectbox)
{
	var i;
	for(i=selectbox.options.length-1;i>=0;i--)
		{
			selectbox.remove(i);
		}
};

function setListBox(id,val)
{
	var i;
	//alert ('');
	for(i=0;i<document.all(id).length;i++)
		{
			if(document.all(id).options[i].value==val)
				{
					document.all(id).selectedIndex=i
				};
		};
};

function setCheck(id,kondisi_syarat,kondisi_hasil)
{
		if (kondisi_syarat==kondisi_hasil)
			{
					document.getElementById(id).checked=true;
			}
			else
			{
					document.getElementById(id).checked=false;
			};			
};

function masuk()
{
		
};