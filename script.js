window.onload = function() {
   window.setInterval( function()
   {
      let dta = new Date()
      let hours = dta.getHours()
      let minutes = dta.getMinutes()
      let seconds = dta.getSeconds()
      if (hours < 10) hours = "0" + hours;
      if (minutes < 10) minutes = "0" + minutes;
      if (seconds < 10) seconds = "0" + seconds;
      let clock =  hours + ":" + minutes + ":"
      + seconds ;
      document.getElementById("clock").innerHTML = clock ; 
   } ,
   1000 ) ; 
} ; 
function ChangeBG() {
   document.getElementById('DivD').style.backgroundColor = "#666" ; 
   document.getElementById('black').style.color = "black"
   document.getElementById('white').style.color = "floralwhite"
   document.getElementById("to_weather").style.color = "floralwhite";
   document.querySelector(".about-weather-towhite").style.color = "floralwhite" ; 
   document.querySelector(".about-weather-towhite_2").style.color = "floralwhite" ; 
   document.querySelector(".about-weather-towhite_3").style.color = "floralwhite" ; 
   document.querySelector(".about-weather-towhite_4").style.color = "floralwhite" ; 
   document.querySelector(".about-weather-towhite_5").style.color = "floralwhite" ; 
   document.querySelector(".about-weather-towhite_6").style.color = "floralwhite" ; 
}
function ChangeWhite() {
  document.getElementById('DivD').style.backgroundColor = "floralwhite" ;
  document.getElementById("white").style.color = "black";
  document.getElementById('to_weather').style.color = "black";
  document.querySelector(".about-weather-towhite").style.color = "black" ; 
  document.querySelector(".about-weather-towhite_2").style.color = "black" ;
  document.querySelector(".about-weather-towhite_3").style.color = "black" ;
  document.querySelector(".about-weather-towhite_4").style.color = "black" ;
  document.querySelector(".about-weather-towhite_5").style.color = "black" ;
  document.querySelector(".about-weather-towhite_6").style.color = "black" ;
} ;
function Btn_change() {
   document.getElementById('boyaah').style.backgroundColor = "#666";
   document.getElementById('white__black').style.color = 
   'floralwhite';
   document.getElementById("p__1").style.color = 
   'floralwhite';
   document.getElementById("p__2").style.color = 
   'floralwhite';
   document.getElementById("p__3").style.color = 
   'floralwhite';
   document.getElementById("p__4").style.color = 
   'floralwhite';
   document.getElementById("p__5").style.color = 
   'floralwhite';
   document.getElementById("p__6").style.color = 
   'floralwhite';
   document.getElementById('weather_today').style.color = 
   'floralwhite';
}
function Btn_White() {
   document.getElementById('weather_today').style.color = 
   '#000';
   document.getElementById('boyaah').style.background = 
   "#fff";
   document.getElementById('white__black').style.color = 
   'black';
   document.getElementById("p__1").style.color = 
   '#000';
   document.getElementById("p__2").style.color = 
   '#000';
   document.getElementById("p__3").style.color = 
   '#000';
   document.getElementById("p__4").style.color = 
   '#000';
   document.getElementById("p__5").style.color = 
   '#000';
   document.getElementById("p__6").style.color = 
   '#000';
   
}
function Myfunction() {
   document.getElementById('tuzik').style.backgroundColor =
   '#666';
   document.querySelector('.text1').style.color = "#fff";
   document.querySelector('.text2').style.color = "#fff";
   document.querySelector('.text3').style.color = "#fff";
   document.querySelector('.text4').style.color = "#fff";
   document.querySelector('.text5').style.color = "#fff";
   document.querySelector('.text6').style.color = "#fff";
   document.getElementById('to_morrow').style.color = "#fff"
   document.getElementById('off-white').style.color = "#fff"
}
function secondMyfunction() {
   
   document.getElementById('off-white').style.color = 'black';
   document.getElementById('tuzik').style.backgroundColor = "#fff";
   document.querySelector('.text1').style.color = "#000";
   document.querySelector('.text2').style.color = "#000";
   document.querySelector('.text3').style.color = "#000";
   document.querySelector('.text4').style.color = "#000";
   document.querySelector('.text5').style.color = "#000";
   document.querySelector('.text6').style.color = "#000";
   document.getElementById('to_morrow').style.color = "#000";
}

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})
