$('.line-wrap').css('background-image', ' url("2.jpg")')

if (screen.availHeight > screen.availWidth) {
    alert('please use landscape')
}

$(document).ready(() => {
    // $('.').prop('disabled', true)

    // get all the span with circle class
    const points = document.querySelectorAll('.circle');

    // get the div with choice area class (where connections go)
    let choiceArea = document.getElementsByClassName('choice-area')[0];

    // span elements (circles are sorted based on their class number)
    const sorted_points = sort(points);

    // connect the points
    connect(points, sorted_points, choiceArea);


    // // popup on connections
    // const popup = $('.popup').on('mousedown', (event) => {
    //     const span = event.target.firstElementChild;
    //     span.classList.toggle('show');
    // })

    // on window size change coordinates of all div.conn
    $(window).resize(() => {
        // connect method explained later
        connect(points, sorted_points, choiceArea, true);
    })

    // Event Listener for circles (div elements)
    $('.circle').on('mousedown', (e) => {
        $(e.target).css('box-shadow', 'none'); // removing box-shadow
        let number = parseInt(e.target.classList[1].slice(-1)[0]); // get number of circle
        let destination_list = e.target.className.match(/lineTo-(\d)/g); // get destination point/points
        if (destination_list !== null) {
            // if its not null get out the number
            destination_list.map((des, index) => destination_list[index] = des.slice(-1)[0] - 1)

            // for each connection get the relevant div element and put it in conns list
            let conns = []
            destination_list.forEach((des) => {
                const conn = document.getElementsByClassName(`conn-${number - 1}-${des}`)[0];
                conns.push(conn);
            })

            // call out transformation function for one or multiple conns
            transformation(e.target, number, conns);
        }
        // call out transformation function (without conns)
        transformation(e.target, number);
    });

});
