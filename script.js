var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');
var canvas1 = document.getElementById('game1');
var ctx1 = canvas1.getContext('2d');
var score1=document.getElementById('score');
var res1=document.getElementById('result1');
var res2=document.getElementById('result2');
var res3=document.getElementById('result3');
var res4=document.getElementById('result4');
var res5=document.getElementById('result5');
var music = document.getElementById('play');

var posX=170;
var posY=500;
var speedT = 3.2, speedD=1.2;
var right=false;
var left=false;
var img=new Image();
var pl=[],t=0,t1=0,dis=0;
var x1=[],y1=[];
var b=false;
var score2=0;
var d1=16;
var level=1;
var h=0;
var v=true;
var a=true;

img.src='character1.png';
img.onload=function(){
 ctx1.drawImage(img,posX,posY); 
}

score1.innerHTML=score2;
//функция начального расположения платформ
function random(){
  var i;
 for(i=0;i<d1;i++){
  if(i==0){
    ctx.fillStyle='red';
    x1[i]=Math.floor(Math.random() * 399 + 1);
    y1[i]=Math.floor(Math.random() * 41 + 1);
    pl[i]=ctx.fillRect(x1[i],y1[i],60,10);
   }
  if(i==1){
    ctx.fillStyle='red';
    x1[i]=Math.floor(Math.random() * 399 + 1);
    y1[i]=Math.floor(Math.random() * (82-41+1)) +41;
    pl[i]=ctx.fillRect(x1[i],y1[i],60,10);
 }
 if(i==2){
   ctx.fillStyle='red';
   x1[i]=Math.floor(Math.random() * 399 + 1);
   y1[i]=Math.floor(Math.random() *(125-93+1)) + 93;
   pl[i]=ctx.fillRect(x1[i],y1[i],60,10);
 }
 if(i==3){
   ctx.fillStyle='red';
   x1[i]=Math.floor(Math.random() * 399 + 1);
   y1[i]=Math.floor(Math.random() * (168-137+1)) + 137;
   pl[i]=ctx.fillRect(x1[i],y1[i],60,10);
 }
 if(i==4){
   ctx.fillStyle='red';
   x1[i]=Math.floor(Math.random() * 399 + 1);
   y1[i]=Math.floor(Math.random() * (211-180+1)) + 180;
   pl[i]=ctx.fillRect(x1[i],y1[i],60,10);
 }
 if(i==5){
   ctx.fillStyle='red';
   x1[i]=Math.floor(Math.random() * 399 + 1);
   y1[i]=Math.floor(Math.random() * (254-223+1)) + 223;
   pl[i]=ctx.fillRect(x1[i],y1[i],60,10);
  }
 if(i==6){
  ctx.fillStyle='red';
  x1[i]=Math.floor(Math.random() * 399 + 1);
  y1[i]=Math.floor(Math.random() * (297-266+1)) + 266;
  pl[i]=ctx.fillRect(x1[i],y1[i],60,10);
  }
 if(i==7){
  ctx.fillStyle='blue';
  x1[i]=Math.floor(Math.random() * 399 + 1);
  y1[i]=Math.floor(Math.random() * (340-309+1)) + 309;
  pl[i]=ctx.fillRect(x1[i],y1[i],60,10);
  }
   if(i==8){
  ctx.fillStyle='saddlebrown';
  x1[i]=Math.floor(Math.random() * 399 + 1);
  y1[i]=Math.floor(Math.random() * (383-352+1)) + 352;
  pl[i]=ctx.fillRect(x1[i],y1[i],60,10);
  }
   if(i==9){
  ctx.fillStyle='red';
  x1[i]=Math.floor(Math.random() * 399 + 1);
  y1[i]=Math.floor(Math.random() * (426-395+1)) + 395;
  pl[i]=ctx.fillRect(x1[i],y1[i],60,10);
  }
   if(i==10){
  ctx.fillStyle='red';
  x1[i]=Math.floor(Math.random() * 399 + 1);
  y1[i]=Math.floor(Math.random() * (469-438+1)) + 438;
  pl[i]=ctx.fillRect(x1[i],y1[i],60,10);
  }
   if(i==11){
  ctx.fillStyle='red';
  x1[i]=Math.floor(Math.random() * 399 + 1);
  y1[i]=Math.floor(Math.random() * (512-481+1)) + 481;
  pl[i]=ctx.fillRect(x1[i],y1[i],60,10);
  }
   if(i==12){
  ctx.fillStyle='red';
  x1[i]=Math.floor(Math.random() * 399 + 1);
  y1[i]=Math.floor(Math.random() * (555-524+1)) + 524;
  pl[i]=ctx.fillRect(x1[i],y1[i],60,10);
  }
   if(i==13){
  ctx.fillStyle='red';
  x1[i]=Math.floor(Math.random() * 399 + 1);
  y1[i]=Math.floor(Math.random() * (598-567+1)) + 567;
  pl[i]=ctx.fillRect(x1[i],y1[i],60,10);
  }
   if(i==14){
  ctx.fillStyle='red';
  x1[i]=Math.floor(Math.random() * 399 + 1);
  y1[i]=Math.floor(Math.random() * (641-610+1)) + 610;
  pl[i]=ctx.fillRect(x1[i],y1[i],60,10);
  }
   if(i==15){
  ctx.fillStyle='red';
  x1[i]=Math.floor(Math.random() * 399 + 1);
  y1[i]=Math.floor(Math.random() * (684-653+1)) + 653;
  pl[i]=ctx.fillRect(x1[i],y1[i],60,10);
  }
 }
};

 random();
 //обработчики событий для клавиш
 addEventListener('keydown',move);
 addEventListener('keyup',movenot);

