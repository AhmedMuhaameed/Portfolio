(function ($) {
    var typed = new Typed("span.txt-rotate", {
        strings: ["I'm a MEARN Stack Web Developer", "I'm a Full Stack Web Developer", "I'm a Software Enginner"],
        typeSpeed: 100,
        backSpeed: 100,
        fadeOut: false,
        smartBackspace: true,
        loop: true, 
    });
})(jQuery);


$(document).ready(function(){
    let $btn=$('.list-group-item');
    $btn.click(function(e){
        $('.list-group-item').removeClass('active');
        e.target.classList.add('active');
        let selector =$(e.target).attr('data-filter');
        $('.projects-wrapper').isotope({
            filter: selector
        })
        return false;
    })
});