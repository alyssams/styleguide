$(document).ready(function(){



/* /////////////////////////////////// GLOBAL VARIABLES /////////////////////////////////// */
var ready02A = "ready";
/* /////////////////////////////////// GLOBAL VARIABLES /////////////////////////////////// */




/* /////////////////////////////////// NUMBER Two /////////////////////////////////// */
$('#numTwoA').bind('click', numTwo);

function numTwo(){
if(ready02A == "ready") {
var clickedBanner = $(this).attr('id');
$("#" + clickedBanner).css("pointer-events","none");
setTimeout(function(){
$("#" + clickedBanner).css("pointer-events","all");
}, 5750);

        
var thinRuleTop = $(this).find(".thinRuleTop");
TweenLite.to(thinRuleTop, 0.5, {height:"32px",ease:Quart.easeInOut});

var thinRuleBottom = $(this).find(".thinRuleBottom");
TweenLite.to(thinRuleBottom, 0.5, {height:"32px",ease:Quart.easeInOut});

var secondRule = $(this).find(".secondRule");
TweenLite.to(secondRule, 0.0, {height:"64px",top:"8px",delay:0.5,ease:Quart.easeInOut});
TweenLite.to(secondRule, 0.5, {opacity:"1.0",delay:0.5,ease:Quart.easeInOut});
TweenLite.to(secondRule, 0.5, {width:"8px",delay:1.0,ease:Quart.easeInOut});
TweenLite.to(secondRule, 0.5, {height:"0px",top:"36px",delay:1.5,ease:Quart.easeInOut});

var luxury = $(this).find(".luxury");
TweenLite.to(luxury, 0.0, {opacity:"1.0",delay:1.0});

var logo = $(this).find(".logo");
TweenLite.to(logo, 0.5, {opacity:"1.0",delay:3.0});

var learnMore = $(this).find(".learnMore");
TweenLite.to(learnMore, 1.0, {opacity:"1.0",delay:4.75,ease:Power3.easeOut});

var optionsInfo = $(this).find(".rcShown");
TweenLite.to(optionsInfo, 1.0, {opacity:"1.0",delay:4.75});

ready02A = "not ready";
}

else if(ready02A == "not ready" ) {
var clickedBanner = $(this).attr('id');
$("#" + clickedBanner).css("pointer-events","none");
setTimeout(function(){
$("#" + clickedBanner).css("pointer-events","all");
}, 1000);


var thinRuleTop = $(this).find(".thinRuleTop");
TweenLite.to(thinRuleTop, 0.5, {height:"0px",ease:Quart.easeInOut});

var thinRuleBottom = $(this).find(".thinRuleBottom");
TweenLite.to(thinRuleBottom, 0.5, {height:"0px",ease:Quart.easeInOut});

var secondRule = $(this).find(".secondRule");
TweenLite.to(secondRule, 0.5, {width:"148px",delay:0.5,ease:Quart.easeInOut});
TweenLite.to(secondRule, 0.5, {height:"64px",top:"8px",ease:Quart.easeInOut});
TweenLite.to(secondRule, 0.5, {height:"0px",top:"36px",delay:1.0,ease:Quart.easeInOut});

var luxury = $(this).find(".luxury");
TweenLite.to(luxury, 0.0, {opacity:"0.0",delay:1.0});

var logo = $(this).find(".logo");
TweenLite.to(logo, 0.5, {opacity:"0.0"});

var learnMore = $(this).find(".learnMore");
TweenLite.to(learnMore, 1.0, {opacity:"0.0"});

var optionsInfo = $(this).find(".rcShown");
TweenLite.to(optionsInfo, 1.0, {opacity:"0.0"});

ready02A = "ready";
}

}
/* /////////////////////////////////// NUMBER Two /////////////////////////////////// */



});