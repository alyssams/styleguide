$(document).ready(function(){



/* /////////////////////////////////// GLOBAL VARIABLES /////////////////////////////////// */
var ready01A = "ready";
/* /////////////////////////////////// GLOBAL VARIABLES /////////////////////////////////// */




/* /////////////////////////////////// NUMBER ONE /////////////////////////////////// */
$('#nr300x600_01').bind('click', numOne);

function numOne(){
if(ready01A == "ready") {
var clickedBanner = $(this).attr('id');
$("#" +clickedBanner).css("pointer-events","none");
setTimeout(function(){
$("#" + clickedBanner).css("pointer-events","all");
}, 5750);


var cover = $(this).find("#cover");
TweenLite.to(cover, 1.0, {opacity:"0.0"});

var cover2 = $(this).find("#cover2");
TweenLite.to(cover2, 1.0, {opacity:"0.0",delay:1.5});

var logo = $(this).find(".logo");
TweenLite.to(logo, 0.5, {opacity:"1.0",delay:3.5});

var learnMore = $(this).find(".learnMore");
TweenLite.to(learnMore, 1.0, {opacity:"1.0",delay:4.75,ease:Power3.easeOut});

var optionsInfo = $(this).find(".rcShown");
TweenLite.to(optionsInfo, 1.0, {opacity:"1.0",delay:4.75});
ready01A = "not ready";
}

else if(ready01A == "not ready" ) {
var clickedBanner = $(this).attr('id');
$("#" + clickedBanner).css("pointer-events","none");
setTimeout(function(){
$("#" + clickedBanner).css("pointer-events","all");
}, 1000);

var thickRule = $(this).find(".thickRule");
TweenLite.to(thickRule, 0.5, {width:"0px",ease:Quart.easeInOut});
TweenLite.to(thickRule, 0.5, {height:"0px",ease:Quart.easeInOut});

var cover = $(this).find("#cover");
TweenLite.to(cover, 1.0, {opacity:"1.0"});

var cover2 = $(this).find("#cover2");
TweenLite.to(cover2, 1.0, {opacity:"1.0"});

var logo = $(this).find(".logo");
TweenLite.to(logo, 0.5, {opacity:"0.0"});

var learnMore = $(this).find(".learnMore");
TweenLite.to(learnMore, 1.0, {opacity:"0.0"});

var optionsInfo = $(this).find(".rcShown");
TweenLite.to(optionsInfo, 1.0, {opacity:"0.0"});
ready01A = "ready";
}

}
/* /////////////////////////////////// NUMBER ONE /////////////////////////////////// */



});