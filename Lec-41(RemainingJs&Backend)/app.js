let arr = [1,2,3]
let brr = [4,5,6]
//concat
let z = arr.concat(brr)
console.log(z)

//spread operator

let x = [...arr, ...brr]
console.log(x)

let obj1 = {
    name : 'pradeep',
    age : 25
}
let obj2 = {
    ...obj1,
    city : 'delhi'
}

console.log(obj2)//{name: 'pradeep', age: 25, city: 'delhi'}
delete obj2.name

console.log(obj2)//{age: 25, city: 'delhi'}


//Finding min and max ele using spread operator
let min = Math.min(...arr);

console.log(min)//1



//REST PARAMETERS
function add(a,b,c,...arr){
    console.log(arr)
    return a+b+c;
}
let sum = add(...arr);
console.log(sum)//6

//DESTRUCTURING
let fruits = ['apple', 'orange', 'pineapple', 'kallowock']

let [fruit1, fruit2, ...rest] = fruits
console.log(fruit1)