let h1 = document.querySelector('h1');//JUST GIVE SINGLE ELE
console.log(h1);//<h1>Hello by h1</h1>
console.log(h1.textContent);//Hello by h1
console.log(h1.innerText);//""

h1.textContent = 'Hello, World!';//Change the text content of h1 to 'Hello, World!'
h1.style.display = 'none';




let h2 = document.getElementById('ok');
h2.textContent = "Raand";
console.log(h2)//JSUT GIVE SINGLE ELE


let h1All = document.querySelectorAll('h1')
console.log(h1All)//GIVES A NODELIST ARRAY WITH ALL ELE IN IT


let h3 = document.getElementsByClassName('okk')
console.log(h3)//GIVES A HTMLCollection WITH THE TAG.CLASSNAME ARRAY  HTMLCollection [h3.okk]