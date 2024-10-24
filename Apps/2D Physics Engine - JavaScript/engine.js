var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
let x = 70;
let y = 70;

function drawBall(x, y, radio) {
    ctx.beginPath();
    ctx.arc(x, y, radio, 0, 2 * Math.PI, true);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();
}

//  function randomDrawBallGenerator() {
//     var xPos = Math.floor(Math.random() * canvas.width);
//     var yPos = Math.floor(Math.random() * canvas.height);
//     var radio = Math.floor(Math.random() * 50);
//     var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
//     drawBall(ctx, xPos, yPos, radio, color);
// }


canvas.addEventListener("keydown", function(event) {
    if (event.key === 37) {
        x--;
    }
    if (event.key === 39) {
        x++;
    }
    if (event.key === 38) {
        y--;
    }
    if (event.key === 40) {
        y++;
    }
});

setInterval(function(){
    drawBall(x, y, 10,);
}, 1000/60); 
