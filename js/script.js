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

$(".next").click(function () {
    let $buttonSwitch = this.id;
    let $titleSec = $(".title-section");
    let $introSec = $(".intro-section");
    let $skillSec = $(".skill-section");
    let $titleCard = $(".title-card");
    let $introCard = $(".intro-card");
    let $skillCard = $(".skill-card");

    if ($buttonSwitch === 'title'){
        $titleSec.css('z-index', 0);
        $introSec.css('z-index', 1);
        $titleSec.delay(400).animate({
            top: "-100%"
        });
        $introSec.animate({
            top: "0"
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
            top: "-100%"
        });
        $skillSec.animate({
            top: "0"
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
        $titleSec.css('z-index', 1);
        $skillSec.delay(400).animate({
            top: "-100%"
        });
        $titleSec.animate({
            top: "0"
        }, "linear");
        $skillCard.animate({
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
    let $id = this.id;
    let $skillSoft = $(".skill-wrapper-inner");
    let $skillWeb = $(".skill-wrapper-inner1");
    let $skillApp = $(".skill-wrapper-inner2");
    $button.toggleClass("skill-img-hidden");
    $button.next().toggleClass("skill-hidden");

    if($id === "skill-soft"){
        //software display
        if($skillSoft.hasClass('active') !== true){
            $skillSoft.animate({
                zIndex: "2"
            },400);

            $skillWeb.animate({
                opacity: '0',
                zIndex: '-3',
                top: '100%'
            },400);

            $skillApp.animate({
                opacity: '0',
                zIndex: '-3',
                top: '130%'
            },400);
            $skillSoft.addClass('active');
        }
        else{
            $skillSoft.animate({
                zIndex: "1"
            },400);

            $skillWeb.animate({
                opacity: '1',
                zIndex: '1',
                top: '35%'
            },400);

            $skillApp.animate({
                opacity: '1',
                zIndex: '1',
                top: '65%'
            },400);
            $skillSoft.removeClass('active');
        }
    }

    else if($id === "skill-web"){
        //web display
        if($skillWeb.hasClass('active') !== true){
            $skillSoft.animate({
                opacity: '0',
                zIndex: "-3",
                top: '100%'
            },400);

            $skillWeb.animate({
                opacity: '1',
                zIndex: '2',
                top: '5%'
            },400);

            $skillApp.animate({
                opacity: '0',
                zIndex: '-3',
                top: '160%'
            },400);
            $skillWeb.addClass('active');
        }
        else{
            $skillSoft.delay(100).animate({
                opacity: '1',
                zIndex: "1",
                top: '5%'
            },400);

            $skillWeb.animate({
                top: '35%',
                opacity: '1',
                zIndex: '1'
            },400);

            $skillApp.animate({
                opacity: '1',
                zIndex: '1',
                top: '65%'
            },400);
            $skillWeb.removeClass('active');
        }
    }
    else if($id === "skill-app"){
        //app display
        if($skillApp.hasClass('active') !== true){
            $skillSoft.animate({
                top: '100%',
                opacity: '0',
                zIndex: "-3"
            },400);

            $skillWeb.animate({
                top: '130%',
                opacity: '0',
                zIndex: '-3'
            },400);

            $skillApp.animate({
                top: '5%',
                opacity: '1',
                zIndex: '2'
            },400);
            $skillApp.addClass('active');
        }
        else{
            $skillSoft.delay(100).animate({
                top: '5%',
                opacity: '1',
                zIndex: "1"
            },400);

            $skillWeb.delay(200).animate({
                top: '35%',
                opacity: '1',
                zIndex: '1'
            },400);

            $skillApp.animate({
                top: '65%',
                opacity: '1',
                zIndex: '1'
            },400);
            $skillApp.removeClass('active');
        }
    }
});

