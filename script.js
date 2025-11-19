
var  boox = document.querySelector('#box')
var clk = document.querySelector('button')




clk.addEventListener('click',function()
{
   var n1 = Math.floor(Math.random()*256)
   var n2 = Math.floor(Math.random()*256)
   var n3 = Math.floor(Math.random()*256)

   boox.style.backgroundColor = `rgb(${n1},${n2},${n3})`
    
})

