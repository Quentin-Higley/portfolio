
$(document).ready(function () {
    let $title1 = $("#title1");
    let $title2 = $("#title2");
    let $title3 = $("#title3");
    let $title4 = $("#title4");
    let $buttonNext = $(".next");

    //title loading animation
    $title1.animate({
        left: "0"
    });
    $title2.delay(100).animate({
        left: "0"
    });
    $title3.delay(200).animate({
        left: "0"
    });
    $title4.delay(300).animate({
        left: "0"
    });
    $buttonNext.animate({opacity: "1"},700);

    //set varying width
    let width = $(window).width();

    if(width > 880){
        document.documentElement.style.setProperty('--width', '880px');
    }
    else{
        width-= 100;
        document.documentElement.style.setProperty('--width', width + 'px');
    }
    if(width > 700){
        document.documentElement.style.setProperty('--sWidth', '700px');
    }
    else{
        width-= 100;
        document.documentElement.style.setProperty('--sWidth', width + 'px');
    }

});

$(".next").click(function () {
    let $buttonSwitch = this.id;
    let $titleSec = $(".title-section");
    let $introSec = $(".intro-section");
    let $skillSec = $(".skill-section");
    let $titleCard = $(".title-card");
    let $introCard = $(".intro-card");
    let $skillCard = $(".skill-card");

    //switch page animations
    //title - intro switch
    if ($buttonSwitch === 'title-intro'){
        $introSec.animate({
            left: "0"
        }, "linear");
        $titleSec.animate({
            opacity: '0'
        });
        $titleCard.animate({
            opacity: "0"
        });
        $introCard.animate({
            opacity: "1"
        });
    }
    //title - skill switch
    else if ($buttonSwitch === 'title-skill'){
        $skillSec.animate({
            left: "0"
        }, "linear");
        $titleCard.animate({
            opacity: "0"
        });
        $titleSec.animate({
            opacity: '0'
        });
        $skillCard.animate({
            opacity: "1"
        });
    }
    //intro - title switch
    else if ($buttonSwitch === 'intro'){
        $introSec.animate({
            left: "-100%"
        }, "linear");
        $introCard.animate({
            opacity: "0"
        });$titleSec.animate({
            opacity: '1'
        });
        $titleCard.animate({
            opacity: "1"
        });
    }
    //skill - title switch
    else if ($buttonSwitch === 'skill'){
        $skillSec.animate({
            left: "100%"
        }, "linear");
        $skillCard.animate({
            opacity: "0"
        });
        $titleSec.animate({
            opacity: '1'
        });
        $titleCard.animate({
            opacity: "1"
        });
    }
});

$(window).on("resize", function () {
    let width = $(window).width();
    //set widths on resize
    if(width > 880){
        document.documentElement.style.setProperty('--width', '880px');
    }
    else{
        document.documentElement.style.setProperty('--width', width + 'px');
    }
    if(width > 700){
        document.documentElement.style.setProperty('--sWidth', '700px');
    }
    else{
        width-= 100;
        document.documentElement.style.setProperty('--sWidth', width + 'px');
    }
});

$(".tabSwitch").click(function () {
    let buttonSwitch = this.id;
    let $introText = $(".intro-text");
    let $introCont = $(".intro-contact");

    //switch between contact and about animations
    //about
    if (buttonSwitch === 'intro-text'){
        $introText.delay(200).animate({
            opacity: '1',
            zIndex: '3'
        },100);
        $introCont.animate({
            opacity: '0',
            zIndex: '-3'
        });
    }
    //contact
    else if (buttonSwitch === 'intro-cont'){
        $introText.animate({
            opacity: '0',
            zIndex: '-3'
        },300);
        $introCont.delay(200).animate({
            opacity: '1',
            zIndex: '3'
        },100);
    }
});

