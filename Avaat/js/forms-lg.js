const drawLine = (lblWraps, connDots, parentDiv, update) => {
    if (update) {
        const conn = document.getElementsByClassName('conn');
        for (let i = 0; i < lblWraps.length; i++) {
            const lblCoords = lblWraps[i].getBoundingClientRect();
            const connDotCoords = connDots[i].getBoundingClientRect();
            let x_startPoint = connDotCoords.left + connDotCoords.width / 2;
            let y_startPoint = connDotCoords.top + connDotCoords.height / 2;
            let x_finishPoint = lblCoords.left + lblCoords.width / 2;
            let y_finishPoint = lblCoords.top + lblCoords.height / 2;
            let dist = Math.ceil(Math.sqrt((x_startPoint - x_finishPoint) / 2 * (x_startPoint - x_finishPoint) / 2
                + (y_startPoint - y_finishPoint) * (y_startPoint - y_finishPoint)));
            let angle = Math.atan2(y_startPoint - y_startPoint, x_startPoint - x_finishPoint) * 180 / Math.PI;
            conn[i].style.left = x_startPoint + 'px';
            conn[i].style.top = y_startPoint + 'px';
            conn[i].style.width = dist + 'px';
            conn[i].style.transform = 'rotate(' + angle + 'deg)';
        }

    } else {
        for (let i = 0; i < lblWraps.length; i++) {
            const lblCoords = lblWraps[i].getBoundingClientRect();
            const connDotCoords = connDots[i].getBoundingClientRect();
            let x_startPoint = connDotCoords.left + connDotCoords.width / 2;
            let y_startPoint = connDotCoords.top + connDotCoords.height / 2;
            let x_finishPoint = lblCoords.left + lblCoords.width / 2;
            let y_finishPoint = lblCoords.top + lblCoords.height / 2;
            let dist = Math.ceil(Math.sqrt((x_startPoint - x_finishPoint) / 2 * (x_startPoint - x_finishPoint) / 2
                + (y_startPoint - y_finishPoint) * (y_startPoint - y_finishPoint)));
            let angle = Math.atan2(y_startPoint - y_startPoint, x_startPoint - x_finishPoint) * 180 / Math.PI;
            const conn = document.createElement('div');
            conn.classList.add('conn');
            conn.style.left = x_startPoint + 'px';
            conn.style.top = y_startPoint + 'px';
            conn.style.width = dist + 'px';
            conn.style.transform = 'rotate(' + angle + 'deg)';
            parentDiv.appendChild(conn);
        }
    }
}

