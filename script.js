var para = document.querySelector('p')
var characters = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
var text = para.innerHTML
let interval = 0

 para.addEventListener('mouseenter',() =>{

    let iteration = 0
    clearInterval(interval)

  interval = setInterval(()=>{

   
    var str = text.split('').map((char,index) => {
          if(index<iteration)
          {
            return char
          }
        return characters.split('')[Math.floor(Math.random()*52)]
    }).join('')

    para.innerHTML = str

    iteration+=0.5


 },50)

 

})