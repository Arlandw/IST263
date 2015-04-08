$(document).ready(function() {
    $("nav a:nth-child(1)").addClass("active");

    //alert("hey!")

    $("nav a").click(function(event) {
        goTo = $(this).attr("href");

        event.preventDefault();

        //$("nav a").removeClass("active")
        //$(this).addClass("active")


        $("html, body").animate({
            scrollTop: $(goTo).offset().top
        }, 1000);


    }); // end nav a click

    $("section").each(function() {
        $(this).attr("start", $(this).offset().top - 1);
        $(this).attr("end", $(this).offset().top + $(this).height());

    });


    $(window).scroll(function(value, index) {
        curr = $(document).scrollTop();
        console.log(curr);
        $("nav a").removeClass("active");

        $("section").each(function() {
            if ((curr > $(this).attr("start")) && (curr < $(this).attr("end"))) {
                $("nav .inner").children().eq($(this).index()).addClass("active");
            }

        });


    });

    var total = 3;
    var current = 1;



    $(".left").click(function() {
        if (current > 1) {
            $(".sliderbox").animate({
                left: "+=1040"
            }, 500);
            current = current - 1; //current--;
        }

    }); //end left click

    $(".right").click(function() {

        if (current < total) {
            $(".sliderbox").animate({
                left: "-=1040"
            }, 500);
            current = current + 1; //current++
        }

    }); //end left click


    var total2 = 3;
    var current2 = 1;

    $(".eventleft").click(function() {
        if (current2 > 1) {
            $(".eventslidebox").animate({
                left: "+=1040"
            }, 500);
            current2--;
        }
    });
    $(".eventright").click(function() {
        if (current2 < total2) {
            $(".eventslidebox").animate({
                left: "-=1040"
            }, 500);
            current2++;
        }
    });



}); //end doc ready
