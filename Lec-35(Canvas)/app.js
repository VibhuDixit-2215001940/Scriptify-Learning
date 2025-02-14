let canvas = document.querySelector('canvas');
// //brush == context
let ctx = canvas.getContext('2d');

// // ctx.fillRect(100,100,50,60)//x , y , w , h4

// ctx.fillStyle = 'red'//Pahale paint mai duba deta hoo phir diwaal par lagaunga na 

// ctx.fillRect(100,100,50,60)//x , y , w , h

// ctx.strokeStyle = 'green'//Border color select karo brudsh 

// ctx.strokeRect(100,100,50,60)//Then border banao

//PATH
ctx.beginPath();
ctx.moveTo(40,40);
ctx.lineTo(100,120);
ctx.lineTo(200,220);
ctx.lineTo(50,50);
ctx.stroke()
