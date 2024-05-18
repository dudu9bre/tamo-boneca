$(document).ready(function () {
    $('.cont1').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow')
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow')
    })
})

// document.addEventListener("scroll", function() {
//     if (window.scrollY > 500 && window.scrollY < 1200) {
//         document.body.classList.add("scrolled")
//         document.body.classList.remove("scrolled2")
//     } else if (window.scrollY > 1200) {
//         document.body.classList.add("scrolled2")
//     } else {
//         document.body.classList.remove("scrolled")
//         document.body.classList.remove("scrolled2")
//     }
// })

$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        let iframe = $('<iframe class="iframe" src="flores.html" frameborder="0"></iframe>')
        $('body').append(iframe)
        $(window).off('scroll')
    }
})