//выполняемые действие,после нажатия кнопки играть
function hide(){
  in1=setInterval(jump,6);
    reset();
  score1.innerHTML=score2;
	document.getElementById('play').style.display="none";
  document.getElementById('close').style.display="none";
	document.getElementById('records').style.display="none";
	document.getElementById('image').style.display="none";
	document.getElementById('title').style.display="none";
	document.getElementById('line').style.display="block";
  document.getElementById('game').style.display="block";
  document.getElementById('game1').style.display="block";
  document.getElementById('instruction').style.display="none";
   document.getElementById('refInstruction').style.display="none";
}

//выполняемые действие,после нажатия кнопки выход
function exitf(){
  ctx1.clearRect(posX,posY,66,60);
  document.getElementById('mpause').style.display="none";
  document.getElementById('play').style.display="block";
  document.getElementById('close').style.display="block";
  document.getElementById('records').style.display="block";
  document.getElementById('image').style.display="block";
  document.getElementById('title').style.display="block";
  document.getElementById('line').style.display="none";
  document.getElementById('game').style.display="none";
  document.getElementById('game1').style.display="none";
  document.getElementById('game_over').style.display="none";
  document.getElementById('instruction').style.display="block";
  document.getElementById('confirm').style.display="none";       
  clearInterval(in1);
  score2=0;
} 
function exit12(){
   document.getElementById('confirm').style.display="block";  
}
function cancel(){
   document.getElementById('confirm').style.display="none"; 
}
function confirm1(){
  document.getElementById('confirmClear').style.display="block";  
}

function cancel1(){
 document.getElementById('confirmClear').style.display="none";  
}
//выполняемые действие,после нажатия кнопки пауза
//
function pause(){
  clearInterval(in1);
  document.getElementById('mpause').style.display="block";
}

//выполняемые действие,после нажатия кнопки продолжить
function resume(){
  in1=setInterval(jump,6);
	document.getElementById('mpause').style.display="none";
}
function closeWindow(){
   if (confirm("Выйти из игры?")) {
    close();
  }
}


//выполняемые действие,после нажатия кнопки начать заново
function reset(){
  document.getElementById('game_over').style.display="none";
  var i;
  for(i=0;i<16;i++){
    ctx.clearRect(x1[i],y1[i],60,10);
  }
  random();
  score2=0;
  score1.innerHTML=score2;
  posX=170;
  posY=500;
  speedT=3.2;
  speedD=1.2;
  t=0,t1=0,dis=0;
  b=false;
  score2=0;
  d=41;
  d1=16;
  level=1;
  h=0;
  a=true;
  }

//выполняемые действие,после нажатия кнопки справка
  function help(){
    document.getElementById('play').style.display="none";
    document.getElementById('close').style.display="none";
  document.getElementById('records').style.display="none";
  document.getElementById('image').style.display="none";
  document.getElementById('title').style.display="none";
  document.getElementById('game_over').style.display="none";
  document.getElementById('instruction').style.display="none";
  document.getElementById('text_help').style.display="block";
   document.getElementById('refInstruction').style.display="block";

  headHelp.innerHTML="Руководство по игре Doodle Jump";

  }

  //выполняемые действие,после нажатия кнопки вернуться
  function refHelp(){
   document.getElementById('play').style.display="block";
   document.getElementById('close').style.display="block";
  document.getElementById('records').style.display="block";
  document.getElementById('image').style.display="block";
  document.getElementById('title').style.display="block";
  document.getElementById('instruction').style.display="block";
  document.getElementById('text_help').style.display="none";
   document.getElementById('refInstruction').style.display="none";
  }

