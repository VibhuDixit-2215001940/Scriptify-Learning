let img = document.getElementById('img');


let req = new XMLHttpRequest();//Its a constructor f() thus defines using new keyword and also its returining an obj.
//CONNECTION BANA HAI BSS
req.open('GET','https://dog.ceo/api/breeds/image/random');
//BHEJNI HAI APNI REQUEST/DEMAND
req.send();

//Jab sahi salamat data mile or jab sara kaam sahi se ho jaye
req.onload = function(){
    let response = JSON.parse(req.responseText);
    img.src = response.message;
    console.log(this)
}

//lekin agar error aai
req.onerror = function(){
    console.log('Request Error')
}