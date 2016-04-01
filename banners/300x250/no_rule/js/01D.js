$(document).ready(function(){



/* /////////////////////////////////// GLOBAL VARIABLES /////////////////////////////////// */
var ready01D = "ready";
/* /////////////////////////////////// GLOBAL VARIABLES /////////////////////////////////// */




/* /////////////////////////////////// NUMBER ONE /////////////////////////////////// */
$('#nr300x250_04').bind('click', numOne);

function numOne(){
if(ready01D == "ready") {
var clickedBanner = $(this).attr('id');
$("#" + clickedBanner).css("pointer-events","none");
setTimeout(function(){
$("#" + clickedBanner).css("pointer-events","all");
}, 5750);

        
var rule01 = $(this).find(".rule01");
TweenLite.to(rule01, 0.5, {width:"255px",ease:Quart.easeInOut});
TweenLite.to(rule01, 0.5, {height:"26px",delay:0.75,ease:Quart.easeInOut});
TweenLite.to(rule01, 0.5, {height:"0px",delay:1.5,ease:Quart.easeInOut});

var rule02 = $(this).find(".rule02");
TweenLite.to(rule02, 0.5, {width:"255px",ease:Quart.easeInOut});
TweenLite.to(rule02, 0.5, {height:"0px",delay:2.5,ease:Quart.easeInOut});
TweenLite.to(rule02, 0.5, {opacity:"0.0",delay:3.25,ease:Quart.easeInOut});

var resistance = $(this).find(".resistance");
TweenLite.to(resistance, 0.0, {opacity:"1.0",delay:1.4});

var firstEver = $(this).find(".firstEver");
TweenLite.to(firstEver, 0.0, {opacity:"1.0",delay:0.6});

var logo = $(this).find(".logo");
TweenLite.to(logo, 1.0, {opacity:"1.0",delay:4.0});

var learnMore = $(this).find(".learnMore");
TweenLite.to(learnMore, 1.0, {opacity:"1.0",delay:5.25,ease:Power3.easeOut});

var optionsInfo = $(this).find(".optionsInfo");
TweenLite.to(optionsInfo, 1.0, {opacity:"1.0",delay:5.25});

ready01D = "not ready";
}

else if(ready01D == "not ready" ) {
var clickedBanner = $(this).attr('id');
$("#" + clickedBanner).css("pointer-events","none");
setTimeout(function(){
$("#" + clickedBanner).css("pointer-events","all");
}, 1000);


var rule01 = $(this).find(".rule01");
TweenLite.to(rule01, 0.5, {width:"0px",ease:Quart.easeInOut});

var rule02 = $(this).find(".rule02");
TweenLite.to(rule02, 0.5, {width:"0px",ease:Quart.easeInOut});
TweenLite.to(rule02, 0.5, {height:"27px",delay:0.5,ease:Quart.easeInOut});
TweenLite.to(rule02, 0.5, {opacity:"1.0",delay:0.5,ease:Quart.easeInOut});

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

ready01D = "ready";
}

}
/* /////////////////////////////////// NUMBER ONE /////////////////////////////////// */



});