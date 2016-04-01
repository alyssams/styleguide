$(document).ready(function(){



/* /////////////////////////////////// GLOBAL VARIABLES /////////////////////////////////// */
var ready01C = "ready";
/* /////////////////////////////////// GLOBAL VARIABLES /////////////////////////////////// */




/* /////////////////////////////////// NUMBER ONE /////////////////////////////////// */
$('#dr300x250_01').bind('click', numOne);

function numOne(){
if(ready01C == "ready") {
var clickedBanner = $(this).attr('id');
$("#" + clickedBanner).css("pointer-events","none");
setTimeout(function(){
$("#" + clickedBanner).css("pointer-events","all");
}, 5750);

        
var thickRule = $(this).find(".thickRule");
TweenLite.to(thickRule, 0.5, {width:"255px",ease:Quart.easeInOut});
TweenLite.to(thickRule, 0.5, {height:"26px",delay:0.75,ease:Quart.easeInOut});
TweenLite.to(thickRule, 0.5, {height:"0px",delay:1.5,ease:Quart.easeInOut});

var thinRule = $(this).find(".thinRule");
TweenLite.to(thinRule, 0.5, {width:"255px",ease:Quart.easeInOut});
TweenLite.to(thinRule, 0.0, {opacity:"1.0",delay:2.0});
TweenLite.to(thinRule, 0.5, {height:"0px",delay:2.5,ease:Quart.easeInOut});

var resistance = $(this).find(".resistance");
TweenLite.to(resistance, 0.0, {opacity:"1.0",delay:1.4});

var firstEver = $(this).find(".firstEver");
TweenLite.to(firstEver, 0.0, {opacity:"1.0",delay:2.5});

var logo = $(this).find(".logo");
TweenLite.to(logo, 1.0, {opacity:"1.0",delay:3.5});

var learnMore = $(this).find(".learnMore");
TweenLite.to(learnMore, 1.0, {opacity:"1.0",delay:4.75,ease:Power3.easeOut});

var optionsInfo = $(this).find(".optionsInfo");
TweenLite.to(optionsInfo, 1.0, {opacity:"1.0",delay:4.75});

ready01C = "not ready";
}

else if(ready01C == "not ready" ) {
var clickedBanner = $(this).attr('id');
$("#" + clickedBanner).css("pointer-events","none");
setTimeout(function(){
$("#" + clickedBanner).css("pointer-events","all");
}, 1000);


var thickRule = $(this).find(".thickRule");
TweenLite.to(thickRule, 0.5, {width:"0px",delay:0.5,ease:Quart.easeInOut});

var thinRule = $(this).find(".thinRule");
TweenLite.to(thinRule, 0.0, {opacity:"0.0",delay:0.5});
TweenLite.to(thinRule, 0.0, {width:"0px",delay:0.5,ease:Quart.easeInOut});
TweenLite.to(thinRule, 0.5, {height:"24px",ease:Quart.easeInOut});

var resistance = $(this).find(".resistance");
TweenLite.to(resistance, 0.0, {opacity:"0.0"});

var firstEver = $(this).find(".firstEver");
TweenLite.to(firstEver, 0.5, {opacity:"0.0"});

var logo = $(this).find(".logo");
TweenLite.to(logo, 1.0, {opacity:"0.0"});

var learnMore = $(this).find(".learnMore");
TweenLite.to(learnMore, 1.0, {opacity:"0.0"});

var optionsInfo = $(this).find(".optionsInfo");
TweenLite.to(optionsInfo, 1.0, {opacity:"0.0"});

ready01C = "ready";
}

}
/* /////////////////////////////////// NUMBER ONE /////////////////////////////////// */



});