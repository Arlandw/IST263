$(document).ready(function() {

        //alert("hey!")	

        $("nav a").click(function() {
            goTo = $(this).attr("href")

            $("nav a").removeClass("active")
            
            $(this).addClass("active")

            $("html, body").animate({
                scrollTop: $(goTo).offset().top
            }, 1000)

        })


    }) //end doc ready
