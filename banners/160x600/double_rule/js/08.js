$(document).ready(function(){



/* /////////////////////////////////// GLOBAL VARIABLES /////////////////////////////////// */
var ready08 = "ready";
/* /////////////////////////////////// GLOBAL VARIABLES /////////////////////////////////// */




/* /////////////////////////////////// NUMBER Eight /////////////////////////////////// */
$('#numEight').bind('click', numEight);

function numEight(){
if(ready08 == "ready") {
        
var luxury = $(this).find(".luxury");
TweenLite.to(luxury, 0.0, {opacity:"1.0",delay:2.0});

var thinRuleTop = $(this).find(".thinRuleTop");
TweenLite.to(thinRuleTop, 0.5, {height:"34.5px",ease:Quart.easeInOut});
TweenLite.to(thinRuleTop, 1.0, {width:"313px",delay:1.0,ease:Quart.easeInOut});
TweenLite.to(thinRuleTop, 1.0, {width:"0px",delay:2.5,ease:Quart.easeInOut});
TweenLite.to(thinRuleTop, 1.0, {width:"313px",delay:4.0,ease:Quart.easeInOut});
TweenLite.to(thinRuleTop, 1.0, {width:"0px",delay:5.25,ease:Quart.easeInOut});


var thinRuleBottom = $(this).find(".thinRuleBottom");
TweenLite.to(thinRuleBottom, 0.5, {height:"36px",ease:Quart.easeInOut});
TweenLite.to(thinRuleBottom, 1.0, {width:"313px",delay:1.0,ease:Quart.easeInOut});
TweenLite.to(thinRuleBottom, 1.0, {width:"0px",delay:2.5,ease:Quart.easeInOut});
TweenLite.to(thinRuleBottom, 1.0, {width:"313px",delay:4.0,ease:Quart.easeInOut});
TweenLite.to(thinRuleBottom, 1.0, {width:"0px",delay:5.25,ease:Quart.easeInOut});


var coverLine2 = $(this).find("#coverLine2");
TweenLite.to(coverLine2, 0.0, {opacity:"0.0",delay:5.0});

var theES = $(this).find(".theES");
TweenLite.to(theES, 0.75, {left:"18px",delay:6.75});


var logo = $(this).find(".logo");
TweenLite.to(logo, 0.5, {opacity:"1.0",delay:8.5});

var learnMore = $(this).find(".learnMore");
TweenLite.to(learnMore, 1.0, {opacity:"1.0",delay:8.5,ease:Power3.easeOut});

var rcShown = $(this).find(".rcShown");
TweenLite.to(rcShown, 1.0, {opacity:"1.0",delay:10.00,ease:Power3.easeOut});

ready08 = "not ready";
}

else if(ready08 == "not ready" ) {

var luxury = $(this).find(".luxury");
TweenLite.to(luxury, 0.5, {opacity:"0.0"});

var thinRuleTop = $(this).find(".thinRuleTop");
TweenLite.to(thinRuleTop, 0.5, {height:"0px",ease:Quart.easeInOut});

var thinRuleBottom = $(this).find(".thinRuleBottom");
TweenLite.to(thinRuleBottom, 0.5, {height:"0px",ease:Quart.easeInOut});

var coverLine2 = $(this).find("#coverLine2");
TweenLite.to(coverLine2, 0.0, {opacity:"1.0"});

var theES = $(this).find(".theES");
TweenLite.to(theES, 0.0, {left:"-77px"});


var firstEver = $(this).find(".firstEver");
TweenLite.to(firstEver, 0.0, {opacity:"0.0"});

var logo = $(this).find(".logo");
TweenLite.to(logo, 0.5, {opacity:"0.0"});

var learnMore = $(this).find(".learnMore");
TweenLite.to(learnMore, 1.0, {opacity:"0.0",ease:Power3.easeOut});

var rcShown = $(this).find(".rcShown");
TweenLite.to(rcShown, 1.0, {opacity:"0.0",ease:Power3.easeOut});

ready08 = "ready";
}

}
/* /////////////////////////////////// NUMBER Eight /////////////////////////////////// */



});