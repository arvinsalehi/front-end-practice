function isMobile() {
    return $(window).width() <= 768;
}

$.holdReady(true);

if (isMobile()) {
    const url = 'js/forms-768.js'
    $.getScript(url);
    $('.gear-wrap').load('mobile-form.html');
} else {
    const url = 'js/forms-lg.js'
    $.getScript(url);
    $('.gear-wrap').load('form-lg.html');
}

$.holdReady(false);