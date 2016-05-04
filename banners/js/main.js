(function($) {
    $(document).ready(function(){
        $("#debug").css("opacity","0");


        /* /////////////////////////////////// GLOBAL VARIABLES /////////////////////////////////// */
        var banners160x600 = "visible";
        var banners300x250 = "visible";
        var banners728x90 = "visible";
        var banners300x600 = "visible";
        var singleRule = "visible";
        var singleRule2 = "visible";
        var doubleRule = "visible";
        var verticalRule = "visible";
        var noRule = "visible";
        var visibleCountSize = 4;
        var visibleCountStructure = 5;
        var debug = "hidden";
        /* /////////////////////////////////// GLOBAL VARIABLES /////////////////////////////////// */
        $(".sizeCount").html(visibleCountSize);
        $(".structureCount").html(visibleCountStructure);
        $(".status160x600").html(banners160x600);
        $(".status300x250").html(banners300x250);
        $(".status300x600").html(banners300x600);
        $(".status728x90").html(banners728x90);


        $(document).ready(showAllInactive());

        function showAllInactive(){
            $(".showAll").css("color","#ccc");
            $(".showAll").css("pointer-events","none");
        }

        function showAllActive(){
            $(".showAll").css("color","#000");
            $(".showAll").css("pointer-events","auto");
        }

        function hideAllInactive(){
            $(".hideAll").css("color","#ccc");
            $(".hideAll").css("pointer-events","none");
        }

        function hideAllActive(){
            $(".hideAll").css("color","#000");
            $(".hideAll").css("pointer-events","auto");
        }

        function updateDebug(){
            $(".sizeCount").html(visibleCountSize);
            $(".structureCount").html(visibleCountStructure);
            $(".status160x600").html(banners160x600);
            $(".status300x250").html(banners300x250);
            $(".status300x600").html(banners300x600);
            $(".status728x90").html(banners728x90);
            $(".status160x600").html(banners160x600);
        }






        $('li').not(".showAll,.hideAll,.updated").bind('mouseover', liOn);

        function liOn(){
            var selected = $(this).attr('data-selected');
            if(selected == "true") {
                $(this).removeClass("selected");
                $(this).addClass("strike");
            }
            else{
                $(this).addClass("selected");
            } 
        }

        $('li').bind('mouseout', liOff);

        function liOff(){
            var selected = $(this).attr('data-selected');
            if(selected == "true") {
                $(this).addClass("selected");
                $(this).removeClass("strike");
            }
            else{
                $(this).removeClass("selected");
            } 
        }


        $('.showAll').bind('click', func_showAll);

        function func_showAll(){
            $("#banners").find("div[id*='container']").fadeIn(500);
            $('.160x600,.300x250,.300x600,.728x90,.singleRule,.doubleRule,.verticalRule,.noRule,.singleRule2').addClass("selected").attr("data-selected", "true");
            banners160x600 = "visible";
            banners300x250 = "visible";
            banners728x90 = "visible";
            banners300x600 = "visible";
            singleRule = "visible";
            singleRule2 = "visible";
            doubleRule = "visible";
            verticalRule = "visible";
            noRule = "visible";
            visibleCountSize = 4;
            visibleCountStructure = 5;
            $(updateDebug());
            $(showAllInactive());
            $(hideAllActive());
        }


        $('.hideAll').bind('click', func_hideAll);

        function func_hideAll(){
            $(this).css("background-color","#fff");
            $("#banners").find("div[id*='container']").fadeOut(500);
            $('.160x600,.300x250,.300x600,.728x90,.singleRule,.doubleRule,.verticalRule,.noRule,.singleRule2').removeClass("selected").attr("data-selected", "false");
            banners160x600 = "hidden";
            banners300x250 = "hidden";
            banners728x90 = "hidden";
            banners300x600 = "hidden";
            singleRule = "hidden";
            singleRule2 = "hidden";
            doubleRule = "hidden";
            verticalRule = "hidden";
            noRule = "hidden";
            visibleCountSize = 0;
            visibleCountStructure = 0;
            $(updateDebug());
            $(hideAllInactive());
            $(showAllActive());
        }





        $('.160x600').bind('click', func_banners160x600);

        function func_banners160x600(){
            if(banners160x600 == "hidden" && visibleCountSize >1) {
                $("#container160x600").fadeIn(500);
                $(this).addClass("selected");
                banners160x600 = "visible";
                $(this).attr("data-selected", "true");
                visibleCountSize = visibleCountSize + 1;
                $(updateDebug());
            }

            else if(banners160x600 == "hidden" && visibleCountSize == 1) {
                $("#container160x600").fadeIn(500);
                $(this).addClass("selected");
                banners160x600 = "visible";
                $(this).attr("data-selected", "true");
                visibleCountSize = visibleCountSize + 1;
                $(updateDebug());
            }


            else if(banners160x600 == "hidden" && visibleCountSize == 0) {
                $("#container160x600").fadeIn(500);
                $(this).addClass("selected");
                banners160x600 = "visible";
                $(this).attr("data-selected", "true");
                visibleCountSize = visibleCountSize + 1;
                $('.singleRule,.doubleRule,.verticalRule,.noRule').attr("data-selected", "true").addClass("selected");
                $("#banners").find("div[class='structure01']").fadeIn(500);
                $("#banners").find("div[id*='containersr2']").fadeIn(500);
                $("#banners").find("div[class='structure05']").fadeIn(500);
                $("#banners").find("div[class='structure04']").fadeIn(500);
                $("#banners").find("div[class='structure02']").fadeIn(500);
                singleRule = "visible";
                singleRule2 = "visible";
                doubleRule = "visible";
                verticalRule = "visible";
                noRule = "visible";
                visibleCountStructure = 5;
                $(updateDebug());
            }




            else if(banners160x600 =="visible" && visibleCountSize == 1){
                $("#container160x600").fadeOut(500);
                $(this).removeClass("selected strike");
                banners160x600 = "hidden";
                $(this).attr("data-selected", "false");
                visibleCountSize = visibleCountSize - 1;
                $('.singleRule,.doubleRule,.verticalRule,.noRule').removeClass("selected").attr("data-selected", "false");
                $("#banners").find("div[class='structure01']").fadeOut(500);
                $("#banners").find("div[id*='containersr2']").fadeOut(500);
                $("#banners").find("div[class='structure05']").fadeOut(500);
                $("#banners").find("div[class='structure04']").fadeOut(500);
                $("#banners").find("div[class='structure02']").fadeOut(500);
                singleRule = "hidden";
                singleRule2 = "hidden";
                doubleRule = "hidden";
                verticalRule = "hidden";
                noRule = "hidden";
                visibleCountStructure = 0;
                $(updateDebug());

            }

            else if(banners160x600 == "visible" ) {
                $("#container160x600").fadeOut(500);
                $(this).removeClass("selected strike");
                banners160x600 = "hidden";
                $(this).attr("data-selected", "false");
                visibleCountSize = visibleCountSize - 1;
                $(updateDebug());
            }
        }


        $('.300x250').bind('click', func_banners300x250);

        function func_banners300x250(){
            if(banners300x250 == "hidden" && visibleCountSize >1) {
                $("#container300x250").fadeIn(500);
                $(this).addClass("selected");
                banners300x250 = "visible";
                $(this).attr("data-selected", "true");
                visibleCountSize = visibleCountSize + 1;
                $(updateDebug());
            }

            else if(banners300x250 == "hidden" && visibleCountSize == 1) {
                $("#container300x250").fadeIn(500);
                $(this).addClass("selected");
                banners300x250 = "visible";
                $(this).attr("data-selected", "true");
                visibleCountSize = visibleCountSize + 1;
                $(updateDebug());
            }


            else if(banners300x250 == "hidden" && visibleCountSize == 0) {
                $("#container300x250").fadeIn(500);
                $(this).addClass("selected");
                banners300x250 = "visible";
                $(this).attr("data-selected", "true");
                visibleCountSize = visibleCountSize + 1;
                $('.singleRule,.doubleRule,.verticalRule,.noRule').attr("data-selected", "true").addClass("selected");
                $("#banners").find("div[class='structure01']").fadeIn(500);
                $("#banners").find("div[class='structure05']").fadeIn(500);
                $("#banners").find("div[class='structure04']").fadeIn(500);
                $("#banners").find("div[class='structure02']").fadeIn(500);
                singleRule = "visible";
                doubleRule = "visible";
                verticalRule = "visible";
                noRule = "visible";
                visibleCountStructure = 5;
                $(updateDebug());
            }




            else if(banners300x250 =="visible" && visibleCountSize == 1){
                $("#container300x250").fadeOut(500);
                $(this).removeClass("selected strike");
                banners300x250 = "hidden";
                $(this).attr("data-selected", "false");
                visibleCountSize = visibleCountSize - 1;
                $('.singleRule,.doubleRule,.verticalRule,.noRule').removeClass("selected").attr("data-selected", "false");
                $("#banners").find("div[class='structure01']").fadeOut(500);
                $("#banners").find("div[class='structure05']").fadeOut(500);
                $("#banners").find("div[class='structure04']").fadeOut(500);
                $("#banners").find("div[class='structure02']").fadeOut(500);
                singleRule = "hidden";
                doubleRule = "hidden";
                verticalRule = "hidden";
                noRule = "hidden";
                visibleCountStructure = 0;
                $(updateDebug());

            }

            else if(banners300x250 == "visible" ) {
                $("#container300x250").fadeOut(500);
                $(this).removeClass("selected strike");
                banners300x250 = "hidden";
                $(this).attr("data-selected", "false");
                visibleCountSize = visibleCountSize - 1;
                $(updateDebug());
            }
        }


        $('.728x90').bind('click', func_banners728x90);

        function func_banners728x90(){
            if(banners728x90 == "hidden" && visibleCountSize >1) {
                $("#container728x90").fadeIn(500);
                $(this).addClass("selected");
                banners728x90 = "visible";
                $(this).attr("data-selected", "true");
                visibleCountSize = visibleCountSize + 1;
                $(updateDebug());

            }


            else if(banners728x90 == "hidden" && visibleCountSize == 0) {
                $("#container728x90").fadeIn(500);
                $(this).addClass("selected");
                banners728x90 = "visible";
                $(this).attr("data-selected", "true");
                visibleCountSize = visibleCountSize + 1;
                $('.singleRule,.doubleRule,.verticalRule,.noRule').attr("data-selected", "true").addClass("selected");
                $("#banners").find("div[class='structure01']").fadeIn(500);
                $("#banners").find("div[class='structure05']").fadeIn(500);
                $("#banners").find("div[class='structure04']").fadeIn(500);
                $("#banners").find("div[class='structure02']").fadeIn(500);
                singleRule = "visible";
                doubleRule = "visible";
                verticalRule = "visible";
                noRule = "visible";
                visibleCountStructure = 5;
                $(updateDebug());
            }




            else if(banners728x90 =="visible" && visibleCountSize == 1){
                $("#container728x90").fadeOut(500);
                $(this).removeClass("selected strike");
                banners728x90 = "hidden";
                $(this).attr("data-selected", "false");
                visibleCountSize = visibleCountSize - 1;
                $('.singleRule,.doubleRule,.verticalRule,.noRule').removeClass("selected").attr("data-selected", "false");
                $("#banners").find("div[class='structure01']").fadeOut(500);
                $("#banners").find("div[class='structure05']").fadeOut(500);
                $("#banners").find("div[class='structure04']").fadeOut(500);
                $("#banners").find("div[class='structure02']").fadeOut(500);
                singleRule = "hidden";
                doubleRule = "hidden";
                verticalRule = "hidden";
                noRule = "hidden";
                visibleCountStructure = 0;
                $(updateDebug());

            }

            else if(banners728x90 == "visible" ) {
                $("#container728x90").fadeOut(500);
                $(this).removeClass("selected strike");
                banners728x90 = "hidden";
                $(this).attr("data-selected", "false");
                visibleCountSize = visibleCountSize - 1;
                $(updateDebug());
            }
        }

        $('.300x600').bind('click', func_banners300x600);

        function func_banners300x600(){
            if(banners300x600 == "hidden" && visibleCountSize >1) {
                $("#container300x600").fadeIn(500);
                $(this).addClass("selected");
                banners300x600 = "visible";
                $(this).attr("data-selected", "true");
                visibleCountSize = visibleCountSize + 1;
                $(updateDebug());
            }

            else if(banners300x600 == "hidden" && visibleCountSize == 1) {
                $("#container300x600").fadeIn(500);
                $(this).addClass("selected");
                banners300x600 = "visible";
                $(this).attr("data-selected", "true");
                visibleCountSize = visibleCountSize + 1;
                $(updateDebug());
            }


            else if(banners300x600 == "hidden" && visibleCountSize == 0) {
                $("#container300x600").fadeIn(500);
                $(this).addClass("selected");
                banners300x600 = "visible";
                $(this).attr("data-selected", "true");
                visibleCountSize = visibleCountSize + 1;
                $('.singleRule,.doubleRule,.verticalRule,.noRule').attr("data-selected", "true").addClass("selected");
                $("#banners").find("div[class='structure01']").fadeIn(500);
                $("#banners").find("div[class='structure05']").fadeIn(500);
                $("#banners").find("div[class='structure04']").fadeIn(500);
                $("#banners").find("div[class='structure02']").fadeIn(500);
                singleRule = "visible";
                doubleRule = "visible";
                verticalRule = "visible";
                noRule = "visible";
                visibleCountStructure = 5;
                $(updateDebug());
            }




            else if(banners300x600 =="visible" && visibleCountSize == 1){
                $("#container300x600").fadeOut(500);
                $(this).removeClass("selected strike");
                banners300x600 = "hidden";
                $(this).attr("data-selected", "false");
                visibleCountSize = visibleCountSize - 1;
                $('.singleRule,.doubleRule,.verticalRule,.noRule').removeClass("selected").attr("data-selected", "false");
                $("#banners").find("div[class='structure01']").fadeOut(500);
                $("#banners").find("div[class='structure05']").fadeOut(500);
                $("#banners").find("div[class='structure04']").fadeOut(500);
                $("#banners").find("div[class='structure02']").fadeOut(500);
                singleRule = "hidden";
                doubleRule = "hidden";
                verticalRule = "hidden";
                noRule = "hidden";
                visibleCountStructure = 0;
                $(updateDebug());

            }

            else if(banners300x600 == "visible" ) {
                $("#container300x600").fadeOut(500);
                $(this).removeClass("selected strike");
                banners300x600 = "hidden";
                $(this).attr("data-selected", "false");
                visibleCountSize = visibleCountSize - 1;
                $(updateDebug());
            }
        }


        $('.singleRule').bind('click', func_singleRule);

        function func_singleRule(){
            if(singleRule == "hidden" && visibleCountStructure >=1) {
                $("#banners").find("div[class=structure01]").fadeIn(500);
                $(this).addClass("selected");
                singleRule = "visible";
                $(this).attr("data-selected", "true");
                visibleCountStructure = visibleCountStructure + 1;
                $(updateDebug());
                $("#debug").css("background-color","red");
            }


            else if(singleRule == "hidden" && visibleCountStructure == 0) {
                $("#banners").find("div[class=structure01]").fadeIn(500);
                $(this).addClass("selected");
                singleRule = "visible";
                $(this).attr("data-selected", "true");
                visibleCountStructure = visibleCountStructure + 1;
                $('.doubleRule,.verticalRule,.noRule').removeClass("selected").attr("data-selected", "false");
                $("#banners").find("div[class='structure02']").hide();
                $("#banners").find("div[class='structure03']").hide();
                $("#banners").find("div[class='structure04']").hide();
                $("#banners").find("div[class='structure05']").hide();
                singleRule2 = "hidden";
                doubleRule = "hidden";
                verticalRule = "hidden";
                noRule = "hidden";
                banners160x600 = "visible";
                banners300x250 = "visible";
                banners728x90 = "visible";
                banners300x600 = "visible";
                $('.160x600,.300x250,.300x600,.728x90').addClass("selected").attr("data-selected", "true");
                visibleCountSize = 4;
                $(updateDebug());
                $("#debug").css("background-color","blue");
            }

            else if(singleRule =="visible" && visibleCountStructure == 1){
                $("#banners").find("div[class=structure01]").fadeOut(500);
                $(this).removeClass("selected strike");
                singleRule = "hidden";
                $(this).attr("data-selected", "false");
                visibleCountStructure = visibleCountStructure - 1;
                visibleCountSize = 0;
                $("#banners").find("div[id*='container']").fadeOut(500);
        //banners160x600 = "hidden";
        banners300x250 = "hidden";
        banners728x90 = "hidden";
        banners300x600 = "hidden";
        $('.160x600,.300x250,.300x600,.728x90').removeClass("selected").attr("data-selected", "false");
        $("#banners").find("div[class=structure01]").fadeOut(500);
        singleRule = "hidden";
        $(updateDebug());
        $("#debug").css("background-color","purple");
        }

        else if(singleRule == "visible" && visibleCountStructure >1) {
            $("#banners").find("div[class=structure01]").fadeOut(500);
            $(this).removeClass("selected strike");
            singleRule = "hidden";
            $(this).attr("data-selected", "false");
            visibleCountStructure = visibleCountStructure -1;
            $(updateDebug());
            $("#debug").css("background-color","orange");
        }

        else if(singleRule == "hidden" && visibleCountStructure == 0 && visibleCountStructure == 0) {
                $("#banners").find("div[class=structure01]").fadeIn(500);
                $("#banners").find("div[id='container']").fadeIn(500);
                $(this).addClass("selected");
                singleRule = "visible";
                $(this).attr("data-selected", "true");
                visibleCountStructure = visibleCountStructure + 1;
                banners160x600 = "visible";
                banners300x250 = "visible";
                banners728x90 = "visible";
                banners300x600 = "visible";
                $('.160x600,.300x250,.300x600,.728x90').addClass("selected").attr("data-selected", "true");
                visibleCountSize = 4;
                $(updateDebug());
                $("#debug").css("background-color","aqua");
            }
        }



        $('.singleRule2').bind('click', func_singleRule2);

        function func_singleRule2(){
            if(singleRule2 == "hidden" && visibleCountStructure >=1) {
                $("#banners").find("div[class=structure03]").fadeIn(500);
                $(this).addClass("selected");
                singleRule2 = "visible";
                $(this).attr("data-selected", "true");
                visibleCountStructure = visibleCountStructure + 1;
                $(updateDebug());
                $("#debug").css("background-color","maroon");
            }


            else if(singleRule2 == "hidden" && visibleCountStructure == 0) {
                $("#banners").find("div[class=structure03]").fadeIn(500);
                $(this).addClass("selected");
                singleRule2 = "visible";
                $(this).attr("data-selected", "true");
                visibleCountStructure = visibleCountStructure + 1;
                $('.doubleRule,.verticalRule,.noRule').removeClass("selected").attr("data-selected", "false");
                $("#banners").find("div[id*='container']").fadeIn(500);
                $("#banners").find("div[class='structure02']").hide();
                $("#banners").find("div[class='structure01']").hide();
                $("#banners").find("div[class='structure04']").hide();
                $("#banners").find("div[class='structure05']").hide();
                singleRule = "hidden";
                doubleRule = "hidden";
                verticalRule = "hidden";
                noRule = "hidden";
                banners160x600 = "visible";
                banners300x250 = "visible";
                banners728x90 = "visible";
                banners300x600 = "visible";
                $('.160x600,.300x250,.300x600,.728x90').addClass("selected").attr("data-selected", "true");
                visibleCountSize = 4;
                $(updateDebug());
                $("#debug").css("background-color","blue");
            }

            else if(singleRule2 =="visible" && visibleCountStructure == 1){
                $("#banners").find("div[class=structure03]").fadeOut(500);
                $(this).removeClass("selected strike");
                singleRule2 = "hidden";
                $(this).attr("data-selected", "false");
                visibleCountStructure = visibleCountStructure - 1;
                visibleCountSize = 0;
        // $("#banners").find("div[id*='container']").fadeOut(500);
        //banners160x600 = "hidden";
        banners300x250 = "hidden";
        banners728x90 = "hidden";
        banners300x600 = "hidden";
        $('.160x600,.300x250,.300x600,.728x90').removeClass("selected").attr("data-selected", "false");
        $("#banners").find("div[class=structure01]").fadeOut(500);
        $(updateDebug());
        $("#debug").css("background-color","purple");
        }

        else if(singleRule2 == "visible" && visibleCountStructure >1) {
            $("#banners").find("div[class=structure03]").fadeOut(500);
            $(this).removeClass("selected strike");
            singleRule2 = "hidden";
            $(this).attr("data-selected", "false");
            visibleCountStructure = visibleCountStructure -1;
            $(updateDebug());
            $("#debug").css("background-color","orange");
        }

        else if(singleRule2 == "hidden" && visibleCountStructure == 0 && visibleCountStructure == 0) {
            $("#banners").find("div[class=structure03]").fadeIn(500);
        // $("#banners").find("div[id='container']").fadeIn(500);
        $(this).addClass("selected");
        singleRule2 = "visible";
        $(this).attr("data-selected", "true");
        visibleCountStructure = visibleCountStructure + 1;
        banners160x600 = "visible";
        banners300x250 = "visible";
        banners728x90 = "visible";
        banners300x600 = "visible";
        $('.160x600,.300x250,.300x600,.728x90').addClass("selected").attr("data-selected", "true");
        visibleCountSize = 4;
        $(updateDebug());
        $("#debug").css("background-color","aqua");
        }


        }











        $('.doubleRule').bind('click', func_doubleRule);

        function func_doubleRule(){
            if(doubleRule == "hidden" && visibleCountStructure >=1) {
                $("#banners").find("div[class='structure05']").fadeIn(500);
                $(this).addClass("selected");
                doubleRule = "visible";
                $(this).attr("data-selected", "true");
                visibleCountStructure = visibleCountStructure + 1;
                $(updateDebug());
            }


            else if(doubleRule == "hidden" && visibleCountStructure == 0) {
                $("#banners").find("div[class='structure05']").fadeIn(500);
                $(this).addClass("selected");
                doubleRule = "visible";
                $(this).attr("data-selected", "true");
                visibleCountStructure = visibleCountStructure + 1;
                $('.singleRule,.verticalRule,.noRule').removeClass("selected").attr("data-selected", "false");
                $("#banners").find("div[class='structure01']").hide();
                $("#banners").find("div[class='structure02']").hide();
                $("#banners").find("div[class='structure04']").hide();
                $("#banners").find("div[class='structure03']").hide();

                singleRule = "hidden";
                singleRule2 = "hidden";
                verticalRule = "hidden";
                noRule = "hidden";
                banners160x600 = "visible";
                banners300x250 = "visible";
                banners728x90 = "visible";
                banners300x600 = "visible";
                $('.160x600,.300x250,.300x600,.728x90').addClass("selected").attr("data-selected", "true");
                visibleCountSize = 4;
                $(updateDebug());
            }

            else if(doubleRule =="visible" && visibleCountStructure == 1){
                $("#banners").find("div[class='structure05']").fadeOut(500);
                $(this).removeClass("selected strike");
                doubleRule = "hidden";
                $(this).attr("data-selected", "false");
                visibleCountStructure = visibleCountStructure - 1;
                visibleCountSize = 0;
        // $("#banners").find("div[id*='container']").fadeOut(500);
        banners160x600 = "hidden";
        banners300x250 = "hidden";
        banners728x90 = "hidden";
        banners300x600 = "hidden";
        $('.160x600,.300x250,.300x600,.728x90').removeClass("selected").attr("data-selected", "false");
        $("#banners").find("div[class='structure01']").fadeOut(500);
        singleRule = "hidden";
        singleRule2 = "hidden";
        verticalRule = "hidden";
        noRule = "hidden";
        $(updateDebug());
        }

        else if(doubleRule == "visible" && visibleCountStructure >1) {
            $("#banners").find("div[class='structure05']").fadeOut(500);
            $(this).removeClass("selected strike");
            doubleRule = "hidden";
            $(this).attr("data-selected", "false");
            visibleCountStructure = visibleCountStructure -1;
            $(updateDebug());
        }


        }











        $('.verticalRule').bind('click', func_verticalRule);

        function func_verticalRule(){
            if(verticalRule == "hidden" && visibleCountStructure >=1) {
                $("#banners").find("div[class='structure04']").fadeIn(500);
                $(this).addClass("selected");
                verticalRule = "visible";
                $(this).attr("data-selected", "true");
                visibleCountStructure = visibleCountStructure + 1;
                $(updateDebug());
                $("#debug").css("background-color","white");
            }


            else if(verticalRule == "hidden" && visibleCountStructure == 0) {
                $("#banners").find("div[class='structure04']").fadeIn(500);
                $(this).addClass("selected");
                verticalRule = "visible";
                $(this).attr("data-selected", "true");
                visibleCountStructure = visibleCountStructure + 1;
                $('.singleRule,.doubleRule,.noRule').removeClass("selected").attr("data-selected", "false");
                $("#banners").find("div[id*='container']").fadeIn(500);
                $("#banners").find("div[class='structure05']").hide();
                $("#banners").find("div[class='structure03']").hide();
                $("#banners").find("div[class='structure02']").hide();
                $("#banners").find("div[class='structure01']").hide();
                singleRule = "hidden";
                singleRule2 = "hidden";
                verticalRule = "hidden";
                noRule = "hidden";
                banners160x600 = "visible";
                banners300x250 = "visible";
                banners728x90 = "visible";
                banners300x600 = "visible";
                $('.160x600,.300x250,.300x600,.728x90').addClass("selected").attr("data-selected", "true");
                visibleCountSize = 4;
                $(updateDebug());
            }

            else if(verticalRule =="visible" && visibleCountStructure == 1){
                $("#banners").find("div[class='structure04']").fadeOut(500);
                $(this).removeClass("selected strike");
                verticalRule = "hidden";
                $(this).attr("data-selected", "false");
                visibleCountStructure = visibleCountStructure - 1;
                visibleCountSize = 0;
        // $("#banners").find("div[id*='container']").fadeOut(500);
        banners160x600 = "hidden";
        banners300x250 = "hidden";
        banners728x90 = "hidden";
        banners300x600 = "hidden";
        $('.160x600,.300x250,.300x600,.728x90').removeClass("selected").attr("data-selected", "false");
        // $("#banners").find("div[class='structure01']").fadeOut(500);
        singleRule = "hidden";
        singleRule2 = "hidden";
        doubleRule = "hidden";
        noRule = "hidden";
        $(updateDebug());
        }

        else if(verticalRule == "visible" && visibleCountStructure >1) {
            $("#banners").find("div[class='structure04']").fadeOut(500);
            $(this).removeClass("selected strike");
            verticalRule = "hidden";
            $(this).attr("data-selected", "false");
            visibleCountStructure = visibleCountStructure -1;
            $(updateDebug());
        }
        }





$('.noRule').bind('click', func_noRule);

function func_noRule(){
    if(noRule == "hidden" && visibleCountStructure >=1) {
        $("#banners").find("div[class='structure02']").fadeIn(500);
        $(this).addClass("selected");
        noRule = "visible";
        $(this).attr("data-selected", "true");
        visibleCountStructure = visibleCountStructure + 1;
        $(updateDebug());
        $("#debug").css("background-color","gray");
    }


    else if(noRule == "hidden" && visibleCountStructure == 0) {
        $("#banners").find("div[class='structure02']").fadeIn(500);
        $(this).addClass("selected");
        noRule = "visible";
        $(this).attr("data-selected", "true");
        visibleCountStructure = visibleCountStructure + 1;
        $('.singleRule,.doubleRule,.verticalRule').removeClass("selected").attr("data-selected", "false");
    // $("#banners").find("div[id*='container']").fadeIn(500);
    $("#banners").find("div[class='structure05']").hide();
    $("#banners").find("div[class='structure03']").hide();
    $("#banners").find("div[class='structure04']").hide();
    $("#banners").find("div[class='structure01']").hide();

    singleRule = "hidden";
    singleRule2 = "hidden";
    verticalRule = "hidden";
    noRule = "hidden";
    banners160x600 = "visible";
    banners300x250 = "visible";
    banners728x90 = "visible";
    banners300x600 = "visible";
    $('.160x600,.300x250,.300x600,.728x90').addClass("selected").attr("data-selected", "true");
    visibleCountSize = 4;
    $(updateDebug());
    }

    else if(noRule =="visible" && visibleCountStructure == 1){
        $("#banners").find("div[class='structure02']").fadeOut(500);
        $(this).removeClass("selected strike");
        noRule = "hidden";
        $(this).attr("data-selected", "false");
        visibleCountStructure = visibleCountStructure - 1;
        visibleCountSize = 0;
    // $("#banners").find("div[id*='container']").fadeOut(500);
    banners160x600 = "hidden";
    banners300x250 = "hidden";
    banners728x90 = "hidden";
    banners300x600 = "hidden";
    $('.160x600,.300x250,.300x600,.728x90').removeClass("selected").attr("data-selected", "false");
    // $("#banners").find("div[class='structure01']").fadeOut(500);
    singleRule = "hidden";
    singleRule2 = "hidden";
    doubleRule = "hidden";
    verticalRule = "hidden";
    $(updateDebug());
    }

    else if(noRule == "visible" && visibleCountStructure >1) {
        $("#banners").find("div[class='structure02']").fadeOut(500);
        $(this).removeClass("selected strike");
        noRule = "hidden";
        $(this).attr("data-selected", "false");
        visibleCountStructure = visibleCountStructure -1;
        $(updateDebug());
    }   
    }

    $('li').not(".showAll,.hideAll").bind('click', updateShowHide);

    function updateShowHide(){
        if(visibleCountSize > 0 || visibleCountStructure > 0) {
            $(showAllActive());
            $(hideAllActive());
            var scroll = $(window).scrollTop();
        }
        else if(visibleCountSize == 0 && visibleCountStructure == 0) {
            $(showAllActive());
            $(hideAllInactive());
        }
        else if(visibleCountSize == 3 && visibleCountStructure == 4) {
            $(showAllInactive());
            $(hideAllActive());
        }
        else if(visibleCountSize == 4 && visibleCountStructure == 3) {
            $(showAllInactive());
            $(hideAllActive());
        }
    }


    $("#top").click(function() {
        $('html,body').animate({
            scrollTop: $("#wrapper").offset().top},
            'slow');
    });

    var viewportHeight = $(window).height()/2;
    $(window).scroll(function() {
        if ($(window).scrollTop() > viewportHeight) {
          $("#top").fadeIn(250);
      }
      else {
       $("#top").fadeOut(250);
    }
    });



    $(document).keydown(function(e) {
       switch(e.which) {
        case 13: 

        if(debug == "hidden") {   
            $("#debug").css("opacity","1.0");     
            debug = "visible";
        }
        else if(debug == "visible") {
            $("#debug").css("opacity","0.0");     
            debug = "hidden";
        }

    }
    });
});

})(jQuery);