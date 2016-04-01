$(document).ready(function(){



/* /////////////////////////////////// GLOBAL VARIABLES /////////////////////////////////// */
var ready01D = "ready";
/* /////////////////////////////////// GLOBAL VARIABLES /////////////////////////////////// */




/* /////////////////////////////////// NUMBER ONE /////////////////////////////////// */
$('#sr2_160x600_04').bind('click', numOne);

function numOne(){
if(ready01D == "ready") {
var clickedBanner = $(this).attr('id');
$("#" +clickedBanner).css("pointer-events","none");
setTimeout(function(){
$("#" + clickedBanner).css("pointer-events","all");
}, 5750);

        
var rule01 = $(this).find(".rule01");
TweenLite.to(rule01, 0.5, {width:"90px",ease:Quart.easeInOut});

var live = $(this).find(".live");
TweenLite.to(live, 0.0, {opacity:"1.0",delay:0.5});

var is = $(this).find(".is");
TweenLite.to(is, 0.0, {opacity:"1.0",delay:0.5});

var futile = $(this).find(".futile");
TweenLite.to(futile, 0.0, {opacity:"1.0",delay:0.5});

var rule02 = $(this).find(".rule02");
TweenLite.to(rule02, 0.0, {opacity:"1.0",delay:0.5});
TweenLite.to(rule02, 0.5, {height:"0px",delay:1.0,ease:Quart.easeInOut});
TweenLite.to(rule02, 0.5, {width:"0px",delay:1.75});

var rule03 = $(this).find(".rule03");
TweenLite.to(rule03, 0.0, {opacity:"1.0",delay:0.5});
TweenLite.to(rule03, 0.5, {height:"14px",delay:1.0,ease:Quart.easeInOut});
TweenLite.to(rule03, 0.5, {width:"0px",delay:1.75});

var theCThybrid = $(this).find(".theCThybrid");
TweenLite.to(theCThybrid, 0.0, {opacity:"1.0",delay:0.5});

var logo = $(this).find(".logo");
TweenLite.to(logo, 0.5, {opacity:"1.0",delay:2.75});

var learnMore = $(this).find(".learnMore");
TweenLite.to(learnMore, 1.0, {opacity:"1.0",delay:4.75,ease:Power3.easeOut});

var optionsInfo = $(this).find(".rcShown");
TweenLite.to(optionsInfo, 1.0, {opacity:"1.0",delay:4.75});

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
TweenLite.to(rule01, 0.5, {height:"0px",ease:Quart.easeInOut});

var live = $(this).find(".live");
TweenLite.to(live, 0.0, {opacity:"0.0"});

var is = $(this).find(".is");
TweenLite.to(is, 0.0, {opacity:"0.0"});

var futile = $(this).find(".futile");
TweenLite.to(futile, 0.0, {opacity:"0.0"});

var rule02 = $(this).find(".rule02");
TweenLite.to(rule02, 0.0, {opacity:"0.0"});
TweenLite.to(rule02, 0.0, {width:"126px"});
TweenLite.to(rule02, 0.5, {height:"19px",ease:Quart.easeInOut});

var rule03 = $(this).find(".rule03");
TweenLite.to(rule03, 0.0, {opacity:"0.0"});
TweenLite.to(rule03, 0.0, {width:"126px"});
TweenLite.to(rule03, 0.5, {height:"64px",ease:Quart.easeInOut});

var theCThybrid = $(this).find(".theCThybrid");
TweenLite.to(theCThybrid, 0.0, {opacity:"0.0"});

var logo = $(this).find(".logo");
TweenLite.to(logo, 0.5, {opacity:"0.0"});

var learnMore = $(this).find(".learnMore");
TweenLite.to(learnMore, 1.0, {opacity:"0.0"});

var optionsInfo = $(this).find(".rcShown");
TweenLite.to(optionsInfo, 1.0, {opacity:"0.0"});
ready01D = "ready";
}

}
/* /////////////////////////////////// NUMBER ONE /////////////////////////////////// */



});