//добавление звуков
function sound(){
  var audio = new Audio();
  audio.src = 'jump.mp3';
  audio.autoplay = true;
}


//выполняемые действие,после нажатия кнопки рекорды
function record(){
  document.getElementById('play').style.display="none";
  document.getElementById('close').style.display="none";
  document.getElementById('records').style.display="none";
  document.getElementById('image').style.display="none";
  document.getElementById('title').style.display="none";
  document.getElementById('game').style.display="none";
  document.getElementById('game1').style.display="none";
  document.getElementById('game_over').style.display="none";
  document.getElementById('refund').style.display="block";
  document.getElementById('clearRecords').style.display="block";
  document.getElementById('table_rec').style.display="block";
  document.getElementById('instruction').style.display="none";
   var sc_base1=localStorage.getItem('sc1');
   var sc_base2=localStorage.getItem('sc2');
   var sc_base3=localStorage.getItem('sc3');
   var sc_base4=localStorage.getItem('sc4');
   var sc_base5=localStorage.getItem('sc5');
   var sc_base1n=localStorage.getItem('sc1n');
   var sc_base2n=localStorage.getItem('sc2n');
   var sc_base3n=localStorage.getItem('sc3n');
   var sc_base4n=localStorage.getItem('sc4n');
   var sc_base5n=localStorage.getItem('sc5n');

   if(sc_base1==0){
    res1.innerHTML='1.  '+'0';
   }else{
   res1.innerHTML='1.  '+sc_base1n+':  '+sc_base1;
   }
   if(sc_base2==0){
    res2.innerHTML='2.  '+'0';
   }else{
   res2.innerHTML='2.  '+sc_base2n+':  '+sc_base2;
   }
   if(sc_base3==0){
    res3.innerHTML='3.  '+'0';
   }else{
   res3.innerHTML='3.  '+sc_base3n+':  '+sc_base3;
   }
if(sc_base4==0){
    res4.innerHTML='4.  '+'0';
   }else{
   res4.innerHTML='4.  '+sc_base4n+':  '+sc_base4;
   }
   if(sc_base5==0){
    res5.innerHTML='5.  '+'0';
   }else{
   res5.innerHTML='5.  '+sc_base5n+':  '+sc_base5;
   }
}

//выполняемые действие,после нажатия кнопки вернуться
function refund1(){
  document.getElementById('refund').style.display="none";
  document.getElementById('clearRecords').style.display="none";
  document.getElementById('table_rec').style.display="none";
  document.getElementById('play').style.display="block";
  document.getElementById('close').style.display="block";
  document.getElementById('records').style.display="block";
  document.getElementById('image').style.display="block";
  document.getElementById('title').style.display="block";
  document.getElementById('game_over').style.display="none";
  document.getElementById('instruction').style.display="block";

}

