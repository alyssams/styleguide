$(document).ready(function(){



/* /////////////////////////////////// GLOBAL VARIABLES /////////////////////////////////// */
var ready01A = "ready";
/* /////////////////////////////////// GLOBAL VARIABLES /////////////////////////////////// */




/* /////////////////////////////////// NUMBER ONE A /////////////////////////////////// */
$('#numOneA').bind('click', numOneA);

function numOneA(){
if(ready01A == "ready") {
var clickedBanner = $(this).attr('id');
$("#" +clickedBanner).css("pointer-events","none");
setTimeout(function(){
$("#" + clickedBanner).css("pointer-events","all");
}, 5750);

        
var thickRuleL = $(this).find(".thickRuleL");
TweenLite.to(thickRuleL, 0.5, {width:"63px",ease:Quart.easeInOut});
TweenLite.to(thickRuleL, 0.5, {height:"46px",delay:0.75,ease:Quart.easeInOut});
TweenLite.to(thickRuleL, 0.5, {height:"0px",delay:1.5,ease:Quart.easeInOut});

var thickRuleR = $(this).find(".thickRuleR");
TweenLite.to(thickRuleR, 0.5, {width:"63px",ease:Quart.easeInOut});
TweenLite.to(thickRuleR, 0.5, {height:"46px",delay:0.75,ease:Quart.easeInOut});
TweenLite.to(thickRuleR, 0.5, {height:"0px",delay:1.5,ease:Quart.easeInOut});

var thinRuleL = $(this).find(".thinRuleL");
TweenLite.to(thinRuleL, 0.5, {width:"63px",ease:Quart.easeInOut});
TweenLite.to(thinRuleL, 0.5, {height:"24px",delay:2.0,ease:Quart.easeInOut});
TweenLite.to(thinRuleL, 0.5, {height:"0px",delay:2.75,ease:Quart.easeInOut});

var thinRuleR = $(this).find(".thinRuleR");
TweenLite.to(thinRuleR, 0.5, {width:"63px",ease:Quart.easeInOut});
TweenLite.to(thinRuleR, 0.5, {height:"24px",delay:2.0,ease:Quart.easeInOut});
TweenLite.to(thinRuleR, 0.5, {height:"0px",delay:2.75,ease:Quart.easeInOut});

var resistance = $(this).find(".resistance");
TweenLite.to(resistance, 0.0, {opacity:"1.0",delay:1.4});

var is = $(this).find(".is");
TweenLite.to(is, 0.0, {opacity:"1.0",delay:1.4});

var futile = $(this).find(".futile");
TweenLite.to(futile, 0.0, {opacity:"1.0",delay:1.4});

var firstEver = $(this).find(".firstEver");
TweenLite.to(firstEver, 0.0, {opacity:"1.0",delay:2.4});

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


var thickRuleL = $(this).find(".thickRuleL");
TweenLite.to(thickRuleL, 0.5, {width:"0px",ease:Quart.easeInOut});
// TweenLite.to(thickRuleL, 0.5, {height:"46px",delay:0.75,ease:Quart.easeInOut});
TweenLite.to(thickRuleL, 0.5, {height:"0px",delay:1.5,ease:Quart.easeInOut});

var thickRuleR = $(this).find(".thickRuleR");
TweenLite.to(thickRuleR, 0.5, {width:"0px",ease:Quart.easeInOut});
// TweenLite.to(thickRuleR, 0.5, {height:"46px",delay:0.75,ease:Quart.easeInOut});
TweenLite.to(thickRuleR, 0.5, {height:"0px",delay:1.5,ease:Quart.easeInOut});

var thinRuleL = $(this).find(".thinRuleL");
TweenLite.to(thinRuleL, 0.5, {width:"0px",ease:Quart.easeInOut});
// TweenLite.to(thinRuleL, 0.5, {height:"24px",delay:2.0,ease:Quart.easeInOut});
TweenLite.to(thinRuleL, 0.5, {height:"0px",delay:2.75,ease:Quart.easeInOut});

var thinRuleR = $(this).find(".thinRuleR");
TweenLite.to(thinRuleR, 0.5, {width:"0px",ease:Quart.easeInOut});
// TweenLite.to(thinRuleR, 0.5, {height:"24px",delay:2.0,ease:Quart.easeInOut});
TweenLite.to(thinRuleR, 0.5, {height:"0px",delay:2.75,ease:Quart.easeInOut});

var resistance = $(this).find(".resistance");
TweenLite.to(resistance, 0.0, {opacity:"0.0"});

var is = $(this).find(".is");
TweenLite.to(is, 0.0, {opacity:"0.0"});

var futile = $(this).find(".futile");
TweenLite.to(futile, 0.0, {opacity:"0.0"});

var thinRule = $(this).find(".thinRule");
TweenLite.to(thinRule, 0.5, {width:"0px",ease:Quart.easeInOut});
TweenLite.to(thinRule, 0.5, {height:"0px",ease:Quart.easeInOut});

var firstEver = $(this).find(".firstEver");
TweenLite.to(firstEver, 0.0, {opacity:"0.0"});

var logo = $(this).find(".logo");
TweenLite.to(logo, 0.5, {opacity:"0.0"});

var learnMore = $(this).find(".learnMore");
TweenLite.to(learnMore, 1.0, {opacity:"0.0"});

var optionsInfo = $(this).find(".rcShown");
TweenLite.to(optionsInfo, 1.0, {opacity:"0.0"});
ready01A = "ready";
}

}
/* /////////////////////////////////// NUMBER ONE A /////////////////////////////////// */



});