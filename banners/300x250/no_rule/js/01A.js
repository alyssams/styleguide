$(document).ready(function(){



/* /////////////////////////////////// GLOBAL VARIABLES /////////////////////////////////// */
var ready01A = "ready";
/* /////////////////////////////////// GLOBAL VARIABLES /////////////////////////////////// */




/* /////////////////////////////////// NUMBER ONE /////////////////////////////////// */
$('#nr300x250_01').bind('click', numOne);

function numOne(){
if(ready01A == "ready") {
var clickedBanner = $(this).attr('id');
$("#" + clickedBanner).css("pointer-events","none");
setTimeout(function(){
$("#" + clickedBanner).css("pointer-events","all");
}, 5750);


var allWeatherDrive = $(this).find(".all-weatherDrive");
TweenLite.to(allWeatherDrive, 1.0, {opacity:"1.0"});

var lexusSedans = $(this).find(".lexusSedans");
TweenLite.to(lexusSedans, 1.0, {opacity:"1.0",delay:1.5});

var logo = $(this).find(".logo");
TweenLite.to(logo, 1.0, {opacity:"1.0",delay:3.0});

var learnMore = $(this).find(".learnMore");
TweenLite.to(learnMore, 1.0, {opacity:"1.0",delay:4.25,ease:Power3.easeOut});

var optionsInfo = $(this).find(".optionsInfo");
TweenLite.to(optionsInfo, 1.0, {opacity:"1.0",delay:4.25});

ready01A = "not ready";
}

else if(ready01A == "not ready" ) {
var clickedBanner = $(this).attr('id');
$("#" + clickedBanner).css("pointer-events","none");
setTimeout(function(){
$("#" + clickedBanner).css("pointer-events","all");
}, 1000);


var allWeatherDrive = $(this).find(".all-weatherDrive");
TweenLite.to(allWeatherDrive, 1.0, {opacity:"0.0"});

var lexusSedans = $(this).find(".lexusSedans");
TweenLite.to(lexusSedans, 1.0, {opacity:"0.0"});

var logo = $(this).find(".logo");
TweenLite.to(logo, 1.0, {opacity:"0.0"});

var learnMore = $(this).find(".learnMore");
TweenLite.to(learnMore, 1.0, {opacity:"0.0"});

var optionsInfo = $(this).find(".optionsInfo");
TweenLite.to(optionsInfo, 1.0, {opacity:"0.0"});

ready01A = "ready";
}

}
/* /////////////////////////////////// NUMBER ONE /////////////////////////////////// */



});