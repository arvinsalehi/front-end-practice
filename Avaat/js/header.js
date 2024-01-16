$(document).ready(() => {
    const nav = $('.navbar');
    $('.container-fluid').scroll(() => {
            if ($('.container-fluid').scrollTop() >= nav.height()) {
                nav.addClass('passed')
            } else {
                nav.removeClass('passed')
            }
        }
    )

})