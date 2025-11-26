
// addEventListener("mousemove",(e)=>{

//  console.log(e.clientX,e.clientY)

//  document.body.style.setProperty("--x",e.clientX +'px')
//  document.body.style.setProperty("--y",e.clientY +'px')

// })

// ----------------------------------

var para = document.querySelector('p')
var characters = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
var text = para.innerHTML

 para.addEventListener('mouseenter',() =>{


 setInterval(()=>{

   
    var str = text.split('').map(
        (char,index) => {

        return characters.split('')[Math.floor(Math.random()*53)]
    }).join('')

    para.innerHTML = str

 },100)

 

})