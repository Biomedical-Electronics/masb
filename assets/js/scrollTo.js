function smoothScrollTo(querySel){
    var elmnt = document.querySelector(querySel);

    $('html, body').animate({
        scrollTop: $(querySel).offset().top
    }, 1500, 'easeInOutExpo');
}