function showTime(){
    var now        =  new Date(),
    hours      =  now.getHours(),
    minutes    =  now.getMinutes(),
    seconds    =  now.getSeconds();
	if(hours < 10){
      hours   = '0' + hours;
    }
    if(minutes < 10){
      minutes = '0' + minutes;
    }
    if(seconds < 10){
      seconds =  '0' + seconds;
    }
 document.getElementById('clock').textContent = hours + '      ' + ':' + '      ' + minutes + '      ' + ':' + '      ' + seconds;
}

var currentTime = new Date().getHours();
if (7 <= currentTime && currentTime < 20) {
    if (document.body) {
        document.body.background = "http://itsnotch.com/tumblr/images/daytime_bg.jpg";
    }
}
else {
    if (document.body) {
        document.body.background = "http://itsnotch.com/tumblr/images/nighttime_bg.jpg";
    }
}

function showDate(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
		dd = '0'+dd
	} 

	if(mm<10) {
		mm = '0'+mm
	} 

	today = dd + '/' + mm + '/' + yyyy;
	 document.getElementById('date').textContent = today;
}


window.onload = function(){
  "use strict";
  setInterval(showTime, 500);
   setInterval(showDate, 500);
}

window.onload = function(){
	  "use strict";
	  setInterval(showTime, 500);
	   setInterval(showDate, 500);
	   animation();
}

function animation()	{
	
	// init message
	var message = document.getElementById('circle');

	// tween message
	TweenMax.to(message, 400, {
		left: 900,
		ease: Power0.easeNone,
		repeat: 1000
	});
}

var placeCircle = new Date().getHours();
if (7 <= placeCircle && placeCircle < 12) {
    if (circle) {
        document.getElementById("circle").style.left="0px";
    }
}
if (12 <= placeCircle && placeCircle < 18) {
    if (circle) {
        document.getElementById("circle").style.left="300px";
    }
}
if (18 <= placeCircle && placeCircle < 20) {
    if (circle) {
        document.getElementById("circle").style.left="600px";
    }
}
else {
    if (circle) {
        document.getElementById("circle").style.left="850px";
    }
}

TweenLite.set(".wrapper", {visiblilty: "visible"})
var tl = new TimelineMax()

tl.staggerFrom(".products li, #clock, #date, .text, .line ", 0.5, {
	opacity: 0,
	x:200
}, 0.1)

TweenLite.set(".line", {backgroundColor:"hsl(" + Math.random() * 255 + ", 90%, 60%)"});


