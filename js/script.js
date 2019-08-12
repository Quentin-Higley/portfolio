$(document).ready(function () {
    let $title1 = $("#title1");
    let $title2 = $("#title2");
    let $title3 = $("#title3");
    let $title4 = $("#title4");
    let $buttonNext = $(".next");


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

    let width = $(window).width();

    if(width > 880){
        document.documentElement.style.setProperty('--width', '880px');
    }
    else{
        width-= 100;
        document.documentElement.style.setProperty('--width', width + 'px');
    }
    });

$(document).on("tap", function () {
    window.alert("alerted");
});

$(".next").click(function () {
    let $buttonSwitch = this.id;
    let $titleSec = $(".title-section");
    let $introSec = $(".intro-section");
    let $skillSec = $(".skill-section");
    let $eduSec = $(".edu-section");
    let $titleCard = $(".title-card");
    let $introCard = $(".intro-card");
    let $skillCard = $(".skill-card");
    let $eduCard = $(".edu-card");

    if ($buttonSwitch === 'title'){
        $titleSec.css('z-index', 0);
        $introSec.css('z-index', 1);
        $titleSec.delay(400).animate({
            left: "-100%"
        });
        $introSec.animate({
            left: "0"
        }, "linear");
        $titleCard.animate({
            opacity: "0"
        });
        $introCard.animate({
            opacity: "1"
        });
    }
    else if ($buttonSwitch === 'intro'){
        $introSec.css('z-index', 0);
        $skillSec.css('z-index', 1);
        $introSec.delay(400).animate({
            left: "-100%"
        });
        $skillSec.animate({
            left: "0"
        }, "linear");
        $introCard.animate({
            opacity: "0"
        });
        $skillCard.animate({
            opacity: "1"
        });
    }
    else if ($buttonSwitch === 'skill'){
        $skillSec.css('z-index', 0);
        $eduSec.css('z-index', 1);
        $skillSec.delay(400).animate({
            left: "-100%"
        });
        $eduSec.animate({
            left: "0"
        }, "linear");
        $skillCard.animate({
            opacity: "0"
        });
        $eduCard.animate({
            opacity: "1"
        });
    }
    else if ($buttonSwitch === 'edu'){
        $eduSec.css('z-index', 0);
        $titleSec.css('z-index', 1);
        $eduSec.delay(400).animate({
            left: "-100%"
        });
        $titleSec.animate({
            left: "0"
        }, "linear");
        $eduCard.animate({
            opacity: "0"
        });
        $titleCard.animate({
            opacity: "1"

        });
    }
});

$(window).on("resize", function () {
    let width = $(window).width();

    if(width > 880){
        document.documentElement.style.setProperty('--width', '880px');
    }
    else{
        document.documentElement.style.setProperty('--width', width + 'px');
    }
});

$(".tabSwitch").click(function () {
    let buttonSwitch = this.id;
    let $introText = $(".intro-text");
    let $introCont = $(".intro-contact");

    if (buttonSwitch === 'intro-text'){
        $introText.css("opacity", "1");
        $introCont.css("opacity", "0");
    }
    else if (buttonSwitch === 'intro-cont'){
        $introText.css("opacity", "0");
        $introCont.css("opacity", "1");
    }
});

$(".skill-img").click(function () {
    let $button = $(this);
    $button.toggleClass("skill-img-hidden");
    $button.next().toggleClass("skill-hidden");
});

