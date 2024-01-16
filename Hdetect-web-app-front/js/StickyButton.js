$(document).ready(() => {
    const nav = $('.navbar'), btn = $('.dashboard-btn-wrap > button');
    const nav_pos = nav.position().top + nav.outerHeight();
    $('body').scroll(() => {
        if ($('.container-fluid').scrollTop() >= nav_pos) {
            btn.addClass('passed');
        } else {
            btn.removeClass('passed');
            console.log('hey')
        }
    })
})