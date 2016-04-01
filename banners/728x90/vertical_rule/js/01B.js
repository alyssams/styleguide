$(document).ready(function(){



/* /////////////////////////////////// GLOBAL VARIABLES /////////////////////////////////// */
var ready01B = "ready";
/* /////////////////////////////////// GLOBAL VARIABLES /////////////////////////////////// */




/* /////////////////////////////////// NUMBER ONE /////////////////////////////////// */
$('#vr728x90_02').bind('click', numOne);

function numOne(){
if(ready01B == "ready") {
var clickedBanner = $(this).attr('id');
$("#" + clickedBanner).css("pointer-events","none");
setTimeout(function(){
$("#" + clickedBanner).css("pointer-events","all");
}, 5750);

        
var rule01T = $(this).find(".rule01T");
TweenLite.to(rule01T, 0.5, {height:"34px",ease:Quart.easeInOut});

var rule01B = $(this).find(".rule01B");
TweenLite.to(rule01B, 0.5, {height:"36px",ease:Quart.easeInOut});

var rule02T = $(this).find(".rule02T");
TweenLite.to(rule02T, 0.5, {opacity:"1.0",delay:0.5,ease:Quart.easeInOut});
TweenLite.to(rule02T, 0.5, {width:"384px",delay:1.0,ease:Quart.easeInOut});
TweenLite.to(rule02T, 0.5, {height:"0px",delay:2.0,ease:Quart.easeInOut});

var rule02B = $(this).find(".rule02B");
TweenLite.to(rule02B, 0.5, {opacity:"1.0",delay:0.5,ease:Quart.easeInOut});
TweenLite.to(rule02B, 0.5, {width:"384px",delay:1.0,ease:Quart.easeInOut});
TweenLite.to(rule02B, 0.5, {height:"0px",delay:2.0,ease:Quart.easeInOut});

var luxury = $(this).find(".luxury");
TweenLite.to(luxury, 0.0, {opacity:"1.0",delay:1.0});

var logo = $(this).find(".logo");
TweenLite.to(logo, 1.0, {opacity:"1.0",delay:3.5});

var learnMore = $(this).find(".learnMore");
TweenLite.to(learnMore, 1.0, {opacity:"1.0",delay:4.75,ease:Power3.easeOut});

var optionsInfo = $(this).find(".optionsInfo");
TweenLite.to(optionsInfo, 1.0, {opacity:"1.0",delay:4.75});

ready01B = "not ready";
}

else if(ready01B == "not ready" ) {
var clickedBanner = $(this).attr('id');
$("#" + clickedBanner).css("pointer-events","none");
setTimeout(function(){
$("#" + clickedBanner).css("pointer-events","all");
}, 1000);


var rule01T = $(this).find(".rule01T");
TweenLite.to(rule01T, 0.5, {height:"0px",delay:2.0,ease:Quart.easeInOut});

var rule01B = $(this).find(".rule01B");
TweenLite.to(rule01B, 0.5, {height:"0px",delay:2.0,ease:Quart.easeInOut});

var rule02T = $(this).find(".rule02T");
TweenLite.to(rule02T, 0.5, {opacity:"0.0",delay:1.5,ease:Quart.easeInOut});
TweenLite.to(rule02T, 0.5, {width:"704px",delay:1.0,ease:Quart.easeInOut});
TweenLite.to(rule02T, 0.5, {height:"34px",ease:Quart.easeInOut});

var rule02B = $(this).find(".rule02B");
TweenLite.to(rule02B, 0.5, {opacity:"0.0",delay:1.5,ease:Quart.easeInOut});
TweenLite.to(rule02B, 0.5, {width:"704px",delay:1.0,ease:Quart.easeInOut});
TweenLite.to(rule02B, 0.5, {height:"36px",ease:Quart.easeInOut});

var luxury = $(this).find(".luxury");
TweenLite.to(luxury, 0.0, {opacity:"0.0",delay:1.4});

var logo = $(this).find(".logo");
TweenLite.to(logo, 1.0, {opacity:"0.0"});

var learnMore = $(this).find(".learnMore");
TweenLite.to(learnMore, 1.0, {opacity:"0.0"});

var optionsInfo = $(this).find(".optionsInfo");
TweenLite.to(optionsInfo, 1.0, {opacity:"0.0"});

ready01B = "ready";
}

}
/* /////////////////////////////////// NUMBER ONE /////////////////////////////////// */



});