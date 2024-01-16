(function () {
        "use strict";
        window.onload = function () {
            setTimeout(start, 200);
        };


        function DrawStraightLine(context, xS, yS, xE, yE) {

            context.moveTo(xS, yS);
            context.lineTo(xE, yE);
            context.stroke();
            context.beginPath();
            context.arc(xE, yE, 5, 0, 2 * Math.PI);
            context.fillStyle = "yellow";
            context.fill();
            context.stroke();

        }

        function DrawBrokeLine(context, xS0, yS0, xE0, yE0, xS1, yS1, xE1, yE1) {
            context.moveTo(xS0, yS0);
            context.lineTo(xE0, yE0);
            context.lineTo(xS1, yS1);
            context.lineTo(xE1, yE1);
            context.stroke();
            context.beginPath();
            context.arc(xE1, yE1, 5, 0, 2 * Math.PI);
            context.fillStyle = "yellow";
            context.fill();
            context.stroke();
        }

        function start() {
            //Canvas and settings
            const body = document.body,
                html = document.documentElement;

            const height_a = Math.max(body.scrollHeight, body.offsetHeight,
                html.clientHeight, html.scrollHeight, html.offsetHeight);
            let canvas = document.getElementById("scene"),
                context = canvas.getContext("2d"),
                width = canvas.width = window.innerWidth,
                height = canvas.height = height_a;

            context.clearRect(0, 0, width, height);
            context.fillStyle = "#808080FF";
            context.fillRect(0, 0, width, height);
            context.fill();
            context.strokeStyle = '#fffdfd';

            let vertices = []; // vertices later used for animation

            function paint(widthP, heightP) {
                DrawStraightLine(context, 50, 50, 150, 50)
                vertices.push({x: 50, y: 50, end: false})
                vertices.push({x: 150, y: 50, end: true})

                //line 2
                DrawBrokeLine(context, 70, 100, 270, 100, 330, 50, 430, 50)
                vertices.push({x: 70, y: 100, end: false})
                vertices.push({x: 270, y: 100, end: false})
                vertices.push({x: 330, y: 50, end: false})
                vertices.push({x: 430, y: 50, end: true})

                //line 3
                DrawBrokeLine(context, 90, 150, 270, 150, 330, 100, 400, 100)
                vertices.push({x: 90, y: 150, end: false})
                vertices.push({x: 270, y: 150, end: false})
                vertices.push({x: 330, y: 100, end: false})
                vertices.push({x: 400, y: 100, end: true})

                //line 4
                DrawBrokeLine(context, 110, 200, 330, 200, 350, 180, 460, 180)
                vertices.push({x: 110, y: 200, end: false})
                vertices.push({x: 330, y: 200, end: false})
                vertices.push({x: 350, y: 180, end: false})
                vertices.push({x: 460, y: 180, end: true})

                //line 5
                DrawBrokeLine(context, 110, heightP - 200, 330, heightP - 200, 350,
                    heightP - 180, 460, heightP - 180)
                vertices.push({x: 110, y: heightP - 200, end: false})
                vertices.push({x: 330, y: heightP - 200, end: false})
                vertices.push({x: 350, y: heightP - 180, end: false})
                vertices.push({x: 460, y: heightP - 180, end: true})

                //line 6
                DrawBrokeLine(context, 90, heightP - 150, 270, heightP - 150, 330,
                    heightP - 100, 400, heightP - 100)
                vertices.push({x: 90, y: heightP - 150, end: false})
                vertices.push({x: 270, y: heightP - 150, end: false})
                vertices.push({x: 330, y: heightP - 100, end: false})
                vertices.push({x: 400, y: heightP - 100, end: true})

                //line 7
                DrawBrokeLine(context, 70, heightP - 100, 270, heightP - 100, 330,
                    heightP - 50, 430, heightP - 50)
                vertices.push({x: 70, y: heightP - 100, end: false})
                vertices.push({x: 270, y: heightP - 100, end: false})
                vertices.push({x: 330, y: heightP - 50, end: false})
                vertices.push({x: 430, y: heightP - 50, end: true})

                // line 8
                DrawStraightLine(context, 50, heightP - 50, 150, heightP - 50)
                vertices.push({x: 50, y: heightP - 50, end: false})
                vertices.push({x: 150, y: heightP - 50, end: true})

                // line 9
                DrawStraightLine(context, widthP - 50, 50, widthP - 150, 50)
                vertices.push({x: widthP - 50, y: 50, end: false})
                vertices.push({x: widthP - 150, y: 50, end: true})

                //line 10
                DrawBrokeLine(context, widthP - 70, 100, widthP - 270, 100, widthP - 330,
                    50, widthP - 430, 50)
                vertices.push({x: widthP - 70, y: 100, end: false})
                vertices.push({x: widthP - 270, y: 100, end: false})
                vertices.push({x: widthP - 330, y: 50, end: false})
                vertices.push({x: widthP - 430, y: 50, end: true})

                //line 11
                DrawBrokeLine(context, widthP - 90, 150, widthP - 270, 150, widthP - 330,
                    100, widthP - 400, 100)
                vertices.push({x: widthP - 90, y: 150, end: false})
                vertices.push({x: widthP - 270, y: 150, end: false})
                vertices.push({x: widthP - 330, y: 100, end: false})
                vertices.push({x: widthP - 400, y: 100, end: true})

                //line 12
                DrawBrokeLine(context, widthP - 110, 200, width - 330, 200,
                    widthP - 350, 180, widthP - 460, 180)
                vertices.push({x: widthP - 110, y: 200, end: false})
                vertices.push({x: widthP - 330, y: 200, end: false})
                vertices.push({x: widthP - 350, y: 180, end: false})
                vertices.push({x: widthP - 460, y: 180, end: true})

                //line 12
                DrawBrokeLine(context, widthP - 110, heightP - 200, widthP - 330, heightP - 200,
                    widthP - 350, heightP - 180, widthP - 460, heightP - 180)
                vertices.push({x: widthP - 110, y: heightP - 200, end: false})
                vertices.push({x: widthP - 330, y: heightP - 200, end: false})
                vertices.push({x: widthP - 350, y: heightP - 180, end: false})
                vertices.push({x: widthP - 460, y: heightP - 180, end: true})

                //line 13
                DrawBrokeLine(context, widthP - 90, heightP - 150, widthP - 270, heightP - 150,
                    widthP - 330, heightP - 100, widthP - 400, heightP - 100)
                vertices.push({x: widthP - 90, y: heightP - 150, end: false})
                vertices.push({x: widthP - 270, y: heightP - 150, end: false})
                vertices.push({x: widthP - 330, y: heightP - 100, end: false})
                vertices.push({x: widthP - 400, y: heightP - 100, end: true})

                //line 14
                DrawBrokeLine(context, widthP - 70, heightP - 100, widthP - 270, heightP - 100,
                    widthP - 330, heightP - 50, widthP - 430, heightP - 50)
                vertices.push({x: widthP - 70, y: heightP - 100, end: false})
                vertices.push({x: widthP - 270, y: heightP - 100, end: false})
                vertices.push({x: widthP - 330, y: heightP - 50, end: false})
                vertices.push({x: widthP - 430, y: heightP - 50, end: true})

                // line 15
                DrawStraightLine(context, widthP - 50, heightP - 50, widthP - 150, heightP - 50)
                vertices.push({x: widthP - 50, y: heightP - 50, end: false})
                vertices.push({x: widthP - 150, y: heightP - 50, end: true})
            }

            // }

            let widthP = $(window).width(); // width page
            let heightP = $(window).height(); // height page
            //Run
            paint(widthP, heightP); // painting the canvas
            window.onresize = function () {
                // on resize reload the page (just for computers)
                location.reload()
            }

            // for view ports more tha 768px (tablets) animate the lines
            if (widthP > 768) {
                // calculating way points and storing them in arrays
                function calcWaypoints(vertices) {
                    let waypoints = [];
                    for (let i = 1; i < vertices.length; i++) {
                        // going through each point
                        let pt0 = vertices[i - 1];
                        let pt1 = vertices[i];
                        // difference between last coordinates and first
                        let dx = pt1.x - pt0.x;
                        let dy = pt1.y - pt0.y;
                        if (!pt0.end) {
                            // if its not the end coordinates of line
                            for (let j = 0; j < 100; j++) {
                                // break x,y into 100 equal peaces and push them into waypoints array
                                let x = pt0.x + dx * j / 100;
                                let y = pt0.y + dy * j / 100;
                                waypoints.push({
                                    x: x,
                                    y: y,
                                    end: false,
                                });
                            }
                        }
                        // else set end flag to true
                        waypoints.push({
                            end: true,
                        });
                    }
                    return (waypoints); //return array
                }

                // styling of new lines
                context.lineWidth = 2;
                context.shadowBlur = 10;
                context.shadowColor = "black";
                context.strokeStyle = "yellow";

                let t = 1; // frame
                let points = calcWaypoints(vertices); // getting the way points

                // extend the line from start to finish with animation
                animate(points);

                function animate() {
                    if (t < points.length - 1) {
                        requestAnimationFrame(animate);
                    }
                    // draw a line segment from the last waypoint
                    // to the current waypoint
                    // if the points are not end coordinates of line draw the line
                    if (!points[t - 1].end && !points[t].end) {
                        // context.clearRect(0, 0, widthP, heightP)
                        context.beginPath();
                        context.moveTo(points[t - 1].x, points[t - 1].y);
                        context.lineTo(points[t].x, points[t].y);
                        context.stroke();
                    }

                    // increment "t" to get the next waypoint
                    t++;
                }
            }
        }
    }

)
()