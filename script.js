const canvas = document.querySelector('#matrix');
var ctx = canvas.getContext('2d');

var fontSize = 10;
ctx.font = fontSize + "px monospace";

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    columns = Math.floor(canvas.width / fontSize);

    drops = [];
    for (var i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random()*62);
    }
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

var bucket = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890".split('');
var drops;

var columns;

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0";

    for (var i = 0; i < drops.length; i++) {
        let letter = bucket[Math.floor(Math.random() * bucket.length)];
        ctx.fillText(letter, i * fontSize, drops[i] * fontSize);

        drops[i]++;

        if (drops[i] * fontSize > canvas.height) {
            drops[i] = 0;
        }
    }

    requestAnimationFrame(drawMatrix);
}

drawMatrix();
