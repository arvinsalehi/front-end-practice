// function for loading next block of html code
function load(...params) {
    // returning promise to ensure code is loaded
    return new Promise(resolve => {
        try {
            // the first url ( top block ) appending after previous block
            $.get(params[0], (data) => {
                $(params[2]).eq(0).after(data)
            })

            // second url (bottom block) appending
            $.get(params[1], (data) => {
                $(params[2]).eq(1).after(data)
            })
            resolve(true)
        } catch (e) {
            // if code was not loaded refresh the page
            alert('Something went wrong page will reload now, check your internet connection!')
            location.reload()
        }
    })
}

// async function for calling load
async function call(params) {
    // wait for result of load function
    const res = await load(params.url, params.url2, params.preElmCls);
    if (res) {
        // if true apply changes
        $('.front-message').html(params.frontMess) //front message
        $(params.actionAreaElm).css('overflow', 'auto') // allow for scroll

        // flip circle
        params.circleFront.css('transform', 'rotateY(' + params.deg + 'deg)');
        params.circleBack.css('transform', 'rotateY(' + params.deg1 + 'deg)');

        // scroll multiplier * width (since every step is equal in terms of width maybe not the prettiest way
        // but it works :)
        $(params.actionAreaElm).animate({scrollLeft: params.w * params.multiplier})
        $(params.actionAreaElm).css('overflow', 'hidden'); // prevent scroll
    }
}

function validation(params) {
    return !(params.elm.value === '' || params.elm1.value === '');
}

$(document).ready(() => {
    const actionArea = document.getElementsByClassName('action-area'); //get action area elm
    const front = $('.circle-side.front'); // front of circle
    const back = $('.circle-side.back'); // back of circle
    $('.first-step').attr('tabindex', -1); // preventing tab key to focus on this div

    // -------- STEP 1 --------
    // yes button event listener
    $('#btn-right').on('mouseup touchend', (e) => {
        e.preventDefault();
        $('.first-step').css('visibility', 'hidden') // hiding to complete task of preventing tab to focus
        $('.second-step').attr('tabindex', -1);
        const step = document.getElementsByClassName('step') // step element
        let w = $(step).eq(-1).width() + $(step).eq(-1).offset().left // width needed for scroll

        // function call for calling block of code and applying changes
        call({
            url: 'components/second-step-top.html',
            url2: 'components/second-step-bottom.html',
            preElmCls: '.first-step',
            frontMess: '',
            actionAreaElm: actionArea,
            circleFront: front,
            circleBack: back,
            step: step,
            w: w,
            deg: 180,
            deg1: 0,
            multiplier: 1,
        })

        // removing labels since their position were absolute
        $('.label-wrap').remove()

        // ------- STEP 2 --------
        // next button event listener
        $('#next').on('mouseup touchend', (e) => {
            const valid = validation({
                elm: document.getElementById('name'),
                elm1: document.getElementById('number'),
            })
            if (valid) {
                $('.second-step').css('visibility', 'hidden')
                $('.third-step').attr('tabindex', -1);
                e.preventDefault();
                // changing background of circles
                $('.top-right-1, .left-top-2').css('background-color', 'yellow');
                // like above
                const step = document.getElementsByClassName('step')
                let w = $(step).eq(-1).width() + $(step).eq(-1).offset().left
                call({
                    url: 'components/third-step-top.html',
                    url2: 'components/third-step-bottom.html',
                    preElmCls: '.second-step',
                    frontMess: 'لطفا سوالات را پاسخ دهید.',
                    actionAreaElm: actionArea,
                    circleFront: front,
                    circleBack: back,
                    step: step,
                    deg: 0,
                    deg1: 180,
                    w: w,
                    multiplier: 2,
                })
                $("#next").unbind('mouseup touchend'); // unbinding event listener for next function of this button

                // I dont know why it only works with timeout maybe something wrong with async function???
                setTimeout(() => {

                    // ------ STEP 3 --------
                    // button with yes id event listener
                    $('#customRange2').on('input', (e) => {
                        e.preventDefault();

                        //like above
                        front.css('transform', 'rotateY(180deg)');
                        back.css('transform', 'rotateY(0deg)');

                        // -------- STEP 4 ---------
                        // new function of next button
                        $('#next').on('mouseup touchend', (e) => {
                            $('.third-step').css('visibility', 'hidden');
                            $('.fourth-step').attr('tabindex', -1);
                            $('.top-right-2, .left-top-1').css('background-color', 'yellow')

                            //like above
                            e.preventDefault();

                            const step = document.getElementsByClassName('step')
                            let w = $(step).eq(-1).width() + $(step).eq(-1).offset().left
                            call({
                                url: 'components/fourth-step-top.html',
                                url2: 'components/fourth-step-bottom.html',
                                preElmCls: '.third-step',
                                frontMess: 'مارا بیشتر در جریان بگذارید.',
                                actionAreaElm: actionArea,
                                circleFront: front,
                                circleBack: back,
                                step: step,
                                deg: 0,
                                deg1: 180,
                                w: w,
                                multiplier: 3,
                            })

                            $("#next").unbind('mouseup touchend');

                            // again I don't know why
                            setTimeout(() => {

                                // ------- STEP 5 --------
                                // on key up show next button
                                $('.textarea').on('keyup', (e) => {
                                    // $('.fifth-step').css('visibility', 'hidden');
                                    front.css('transform', 'rotateY(180deg)');
                                    back.css('transform', 'rotateY(0deg)');

                                    $('#next').on('mouseup touchend', (e) => {
                                        e.preventDefault()
                                        $('.fourth-step').css('visibility', 'hidden');
                                        $('.fifth-step').attr('tabindex', -1);
                                        $('.right-bottom-1, .bottom-left-2').css('background-color', 'yellow')

                                        const step = document.getElementsByClassName('step');
                                        let w = $(step).eq(-1).width() + $(step).eq(-1).offset().left;
                                        call({
                                            url: 'components/fifth-step-top.html',
                                            url2: 'components/fifth-step-bottom.html',
                                            preElmCls: '.fourth-step',
                                            frontMess: 'شبکه های اجتماعی خود را وارد کنید',
                                            actionAreaElm: actionArea,
                                            circleFront: front,
                                            circleBack: back,
                                            step: step,
                                            deg: 0,
                                            deg1: 180,
                                            w: w,
                                            multiplier: 4,
                                        })
                                        $("#next").unbind('mouseup touchend');
                                        setTimeout(() => {
                                            $('.form-control').on('keyup', (e) => {
                                                // $('.fifth-step').css('visibility', 'hidden');
                                                front.css('transform', 'rotateY(180deg)');
                                                back.css('transform', 'rotateY(0deg)');

                                                // -------- STEP 6 --------
                                                // final function of next button
                                                $('#next').on('mouseup touchend', (e) => {
                                                    e.preventDefault();
                                                    $('.right-bottom-2, .bottom-left-1').css('background-color', 'yellow')
                                                    alert('ok')
                                                })
                                            })
                                        }, 500)
                                    })
                                })

                            }, 500)
                        })
                    })
                }, 500)
            } else {alert('لطفا اطلاعات را کامل وارد کنید.')}
        })
    })

})