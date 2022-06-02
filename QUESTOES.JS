var video = new Array();
video[1]  = "Torre de Copos.mov";
var imagem = "logo_pre_oficial_2.png";
var som = "AUD-20141031-WA0003.mp3";
var testo = "	<div id='texto' style='display: none;'>  " +
			"	<textarea id='area_texto' rows='10' cols='30'></textarea>" +
			"   </div> " +
			"	<div id='postagem' style='display: none; background-color: white; height: 650px;' >  " +
			"	<img id='img_postagem' src='logo_pre_oficial_2.png' style='width:1350px; height:600px;'> " +
			"   </div> " +
			"   <div id='1pergunta1' style='display: none;'><br>	1) Conforme registrado no evangelho que escreveu João, qual o primeiro milagre de Jesus? <br><br>" +
			/*"	<br><br> " +
			"	<div id='a1'>								a) 5					</div> " +
			"	<br> " +
			"	<div id='b1'>								b) 3					</div> " +
			"	<br> " +
			"	<div id='c1'>								c) 1					</div> " +
			"	<br> " +
			"	<div id='d1'>								d) 9					</div> " +*/
			"   </div> " +
			"   <div id='1pergunta2' style='display: none;'><br>	2) Onde estava Bartimeu quando foicurado por Jesus? <br><br>" +
			/*"	<br><br> " +
			"	<div id='a2'>								a) 5					</div> " +
			"	<br> " +
			"	<div id='b2'>								b) 3					</div> " +
			"	<br> " +
			"	<div id='c2'>								c) 1					</div> " +
			"	<br> " +
			"	<div id='d2'>								d) 9					</div> " +*/
			"   </div> " +
			" <div id='1pergunta3' style='display: none;'><br>	3) De onde era a mulher que disse a Jesus que os cachorros se alimentam das migalhas que caem da mesa, fazendo referência à possibilidade de sua filha ser também curada? <br><br>" +
			/*"	<br><br> " +
			"	<div id='a3'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b3'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c3'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d3'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='1pergunta4' style='display: none;'><br>	4) Há quantos anos estava enferma a mulher que foi curada por Jesus de uma hemorragia? <br><br>" +
			/*"	<br><br> " +
			"	<div id='a4'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b4'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c4'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d4'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='1pergunta5' style='display: none;'><br>	5) Qual o nome das irmãs do amigo de Jesus que ressucitou depois de estar morto há 4 dias? <br><br>" +
			/*"	<br><br> " +
			"	<div id='a5'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b5'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c5'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d5'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='1pergunta6' style='display: none;'><br>	6) Onde o cego foi se lavar após Cristo curá-lo colocando lodo em seus olhos? <br><br>" +
			/*"	<br><br> " +
			"	<div id='a6'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b6'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c6'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d6'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='1pergunta7' style='display: none;'><br>	7) teste? <br><br>" +
			/*"	<br><br> " +
			"	<div id='a6'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b6'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c6'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d6'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='1pergunta8' style='display: none;'><br>	8) teste? <br><br>" +
			/*"	<br><br> " +
			"	<div id='a6'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b6'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c6'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d6'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='1pergunta9' style='display: none;'><br>	9) teste? <br><br>" +
			/*"	<br><br> " +
			"	<div id='a6'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b6'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c6'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d6'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='1pergunta10' style='display: none;'><br>	10) teste? <br><br>" +
			/*"	<br><br> " +
			"	<div id='a6'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b6'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c6'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d6'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='1pergunta11' style='display: none;'><br>	11) teste? <br><br>" +
			/*"	<br><br> " +
			"	<div id='a6'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b6'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c6'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d6'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='1pergunta12' style='display: none;'><br>	12) teste? <br><br>" +
			/*"	<br><br> " +
			"	<div id='a6'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b6'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c6'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d6'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='1pergunta13' style='display: none;'><br>	13) teste? <br><br>" +
			/*"	<br><br> " +
			"	<div id='a6'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b6'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c6'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d6'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='1pergunta14' style='display: none;'><br>	14) teste? <br><br>" +
			/*"	<br><br> " +
			"	<div id='a6'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b6'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c6'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d6'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='1pergunta15' style='display: none;'><br>	15) teste? <br><br>" +
			/*"	<br><br> " +
			"	<div id='a6'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b6'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c6'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d6'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='1pergunta16' style='display: none;'><br>	16) Que questão é a proxima? <br><br>" +
			/*"	<br><br> " +
			"	<div id='a6'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b6'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c6'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d6'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='1pergunta17' style='display: none;'>	17) Que questão é a proxima? " +
			/*"	<br><br> " +
			"	<div id='a6'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b6'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c6'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d6'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='1pergunta18' style='display: none;'>	18) Que questão é a proxima? " +
			/*"	<br><br> " +
			"	<div id='a6'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b6'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c6'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d6'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='1pergunta19' style='display: none;'>	19) Que questão é a proxima? " +
			/*"	<br><br> " +
			"	<div id='a6'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b6'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c6'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d6'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='1pergunta20' style='display: none;'>	20) Que questão é a proxima? " +
			/*"	<br><br> " +
			"	<div id='a6'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b6'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c6'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d6'>								d) w					</div> " +*/
			"   </div>" +
			
			"   <div id='2pergunta1' style='display: none;'></div> " +
			"   <div id='2pergunta2' style='display: none;'></div> " +
			"   <div id='2pergunta3' style='display: none;'></div> " +
			"   <div id='2pergunta4' style='display: none;'></div> " +
			"   <div id='2pergunta5' style='display: none;'></div> " +
			"   <div id='2pergunta6' style='display: none;'></div> " +
			"   <div id='2pergunta7' style='display: none;'></div> " +
			"   <div id='2pergunta8' style='display: none;'></div> " +
			"   <div id='2pergunta9' style='display: none;'></div> " +
			"   <div id='2pergunta10' style='display: none;'></div> " +
			"   <div id='2pergunta11' style='display: none;'></div> " +
			"   <div id='2pergunta12' style='display: none;'></div> " +
			"   <div id='2pergunta13' style='display: none;'></div> " +
			"   <div id='2pergunta14' style='display: none;'></div> " +
			"   <div id='2pergunta15' style='display: none;'></div> " +
			
			
			"   <div id='3pergunta1' style='display: none;'><br>	1) Onde Jesus estava quando o centurião intercedeu a ele por seu criado que estava paralítico e miseravelmente pertubado? <br><br>" +
			/*"	<br><br> " +
			"	<div id='a1'>								a) 5					</div> " +
			"	<br> " +
			"	<div id='b1'>								b) 3					</div> " +
			"	<br> " +
			"	<div id='c1'>								c) 1					</div> " +
			"	<br> " +
			"	<div id='d1'>								d) 9					</div> " +*/
			"   </div> " +
			"   <div id='3pergunta2' style='display: none;'><br>	2) Onde Jesus estava quando fez a segunda multiplicação de pães? <br><br>" +
			/*"	<br><br> " +
			"	<div id='a2'>								a) 5					</div> " +
			"	<br> " +
			"	<div id='b2'>								b) 3					</div> " +
			"	<br> " +
			"	<div id='c2'>								c) 1					</div> " +
			"	<br> " +
			"	<div id='d2'>								d) 9					</div> " +*/
			"   </div> " +
			" <div id='3pergunta3' style='display: none;'><br>	3) Onde viviam Lázaro, Maria e Marta? <br><br>" +
			/*"	<br><br> " +
			"	<div id='a3'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b3'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c3'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d3'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='3pergunta4' style='display: none;'><br>	4) Quantos homens foram alintados com a primeira multiplicação de pães e peixes? <br><br>" +
			/*"	<br><br> " +
			"	<div id='a4'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b4'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c4'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d4'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='3pergunta5' style='display: none;'><br>	5) Há quanto tempo o coxo do Tanque de Betesda estava deitado sobre a cama? <br><br>" +
			/*"	<br><br> " +
			"	<div id='a5'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b5'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c5'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d5'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='3pergunta6' style='display: none;'><br>	6) Há quanto tempo vivia encurvada a mulher que foi curada por Jesus? <br><br>" +
			/*"	<br><br> " +
			"	<div id='a6'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b6'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c6'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d6'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='3pergunta7' style='display: none;'><br>	7) Onde Jesus estava quando curou o homem da mão mirrada? <br><br>" +
			/*"	<br><br> " +
			"	<div id='a6'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b6'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c6'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d6'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='3pergunta8' style='display: none;'><br>	8) Quantos peixes Pedro retirou do mar para pagar o imposto a César? <br><br>" +
			/*"	<br><br> " +
			"	<div id='a6'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b6'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c6'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d6'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='3pergunta9' style='display: none;'><br>	9) Em qual evangelho está registrado o nome do servo do sumo sacerdote que Jesus curou depois de ser ferido à espada? <br><br>" +
			/*"	<br><br> " +
			"	<div id='a6'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b6'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c6'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d6'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='3pergunta10' style='display: none;'><br>	10) Como 4 homens colocaram um paralítico dentro de uma casa lotada para que Jesus o curasse? <br><br>" +
			/*"	<br><br> " +
			"	<div id='a6'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b6'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c6'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d6'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='3pergunta11' style='display: none;'><br>	11) O que Jesus pediu para que o leproso não fizesse após ser curado? <br><br>" +
			/*"	<br><br> " +
			"	<div id='a6'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b6'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c6'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d6'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='3pergunta12' style='display: none;'><br>	12) Qual o nome de um dos principais da sinagoga que teve sua filha ressuscitada por Jesus? <br><br>" +
			/*"	<br><br> " +
			"	<div id='a6'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b6'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c6'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d6'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='3pergunta13' style='display: none;'><br>	13) Quem é a mulher que depois de ser curada por Cristo se levantou e serviu a Jesus e seus discípulos imediatamente? <br><br>" +
			/*"	<br><br> " +
			"	<div id='a6'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b6'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c6'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d6'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='3pergunta14' style='display: none;'><br>	14) O que estava fazendo a multidão que acompanhava a viúva de Naim quando Jesus se aproximou da porta da cidade? <br><br>" +
			/*"	<br><br> " +
			"	<div id='a6'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b6'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c6'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d6'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='3pergunta15' style='display: none;'><br>	15) Qual o último milagre que Jesus operou quando ainda estava com seus discípulos, após a sua ressurreição? <br><br>" +
			/*"	<br><br> " +
			"	<div id='a6'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b6'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c6'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d6'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='3pergunta16' style='display: none;'><br>	16) Que questão é a proxima? <br><br>" +
			/*"	<br><br> " +
			"	<div id='a6'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b6'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c6'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d6'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='3pergunta17' style='display: none;'>	18) Que questão é a proxima? " +
			/*"	<br><br> " +
			"	<div id='a6'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b6'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c6'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d6'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='3pergunta18' style='display: none;'>	19) Que questão é a proxima? " +
			/*"	<br><br> " +
			"	<div id='a6'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b6'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c6'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d6'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='3pergunta19' style='display: none;'>	20) Que questão é a proxima? " +
			/*"	<br><br> " +
			"	<div id='a6'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b6'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c6'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d6'>								d) w					</div> " +*/
			"   </div>" +
			" <div id='3pergunta20' style='display: none;'>	21) Que questão é a proxima? " +
			/*"	<br><br> " +
			"	<div id='a6'>								a) a					</div> " +
			"	<br> " +
			"	<div id='b6'>								b) s					</div> " +
			"	<br> " +
			"	<div id='c6'>								c) d					</div> " +
			"	<br> " +
			"	<div id='d6'>								d) w					</div> " +*/
			"   </div>";
			
document.getElementById("questao").innerHTML = testo; 