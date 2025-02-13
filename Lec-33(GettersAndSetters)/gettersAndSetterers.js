let a = document.querySelector('a')
console.log(a.getAttribute('href'))//GIVES THE LINK

a.href = "https://google.com"//TRADITIONAL WAY FOR SETTING
console.log(a.getAttribute('href'))

a.setAttribute('href',"https://online.codingblocks.com/app/player/285175/content/283992/17284/lecture")
console.log(a.getAttribute('href'))


a.setAttribute('style','display:none')