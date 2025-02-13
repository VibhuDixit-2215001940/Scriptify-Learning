let h1 = document.querySelector('h1');
// console.log(h1.parentElement)//body
// console.log(h1.parentElement.parentElement)//html
// console.log(h1.parentElement.parentElement.parentElement)//null


//Just giving line by line next eles
console.log(h1.nextSibling)//#text
console.log(h1.nextSibling.nextSibling)//#comment
console.log(h1.nextSibling.nextSibling.nextSibling)//#text
console.log(h1.nextSibling.nextSibling.nextSibling.nextSibling)//script
console.log(h1.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling)//null



console.log(h1.childElementCount)//0