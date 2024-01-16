$(document).ready(() => {
    $('.yes').on('mousedown', (e) => {
        $('.no').css('display', 'none')
        $(e.target).css({
            'transition': 'all 1.5s',
            'width': '100%',
            'background-color': 'green',
            'border-color': 'green',

        });
        $(e.target).prop('disabled', true);
        setTimeout(() => {
            $('.vl').css({
                'display': 'block',
                'height': '30%'
            })
            setTimeout(() => {
                $('.input').css({
                    'height': '10%',
                    'border': '2px solid green',
                })
                setTimeout(() => {
                    $('input').css({
                        'display': 'block',
                        'height': '100%',
                    })
                    $('.btn-success').css({
                        'display': 'block',
                        'height': '100%',
                    })
                }, 1200)
            }, 1100)
        }, 1500)
    })
    $('.no').on('mousedown', (e) => {
        window.parent.postMessage({'finished': true, 'completed': false}, "*")
    })
    $('#submit').on('mousedown', () => {
        window.parent.postMessage({'finished': true, 'completed': true}, "*")
    })
})