//сохранение и изменение таблицы рекордов
function table_rec(){
  var name;
   var sc_base1=localStorage.getItem('sc1');
   var sc_base2=localStorage.getItem('sc2');
   var sc_base3=localStorage.getItem('sc3');
   var sc_base4=localStorage.getItem('sc4');
   var sc_base5=localStorage.getItem('sc5');
   var sc_base1n=localStorage.getItem('sc1n');
   var sc_base2n=localStorage.getItem('sc2n');
   var sc_base3n=localStorage.getItem('sc3n');
   var sc_base4n=localStorage.getItem('sc4n');
   var sc_base5n=localStorage.getItem('sc5n');
   if((score2>sc_base1)){
     name=prompt('Введите ваше имя');
      if(name==null || name==''){
    name='Неизвестный игрок';
   }
     localStorage.setItem('sc1', score2);
     localStorage.setItem('sc2', sc_base1);
     localStorage.setItem('sc3', sc_base2);
     localStorage.setItem('sc4', sc_base3);
     localStorage.setItem('sc5', sc_base4);

     localStorage.setItem('sc1n', name);
     localStorage.setItem('sc2n', sc_base1n);
     localStorage.setItem('sc3n', sc_base2n);
     localStorage.setItem('sc4n', sc_base3n);
     localStorage.setItem('sc5n', sc_base4n);
   }  
  if((score2>sc_base2 && score2<sc_base1)){
   name=prompt('Введите ваше имя');
   if(name==null || name==''){
    name='Неизвестный игрок';
   }
   localStorage.setItem('sc1', sc_base1);
   localStorage.setItem('sc2', score2);
   localStorage.setItem('sc3', sc_base2);
   localStorage.setItem('sc4', sc_base3);
   localStorage.setItem('sc5', sc_base4);

   localStorage.setItem('sc1n', sc_base1n);
   localStorage.setItem('sc2n', name);
   localStorage.setItem('sc3n', sc_base2n);
   localStorage.setItem('sc4n', sc_base3n);
   localStorage.setItem('sc5n', sc_base4n);
   }
  if((score2>sc_base3 && score2<sc_base2)){
   name=prompt('Введите ваше имя');
    if(name==null || name==''){
    name='Неизвестный игрок';
   }
   localStorage.setItem('sc1', sc_base1);
   localStorage.setItem('sc2', sc_base2);
   localStorage.setItem('sc3', score2);
   localStorage.setItem('sc4', sc_base3);
   localStorage.setItem('sc5', sc_base4);

   localStorage.setItem('sc1n', sc_base1n);
   localStorage.setItem('sc2n', sc_base2n);
   localStorage.setItem('sc3n', name);
   localStorage.setItem('sc4n', sc_base3n);
   localStorage.setItem('sc5n', sc_base4n);
 }
 if((score2>sc_base4 && score2<sc_base3)){
   name=prompt('Введите ваше имя');
    if(name==null || name==''){
    name='Неизвестный игрок';
   }
   localStorage.setItem('sc1', sc_base1);
   localStorage.setItem('sc2', sc_base2);
   localStorage.setItem('sc3', sc_base3);
   localStorage.setItem('sc4', score2);
   localStorage.setItem('sc5', sc_base4);

   localStorage.setItem('sc1n', sc_base1n);
   localStorage.setItem('sc2n', sc_base2n);
   localStorage.setItem('sc3n', sc_base3n);
   localStorage.setItem('sc4n', name);
   localStorage.setItem('sc5n', sc_base4n);  
 }
  if((score2>sc_base5 && score2<sc_base4)){
   name=prompt('Введите ваше имя');
    if(name==null || name==''){
    name="Неизвестный игрок";
   }
   localStorage.setItem('sc1', sc_base1);
   localStorage.setItem('sc2', sc_base2);
   localStorage.setItem('sc3', sc_base3);
   localStorage.setItem('sc4', sc_base4);
   localStorage.setItem('sc5', score2);

   localStorage.setItem('sc1n', sc_base1n);
   localStorage.setItem('sc2n', sc_base2n);
   localStorage.setItem('sc3n', sc_base3n);
   localStorage.setItem('sc4n', sc_base4n);
   localStorage.setItem('sc5n', name);  
 }
}

//очищение таблицы рекорды
function clearRec(){
  localStorage.clear();

localStorage.setItem('sc1', 0);
   localStorage.setItem('sc2', 0);
   localStorage.setItem('sc3', 0);
   localStorage.setItem('sc4', 0);
   localStorage.setItem('sc5', 0);

   localStorage.setItem('sc1n', 0);
   localStorage.setItem('sc2n', 0);
   localStorage.setItem('sc3n', 0);
   localStorage.setItem('sc4n', 0);
   localStorage.setItem('sc5n', 0);  

   res1.innerHTML='1.  '+'0';
   res2.innerHTML='2.  '+'0';
   res3.innerHTML='3.  '+'0';
   res4.innerHTML='4.  '+'0';
   res5.innerHTML='5.  '+'0';
   document.getElementById('confirmClear').style.display="none"; 
}

//определяет, когда нажата клавиша управления
function move(event){
  switch(event.which){
    case 37:
     left=true;
     break;
    case 39:
     right=true;
     break;
    }
  };

//определяет, когда отпущена клавиша управления
function movenot(event){
  switch(event.which){
    case 37:
      left=false;
      break;
    case 39:
      right=false;
      break;
    }
  };

//управлние персонажем
function control(){

if(left){
  if(posX>0){
    ctx1.clearRect((posX+3), posY, 66, 60);
    posX=posX-3;
    ctx1.drawImage(img,posX,posY);
    }else{
     ctx1.clearRect(posX, posY, 66, 60);
     posX=440;
     ctx1.drawImage(img,posX,posY);
   }}
    else if(right){
      if(posX<440){
        ctx1.clearRect((posX-3), posY, 66, 60);
        posX=posX+3;
        ctx1.drawImage(img,posX,posY);
        }else{
          ctx1.clearRect(posX, posY, 66, 60);
          posX=0;
          ctx1.drawImage(img,posX,posY);
         }
     }
};

