//ACCESSING-----------------------------
// console.log($('.okk'))
// console.log($('h1'));
// console.log($('#okk'))

//CSS HANDLING------------------------
// $('h1').css('color','red')
// $('h1').css({
//     color: 'red',
//     backgroundColor: 'green'
// })

//ACCESS TEXT INSIDE ELE---------------
// console.log($('h1').text()) //innerHTML
// console.groupEnd($('h1').text('senorita')) //text repalce
// console.log($('h1').html())
// console.log($('h1').html('<em>Randwi!!</em>'))

//MANIPULATING ATTRIBUTES----------------
// console.log($('a').attr('href'))  //getter
// console.log($('a').attr('href','https://google.com'))  //setter


//SELECTING A PARTICULAR ELE
$('h1:nth-of-type(2)').css('color','red')