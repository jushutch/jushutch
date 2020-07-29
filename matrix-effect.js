const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');

const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;

//ctx.fillStyle = '#000';
ctx.fillStyle = '#ffffff';
ctx.fillRect(0, 0, w, h);

const cols = Math.floor(w / 50) + 1;
const ypos = Array(cols).fill(0);

function matrix() {
    ctx.fillStyle = "rgba(255, 255, 255, .2)";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#0f0';
    ctx.font = '15pt monospace';

    ypos.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = ind * 50;
        ctx.fillText(text, x, y);
        if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
        else ypos[ind] = y + 20;
    });
}

setInterval(matrix, 50);