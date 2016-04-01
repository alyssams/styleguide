$(document).ready(function(){



/* /////////////////////////////////// GLOBAL VARIABLES /////////////////////////////////// */
var ready01B = "ready";
/* /////////////////////////////////// GLOBAL VARIABLES /////////////////////////////////// */




/* /////////////////////////////////// NUMBER ONE /////////////////////////////////// */
$('#nr160x600_02').bind('click', numOne);

function numOne(){
if(ready01B == "ready") {
var clickedBanner = $(this).attr('id');
$("#" +clickedBanner).css("pointer-events","none");
setTimeout(function(){
$("#" + clickedBanner).css("pointer-events","all");
}, 3750);


var cover = $(this).find("#cover");
TweenLite.to(cover, 1.0, {opacity:"0.0"});

var cover2 = $(this).find("#cover2");
TweenLite.to(cover2, 1.0, {opacity:"0.0"});

var logo = $(this).find(".logo");
TweenLite.to(logo, 0.5, {opacity:"1.0",delay:1.5});

var learnMore = $(this).find(".learnMore");
TweenLite.to(learnMore, 1.0, {opacity:"1.0",delay:2.75,ease:Power3.easeOut});

var optionsInfo = $(this).find(".rcShown");
TweenLite.to(optionsInfo, 1.0, {opacity:"1.0",delay:2.75});
ready01B = "not ready";
}

else if(ready01B == "not ready" ) {
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
ready01B = "ready";
}

}
/* /////////////////////////////////// NUMBER ONE /////////////////////////////////// */



});