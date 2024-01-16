// sort the points (span elements) based on their class number
const sort = (points) => {
    let sorted_points = [];
    // there are 7 circles so loop over them an put them in order in sorted_points list
    for (let i = 1; i <= 7; i++) {
        points.forEach((point) => {
            // if the span element class contains n-<i> ( i is index ) push it into sorted_points
            if (point.className.match('n-' + i)) {
                sorted_points.push(point);
            }
        })
    }
    return sorted_points;
}

// connect the circles
const connect = (points, sorted_points, choiceArea, update = false) => {
    // if update option is true just reposition element (connections) else create elements and position them
    if (update) {
        points.forEach((point) => {
            // for each point if its class list contains lineTo-<number> put it to destination_list
            let destination_list = point.className.match(/lineTo-(\d)/g);

            // if the list is not null
            if (destination_list !== null) {
                destination_list.forEach((des) => {
                    // for each point with lineTo-<number> get number (n-<number>) of circle (span)
                    const index = point.className.match(/n-(\d)/g)[0].slice(-1)[0] - 1;

                    // for des (lineTo-<number>) in destination_list slice it and get the number destination circle
                    const index_to = des.slice(-1)[0] - 1;

                    // get the element with class conn-<startNumber>-<endNumber>)
                    const elm = document.getElementsByClassName('conn-' + index + '-' + index_to)[0];

                    // defining x and y coordinates of two points
                    let x1, y1, x2, y2;

                    // getting x,y of pre calculated indexes from sorted_points list (center of element)
                    x1 = sorted_points[index].getBoundingClientRect().left + sorted_points[index].offsetWidth / 2;
                    y1 = sorted_points[index].getBoundingClientRect().top + sorted_points[index].offsetHeight / 2;
                    x2 = sorted_points[index_to].getBoundingClientRect().left + sorted_points[index_to].offsetWidth / 2;
                    y2 = sorted_points[index_to].getBoundingClientRect().top + sorted_points[index_to].offsetHeight / 2;

                    // update Graph
                    updateGraphLine(x1, y1, x2, y2, elm);
                })
            }
        })
    } else {
        // exactly like above
        points.forEach((point) => {
            let destination_list = point.className.match(/lineTo-(\d)/g);
            if (destination_list !== null) {
                destination_list.forEach((des) => {
                    const index = point.className.match(/n-(\d)/g)[0].slice(-1)[0] - 1;
                    const index_to = des.slice(-1)[0] - 1;
                    let x1, y1, x2, y2;

                    x1 = sorted_points[index].getBoundingClientRect().left + sorted_points[index].offsetWidth / 2;
                    y1 = sorted_points[index].getBoundingClientRect().top + sorted_points[index].offsetHeight / 2;
                    x2 = sorted_points[index_to].getBoundingClientRect().left + sorted_points[index_to].offsetWidth / 2;
                    y2 = sorted_points[index_to].getBoundingClientRect().top + sorted_points[index_to].offsetHeight / 2;

                    // draw Graph
                    drawGraphLine(x1, y1, x2, y2, index, index_to, choiceArea);
                })
            }
        })
    }
}

// update coordinates existing elements
function updateGraphLine(x1, y1, x2, y2, elm) {
    // calculating distance between two circles (span elements)
    let dist = Math.ceil(Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)));

    // calculating angle between two vectors (here points)
    let angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

    // positioning given element
    elm.style.top = y1 + 'px';
    elm.style.left = x1 + 'px';
    elm.style.width = dist + 'px';
    elm.style.transform = 'rotate(' + angle + 'deg)';
}

// drawing line between two circles (span elements)
function drawGraphLine(x1, y1, x2, y2, index, index_to, choiceArea) {
    // like above
    let dist = Math.ceil(Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)));
    let angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

    // create div and span element
    let div = document.createElement('div');
    let span = document.createElement('span');

    // adding classes to div including conn-<startNumber>-<endPoint>, adding class to span
    // positioning div, appending span to div
    // appending div to choice area
    div.classList.add('conn', 'popup', 'conn-' + index + '-' + index_to);
    span.classList.add('popuptext');
    div.style.top = y1 + 'px';
    div.style.left = x1 + 'px';
    div.style.width = dist + 'px';
    div.style.transform = 'rotate(' + angle + 'deg)';
    div.appendChild(span);
    choiceArea.appendChild(div);
}

// page transformations
const transformation = (e, number, conns = null) => {
    // setting timeout for body transform animation to finnish
    setTimeout(() => {
        // storing parent body transform
        // const transform = document.querySelector('body').style.transform;
        $('iframe').css({
            'display': 'flex',
            'width': '100%',
            'height': '100%',
            'top': "0"
        })
        $('body').css({
            'transform': 'none',  // removing body transform
            'transition': 'all .2s',
        });

        // function for when message is received
        const receiveMessage = (event) => {
            const message = event.data.finished; // getting finished message
            const completed = event.data.completed; // getting completed message

            // in case of that message is true
            switch (message) {
                case true:
                    ret(completed); // return function to undo changes
                    break
            }
        }
        const ret = (isCompleted = false) => {
            $('iframe').css({
                'width': '0',
                'height': '0',
            }); // set iframe display to none

            // $('body').css({
            //     // 'transition': 'all .2s',  // removing transition it causes bad effect
            //     // 'transform': transform,  // setting previous transform to body
            // });

            if (isCompleted) {
                $(e).removeClass('active'); // removing active class
                $(e).css('pointer-events', 'auto'); // keeping click option for possible changes
                if (conns !== null) {
                    conns.forEach((conn, index) => {
                        $(`.n-${number + index + 1}`).addClass('active');
                        conn.style.transition = 'all 2s';
                        conn.style.backgroundColor = 'green';
                    });
                }
            }
        };
        // adding event listener for message event
        window.addEventListener('message', receiveMessage)
    }, 900);
}