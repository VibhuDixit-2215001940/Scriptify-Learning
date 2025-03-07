let grandParent = document.getElementById('grandParent');
let Parent = document.getElementById('Parent');
let child = document.getElementById('child');

// //EVENT BUBBLING
// grandParent.addEventListener('click',function (){
//     console.log("Grand Parent clicked!!")
// })
// Parent.addEventListener('click',function (){
//     console.log("Parent clicked!!")
// })
// child.addEventListener('click',function (){
//     console.log("Child clicked!!")
// })

// EVENT BUBBLING Explicitly writting false!! printing value when ladder going back!!
// grandParent.addEventListener('click',function (){
//     console.log("Grand Parent clicked!!")
// },false)
// Parent.addEventListener('click',function (){
//     console.log("Parent clicked!!")
// },false)
// child.addEventListener('click',function (){
//     console.log("Child clicked!!")
// },false)




//EVENT CAPTURING -- true karne se abb ladder shuru se aate wakt print karta jayega!
grandParent.addEventListener('click',function (){
    console.log("Grand Parent clicked!!")
},true)
Parent.addEventListener('click',function (event){
    // event.stopPropagation();//will stop the propogation
    console.log("Parent clicked!!")
},true)
child.addEventListener('click',function (){
    console.log("Child clicked!!")
},true)