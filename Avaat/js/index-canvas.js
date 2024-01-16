$(document).ready(() => {
    const body = document.body,
        html = document.documentElement;

    const height_a = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
    let canvas = document.getElementById("background"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = height_a;

    if ($(window).width() > 1000) {
        let heightP = $(window).height();
        let widthP = $(window).width();

        context.clearRect(0, 0, width, height);
        let grd = context.createRadialGradient(width / 2, height / 2, width / 3, width / 2, height / 2, width / 2);
        grd.addColorStop(0, "#70777a");
        grd.addColorStop(1, "#525252");
        // context.fillStyle = "#70777a";
        context.fillStyle = grd;
        context.fillRect(0, 0, width, height);
        context.fill();

        // linear gradient from start to end of line
        // let grad1 = context.createLinearGradient(widthP - 50, 50, widthP - 50, 150);
        // grad1.addColorStop(0, "#000000");
        // grad1.addColorStop(1, "#da0101");
        context.strokeStyle = '#bebebe';



        context.fillStyle = "#bebebe";
        // line 1
        context.moveTo(widthP - 50, 80);
        context.lineTo(widthP - 100, 80);
        context.stroke();
        context.beginPath();
        context.arc($(window).width() - 100, 80, 5, 0, 2 * Math.PI);
        context.fill();
        context.stroke();


        //line 2
        context.moveTo(widthP - 150, 80);
        context.lineTo(widthP - 270, 80);
        context.lineTo(widthP - 330, 80);
        context.lineTo(widthP - 750, 80);
        context.stroke();
        context.beginPath();
        context.arc(widthP - 750, 80, 5, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        //line 3
        context.moveTo(widthP - 40, 150);
        context.lineTo(widthP - 150, 150);
        context.lineTo(widthP - 170, 120);
        context.lineTo(widthP - 500, 120);
        context.stroke();
        context.beginPath();
        context.arc(widthP - 500, 120, 5, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        //line 4
        context.moveTo(widthP - 200, 200);
        context.lineTo(widthP - 300, 200);
        context.stroke();
        context.beginPath();
        context.arc(widthP - 300, 200, 5, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        //line 5
        context.moveTo(widthP - 40, heightP - 700);
        context.lineTo(widthP - 130, heightP - 700);
        context.lineTo(widthP - 180, heightP - 650);
        context.lineTo(widthP - 360, heightP - 650);
        context.stroke();
        context.beginPath();
        context.arc(widthP - 360, heightP - 650, 5, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        //line 7
        context.moveTo(widthP - 50, 430);
        context.lineTo(widthP - 100, 430);
        context.stroke();
        context.beginPath();
        context.arc(widthP - 100, 430, 5, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        //line 8
        context.moveTo(widthP - 10, heightP - 300);
        context.lineTo(widthP - 150, heightP - 300);
        context.stroke();
        context.beginPath();
        context.arc(widthP - 150, heightP - 300, 5, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        //line 5
        context.moveTo(widthP - 40, heightP - 200);
        context.lineTo(widthP - 130, heightP - 200);
        context.lineTo(widthP - 180, heightP - 150);
        context.lineTo(widthP - 360, heightP - 150);
        context.stroke();
        context.beginPath();
        context.arc(widthP - 360, heightP - 150, 5, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        //line 7
        context.moveTo(widthP - 200, heightP - 100);
        context.lineTo(widthP - 300, heightP - 100);
        context.stroke();
        context.beginPath();
        context.arc(widthP - 300, heightP - 100, 5, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        //line 8
        context.moveTo(widthP - 40, heightP - 90);
        context.lineTo(widthP - 150, heightP - 90);
        context.lineTo(widthP - 170, heightP - 60);
        context.lineTo(widthP - 500, heightP - 60);
        context.stroke();
        context.beginPath();
        context.arc(widthP - 500, heightP - 60, 5, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        // line 9
        context.moveTo(widthP - 50, heightP - 40);
        context.lineTo(widthP - 100, heightP - 40);
        context.stroke();
        context.beginPath();
        context.arc($(window).width() - 100, heightP - 40, 5, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        //line 10
        context.moveTo(widthP - 150, heightP - 40);
        context.lineTo(widthP - 270, heightP - 40);
        context.lineTo(widthP - 330, heightP - 40);
        context.lineTo(widthP - 750, heightP - 40);
        context.stroke();
        context.beginPath();
        context.arc(widthP - 750, heightP - 40, 5, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        // dots
        context.beginPath();
        context.arc(widthP - 950, 140, 5, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        context.beginPath();
        context.arc(widthP - 800, 240, 5, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        context.beginPath();
        context.arc(widthP - 900, 440, 2, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        context.beginPath();
        context.arc(widthP - 800, 540, 2, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        context.beginPath();
        context.arc(widthP - 900, 740, 2, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        context.beginPath();
        context.arc(widthP - 1000, 790, 2, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        context.beginPath();
        context.arc(widthP - 1000, 890, 3, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        context.beginPath();
        context.arc(700 ,heightP - 50, 2, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        context.beginPath();
        context.arc(150 ,heightP - 50, 2, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        context.beginPath();
        context.arc(50 ,heightP - 200, 3, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        context.beginPath();
        context.arc(60 ,heightP - 150, 3, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        context.beginPath();
        context.arc(10 ,heightP - 400, 3, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        context.beginPath();
        context.arc(30 ,heightP - 500, 2, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        context.beginPath();
        context.arc(200 , 100, 3, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        context.beginPath();
        context.arc(150 , 200, 3, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

    }else  {
        let heightP = $(window).height();
        let widthP = $(window).width();

        context.clearRect(0, 0, width, height);
        let grd = context.createRadialGradient(width / 2, height / 2, width / 3, width / 2, height / 2, width / 2);
        grd.addColorStop(0, "#70777a");
        grd.addColorStop(1, "rgba(75,75,75,0.56)");
        // context.fillStyle = "#70777a";
        context.fillStyle = grd;
        context.fillRect(0, 0, width, height);
        context.fill();

        // linear gradient from start to end of line
        // let grad1 = context.createLinearGradient(widthP - 50, 50, widthP - 50, 150);
        // grad1.addColorStop(0, "#000000");
        // grad1.addColorStop(1, "#da0101");
        context.strokeStyle = '#bebebe';



        context.fillStyle = "#bebebe";

        // line 1
        context.moveTo(50, 0);
        context.lineTo(50, 430);
        context.stroke();
        context.beginPath();
        context.arc(50, 430, 3.5, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        // line 3
        context.moveTo(100, 120);
        context.lineTo(100, 150);
        context.stroke();
        context.beginPath();
        context.arc(100, 150, 3.5, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        // line 4
        context.moveTo(150, 30);
        context.lineTo(150, 80);
        context.lineTo(170, 100);
        context.lineTo(170, 300);
        context.stroke();
        context.beginPath();
        context.arc(170, 300, 3.5, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        // line 5
        context.moveTo(200, 30);
        context.lineTo(200, 80);
        context.lineTo(220, 100);
        context.lineTo(220, 200);
        context.stroke();
        context.beginPath();
        context.arc(220, 200, 5, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        // line 6
        context.moveTo(250, 40);
        context.lineTo(250, 80);
        context.stroke();
        context.beginPath();
        context.arc(250, 80, 3.5, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        // line 8
        context.moveTo(300, 10);
        context.lineTo(300, 120);
        context.stroke();
        context.beginPath();
        context.arc(300, 120, 3.5, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        // line 9
        context.moveTo(widthP - 480, 0);
        context.lineTo(widthP - 480, 40);
        context.stroke();
        context.beginPath();
        context.arc(widthP - 480, 40, 3.5, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        // line 10
        context.moveTo(widthP - 350, 0);
        context.lineTo(widthP - 350, 30);
        context.stroke();
        context.beginPath();
        context.arc(widthP - 350, 30, 3.5, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        // line 11
        context.moveTo(widthP - 320, 0);
        context.lineTo(widthP - 320, 50);
        context.lineTo(widthP - 300, 80);
        context.lineTo(widthP - 300, 100);
        context.stroke();
        context.beginPath();
        context.arc(widthP - 300, 100, 3.5, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        // line 12
        context.moveTo(widthP - 250, 0);
        context.lineTo(widthP - 250, 80);
        context.stroke();
        context.beginPath();
        context.arc(widthP - 250, 80, 3.5, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        // line 13
        context.moveTo(widthP - 180, 0);
        context.lineTo(widthP - 180, 30);
        context.lineTo(widthP - 200, 50);
        context.lineTo(widthP - 200, 180);
        context.stroke();
        context.beginPath();
        context.arc(widthP - 200, 180, 3.5, 0, 2 * Math.PI);
        context.fill();
        context.stroke();
        //
        // line 14
        context.moveTo(widthP - 140, 0);
        context.lineTo(widthP - 140, 40);
        context.lineTo(widthP - 180, 80);
        context.lineTo(widthP - 180, 250);
        context.stroke();
        context.beginPath();
        context.arc(widthP - 180, 250, 3.5, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        // line 15
        context.moveTo(widthP - 160, 120);
        context.lineTo(widthP - 160, 135);
        context.stroke();
        context.beginPath();
        context.arc(widthP - 160, 135, 3.5, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        // line 16
        context.moveTo(widthP - 140, 120);
        context.lineTo(widthP - 140, 250);
        context.stroke();
        context.beginPath();
        context.arc(widthP - 140, 250, 3.5, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        // line 17
        context.moveTo(widthP - 120, 0);
        context.lineTo(widthP - 120, 300);
        context.stroke();
        context.beginPath();
        context.arc(widthP - 120, 300, 3.5, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        // line 18
        context.moveTo(widthP - 100, 180);
        context.lineTo(widthP - 100, 200);
        context.stroke();
        context.beginPath();
        context.arc(widthP - 100, 200, 3.5, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        // line 19
        context.moveTo(widthP - 55, 0);
        context.lineTo(widthP - 55, 430);
        context.stroke();
        context.beginPath();
        context.arc(widthP - 55, 430, 5, 0, 2 * Math.PI);
        context.fill();
        context.stroke();
    }
})