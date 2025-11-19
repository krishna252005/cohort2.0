
var inc = document.querySelector('#but1')
var dec = document.querySelector('#but2')
var h = document.querySelector('h1')


var a = 0

inc.addEventListener('click',function()
{
    a++
    h.innerHTML = a
})

dec.addEventListener('click',function()
{
    a--
    h.innerHTML = a
})