$(document).ready(() => {
    const gearWrap = document.getElementsByClassName('gear-wrap')[0]; // parent element
    const lblWraps = document.getElementsByClassName('label-wrap'); // wrap elements for first two labels
    const connDots = document.getElementsByClassName('connecting-dot'); // elements we want to connect line to
    const btn = $('.CustomBtn'); // Custom buttons
    const btnY = $('#btn-right'); // Custom buttons yes
    const btnN = $('#btn-left'); // Custom buttons no
    const front = $('.circle-side.front'); // front of circle
    const back = $('.circle-side.back'); // back of circle
    const textarea = $('.input-wrap > textarea'); // textarea
    const input = $('.input-wrap > input'); // inputs
    const inputLbl = $('.input-lbl'); //input labels
    const nextBtn = $('#next'); // next button

    drawLine(lblWraps, connDots, gearWrap) // drawing lines to inputs

    // first button
    $(btnY).on('mouseup', (e) => {
        e.preventDefault();
        btn.html('');  // clearing value
        btn.css('width', '0');
        // flipping circle
        front.css('transform', 'rotateY(180deg)');
        back.css('transform', 'rotateY(0deg)');
        $('.label-wrap').css('display', 'none'); // removing labels (01, 02)
        $('.input-wrap').toggleClass('input-wrap-show'); // toggle between hiding and showing (showing)

        // showing even inputs
        input.even().css({
            'display': 'block',
            'width': '96%',
            'height': '10%',
            'visibility': 'visible',
        });

        // showing labels
        inputLbl.css({
            'visibility': 'visible',
            'padding': '1rem'
        });
        $(btn).unbind('mouseup touchend'); // unbinding event listener for next function of this button
        // next button function
        $(nextBtn).on('mouseup touchend', (e) => {
            e.preventDefault()
            // changing message
            $('.front-message').html('آیا مایل هستید استراتژي تولید محتوا و استراتژي دیجیتال مارکتینگ داشته باشید؟')
            // lighting circles (on bigger circle)
            $('.top-right-1, .left-top-2').css('background-color', 'yellow')
            // flipping circle
            back.css('transform', 'rotateY(180deg)');
            front.css('transform', 'rotateY(0deg)');
            // hiding input wrap element and labels
            $('.input-wrap').toggleClass('input-wrap-show');
            inputLbl.css({
                'visibility': 'hidden',
                'padding': '0'
            })

            // showing button and changing the text
            btn.css('width', '65%');
            btn[0].innerHTML = 'خیر';
            btn[1].innerHTML = 'بله';
            $(nextBtn).unbind('mouseup touchend'); // unbinding event listener for next function of this button

            // Custom buttons next function
            $(btn).on('mouseup touchend', (e) => {
                e.preventDefault()
                // if left button is pressed exit (no)
                if (e.target.id === 'btn-right') {
                    back.css('transform', 'rotateY(0deg)');
                    front.css('transform', 'rotateY(180deg)');
                    btn.html('');  // clearing value
                    btn.css('width', '0');
                    $(btn).attr('disabled', true)
                    $('.input-wrap').toggleClass('input-wrap-show');
                    // by removing even inputs making room for textarea
                    input.even().css({
                        'visibility': 'hidden',
                        'display': 'none'
                    })

                    // showing textarea and labels
                    textarea.css({
                        'display': 'block',
                        'width': '96%',
                        'height': '15%',
                        'visibility': 'visible',
                    })
                    // showing labels
                    inputLbl.css({
                        'visibility': 'visible',
                        'padding': '1rem',
                        'bottom': '60.5%',
                    });

                    // labels value
                    inputLbl[0].innerHTML = 'راجب کسب و کاري که دارین بیشتر توضیح بدین.';
                    inputLbl[1].innerHTML = 'هدفتون از ورود به دنیاي دجیتال و کسب و کارتون در دنیاي دیجیتال چیست؟';
                    $(btn).unbind('mouseup touchend'); // unbinding event listener for next function of this button

                    // next step
                    $(nextBtn).on('mouseup touchend', (e) => {
                        e.preventDefault()
                        $('.top-right-2, .left-top-1').css('background-color', 'yellow')
                        textarea.css({
                            'display': 'none',
                            'width': '0',
                            'height': '0',
                            'visibility': 'hidden',
                        })
                        inputLbl.css({
                            'visibility': 'hidden',
                            'padding': '0'
                        })
                        $('.front-message').html('شبکه هاي اجتماعی خود را براي آنالیز وارد کنید')
                        btn.html('');
                        btn.css('width', '0');
                        $('.social-media').css({
                            'display': 'flex',
                            'visibility': 'visible',
                        })
                        front.css('transform', 'rotateY(0deg)');
                        back.css('transform', 'rotateY(180deg)');
                        $('.social-media').on('keyup', () => {
                            front.css('transform', 'rotateY(180deg)');
                            back.css('transform', 'rotateY(0deg)');
                            $(nextBtn).unbind('mouseup touchend');
                            $(nextBtn).on('mouseup touchend', (e) => {
                                e.preventDefault();
                                $('.social-media').css('display', 'none')
                                $('.right-bottom-1, .bottom-left-2').css('background-color', 'yellow');
                                $('.front-message').html('آیا تبلیغات انجام داده اید؟ نتیجه نهایی به چه صورتی بوده؟')
                                $('.range').css({
                                    'display': 'flex'
                                })
                                $(input).css({
                                    'visibility': 'hidden',
                                    'display': 'none'
                                })
                                inputLbl.css({
                                    'visibility': 'hidden',
                                    'display': 'none'
                                })
                                $(nextBtn).unbind('mouseup touchend');
                                $(nextBtn).on('mouseup touchend', (e) => {
                                    e.preventDefault()
                                    inputLbl.css({
                                        'visibility': 'hidden',
                                        'padding': '0',
                                        'display': 'none'
                                    })
                                    alert('done')
                                    $('.right-bottom-2, .bottom-left-1').css('background-color', 'yellow');
                                    front.css('transform', 'rotateY(180deg)');
                                    back.css('transform', 'rotateY(0deg)');
                                })
                            })
                        })
                    })
                } else {
                    alert('goodbye')
                }
            })
        })
    })

    $(btnN).on('mouseup touchend', (e) => {
        e.preventDefault()
        alert('goodbye')
    })
    $(window).resize(() => {
        if ($(window).width() > 768) {
            drawLine(lblWraps, connDots, gearWrap, true)
        } else {
            location.reload()
        }
    })
})