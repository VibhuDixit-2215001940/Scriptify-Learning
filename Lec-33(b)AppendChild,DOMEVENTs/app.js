// //appendChild = HTML only   at end
// let baccha = document.createElement('h2');
// let papa = document.querySelector('h1');
// baccha.innerText = "Raand"
// baccha.setAttribute('style','background-color:pink;')
// papa.appendChild(baccha)




// //append = HTML+Text    at end
// let doosra = document.createElement('h3')
// papa.append(doosra,"Hello randi!")


// //prepend = HTML+Text    at start
// papa.prepend(doosra,"randi ki bacchi")



/////////////////////////DOM EVENTS//////////////////////////
//1st Way
// function doSomething(){
//     console.log("Ahhhhhh Daba dia!!!")
// }


// //2nd Way
// let btn = document.querySelector('button')
// // btn.onclick = function (){
// //     console.log("Mai raandi hoo!")
// // }
// btn.onclick = function (){
//     btn.style.color="red"
// }
// console.log(btn)

//--------eventListener---------
let btn = document.querySelector('button')
function one(){
    console.log('one');
}
function two(){
    console.log('two');
}
// btn.onclick = one();
// btn.onclick = two();

// btn.addEventListener('click', one);
// btn.addEventListener('click', two);

btn.addEventListener('click', (e) => {
    console.log(e.target);
    e.preventDefault()
    document.body.style.backgroundColor = "red";
});
