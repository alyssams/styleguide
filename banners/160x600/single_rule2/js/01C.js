$(document).ready(function(){



/* /////////////////////////////////// GLOBAL VARIABLES /////////////////////////////////// */
var ready01C = "ready";
/* /////////////////////////////////// GLOBAL VARIABLES /////////////////////////////////// */




/* /////////////////////////////////// NUMBER ONE /////////////////////////////////// */
$('#sr2_160x600_03').bind('click', numOne);

function numOne(){
if(ready01C == "ready") {
var clickedBanner = $(this).attr('id');
$("#" +clickedBanner).css("pointer-events","none");
setTimeout(function(){
$("#" + clickedBanner).css("pointer-events","all");
}, 5750);

        
var rule01 = $(this).find(".rule01");
TweenLite.to(rule01, 0.5, {width:"90px",ease:Quart.easeInOut});
TweenLite.to(rule01, 0.5, {height:"48px",delay:0.75,ease:Quart.easeInOut});
TweenLite.to(rule01, 0.5, {height:"0px",delay:1.5,ease:Quart.easeInOut});

var live = $(this).find(".live");
TweenLite.to(live, 0.0, {opacity:"1.0",delay:1.4});

var is = $(this).find(".is");
TweenLite.to(is, 0.0, {opacity:"1.0",delay:1.4});

var futile = $(this).find(".futile");
TweenLite.to(futile, 0.0, {opacity:"1.0",delay:1.4});

var rule02 = $(this).find(".rule02");
TweenLite.to(rule02, 0.0, {opacity:"1.0",delay:2.0});
TweenLite.to(rule02, 0.5, {height:"19px",delay:2.5,ease:Quart.easeInOut});
TweenLite.to(rule02, 0.5, {height:"0px",delay:3.25,ease:Quart.easeInOut});

var theCThybrid = $(this).find(".theCThybrid");
TweenLite.to(theCThybrid, 0.0, {opacity:"1.0",delay:3.0});

var logo = $(this).find(".logo");
TweenLite.to(logo, 0.5, {opacity:"1.0",delay:4.0});

var learnMore = $(this).find(".learnMore");
TweenLite.to(learnMore, 1.0, {opacity:"1.0",delay:4.75,ease:Power3.easeOut});

var optionsInfo = $(this).find(".rcShown");
TweenLite.to(optionsInfo, 1.0, {opacity:"1.0",delay:4.75});

ready01C = "not ready";
}

else if(ready01C == "not ready" ) {
var clickedBanner = $(this).attr('id');
$("#" + clickedBanner).css("pointer-events","none");
setTimeout(function(){
$("#" + clickedBanner).css("pointer-events","all");
}, 1000);



var rule01 = $(this).find(".rule01");
TweenLite.to(rule01, 0.5, {width:"0px",ease:Quart.easeInOut});
TweenLite.to(rule01, 0.5, {height:"0px",ease:Quart.easeInOut});

var live = $(this).find(".live");
TweenLite.to(live, 0.0, {opacity:"0.0"});

var is = $(this).find(".is");
TweenLite.to(is, 0.0, {opacity:"0.0"});

var futile = $(this).find(".futile");
TweenLite.to(futile, 0.0, {opacity:"0.0"});

var rule02 = $(this).find(".rule02");
TweenLite.to(rule02, 0.5, {opacity:"0",ease:Quart.easeInOut});

var theCThybrid = $(this).find(".theCThybrid");
TweenLite.to(theCThybrid, 0.0, {opacity:"0.0"});

var logo = $(this).find(".logo");
TweenLite.to(logo, 0.5, {opacity:"0.0"});

var learnMore = $(this).find(".learnMore");
TweenLite.to(learnMore, 1.0, {opacity:"0.0"});

var optionsInfo = $(this).find(".rcShown");
TweenLite.to(optionsInfo, 1.0, {opacity:"0.0"});
ready01C = "ready";
}

}
/* /////////////////////////////////// NUMBER ONE /////////////////////////////////// */



});