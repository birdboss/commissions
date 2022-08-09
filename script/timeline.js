
     "use strict";
$(document).ready(function(){
var $core = $('.core');
var $win = $(window);
var $animation_elements = $('#animation-element');


$win.on('scroll', function(){
    var top = $win.scrollTop();
    $core.css('transform', 'rotate('+ top +'deg)');
    $core.css('transform', 'bottom: "0px');
    
});

gsap.to("#section1", {
    scrollTrigger: {
        trigger: '#section1',
        start: "center bottom"
    },
    x: -500,
    opacity: 1,
    transition: '1s'
});

gsap.to("#section6", {
    scrollTrigger: {
        trigger: '#section6',
        start: "center bottom"
    },
    x: 500,
    opacity: 1,
    transition: '1s'
})

gsap.to("#section2", {
    scrollTrigger: {
        trigger: '#section2',
        start: "center bottom"
    },
    x: -500,
    opacity: 1,
    transition: '1s'
})

gsap.to("#section3", {
    scrollTrigger: {
        trigger: '#section3',
        start: "center bottom"
    },
    x: 500,
    opacity: 1,
    transition: '1s'
})

gsap.to("#section4", {
    scrollTrigger: {
        trigger: '#section4',
        start: "center bottom"
    },
    x: -500,
    opacity: 1,
    transition: '1s'
})

gsap.to("#section5", {
    scrollTrigger: {
        trigger: '#section5',
        start: "center bottom"
    },
    x: 500,
    opacity: 1,
    transition: '1s'
});


$(function(){
    $('a[href*=\\#]:not([href=\\#])').on('click', function(){
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) + ']');
        if(target.length){
            $('html, body').animate({
                scrollTop: target.offset().top,

            }, 2000, easeOutExpo);
            return false;
        }
    })
})

/*var page_url = window.location.href;
var page_id = page_url.substring(page_url.lastIndexOf("#") + 1);
if(page_id == "section3"){
    $("body, wrapper").animate({
        scrollTop: $("#scroll-" + page_id).offset().top
    }, 1000);
}*/
});
