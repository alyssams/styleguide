$(document).ready(function(){



/* /////////////////////////////////// GLOBAL VARIABLES /////////////////////////////////// */
var ready01A = "ready";
/* /////////////////////////////////// GLOBAL VARIABLES /////////////////////////////////// */




/* /////////////////////////////////// NUMBER ONE /////////////////////////////////// */
$('#vr300x250_01').bind('click', numOne);

function numOne(){
if(ready01A == "ready") {
var clickedBanner = $(this).attr('id');
$("#" + clickedBanner).css("pointer-events","none");
setTimeout(function(){
$("#" + clickedBanner).css("pointer-events","all");
}, 5750);

        
var rule01 = $(this).find(".rule01");
TweenLite.to(rule01, 0.5, {height:"102px",ease:Quart.easeInOut});

var rule02 = $(this).find(".rule02");
TweenLite.to(rule02, 0.0, {opacity:"1.0",delay:0.5});
TweenLite.to(rule02, 0.5, {width:"48px",delay:1.0,ease:Quart.easeInOut});
TweenLite.to(rule02, 0.5, {height:"0px",delay:2.0,ease:Quart.easeInOut});

var luxury = $(this).find(".luxury");
TweenLite.to(luxury, 0.0, {opacity:"1.0",delay:0.5});

var logo = $(this).find(".logo");
TweenLite.to(logo, 1.0, {opacity:"1.0",delay:3.5});

var learnMore = $(this).find(".learnMore");
TweenLite.to(learnMore, 1.0, {opacity:"1.0",delay:4.75,ease:Power3.easeOut});

var optionsInfo = $(this).find(".optionsInfo");
TweenLite.to(optionsInfo, 1.0, {opacity:"1.0",delay:4.75});

ready01A = "not ready";
}

else if(ready01A == "not ready" ) {
var clickedBanner = $(this).attr('id');
$("#" + clickedBanner).css("pointer-events","none");
setTimeout(function(){
$("#" + clickedBanner).css("pointer-events","all");
}, 1000);


var rule01 = $(this).find(".rule01");
TweenLite.to(rule01, 0.5, {height:"0px",delay:2.0,ease:Quart.easeInOut});

var rule02 = $(this).find(".rule02");
TweenLite.to(rule02, 0.0, {opacity:"0.0",delay:2.0});
TweenLite.to(rule02, 0.5, {width:"281px",delay:1.0,ease:Quart.easeInOut});
TweenLite.to(rule02, 0.5, {height:"103px",delay:0.0,ease:Quart.easeInOut});

var luxury = $(this).find(".luxury");
TweenLite.to(luxury, 0.0, {opacity:"0.0",delay:2.0});
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