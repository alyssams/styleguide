$(document).ready(function(){



/* /////////////////////////////////// GLOBAL VARIABLES /////////////////////////////////// */
var ready05 = "ready";
/* /////////////////////////////////// GLOBAL VARIABLES /////////////////////////////////// */




/* /////////////////////////////////// NUMBER Five /////////////////////////////////// */
$('#numFive').bind('click', numFive);

function numFive(){
if(ready05 == "ready") {
        
var thickRuleL = $(this).find(".thickRuleL");
TweenLite.to(thickRuleL, 0.5, {width:"113px",ease:Quart.easeInOut});
TweenLite.to(thickRuleL, 0.5, {height:"23px",delay:0.75,ease:Quart.easeInOut});
TweenLite.to(thickRuleL, 0.5, {height:"0px",delay:1.5,ease:Quart.easeInOut});

var thickRuleR = $(this).find(".thickRuleR");
TweenLite.to(thickRuleR, 0.5, {width:"111px",ease:Quart.easeInOut});
TweenLite.to(thickRuleR, 0.5, {height:"23px",delay:0.75,ease:Quart.easeInOut});
TweenLite.to(thickRuleR, 0.5, {height:"0px",delay:1.5,ease:Quart.easeInOut});

var resistance = $(this).find(".resistance");
TweenLite.to(resistance, 0.0, {opacity:"1.0",delay:1.4});

var is = $(this).find(".is");
TweenLite.to(is, 0.0, {opacity:"1.0",delay:1.4});

var futile = $(this).find(".futile");
TweenLite.to(futile, 0.0, {opacity:"1.0",delay:1.4});

var thinRule = $(this).find(".thinRule");
TweenLite.to(thinRule, 0.5, {opacity:"1.0",delay:2.0,ease:Quart.easeInOut});
TweenLite.to(thinRule, 0.5, {width:"224px",ease:Quart.easeInOut});
TweenLite.to(thinRule, 0.5, {height:"0px",delay:2.5,ease:Quart.easeInOut});

var firstEver = $(this).find(".firstEver");
TweenLite.to(firstEver, 0.0, {opacity:"1.0",delay:2.4});

var logo = $(this).find(".logo");
TweenLite.to(logo, 0.5, {opacity:"1.0",delay:3.5});

var learnMore = $(this).find(".learnMore");
TweenLite.to(learnMore, 1.0, {opacity:"1.0",delay:3.5,ease:Power3.easeOut});

var rcShown = $(this).find(".rcShown");
TweenLite.to(rcShown, 1.0, {opacity:"1.0",delay:4.75,ease:Power3.easeOut});

ready05 = "not ready";
}

else if(ready05 == "not ready" ) {

var thickRuleL = $(this).find(".thickRuleL");
TweenLite.to(thickRuleL, 0.5, {width:"0px",delay:0.5,ease:Quart.easeInOut});
TweenLite.to(thickRuleL, 0.5, {height:"0px",delay:0.5,ease:Quart.easeInOut});
TweenLite.to(thickRuleL, 0.5, {height:"0px",delay:0.5,ease:Quart.easeInOut});

var thickRuleR = $(this).find(".thickRuleR");
TweenLite.to(thickRuleR, 0.5, {width:"0px",delay:0.5,ease:Quart.easeInOut});
TweenLite.to(thickRuleR, 0.5, {height:"0px",delay:0.5,ease:Quart.easeInOut});
TweenLite.to(thickRuleR, 0.5, {height:"0px",delay:0.5,ease:Quart.easeInOut});

var resistance = $(this).find(".resistance");
TweenLite.to(resistance, 0.5, {opacity:"0.0"});

var is = $(this).find(".is");
TweenLite.to(is, 0.5, {opacity:"0.0"});

var futile = $(this).find(".futile");
TweenLite.to(futile, 0.5, {opacity:"0.0"});

var thinRule = $(this).find(".thinRule");
TweenLite.to(thinRule, 0.0, {opacity:"0.0",delay:0.5,ease:Quart.easeInOut});
TweenLite.to(thinRule, 0.5, {width:"0px",delay:0.5,ease:Quart.easeInOut});
TweenLite.to(thinRule, 0.5, {height:"25px",ease:Quart.easeInOut});

var firstEver = $(this).find(".firstEver");
TweenLite.to(firstEver, 0.0, {opacity:"0.0"});

var logo = $(this).find(".logo");
TweenLite.to(logo, 0.5, {opacity:"0.0"});

var learnMore = $(this).find(".learnMore");
TweenLite.to(learnMore, 1.0, {opacity:"0.0",ease:Power3.easeOut});

var rcShown = $(this).find(".rcShown");
TweenLite.to(rcShown, 1.0, {opacity:"0.0",ease:Power3.easeOut});

ready05 = "ready";
}

}
/* /////////////////////////////////// NUMBER Five /////////////////////////////////// */



});