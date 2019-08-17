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

$(".skill-img").click(function () {
    let $button = this.id;
    let $skillSoft = $('.s-c-c1');
    let $arrow1 = $('.arrow1');
    let $skillWeb = $('.s-c-c2');
    let $arrow2 = $('.arrow2');
    let $skillApp = $('.s-c-c3');
    let $arrow3 = $('.arrow3');
    let $h2_1 = $('.skill-h2-1');
    let $h2_2 = $('.skill-h2-2');
    let $h2_3 = $('.skill-h2-3');

    if($button === 'skill-soft'){
        $(this).toggleClass('sActive');
        $(this).next().toggleClass('scActive');
        $arrow1.toggleClass('arrowActive');

        if ($skillSoft.hasClass('.active') !== true){
            $h2_1.animate({
                left: '-40%'
            });

            $skillSoft.addClass('.active');
            $skillSoft.animate({
                top: '20%',
                opacity: '1',
                zIndex: '3'
            });
            $skillWeb.animate({
                bottom: '0',
                opacity: '0',
                zIndex: '-3'
            });
            $skillApp.animate({
                bottom: '0',
                opacity: '0',
                zIndex: '-3'
            });
        }
        else{

            $h2_1.animate({
                left: '0'
            });

            $skillSoft.removeClass('.active');
            $skillSoft.animate({
                top: '5%',
                opacity: '1',
                zIndex: '3'
            });
            $skillWeb.animate({
                top: '10%',
                opacity: '1',
                zIndex: '3'
            });
            $skillApp.animate({
                top: '15%',
                opacity: '1',
                zIndex: '3'
            });
        }


    }
    else if($button === 'skill-web'){
        $(this).toggleClass('sActive');
        $(this).next().toggleClass('scActive');
        $arrow2.toggleClass('arrowActive');

        if ($skillWeb.hasClass('.active') !== true){
            $h2_2.animate({
                left: '-40%'
            });
            $skillWeb.addClass('.active');

            $skillWeb.animate({
                top: '-5%',
                opacity: '1',
                zIndex: '3'
            });
            $skillSoft.animate({
                top: '0',
                opacity: '0',
                zIndex: '-3'
            });
            $skillApp.animate({
                bottom: '0',
                opacity: '0',
                zIndex: '-3'
            });
        }
        else{
            $h2_2.animate({
                left: '0'
            });
            $skillWeb.removeClass('.active');
            $skillWeb.animate({
                top: '10%',
                opacity: '1',
                zIndex: '3'
            });
            $skillSoft.animate({
                top: '5%',
                opacity: '1',
                zIndex: '3'
            });
            $skillApp.animate({
                top: '15%',
                opacity: '1',
                zIndex: '3'
            });
        }
    }
    else if($button === 'skill-app'){
        $(this).toggleClass('sActive');
        $(this).next().toggleClass('scActive');
        $arrow3.toggleClass('arrowActive');
        if ($skillApp.hasClass('.active') !== true){
            $h2_3.animate({
                left: '-35%'
            });
            $skillApp.addClass('.active');
            $skillApp.animate({
                top: '-10%',
                opacity: '1',
                zIndex: '3'
            });
            $skillSoft.animate({
                top: '0',
                opacity: '0',
                zIndex: '-3'
            });
            $skillWeb.animate({
                top: '0',
                opacity: '0',
                zIndex: '-3'
            });
        }
        else{
            $h2_3.animate({
                left: '0'
            });
            $skillApp.removeClass('.active');
            $skillApp.animate({
                top: '15%',
                opacity: '1',
                zIndex: '3'
            });
            $skillSoft.animate({
                top: '5%',
                opacity: '1',
                zIndex: '3'
            });
            $skillWeb.animate({
                top: '10%',
                opacity: '1',
                zIndex: '3'
            });
        }
    }
});

