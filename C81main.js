canvas= document.getElementById("myCanvas");

ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.arc(350, 350, 40, 0, 2* Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=5;
ctx.arc(450,350, 40, 0, 2* Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.arc(550,350, 40, 0, 2* Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=5;
ctx.arc(400,400, 40, 0, 2* Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=5;
ctx.arc(500,400, 40, 0, 2* Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="grey";
ctx.lineWidth=2;
ctx.rect(225,250,450,250);
ctx.stroke();