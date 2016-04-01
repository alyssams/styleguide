$(document).ready(function(){



/* /////////////////////////////////// GLOBAL VARIABLES /////////////////////////////////// */
var ready01B = "ready";
/* /////////////////////////////////// GLOBAL VARIABLES /////////////////////////////////// */




/* /////////////////////////////////// NUMBER ONE /////////////////////////////////// */
$('#numOneB').bind('click', numOne);

function numOne(){
if(ready01B == "ready") {
var clickedBanner = $(this).attr('id');
$("#" + clickedBanner).css("pointer-events","none");
setTimeout(function(){
$("#" + clickedBanner).css("pointer-events","all");
}, 5750);

        
var rule01L = $(this).find(".rule01L");
TweenLite.to(rule01L, 0.5, {width:"118px",ease:Quart.easeInOut});
TweenLite.to(rule01L, 0.5, {height:"24px",delay:0.75,ease:Quart.easeInOut});
TweenLite.to(rule01L, 0.5, {height:"0px",delay:1.5,ease:Quart.easeInOut});

var rule01R = $(this).find(".rule01R");
TweenLite.to(rule01R, 0.5, {width:"118px",ease:Quart.easeInOut});
TweenLite.to(rule01R, 0.5, {height:"24px",delay:0.75,ease:Quart.easeInOut});
TweenLite.to(rule01R, 0.5, {height:"0px",delay:1.5,ease:Quart.easeInOut});

var rule02L = $(this).find(".rule02L");
TweenLite.to(rule02L, 0.5, {width:"118px",ease:Quart.easeInOut});
TweenLite.to(rule02L, 0.5, {height:"24px",delay:1.75,ease:Quart.easeInOut});
TweenLite.to(rule02L, 0.5, {height:"0px",delay:2.5,ease:Quart.easeInOut});

var rule02R = $(this).find(".rule02R");
TweenLite.to(rule02R, 0.5, {width:"118px",ease:Quart.easeInOut});
TweenLite.to(rule02R, 0.5, {height:"24px",delay:1.75,ease:Quart.easeInOut});
TweenLite.to(rule02R, 0.5, {height:"0px",delay:2.5,ease:Quart.easeInOut});

var resistance = $(this).find(".resistance");
TweenLite.to(resistance, 0.0, {opacity:"1.0",delay:1.4});

var firstEver = $(this).find(".firstEver");
TweenLite.to(firstEver, 0.0, {opacity:"1.0",delay:2.25});

var logo = $(this).find(".logo");
TweenLite.to(logo, 1.0, {opacity:"1.0",delay:3.25});

var learnMore = $(this).find(".learnMore");
TweenLite.to(learnMore, 1.0, {opacity:"1.0",delay:4.5,ease:Power3.easeOut});

var optionsInfo = $(this).find(".optionsInfo");
TweenLite.to(optionsInfo, 1.0, {opacity:"1.0",delay:4.5});

ready01B = "not ready";
}

else if(ready01B == "not ready" ) {
var clickedBanner = $(this).attr('id');
$("#" + clickedBanner).css("pointer-events","none");
setTimeout(function(){
$("#" + clickedBanner).css("pointer-events","all");
}, 1000);


var rule01L = $(this).find(".rule01L");
TweenLite.to(rule01L, 0.5, {width:"0px",ease:Quart.easeInOut});

var rule01R = $(this).find(".rule01R");
TweenLite.to(rule01R, 0.5, {width:"0px",ease:Quart.easeInOut});

var rule02L = $(this).find(".rule02L");
TweenLite.to(rule02L, 0.5, {width:"0px",ease:Quart.easeInOut});

var rule02R = $(this).find(".rule02R");
TweenLite.to(rule02R, 0.5, {width:"0px",ease:Quart.easeInOut});


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

ready01B = "ready";
}

}
/* /////////////////////////////////// NUMBER ONE /////////////////////////////////// */



});