//передвижение платформ и генерация новых
function distance(){
  if(b=true){
    if(dis>t1){
      ctx1.clearRect(posX, posY-4, 66, 60);
      posY=posY+4;
      ctx1.drawImage(img,posX,posY);
      for(i=0;i<16;i++){
        ctx.fillStyle='red';
        if(i==7){
          ctx.fillStyle='blue';
        }
        if(i==8){
          ctx.fillStyle='saddlebrown';
        }

        if(y1[8]>680){
          a=true;
        }
        if(a==false && i==8){

            ctx.clearRect(x1[i],y1[i],60,10);
        y1[i]=y1[i]+4;
         ctx.fillStyle='rgb(173, 255, 47)';
        ctx.fillRect(x1[i],y1[i],60,10);
        }else{
        ctx.clearRect(x1[i],y1[i],60,10);
        y1[i]=y1[i]+4;
        ctx.fillRect(x1[i],y1[i],60,10);}
        if(y1[i]>=680){
            
          x1[i]=Math.floor(Math.random() * 399 + 1);
           if(score2<500){
            if(t1>h+35){
              y1[i]=Math.floor(Math.random() * -((41-12+1)) + 12);
              ctx.fillRect(x1[i],y1[i],60,10);
              h=t1;
            }
           }
           if(score2>=500 && score2<1000){
            if(t1>h+48){
              y1[i]=Math.floor(Math.random() * -((56-25+1)) + 25);
              ctx.fillRect(x1[i],y1[i],60,10);
              h=t1;
            }
           }
           if(score2>=1000){
            if(t1>h+64){
              y1[i]=Math.floor(Math.random() * -((82-40+1)) + 40);
              ctx.fillRect(x1[i],y1[i],60,10);
              h=t1;
             }
           }
        }
      };
      t1=t1+4;
    } else{
  t1=0;
  b=false;
  dis=0;
  h=0;
  }
 }
};

//движение подвижных платформ
function platformgo(){
  ctx.clearRect(x1[7]+1,y1[7],60,10);
  if(x1[7]>400){
    v=false;
  }
  if(x1[7]<20){
    v=true;

  }
  
  if(v==true){
    x1[7]=x1[7]+1;
    ctx.clearRect(x1[7]-1,y1[7],60,11);
    }
   if(v==false){
     x1[7]=x1[7]-1;
     ctx.clearRect(x1[7]+1,y1[7],60,11);
   } 

 ctx.fillStyle='blue';
 ctx.fillRect(x1[7],y1[7],60,10);
}

//основная функция
function jump(){
   if(t<100){
    speedD=1.2;
    distance();
    ctx1.clearRect(posX, posY+speedT, 66, 60);
    posY=posY-speedT;
    ctx1.drawImage(img,posX,posY);
    t++;
    control();
    speedT=speedT-0.02;
    platformgo()
   } 
   if(t>=100){
    control();
      if(posY>680){  
        document.getElementById('game_over').style.display="block";
        table_rec();
        d1=16;
       }
    speedT=3.2;
    ctx1.clearRect(posX, posY-speedD, 66, 60);
    posY=posY+speedD;
    ctx1.drawImage(img,posX,posY);
    t++;
    speedD=speedD+0.02;
    platformgo();
    for(i=0;i<16;i++){
      if(((y1[i]-4<posY+60) && (y1[i]+4>posY+60)) && ((posX>=x1[i]-40) && (posX<=x1[i]+55))){
        if(i==8 && a==true){
          ctx.clearRect(x1[8],y1[8],60,10);
           a=false;
            sound();
          b=true;
          dis=600-y1[i];
          t=0;
          if(dis>0){
          score2=Math.floor(score2+0.1*dis);
          if(level==1){
           if(score2>500){
            d1=12;
            }
          }
           if(level==2){
            if(score2>1000){
            d1=8;   
          }}
          score1.innerHTML=score2;
           }
          break;
        }if(i!=8){
          sound();
          b=true;
          dis=600-y1[i];
          t=0;
          if(dis>0){
          score2=Math.floor(score2+0.1*dis);
          if(level==1){
           if(score2>500){
            d1=12;
            }
          }
           if(level==2){
            if(score2>1000){
            d1=8;   
          }}
          score1.innerHTML=score2;
           }
          break;
        }
       }
     }
    }
  };
