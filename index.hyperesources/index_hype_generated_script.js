//	HYPE.documents["index"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="index.hyperesources",f="index",g="index_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/index_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_654F||null!=window.HYPE_dtl_654F)||true==!0||null!=c&&10>c;a=!0==d?"HYPE-654.full.min.js":"HYPE-654.thin.min.js";c=!0==d?"F":"T";d=d?"":
"";if(false==!1&&(a=k("HYPE_654"+c,"HYPE_dtl_654"+c,a,d),false==!0&&(a=a||k("HYPE_w_654","HYPE_wdtl_654","HYPE-654.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_654","HYPE-654.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=document.getElementsByTagName("div"),
b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"initializeMain",source:"function(hypeDocument, element, event) {\t\n\tif (DIFFICULTY == \"easy\") {\n\t\tINITIALCOUNTDOWNVALUE = 60;\n\t\tdocument.getElementById(\"maskBox\").style.visibility = \"hidden\";\n\t} else {\n\t\tINITIALCOUNTDOWNVALUE = 45;\n\t\tdocument.getElementById(\"maskBox\").style.visibility = \"visible\";\n\t}\n\n\tdocument.getElementById(\"mask1\").style.top = \"-48px\";\n\tdocument.getElementById(\"mask1\").style.left = \"-848px\";\n\tdocument.getElementById(\"thermometer\").style.width = \"790px\";\n\tdocument.getElementById(\"player\").style.top = \"576px\";\n\tdocument.getElementById(\"player\").style.left = \"32px\";\n\tdocument.getElementById(\"blueDoor\").style.visibility = \"visible\";\n\tdocument.getElementById(\"redDoor\").style.visibility = \"visible\";\n\tdocument.getElementById(\"greenDoor\").style.visibility = \"visible\";\n\tdocument.getElementById(\"blueKey\").style.visibility = \"visible\";\n\tdocument.getElementById(\"redKey\").style.visibility = \"visible\";\n\tdocument.getElementById(\"greenKey\").style.visibility = \"visible\";\n\tdocument.getElementById(\"blueKeyDisplay\").style.visibility = \"hidden\";\n\tdocument.getElementById(\"redKeyDisplay\").style.visibility = \"hidden\";\n\tdocument.getElementById(\"greenKeyDisplay\").style.visibility = \"hidden\";\n\tdocument.getElementById(\"counter\").innerHTML = INITIALCOUNTDOWNVALUE;\n\tPLAYERMOVEABLE = true;\n\tvar counterSegments = 10;\n\t\n\tCOUNTDOWNINTERVAL = setInterval(decrementTimer, 100);\n\t\n\tfunction decrementTimer() {\n\t\tvar temp2 = parseFloat(document.getElementById(\"thermometer\").style.width);\n\t\tvar decrementAmount = 79/(INITIALCOUNTDOWNVALUE);\n\t\tdocument.getElementById(\"thermometer\").style.width = (temp2 - decrementAmount) + \"px\";\n\t\tcounterSegments--;\n\t\tif (counterSegments == 0) {\n\t\t\tcounterSegments = 10;\n\t\t\tvar temp1 = parseInt(document.getElementById(\"counter\").innerHTML);\n\t\t\ttemp1 = temp1 - 1;\n\t\t\tdocument.getElementById(\"counter\").innerHTML = temp1;\n\t\t}\n\t\tif (temp1 == 0) {\n\t\t\tclearInterval(COUNTDOWNINTERVAL);\n\t\t\tPLAYERMOVABLE = false;\n\t\t\tdocument.getElementById(\"gameOverMessage\").innerHTML = \"YOU LOSE!\";\n\t\t\tdocument.getElementById(\"thermometer\").style.width = \"0px\";\n\t\t\thypeDocument.startTimelineNamed('playerLose');\n\t\t}\n\t}\n\t\t\t\n}",identifier:"30"},{name:"detectKeyDown",source:"function(hypeDocument, element, event) {\t\n\tif (PLAYERMOVEABLE == true) {\n\t\tvar topPosition = parseInt(document.getElementById('player').style.top);\n\t\tvar leftPosition = parseInt(document.getElementById('player').style.left);\n\t\tvar maskTopPosition = parseInt(document.getElementById('mask1').style.top);\n\t\tvar maskLeftPosition = parseInt(document.getElementById('mask1').style.left);\n\t\tvar playerTopGrid = topPosition/32;\n\t\tvar playerLeftGrid = leftPosition/32;\n\t\tvar keyPressed = event.key;\n\t\tvar keyCode = event.keyCode;\n\t\tif (keyCode == \"37\") \t\t{ playerLeftGrid = playerLeftGrid - 1; } // MOVE LEFT\n\t\telse if (keyCode == \"38\") { playerTopGrid = playerTopGrid - 1; } // MOVE UP\n\t\telse if (keyCode == \"39\") { playerLeftGrid = playerLeftGrid + 1; } // MOVE RIGHT\n\t\telse if (keyCode == \"40\")  { playerTopGrid = playerTopGrid + 1; } // MOVE DOWN\n\t\tvar string4 = \"GRID[\" + playerTopGrid + \"][\" + playerLeftGrid + \"]\";\n\t\tvar string5 = eval(string4);\n\t\t\n\t\t// REMINDER:\t\tGRID[14][3] = 2; // BLUE KEY\n\t\t// REMINDER:\t\tGRID[12][11] = 3; // BLUE DOOR\n\t\t// REMINDER:\t\tGRID[18][19] = 4; // RED KEY\n\t\t// REMINDER:\t\tGRID[6][7] = 5; // RED DOOR\n\t\t// REMINDER:\t\tGRID[9][19] = 6; // GREEN KEY\n\t\t// REMINDER:\t\tGRID[11][21] = 7; // GREEN DOOR\n\t\n\t\tif (string5 == 1) { // OPEN PATH\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t} else if (string5 == 2) { // BLUE KEY\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\tdocument.getElementById(\"blueKey\").style.visibility = \"hidden\";\n\t\t\tdocument.getElementById(\"blueKeyDisplay\").style.visibility = \"visible\";\n\t\t\tGRID[14][3] = 1;\n\t\t\thypeDocument.startTimelineNamed('pickup');\n\t\t\thypeDocument.startTimelineNamed('bronzeBlur');\n\t\t} else if (string5 == 4) { // RED KEY\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\tdocument.getElementById(\"redKey\").style.visibility = \"hidden\";\n\t\t\tdocument.getElementById(\"redKeyDisplay\").style.visibility = \"visible\";\n\t\t\tGRID[18][19] = 1;\n\t\t\thypeDocument.startTimelineNamed('pickup');\n\t\t\thypeDocument.startTimelineNamed('silverBlur');\n\t\t} else if (string5 == 6) { // GREEN KEY\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\tdocument.getElementById(\"greenKey\").style.visibility = \"hidden\";\n\t\t\tdocument.getElementById(\"greenKeyDisplay\").style.visibility = \"visible\";\n\t\t\tGRID[9][19] = 1;\n\t\t\thypeDocument.startTimelineNamed('pickup');\n\t\t\thypeDocument.startTimelineNamed('goldBlur');\n\t\t} else if (string5 == 3) { // BLUE DOOR\n\t\t\tif (document.getElementById(\"blueKeyDisplay\").style.visibility == \"visible\") {\n\t\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\t\tdocument.getElementById(\"blueDoor\").style.visibility = \"hidden\";\n\t\t\t\tGRID[12][11] = 1;\n\t\t\t\thypeDocument.startTimelineNamed('doorOpen');\n\t\t\t} else {\n\t\t\t\thypeDocument.startTimelineNamed('badBeep');\n\t\t\t}\n\t\t} else if (string5 == 5) { // RED DOOR\n\t\t\tif (document.getElementById(\"redKeyDisplay\").style.visibility == \"visible\") {\n\t\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\t\tdocument.getElementById(\"redDoor\").style.visibility = \"hidden\";\n\t\t\t\tGRID[6][7] = 1;\n\t\t\t\thypeDocument.startTimelineNamed('doorOpen');\n\t\t\t} else {\n\t\t\t\thypeDocument.startTimelineNamed('badBeep');\n\t\t\t}\n\t\t} else if (string5 == 7) { // GREEN DOOR\n\t\t\tif (document.getElementById(\"greenKeyDisplay\").style.visibility == \"visible\") {\n\t\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\t\tdocument.getElementById(\"greenDoor\").style.visibility = \"hidden\";\n\t\t\t\tGRID[11][21] = 1;\n\t\t\t\thypeDocument.startTimelineNamed('doorOpen');\n\t\t\t} else {\n\t\t\t\thypeDocument.startTimelineNamed('badBeep');\n\t\t\t}\n\t\t} else if (string5 == 8) { // CHECKERED FLAG\n\t\t\tPLAYERMOVEABLE = false;\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById(\"maskBox\").style.visibility = \"hidden\";\n\t\t\thypeDocument.startTimelineNamed('endMaze');\n\t\t\tclearInterval(COUNTDOWNINTERVAL);\n\t\t\tdocument.getElementById(\"gameOverMessage\").innerHTML = \"YOU WIN!\";\n\t\t\thypeDocument.startTimelineNamed('playerWin');\n\t\t}\n\t}\n\t\t\t\n}",identifier:"33"},{name:"initializeSplash",source:"function(hypeDocument, element, event) {\t\n\tif (element.id == \"easyButton\") {\n\t\tDIFFICULTY = \"easy\";\n\t} else {\n\t\tDIFFICULTY = \"hard\";\n\t}\n\t\n\thypeDocument.startTimelineNamed('splashStart');\n\t\n\tGRID = [\n\t\t[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\n\t\t[0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0],\n\t\t[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0],\n\t\t[0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0],\n\t\t[0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0],\n\t\t[0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0],\n\t\t[0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0],\n\t\t[0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0],\n\t\t[0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0],\n\t\t[0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0],\n\t\t[0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0],\n\t\t[0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0],\n\t\t[0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0],\n\t\t[0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0],\n\t\t[0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0],\n\t\t[0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0],\n\t\t[0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0],\n\t\t[0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0],\n\t\t[0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0],\n\t\t[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]\n\t];\n\t\n\tGRID[13][7] = 2; // BLUE KEY\n\tGRID[18][11] = 3; // BLUE DOOR\n\tGRID[9][15] = 4; // RED KEY\n\tGRID[12][17] = 5; // RED DOOR\n\tGRID[5][24] = 6; // GREEN KEY\n\tGRID[5][19] = 7; // GREEN DOOR\n\tGRID[1][26] = 8; // FINISH FLAG\n\t\n}",identifier:"65"},{name:"mute",source:"function(hypeDocument, element, event) {\t\n\tvar sound1 = document.getElementById(\"footstep\");\n\nsound1.muted = true; // mute\n}",identifier:"135"},{name:"makeNoise",source:"function(hypeDocument, element, event) {\n\twindow.audioElement = document.createElement('footstep');\naudioElement.setAttribute('src', 'index.hyperesources/footstep.mp3'); /// This can be any sound in your resources are\n}",identifier:"151"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_654"+c](f,g,{"-2":{n:"blank.gif"},"18":{p:2,n:"coin%20pickup.mp3",g:"39",t:"audio/mpeg"},"10":{p:2,n:"Rolemusic_-_03_-_Crush_At_Maracas_Bar.mp3",g:"104",t:"audio/mpeg"},"19":{p:2,n:"money%20bag%20swish.mp3",g:"37",t:"audio/mpeg"},"11":{p:1,n:"treasure%20cheast.png",g:"34",t:"@1x"},"0":{p:2,n:"badBeep.mp3",g:"36",t:"audio/mpeg"},"12":{p:1,n:"gold%20sack.png",g:"105",t:"@1x"},"1":{p:2,n:"charge.mp3",g:"72",t:"audio/mpeg"},"20":{p:2,n:"362206__taranp__horn-fail-wahwah-1.mp3",g:"58",t:"audio/mpeg"},"2":{p:2,n:"creditRoll.mp3",g:"89",t:"audio/mpeg"},"13":{p:1,n:"yet%20another%20coin%20pile.jpg",g:"106",o:true,t:"@1x"},"3":{p:1,n:"mask1.png",g:"96",t:"@1x"},"21":{p:1,n:"sound%20icon.png",g:"134",o:true,t:"@1x"},"14":{p:1,n:"old%20paper%20texture.jpeg",g:"107",t:"@1x"},"4":{p:1,n:"map2.png",g:"8",t:"@1x"},"5":{p:1,n:"Pirate1%20%28Idle%29%20GIF.gif",g:"10",t:"@1x"},"15":{p:1,n:"gold%20egg.png",g:"18",t:"@1x"},"22":{p:1,n:"sound%20icon_2x.png",g:"134",o:true,t:"@2x"},"6":{p:1,n:"bronze%20sack.png",g:"100",t:"@1x"},"23":{p:2,n:"413203__joepayne__clean-and-pompous-fanfare-trumpet.mp3",g:"40",t:"audio/mpeg"},"16":{p:1,n:"bronze%20egg.png",g:"12",t:"@1x"},"7":{p:1,n:"Silver%20Sack.png",g:"101",t:"@1x"},"-1":{n:"PIE.htc"},"8":{p:2,n:"footstep.mp3",g:"38",t:"audio/mpeg"},"17":{p:1,n:"silver%20egg.png",g:"102",t:"@1x"},"9":{p:2,n:"Rolemusic_-_05_-_She_Is_My_Best_Treasure.mp3",g:"103",t:"audio/mpeg"}},l,["<link href='https://fonts.googleapis.com/css?family=Girassol&subset=latin' rel='stylesheet' type='text/css'>"],e,[{n:"splash",o:"59",X:[0]},{n:"main",o:"1",X:[1]},{n:"credits",o:"73",X:[2]}],
[{o:"61",p:"600px",cA:false,Y:1024,Z:768,L:[],c:"#D8EEF6",bY:1,d:1024,U:{},T:{"66_hover":{q:false,z:1,i:"66_hover",n:"66_hover",a:[{f:"c",y:0,z:1,i:"A",e:"#FD5900",s:"#2B190A",o:"154"},{f:"c",y:0,z:1,i:"G",e:"#FD5900",s:"#2B190A",o:"154"},{f:"c",y:0,z:1,i:"C",e:"#FD5900",s:"#2B190A",o:"154"},{f:"c",y:0,z:1,i:"B",e:"#FD5900",s:"#2B190A",o:"154"},{f:"c",y:0,z:1,i:"D",e:"#FD5900",s:"#2B190A",o:"154"},{y:1,i:"A",s:"#FD5900",z:0,o:"154",f:"c"},{y:1,i:"G",s:"#FD5900",z:0,o:"154",f:"c"},{y:1,i:"C",s:"#FD5900",z:0,o:"154",f:"c"},{y:1,i:"B",s:"#FD5900",z:0,o:"154",f:"c"},{y:1,i:"D",s:"#FD5900",z:0,o:"154",f:"c"}],f:30,b:[]},"64_hover":{q:false,z:1,i:"64_hover",n:"64_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#FD5900",s:"#2B190A",o:"156"},{f:"c",y:0,z:1,i:"B",e:"#FD5900",s:"#2B190A",o:"156"},{f:"c",y:0,z:1,i:"C",e:"#FD5900",s:"#2B190A",o:"156"},{f:"c",y:0,z:1,i:"D",e:"#FD5900",s:"#2B190A",o:"156"},{f:"c",y:0,z:1,i:"A",e:"#FD5900",s:"#2B190A",o:"156"},{y:1,i:"G",s:"#FD5900",z:0,o:"156",f:"c"},{y:1,i:"B",s:"#FD5900",z:0,o:"156",f:"c"},{y:1,i:"C",s:"#FD5900",z:0,o:"156",f:"c"},{y:1,i:"D",s:"#FD5900",z:0,o:"156",f:"c"},{y:1,i:"A",s:"#FD5900",z:0,o:"156",f:"c"}],f:30,b:[]},"147_pressed":{q:false,z:1,i:"147_pressed",n:"147_pressed",a:[{f:"c",y:0,z:1,i:"bI",e:1,s:1,o:"164"},{f:"c",y:0,z:1,i:"bH",e:0,s:0,o:"164"},{f:"c",y:0,z:1,i:"bJ",e:1,s:1,o:"164"},{f:"c",y:0,z:1,i:"bK",e:1,s:1,o:"164"},{f:"c",y:0,z:1,i:"bG",e:0,s:0,o:"164"},{f:"c",y:0,z:1,i:"bL",e:0,s:0,o:"164"},{f:"c",y:0,z:1,i:"BDbL",e:0,s:0,o:"164"},{f:"c",y:0,z:1,i:"BDbG",e:0,s:0,o:"164"},{f:"c",y:0,z:1,i:"BDbI",e:1,s:1,o:"164"},{f:"c",y:0,z:1,i:"BDbH",e:0,s:0,o:"164"},{f:"c",y:0,z:1,i:"BDbJ",e:1,s:1,o:"164"},{f:"c",y:0,z:1,i:"BDbK",e:1,s:1,o:"164"},{f:"c",y:0,z:1,i:"S",e:0,s:0,o:"164"},{f:"c",y:0,z:1,i:"T",e:0,s:0,o:"164"},{f:"c",y:0,z:1,i:"Q",e:0,s:0,o:"164"},{f:"c",y:0,z:1,i:"R",e:"#000",s:"#000",o:"164"},{y:1,i:"bI",s:1,z:0,o:"164",f:"c"},{y:1,i:"bH",s:0,z:0,o:"164",f:"c"},{y:1,i:"bJ",s:1,z:0,o:"164",f:"c"},{y:1,i:"bK",s:1,z:0,o:"164",f:"c"},{y:1,i:"bG",s:0,z:0,o:"164",f:"c"},{y:1,i:"bL",s:0,z:0,o:"164",f:"c"},{y:1,i:"BDbL",s:0,z:0,o:"164",f:"c"},{y:1,i:"BDbG",s:0,z:0,o:"164",f:"c"},{y:1,i:"BDbI",s:1,z:0,o:"164",f:"c"},{y:1,i:"BDbH",s:0,z:0,o:"164",f:"c"},{y:1,i:"BDbJ",s:1,z:0,o:"164",f:"c"},{y:1,i:"BDbK",s:1,z:0,o:"164",f:"c"},{y:1,i:"S",s:0,z:0,o:"164",f:"c"},{y:1,i:"T",s:0,z:0,o:"164",f:"c"},{y:1,i:"Q",s:0,z:0,o:"164",f:"c"},{y:1,i:"R",s:"#000",z:0,o:"164",f:"c"}],f:30,b:[]},"110_hover":{q:false,z:1,i:"110_hover",n:"110_hover",a:[{f:"c",y:0,z:1,i:"a",e:401,s:411,o:"160"},{f:"c",y:0,z:1,i:"b",e:607,s:618,o:"160"},{f:"c",y:0,z:1,i:"c",e:191,s:172,o:"160"},{f:"c",y:0,z:1,i:"d",e:55,s:44,o:"160"},{f:"c",y:0,z:1,i:"t",e:48,s:36,o:"160"},{f:"c",y:0,z:1,i:"v",e:"bold",s:"normal",o:"160"},{y:1,i:"a",s:401,z:0,o:"160",f:"c"},{y:1,i:"b",s:607,z:0,o:"160",f:"c"},{y:1,i:"c",s:191,z:0,o:"160",f:"c"},{y:1,i:"d",s:55,z:0,o:"160",f:"c"},{y:1,i:"t",s:48,z:0,o:"160",f:"c"},{y:1,i:"v",s:"bold",z:0,o:"160",f:"c"}],f:30,b:[]},"71":{q:false,z:4,i:"71",n:"splashStart",a:[{f:"c",y:0,z:0.01,i:"e",e:-1,s:0,o:"153"},{f:"c",y:0,z:0.05,i:"a",e:296,s:-426,o:"157"},{y:0.01,i:"e",s:-1,z:0,o:"153",f:"c"},{f:"c",p:2,y:0.05,z:0.3,i:"ActionHandler",e:{a:[{p:12,o:"39",q:false}]},s:{a:[{p:12,o:"39",q:false}]},o:"71"},{f:"c",y:0.05,z:0.2,i:"a",e:296,s:296,o:"157"},{f:"c",y:0.25,z:0.05,i:"a",e:1018,s:296,o:"157"},{f:"c",y:1,z:0.05,i:"a",e:296,s:-426,o:"152"},{y:1,i:"a",s:1018,z:0,o:"157",f:"c"},{f:"c",p:2,y:1.05,z:1,i:"ActionHandler",e:{a:[{p:12,o:"39",q:false}]},s:{a:[{p:12,o:"39",q:false}]},o:"71"},{f:"c",y:1.05,z:0.2,i:"a",e:296,s:296,o:"152"},{f:"c",y:1.25,z:0.05,i:"a",e:1018,s:296,o:"152"},{f:"c",y:2,z:0.05,i:"a",e:296,s:-426,o:"155"},{y:2,i:"a",s:1018,z:0,o:"152",f:"c"},{f:"c",p:2,y:2.05,z:1,i:"ActionHandler",e:{a:[{p:12,o:"39",q:false}]},s:{a:[{p:12,o:"39",q:false}]},o:"71"},{f:"c",y:2.05,z:0.2,i:"a",e:296,s:296,o:"155"},{f:"c",y:2.25,z:0.05,i:"a",e:1018,s:296,o:"155"},{f:"c",y:3,z:0.05,i:"a",e:296,s:-426,o:"159"},{y:3,i:"a",s:1018,z:0,o:"155",f:"c"},{f:"c",p:2,y:3.05,z:0.25,i:"ActionHandler",e:{a:[{d:1.1,p:1,g:1,e:"1"}]},s:{a:[{p:12,o:"39",q:false}]},o:"71"},{f:"c",y:3.05,z:0.2,i:"a",e:296,s:296,o:"159"},{f:"c",y:3.25,z:0.05,i:"a",e:1018,s:296,o:"159"},{f:"c",p:2,y:4,z:0,i:"ActionHandler",s:{a:[{d:1.1,p:1,g:1,e:"1"}]},o:"71"},{y:4,i:"a",s:1018,z:0,o:"159",f:"c"}],f:30,b:[]},"111":{q:false,z:1.15,i:"111",n:"move out the way",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"103",q:false}]},o:"111"},{f:"c",y:0,z:0.15,i:"e",e:0,s:1,o:"160"},{f:"c",y:0.15,z:0.15,i:"e",e:1,s:0,o:"154"},{f:"c",y:0.15,z:0.15,i:"e",e:1,s:0,o:"156"},{y:0.15,i:"e",s:0,z:0,o:"160",f:"c"},{f:"c",y:1,z:0.15,i:"e",e:1,s:0,o:"153"},{y:1,i:"e",s:1,z:0,o:"154",f:"c"},{y:1,i:"e",s:1,z:0,o:"156",f:"c"},{y:1.15,i:"e",s:1,z:0,o:"153",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30,b:[]},"146_hover":{q:false,z:1,i:"146_hover",n:"146_hover",a:[{f:"c",y:0,z:1,i:"c",e:50,s:43,o:"163"},{f:"c",y:0,z:1,i:"d",e:51,s:44,o:"163"},{f:"c",y:0,z:1,i:"a",e:929,s:932,o:"163"},{f:"c",y:0,z:1,i:"b",e:526,s:528,o:"163"},{y:1,i:"c",s:50,z:0,o:"163",f:"c"},{y:1,i:"d",s:51,z:0,o:"163",f:"c"},{y:1,i:"a",s:929,z:0,o:"163",f:"c"},{y:1,i:"b",s:526,z:0,o:"163",f:"c"}],f:30,b:[]},"147_hover":{q:false,z:1,i:"147_hover",n:"147_hover",a:[{f:"c",y:0,z:1,i:"b",e:589,s:592,o:"164"},{f:"c",y:0,z:1,i:"d",e:49,s:44,o:"164"},{f:"c",y:0,z:1,i:"c",e:50,s:43,o:"164"},{f:"c",y:0,z:1,i:"a",e:929,s:932,o:"164"},{y:1,i:"b",s:589,z:0,o:"164",f:"c"},{y:1,i:"d",s:49,z:0,o:"164",f:"c"},{y:1,i:"c",s:50,z:0,o:"164",f:"c"},{y:1,i:"a",s:929,z:0,o:"164",f:"c"}],f:30,b:[]}},bZ:180,O:["161","158","159","155","152","157","153","163","164","162","156","154","160"],n:"Untitled Layout","_":0,v:{"156":{b:600,z:8,K:"Double",c:142,L:"Double",d:57,aS:6,M:8,e:0,bD:"none",N:8,aT:6,dB:"button",O:8,g:"#F5D687",aU:6,P:8,aV:6,i:"easyButton",j:"absolute",k:"div",aI:5,aJ:5,aK:5,aL:5,A:"#2B190A",B:"#2B190A",aM:"64_hover",r:"inline",C:"#2B190A",Z:"break-word",s:"Girassol",D:"#2B190A",t:48,F:"center",aA:{a:[{p:4,h:"65"}]},G:"#2B190A",aP:"pointer",w:"Easy",x:"visible",I:"Double",a:200,y:"preserve",J:"Double"},"162":{c:7,d:64,I:"Solid",J:"Solid",f:322,K:"Solid",g:"#000",L:"Solid",M:0,N:0,A:"#2C1D0B",x:"visible",j:"absolute",B:"#2C1D0B",P:0,k:"div",C:"#2C1D0B",z:11,O:0,D:"#2C1D0B",a:956,b:589},"159":{aU:8,bB:6,G:"#2B190A",c:394,aV:8,r:"inline",d:240,bC:6,s:"Girassol",t:200,Z:"break-word",i:"title6",w:"GO!\n",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:6,aS:8,aT:8,a:-426,bA:"#FD5900",F:"center",b:311},"154":{b:600,z:7,K:"Double",c:167,L:"Double",d:57,aS:6,M:8,e:0,bD:"none",N:8,aT:6,dB:"button",O:8,g:"#F5D687",aU:6,P:8,aV:6,i:"hardButton",j:"absolute",k:"div",aI:5,aJ:5,aK:5,aL:5,A:"#2B190A",B:"#2B190A",aM:"66_hover",r:"inline",C:"#2B190A",Z:"break-word",s:"Girassol",D:"#2B190A",t:48,F:"center",aA:{a:[{p:4,h:"65"}]},G:"#2B190A",aP:"pointer",w:"Normal",x:"visible",I:"Double",a:629,y:"preserve",J:"Double"},"160":{b:618,z:9,K:"Double",c:172,L:"Double",d:44,aS:6,M:9,e:1,bD:"none",N:9,aT:6,dB:"button",O:9,g:"#F5D687",aU:6,P:9,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#2B190A",B:"#2B190A",aM:"110_hover",r:"inline",C:"#2B190A",Z:"break-word",s:"Girassol",D:"#2B190A",t:36,F:"center",aA:{a:[{b:"111",p:3,z:false,symbolOid:"60"}]},v:"normal",G:"#2B210E",aP:"pointer",w:"CLICK ME",x:"visible",I:"Double",a:411,y:"preserve",J:"Double"},"157":{aU:8,bB:6,G:"#2B190A",c:394,aV:8,r:"inline",d:240,bC:6,s:"Girassol",t:200,Z:"break-word",i:"title3",w:"3",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:3,aS:8,aT:8,a:-426,bA:"#FD5900",F:"center",b:311},"163":{b:528,z:12,K:"None",c:43,L:"None",d:44,aS:6,M:0,bD:"none",N:0,aT:6,dB:"button",O:0,aU:6,P:0,h:"134",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,p:"no-repeat",A:"#A0A0A0",aL:4,q:"100% 100%",B:"#A0A0A0",aM:"146_hover",r:"inline",C:"#A0A0A0",Z:"break-word",D:"#A0A0A0",t:13,F:"center",aA:{a:[{p:12,o:"103",q:false}]},G:"#000",aP:"pointer",w:"<br>",x:"visible",I:"None",a:932,y:"preserve",J:"None"},"152":{aU:8,bB:6,G:"#2B190A",c:394,aV:8,r:"inline",d:240,bC:6,s:"Girassol",t:200,Z:"break-word",i:"title4",w:"2",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:4,aS:8,aT:8,a:-426,bA:"#FD5900",F:"center",b:311},"161":{p:"no-repeat",c:1024,q:"100% 100%",d:768,I:"None",J:"None",K:"None",L:"None",h:"107",M:0,N:0,A:"#452B0E",j:"absolute",x:"visible",B:"#452B0E",O:0,P:0,C:"#452B0E",z:1,k:"div",D:"#452B0E",a:0,b:0},"155":{aU:8,bB:6,G:"#2B190A",c:394,aV:8,r:"inline",d:240,bC:6,s:"Girassol",t:200,Z:"break-word",i:"title5",w:"1",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:5,aS:8,aT:8,a:-426,bA:"#FD5900",F:"center",b:311},"158":{aU:8,bB:4,G:"#2B190A",c:1008,aV:8,r:"inline",d:278,bC:4,s:"Girassol",t:110,Z:"break-word",i:"title1",w:"Pirate\u2019s<br>Treasure<br>",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:10,aS:8,aT:8,a:0,bA:"#FD5900",F:"center",b:50},"153":{aU:8,bB:0,G:"#2B190A",c:1008,aV:8,r:"inline",d:254,e:0,s:"Girassol",bC:0,t:48,Z:"break-word",i:"title2",w:"- Use Arrow Keys To Move -<br>- <u>Grab Eggs To Make Treasure Appear</u> -<br>\nComplete The Maze Before<br>The Ship Leaves!<br>",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:2,aS:8,aT:8,a:0,bA:"#000",F:"center",b:320},"164":{R:"#000",S:0,aI:4,T:0,bG:0,aJ:4,BDbG:0,dB:"button",bH:0,aK:4,bI:1,aL:4,bJ:1,aM:"147_hover",Z:"break-word",bK:1,aN:"147_pressed",BDbH:0,bL:0,aP:"pointer",a:932,b:592,BDbI:1,c:43,d:44,aS:6,aT:6,aU:6,BDbJ:1,h:"134",aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",BDbK:1,C:"#A0A0A0",D:"#A0A0A0",p:"no-repeat",F:"center",aA:{a:[{p:13,o:"103",q:false}]},q:"100% 100%",G:"#000",r:"inline",BDbL:0,I:"None",t:13,J:"None",K:"None",L:"None",w:"<br>",M:0,x:"visible",N:0,gg:0,O:0,y:"preserve",z:13,bD:"none",P:0,Q:0}}},{A:{a:[{p:4,h:"30"},{p:13,o:"103",q:false},{p:4,h:"151"}]},o:"3",p:"600px",cA:false,Y:1024,Z:768,C:{a:[{p:4,h:"33"}]},c:"#00FDFF",L:[],bY:1,d:1024,U:{},T:{"57":{q:false,z:3.15,i:"57",n:"playerLose",a:[{f:"f",y:0,z:1.15,i:"b",e:32,s:-576,o:"178"},{f:"c",p:2,y:0,z:0,i:"ActionHandler",e:{a:[{}]},s:{a:[{p:12,o:"58",q:false}]},o:"57"},{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:13,o:"104",q:false}]},o:"57"},{y:1.15,i:"b",s:32,z:0,o:"178",f:"c"},{f:"c",y:2,z:0.15,i:"e",e:1,s:0,o:"180"},{y:2.15,i:"e",s:1,z:0,o:"180",f:"c"},{f:"c",y:3,z:0.15,i:"e",e:1,s:0,o:"181"},{y:3.15,i:"e",s:1,z:0,o:"181",f:"c"}],f:30,b:[]},"42":{q:false,z:0,i:"42",n:"doorOpen",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"37",q:false}]},o:"42"}],f:30,b:[]},"133_hover":{q:false,z:1,i:"133_hover",n:"133_hover",a:[{f:"c",y:0,z:1,i:"d",e:53,s:50,o:"195"},{f:"c",y:0,z:1,i:"a",e:927,s:929,o:"195"},{f:"c",y:0,z:1,i:"c",e:56,s:50,o:"195"},{f:"c",y:0,z:1,i:"b",e:523,s:524,o:"195"},{y:1,i:"d",s:53,z:0,o:"195",f:"c"},{y:1,i:"a",s:927,z:0,o:"195",f:"c"},{y:1,i:"c",s:56,z:0,o:"195",f:"c"},{y:1,i:"b",s:523,z:0,o:"195",f:"c"}],f:30,b:[]},"49_hover":{q:false,z:1,i:"49_hover",n:"49_hover",a:[{f:"c",y:0,z:1,i:"A",e:"#FF2600",s:"#2B190A",o:"181"},{f:"c",y:0,z:1,i:"G",e:"#FF2600",s:"#2B190A",o:"181"},{f:"c",y:0,z:1,i:"C",e:"#FF2600",s:"#2B190A",o:"181"},{f:"c",y:0,z:1,i:"B",e:"#FF2600",s:"#2B190A",o:"181"},{f:"c",y:0,z:1,i:"D",e:"#FF2600",s:"#2B190A",o:"181"},{y:1,i:"A",s:"#FF2600",z:0,o:"181",f:"c"},{y:1,i:"G",s:"#FF2600",z:0,o:"181",f:"c"},{y:1,i:"C",s:"#FF2600",z:0,o:"181",f:"c"},{y:1,i:"B",s:"#FF2600",z:0,o:"181",f:"c"},{y:1,i:"D",s:"#FF2600",z:0,o:"181",f:"c"}],f:30,b:[]},"43":{q:false,z:0,i:"43",n:"endMaze",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"40",q:false}]},o:"43"}],f:30,b:[]},"143":{q:false,z:1,i:"143",n:"silverBlur",a:[{f:"c",y:0,z:1,i:"bL",e:0,s:20,o:"191"},{y:1,i:"bL",s:0,z:0,o:"191",f:"c"}],f:30,b:[]},"48_hover":{q:false,z:1,i:"48_hover",n:"48_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#FD5900",s:"#2B190A",o:"180"},{f:"c",y:0,z:1,i:"B",e:"#FD5900",s:"#2B190A",o:"180"},{f:"c",y:0,z:1,i:"C",e:"#FD5900",s:"#2B190A",o:"180"},{f:"c",y:0,z:1,i:"D",e:"#FD5900",s:"#2B190A",o:"180"},{f:"c",y:0,z:1,i:"A",e:"#FD5900",s:"#2B190A",o:"180"},{y:1,i:"G",s:"#FD5900",z:0,o:"180",f:"c"},{y:1,i:"B",s:"#FD5900",z:0,o:"180",f:"c"},{y:1,i:"C",s:"#FD5900",z:0,o:"180",f:"c"},{y:1,i:"D",s:"#FD5900",z:0,o:"180",f:"c"},{y:1,i:"A",s:"#FD5900",z:0,o:"180",f:"c"}],f:30,b:[]},"44":{q:false,z:0,i:"44",n:"footstep",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"38",q:false}]},o:"44"}],f:30,b:[]},"136_hover":{q:false,z:1,i:"136_hover",n:"136_hover",a:[{f:"c",y:0,z:1,i:"b",e:587,s:589,o:"196"},{f:"c",y:0,z:1,i:"c",e:53,s:50,o:"196"},{f:"c",y:0,z:1,i:"d",e:55,s:52,o:"196"},{f:"c",y:0,z:1,i:"a",e:927,s:929,o:"196"},{y:1,i:"b",s:587,z:0,o:"196",f:"c"},{y:1,i:"c",s:53,z:0,o:"196",f:"c"},{y:1,i:"d",s:55,z:0,o:"196",f:"c"},{y:1,i:"a",s:927,z:0,o:"196",f:"c"}],f:30,b:[]},"144":{q:false,z:1,i:"144",n:"goldBlur",a:[{f:"c",y:0,z:1,i:"bL",e:0,s:20,o:"174"},{y:1,i:"bL",s:0,z:0,o:"174",f:"c"}],f:30,b:[]},"45":{q:false,z:0,i:"45",n:"pickup",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"39",q:false}]},o:"45"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"104",q:false}]},o:"kTimelineDefaultIdentifier"}],f:30,b:[]},"41":{q:false,z:0,i:"41",n:"badBeep",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"36",q:false}]},o:"41"}],f:30,b:[]},"142":{q:false,z:1,i:"142",n:"bronzeBlur",a:[{f:"c",y:0,z:1,i:"bL",e:0,s:20,o:"177"},{y:1,i:"bL",s:0,z:0,o:"177",f:"c"}],f:30,b:[]},"52":{q:false,z:6.15,i:"52",n:"playerWin",a:[{f:"f",y:0,z:1.15,i:"b",e:32,s:-576,o:"178"},{f:"c",p:2,y:0,z:0,i:"ActionHandler",e:{a:[{p:13,o:"104",q:false}]},s:{a:[{p:12,o:"40",q:false}]},o:"52"},{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:13,o:"104",q:false}]},o:"52"},{y:1.15,i:"b",s:32,z:0,o:"178",f:"c"},{f:"c",y:4,z:0.15,i:"e",e:1,s:0,o:"180"},{y:4.15,i:"e",s:1,z:0,o:"180",f:"c"},{f:"c",y:6,z:0.15,i:"e",e:1,s:0,o:"181"},{y:6.15,i:"e",s:1,z:0,o:"181",f:"c"}],f:30,b:[]}},bZ:180,O:["182","178","179","180","181","198","193","189","188","168","192","194","184","170","176","174","167","183","169","187","186","171","191","173","190","175","195","177","196","197","185","199","165","172","166"],n:"Untitled Layout","_":1,v:{"172":{p:"repeat",c:790,d:90,I:"None",J:"None",K:"None",L:"None",h:"106",M:0,i:"thermometer",N:0,A:"#FF2600",j:"absolute",x:"visible",B:"#FF2600",O:0,P:0,C:"#FF2600",z:13,k:"div",D:"#FF2600",a:54,b:658},"191":{p:"no-repeat",c:32,q:"100% 100%",d:32,I:"None",J:"None",bL:20,K:"None",L:"None",h:"101",M:0,i:"redDoor",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:16,k:"div",D:"#D8DDE4",a:546,b:384},"199":{c:780,d:80,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:9,N:9,A:"#321B0A",x:"visible",j:"absolute",B:"#321B0A",k:"div",O:9,C:"#321B0A",z:15,P:9,D:"#321B0A",a:50,b:654},"167":{h:"18",p:"no-repeat",x:"visible",a:773,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:17,i:"greenKey",b:173,d:22,k:"div",c:22},"186":{c:80,d:50,I:"Solid",J:"Solid",K:"Solid",g:"#F5D687",L:"Solid",M:10,i:"border2",N:10,A:"#452B0E",x:"visible",j:"absolute",B:"#452B0E",P:10,O:10,C:"#452B0E",z:11,k:"div",D:"#452B0E",a:908,b:299},"173":{bI:1,h:"12",p:"no-repeat",x:"visible",a:226,dB:"img",b:420,q:"100% 100%",r:"inline",z:6,j:"absolute",i:"blueKey",d:22,k:"div",c:22},"192":{bI:0.54222708,h:"8",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",z:4,bK:1,dB:"img",d:640,i:"map1",k:"div",c:896},"168":{h:"10",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:5,i:"player",b:0,d:32,k:"div",c:32},"187":{bI:2.16890812,h:"102",p:"no-repeat",x:"visible",a:485,dB:"img",b:297,q:"100% 100%",r:"inline",z:18,j:"absolute",i:"redKey",d:21,k:"div",c:21},"174":{p:"no-repeat",c:32,q:"100% 100%",d:32,I:"None",J:"None",bL:20,K:"None",L:"None",h:"105",M:0,i:"greenDoor",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:8,k:"div",D:"#D8DDE4",a:606,b:162},"193":{c:868,d:612,I:"Solid",r:"inline",J:"Solid",K:"Solid",L:"Solid",M:15,N:15,A:"#F5D687",x:"visible",j:"absolute",B:"#F5D687",k:"div",O:15,C:"#F5D687",z:28,P:15,D:"#F5D687",a:-2,b:-2},"169":{h:"12",p:"no-repeat",x:"visible",a:942,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:20,i:"blueKeyDisplay",b:187,d:32,k:"div",c:32},"180":{b:376,z:3,K:"Double",c:218,L:"Double",d:48,aS:6,M:10,e:0,bD:"none",N:10,aT:6,dB:"button",O:10,g:"#F5D687",aU:6,P:10,bF:"178",aV:6,i:"playAgainButton",j:"absolute",k:"div",aI:5,aJ:5,aK:5,aL:5,A:"#2B190A",B:"#2B190A",aM:"48_hover",r:"inline",C:"#2B190A",Z:"break-word",s:"Girassol",D:"#2B190A",t:36,F:"center",aA:{a:[{d:1.1,p:1,g:1,e:"59"}]},G:"#2B190A",aP:"pointer",w:"Play Again?",x:"visible",I:"Double",a:118,y:"preserve",J:"Double"},"188":{x:"hidden",k:"div",c:896,d:640,z:23,i:"maskBox",r:"inline",a:0,j:"absolute",b:0},"175":{h:"18",p:"no-repeat",x:"visible",a:942,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:22,i:"greenKeyDisplay",b:467,d:32,k:"div",c:32},"194":{h:"107",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:3,k:"div",b:0,d:768,c:1024},"181":{b:376,z:5,K:"Double",c:218,L:"Double",d:48,aS:6,M:10,e:0,bD:"none",N:10,aT:6,dB:"button",O:10,g:"#F5D687",aU:6,P:10,bF:"178",aV:6,i:"creditsButton",j:"absolute",k:"div",aI:5,aJ:5,aK:5,aL:5,A:"#2B190A",B:"#2B190A",aM:"49_hover",r:"inline",C:"#2B190A",Z:"break-word",s:"Girassol",D:"#2B190A",t:36,F:"center",aA:{a:[{d:1.1,p:1,g:1,e:"73"}]},G:"#2B190A",aP:"pointer",w:"Credits",x:"visible",I:"Double",a:468,y:"preserve",J:"Double"},"189":{bI:1,h:"96",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",z:1,bF:"188",dB:"img",d:1280,i:"mask1",k:"div",c:1792},"176":{aU:8,G:"#191306",c:144,aV:8,r:"inline",d:32,s:"Girassol",t:24,u:"normal",Z:"break-word",v:"bold",i:"inventoryTitle",w:"INVENTORY",j:"absolute",x:"visible",k:"div",y:"preserve",z:9,aS:8,aT:8,a:880,F:"center",b:78},"195":{b:524,z:31,K:"None",c:50,L:"None",d:50,aS:6,M:0,bD:"none",N:0,aT:6,dB:"button",O:0,aU:6,P:0,h:"134",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,p:"no-repeat",A:"#A0A0A0",aL:4,q:"100% 100%",B:"#A0A0A0",aM:"133_hover",r:"inline",C:"#A0A0A0",Z:"break-word",D:"#A0A0A0",t:13,F:"center",aA:{a:[{p:12,o:"104",q:false}]},G:"#000",aP:"pointer",w:"<br>",x:"visible",I:"None",a:929,y:"preserve",J:"None"},"182":{p:"no-repeat",c:868,q:"100% 100%",d:611,I:"None",e:0.74826938,J:"None",K:"None",L:"None",h:"107",M:0,i:"background1",bF:"178",N:0,A:"#0433FF",j:"absolute",x:"visible",B:"#0433FF",O:0,P:0,C:"#0433FF",z:1,k:"div",D:"#0433FF",a:-20,b:-18.62690276},"177":{p:"no-repeat",c:32,q:"100% 100%",d:32,I:"None",J:"None",bL:20,K:"None",L:"None",h:"100",M:0,i:"blueDoor",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:7,k:"div",D:"#D8DDE4",bI:1,a:352,b:568},"196":{b:589,z:32,K:"None",c:50,L:"None",d:52,aS:6,M:0,bD:"none",N:0,aT:6,dB:"button",O:0,aU:6,P:0,h:"134",aV:6,i:"muteButton",j:"absolute",k:"div",aI:4,aJ:4,aK:4,p:"no-repeat",A:"#A0A0A0",aL:4,q:"100% 100%",B:"#A0A0A0",aM:"136_hover",r:"inline",C:"#A0A0A0",Z:"break-word",D:"#A0A0A0",t:13,F:"center",aA:{a:[{p:13,o:"104",q:false},{p:4,h:"135"}]},G:"#000",aP:"pointer",w:"<br>",x:"visible",I:"None",a:929,y:"preserve",J:"None"},"183":{c:80,d:50,I:"Solid",J:"Solid",K:"Solid",g:"#F5D687",L:"Solid",M:10,i:"border1",N:10,A:"#452B0E",x:"visible",j:"absolute",B:"#452B0E",P:10,O:10,C:"#452B0E",z:10,k:"div",D:"#452B0E",a:908,b:168},"170":{h:"34",p:"no-repeat",x:"visible",a:832,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:27,i:"checkeredFlag",b:32,d:32,k:"div",c:32},"178":{x:"visible",k:"div",c:832,d:576,z:33,i:"gameOverBox",a:32,j:"absolute",b:-576},"197":{c:8,d:65,I:"Solid",J:"Solid",f:322,K:"Solid",g:"#000",L:"Solid",aP:"pointer",M:0,N:0,A:"#2C1D0B",x:"visible",j:"absolute",B:"#2C1D0B",P:0,O:0,C:"#2C1D0B",z:30,dB:"button",D:"#2C1D0B",aA:{a:[{p:4,h:"135"}]},k:"div",a:956,b:589},"165":{c:780,d:80,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:9,i:"border4",N:9,A:"#F5D687",x:"visible",j:"absolute",B:"#F5D687",k:"div",O:9,C:"#F5D687",z:14,P:9,D:"#F5D687",a:50,b:654},"184":{c:128,d:768,I:"None",J:"None",K:"None",g:"#DE9300",L:"None",M:0,i:"rightBorder",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,O:0,C:"#D8DDE4",z:1,k:"div",D:"#D8DDE4",a:896,b:0},"171":{h:"102",p:"no-repeat",x:"visible",a:942,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:21,i:"redKeyDisplay",b:318,d:32,k:"div",c:32},"179":{aU:8,bB:2,G:"#2B190A",c:816,aV:8,r:"inline",d:124,bC:2,s:"Girassol",t:96,Z:"break-word",i:"gameOverMessage",w:"MESSAGE",bF:"178",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:2,aS:8,aT:8,a:0,bA:"#FD5900",F:"center",b:76},"190":{c:80,d:50,I:"Solid",J:"Solid",K:"Solid",g:"#F5D687",L:"Solid",M:10,i:"border3",N:10,A:"#452B0E",x:"visible",j:"absolute",B:"#452B0E",P:10,O:10,C:"#452B0E",z:12,k:"div",D:"#452B0E",a:908,b:448},"198":{c:868,d:612,I:"Double",r:"inline",J:"Double",K:"Double",L:"Double",M:15,w:"",N:15,A:"#2C1D0B",x:"visible",j:"absolute",B:"#2C1D0B",O:15,P:15,C:"#2C1D0B",z:29,k:"div",D:"#2C1D0B",a:-2,b:-2},"166":{aU:8,G:"#302202",c:144,aV:8,r:"inline",d:84,s:"Girassol",t:64,Z:"break-word",i:"counter",w:"60",j:"absolute",x:"visible",k:"div",y:"preserve",z:19,aS:8,aT:8,a:864,F:"center",b:658},"185":{c:1024,d:128,I:"None",J:"None",K:"None",g:"#DE9300",L:"None",M:0,i:"bottomBorder",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,O:0,C:"#D8DDE4",z:2,k:"div",D:"#D8DDE4",a:0,b:640}}},{o:"84",p:"600px",B:{a:[{p:13,o:"89",q:false}]},cA:false,Z:768,Y:1024,c:"#0433FF",L:[],bY:1,d:1024,U:{},T:{"79_hover":{q:false,z:1,i:"79_hover",n:"79_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#FD5900",s:"#2B190A",o:"204"},{f:"c",y:0,z:1,i:"B",e:"#FD5900",s:"#2B190A",o:"204"},{f:"c",y:0,z:1,i:"C",e:"#FD5900",s:"#2B190A",o:"204"},{f:"c",y:0,z:1,i:"D",e:"#FD5900",s:"#2B190A",o:"204"},{f:"c",y:0,z:1,i:"A",e:"#FD5900",s:"#2B190A",o:"204"},{y:1,i:"G",s:"#FD5900",z:0,o:"204",f:"c"},{y:1,i:"B",s:"#FD5900",z:0,o:"204",f:"c"},{y:1,i:"C",s:"#FD5900",z:0,o:"204",f:"c"},{y:1,i:"D",s:"#FD5900",z:0,o:"204",f:"c"},{y:1,i:"A",s:"#FD5900",z:0,o:"204",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:20,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"103",q:true}]},o:"kTimelineDefaultIdentifier"},{f:"b",y:0,z:20,i:"b",e:-1076,s:0,o:"201"},{f:"c",y:0,z:20,i:"a",e:0,s:0,o:"201"},{f:"c",y:0,z:20,i:"w",e:"Ros Stilen<br>\nDarren Pearson<br>\nSaint Paul College<br>FreeSound.org<br>Rolemusic-Enough Records<br>My Mom<br>My Dad<br>My teacher<br>My Family<br><br>\n\n",s:"Ros Stilen<br>\nDarren Pearson<br>\nSaint Paul College<br>FreeSound.org<br>Rolemusic-Enough Records<br>My Mom<br>My Dad<br>My Teacher<br>My Family<br>\n\n",o:"202"},{y:20,i:"b",s:-1076,z:0,o:"201",f:"c"},{y:20,i:"a",s:0,z:0,o:"201",f:"c"},{y:20,i:"w",s:"Ros Stilen<br>\nDarren Pearson<br>\nSaint Paul College<br>FreeSound.org<br>Rolemusic-Enough Records<br>My Mom<br>My Dad<br>My teacher<br>My Family<br><br>\n\n",z:0,o:"202",f:"c"}],f:30,b:[]}},bZ:180,O:["203","201","205","202","206","207","200","204"],n:"Untitled Layout","_":2,v:{"200":{x:"hidden",k:"div",c:1024,d:340,z:4,i:"outerContainer",a:0,j:"absolute",b:300},"203":{aU:8,bB:0,G:"#2B190A",c:1008,aV:8,r:"inline",d:84,e:1,s:"Girassol",bC:0,t:48,Z:"break-word",i:"credits2",w:"CREDITS\n",bF:"201",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:1,aS:8,aT:8,a:0,bA:"#000",F:"center",b:0},"206":{p:"no-repeat",c:1024,q:"100% 100%",d:768,I:"None",J:"None",K:"None",L:"None",h:"107",M:0,N:0,A:"#452B0E",j:"absolute",x:"visible",B:"#452B0E",O:0,P:0,C:"#452B0E",z:1,k:"div",D:"#452B0E",a:0,b:0},"202":{aU:8,bB:0,G:"#2B190A",c:396,aV:8,r:"inline",d:959,e:1,s:"Girassol",bC:0,t:48,Y:96,Z:"break-word",i:"credits4",w:"Ros Stilen<br>\nDarren Pearson<br>\nSaint Paul College<br>FreeSound.org<br>Rolemusic-Enough Records<br>My Mom<br>My Dad<br>My Teacher<br>My Family<br>\n\n",bF:"201",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:3,aS:8,aT:8,a:512,bA:"#000",F:"left",b:119.52667351},"205":{aU:8,bB:0,G:"#2B190A",c:396,aV:8,r:"inline",d:884,e:1,s:"Girassol",bC:0,t:48,Y:96,Z:"break-word",i:"credits3",w:"Designed by<br>\nJavascript by<br>\nDeveloped at<br>\nAudio Resources<br><br><br>\nUsability Testers<br>\n<br>\nSpecial Thanks to<br>\n<br>\n<br>\n\n",bF:"201",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:2,aS:8,aT:8,a:100,bA:"#000",F:"left",b:120},"201":{x:"visible",k:"div",c:1024,d:1200,z:1,i:"creditRoll",a:0,j:"absolute",bF:"200",b:0},"204":{b:1288,z:4,K:"Double",c:372,L:"Double",d:54,aS:6,M:8,bD:"none",N:8,aT:6,dB:"button",O:8,g:"#F5D687",aU:6,P:8,bF:"201",aV:6,i:"restartButton",j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#2B190A",B:"#2B190A",aM:"79_hover",r:"inline",C:"#2B190A",Z:"break-word",s:"Girassol",D:"#2B190A",t:48,F:"center",aA:{a:[{d:1.1,p:1,g:1,e:"59"}]},G:"#2B190A",aP:"pointer",w:"Play Again?",x:"visible",I:"Double",a:312,y:"preserve",J:"Double"},"207":{aU:8,bB:4,G:"#2B190A",c:1008,aV:8,r:"inline",d:278,bC:4,s:"Girassol",t:110,Z:"break-word",w:"Pirate\u2019s<br>Treasure<br>",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:3,aS:8,aT:8,a:0,bA:"#FD5900",F:"center",b:16}}}],{},h,{f:{p:0,q:[[0,0,0.1971,0,0.3391,0.8944,0.3636,1],[0.3636,1,0.3636,1,0.4425,0.75,0.5455,0.75],[0.5455,0.75,0.6519,0.75,0.7273,1,0.7273,1],[0.7273,1,0.7273,1,0.7718,0.9375,0.8182,0.9375],[0.8182,0.9375,0.8646,0.9375,0.9091,1,0.9091,1],[0.9091,1,0.9091,1,0.9294,0.9844,0.9546,0.9844],[0.9546,0.9844,0.9798,0.9844,1,1,1,1]]}},null,false,true,-1,true,true,false,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
