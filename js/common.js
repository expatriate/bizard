'use strict';

$(document).ready(function() {

    var $window = $(window); 

    var miningTimeout, scrollBlock = $('#mining-pools'), diff;

    onLoad();
    loadAnimation();

    // Navigation
    $('#navigation a').on('click', function(e) {
        e.preventDefault();

        var el = $(e.target).attr('href');

        $('html, body').animate({
            scrollTop: $(el).offset().top
        }, 1000);

        $('#navigation a.active').removeClass('active');
        $(e.target).addClass('active');
    });

    $(document).on('scroll', function(e) {
        if ($(window).scrollTop() + $window.height() + 50 > scrollBlock.offset().top && $(window).scrollTop() + 50 < scrollBlock.offset().top + scrollBlock.height()) {
            if (!scrollBlock.hasClass('visible')) {
                scrollBlock.css({opacity: 0});
                scrollBlock.animate({opacity: 1}, 200)
                scrollBlock.addClass('visible')
            }
            diff = (($(window).scrollTop() + $window.height()/2) - (scrollBlock.offset().top + scrollBlock.height()/2)) / 5;
            scrollBlock.css({top: diff});
            console.log(diff)
        }
    });
});

function onLoad() {
    // Scroll to hash when user loads from direct link
    if (location.hash) {
        $('#navigation a.active').removeClass('active');
        $('#navigation a[href="' + location.hash + '"]').addClass('active');
    };
}

function loadAnimation() {
    // Blocks to animate
    var simpleFade = $('.js-animate-fade');
    var animateFromTop = $('.js-animate-from-top');
    var animateFromTopSlow = $('.js-animate-from-top-slow');
    var animateFromBot = $('.js-animate-from-bot');
    var animateFromBotSlow = $('.js-animate-from-bot-slow');

    // Parallax block
    var leftParallax = $('#parallax-left-block');
    var leftParallax1 = $('#browser1-parallax');
    var leftParallax2 = $('#phone1-parallax');

    // Parallax block
    var animateRight = $('.js-animate-right');
    var animateRightSlow = $('.js-animate-right-slow');
    var animateLeft = $('.js-animate-left');
    var animateLeftSlow = $('.js-animate-left-slow');

    // Add start classes
    animateFromTop.addClass('anim-top-invis-0');
    animateFromTopSlow.addClass('anim-top-invis-slow-0');
    animateFromBot.addClass('anim-bot-invis-0');
    animateFromBotSlow.addClass('anim-bot-invis-slow-0');

    leftParallax1.addClass('anim-left-invis-0');
    leftParallax2.addClass('anim-left-invis-slow-0');

    animateRight.addClass('anim-right-invis-0');
    animateRightSlow.addClass('anim-right-invis-slow-0');
    animateLeft.addClass('anim-left-invis-0');
    animateLeftSlow.addClass('anim-left-invis-slow-0');

    // Fix for head menu
    setTimeout(function () {
        $('#start').find('.top-menu').addClass('anim-bot-invis-1').removeClass('anim-bot-invis-0');
    }, 200);

    animateLeft.viewportChecker({
        repeat: false,
        callbackFunction: function callbackFunction(elem, action) {

            setTimeout(function () {
                $(elem).addClass('anim-left-invis-1').removeClass('anim-left-invis-0');
                setTimeout(function () {
                    $(elem).addClass('anim-left-invis-end-1').removeClass('anim-left-invis-1');
                }, 200);
            }, 200);
        }
    })
    
    animateRight.viewportChecker({
        repeat: false,
        callbackFunction: function callbackFunction(elem, action) {

            setTimeout(function () {
                $(elem).addClass('anim-right-invis-1').removeClass('anim-right-invis-0');
                setTimeout(function () {
                    $(elem).addClass('anim-right-invis-end-1').removeClass('anim-right-invis-1');
                }, 200);
            }, 200);
        }
    })

    leftParallax.viewportChecker({
        repeat: false,
        callbackFunction: function callbackFunction(elem, action) {
            setTimeout(function () {
                leftParallax1.addClass('anim-left-invis-1').removeClass('anim-left-invis-0');
                leftParallax2.addClass('anim-left-invis-slow-1').removeClass('anim-left-invis-slow-0');
                setTimeout(function () {
                    leftParallax1.addClass('anim-left-invis-end-1').removeClass('anim-left-invis-1');
                    leftParallax2.addClass('anim-left-invis-slow-end-1').removeClass('anim-left-invis-slow-1');
                }, 200);
            }, 200);
        }
    });

    animateFromTop.viewportChecker({
        repeat: false,
        offset: '10%',
        callbackFunction: function callbackFunction(elem, action) {
            setTimeout(function () {
                $(elem).addClass('anim-top-invis-1').removeClass('anim-top-invis-0');
            }, 200);
        }
    });

    animateFromTopSlow.viewportChecker({
        repeat: false,
        offset: '10%',
        callbackFunction: function callbackFunction(elem, action) {
            var time = 200;
            if ($(elem).hasClass('card-simple') || $(elem).hasClass('button')) {
                time = 400 * $(elem).index();
            }
            setTimeout(function () {
                $(elem).addClass('anim-top-invis-slow-1').removeClass('anim-top-invis-slow-0');
            }, time);
        }
    });

    animateFromBot.viewportChecker({
        repeat: false,
        offset: '10%',
        callbackFunction: function callbackFunction(elem, action) {
            setTimeout(function () {
                $(elem).addClass('anim-bot-invis-1').removeClass('anim-bot-invis-0');
            }, 200);
        }
    });

    animateFromBotSlow.viewportChecker({
        repeat: false,
        offset: '10%',
        callbackFunction: function callbackFunction(elem, action) {
            setTimeout(function () {
                $(elem).addClass('anim-bot-invis-slow-1').removeClass('anim-bot-invis-slow-0');
            }, 200);
        }
    });
}