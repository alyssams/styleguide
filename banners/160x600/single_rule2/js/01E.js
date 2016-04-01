$(document).ready(function(){



/* /////////////////////////////////// GLOBAL VARIABLES /////////////////////////////////// */
var ready01E = "ready";
/* /////////////////////////////////// GLOBAL VARIABLES /////////////////////////////////// */




/* /////////////////////////////////// NUMBER ONE /////////////////////////////////// */
$('#sr160x600_05').bind('click', numOne);

function numOne(){
if(ready01E == "ready") {
        
var rule01 = $(this).find(".rule01");
TweenLite.to(rule01, 0.5, {width:"126px",ease:Quart.easeInOut});

var resistance = $(this).find(".resistance");
TweenLite.to(resistance, 0.0, {opacity:"1.0",delay:0.5});

var is = $(this).find(".is");
TweenLite.to(is, 0.0, {opacity:"1.0",delay:0.5});

var futile = $(this).find(".futile");
TweenLite.to(futile, 0.0, {opacity:"1.0",delay:0.5});

var rule02 = $(this).find(".rule02");
TweenLite.to(rule02, 0.0, {opacity:"1.0",delay:0.5});
TweenLite.to(rule02, 0.5, {height:"0px",delay:1.0,ease:Quart.easeInOut});
TweenLite.to(rule02, 0.5, {opacity:"0.0",delay:1.75});

var rule03 = $(this).find(".rule03");
TweenLite.to(rule03, 0.0, {opacity:"1.0",delay:0.5});
TweenLite.to(rule03, 0.5, {height:"14px",delay:1.0,ease:Quart.easeInOut});
TweenLite.to(rule03, 0.5, {opacity:"0.0",delay:1.75});

var firstEver = $(this).find(".firstEver");
TweenLite.to(firstEver, 0.0, {opacity:"1.0",delay:0.5});

var logo = $(this).find(".logo");
TweenLite.to(logo, 0.5, {opacity:"1.0",delay:2.75});

var learnMore = $(this).find(".learnMore");
TweenLite.to(learnMore, 1.0, {top:"546px",delay:3.25,ease:Power3.easeOut});

var rcShown = $(this).find(".rcShown");
TweenLite.to(rcShown, 1.0, {top:"583px",delay:3.5,ease:Power3.easeOut});

ready01E = "not ready";
}

else if(ready01E == "not ready" ) {

var rule01 = $(this).find(".rule01");
TweenLite.to(rule01, 0.5, {width:"0px",ease:Quart.easeInOut});
TweenLite.to(rule01, 0.5, {height:"0px",ease:Quart.easeInOut});

var resistance = $(this).find(".resistance");
TweenLite.to(resistance, 0.0, {opacity:"0.0"});

var is = $(this).find(".is");
TweenLite.to(is, 0.0, {opacity:"0.0"});

var futile = $(this).find(".futile");
TweenLite.to(futile, 0.0, {opacity:"0.0"});

var rule02 = $(this).find(".rule02");
TweenLite.to(rule02, 0.0, {opacity:"0.0",delay:0.5});
TweenLite.to(rule02, 0.5, {height:"19px",delay:1.0,ease:Quart.easeInOut});

var rule03 = $(this).find(".rule03");
TweenLite.to(rule03, 0.0, {opacity:"0.0",delay:0.5});
TweenLite.to(rule03, 0.5, {height:"64px",delay:1.0,ease:Quart.easeInOut});

var firstEver = $(this).find(".firstEver");
TweenLite.to(firstEver, 0.0, {opacity:"0.0"});

var logo = $(this).find(".logo");
TweenLite.to(logo, 0.5, {opacity:"0.0"});

var learnMore = $(this).find(".learnMore");
TweenLite.to(learnMore, 1.0, {top:"600px",ease:Power3.easeOut});

var rcShown = $(this).find(".rcShown");
TweenLite.to(rcShown, 1.0, {top:"640px",ease:Power3.easeOut});
ready01E = "ready";
}

}
/* /////////////////////////////////// NUMBER ONE /////////////////////////////////// */



});