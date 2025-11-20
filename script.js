
 var arr = [
   { party:"BJP",
   seats:89,
   name:"Bartiya Janta Party",
   logo:"BJP Logo Png _ Artworkbird.jpg"

 },{ party:"JDU",
   seats: 85,
   logo:"images.jpg",
   name:"Janata Dal (United)"

 },{ party:"LJPRV",
   seats: 19,
  logo:"LJP_R_Logo.jpg",
   name:"Lok Janshakti Party (Ram Vilas)"

 },{party:"HAMS",
   seats: 5,
   logo:"1524615_hindustani_awam_morcha_logo.webp",
   name:"Hindustani Awam Morcha"

 },{party:"RJD",
   seats: 25,
   logo:"RJD_Logo.jpg",
   name:"Rashtriya Janata Dal"

 },{party:"INC",
   seats: 6,
   logo:"The Indian national congress was founded in December 1885_.jpg",
   name:"Indian National Congress"
},
   
   {party:"AIMIM",
   seats: 5,
   logo:"images (1).jpg",
   name:"All India Majlis-e-Ittehadul Muslimeen"} , ];





var  box = document.querySelector('#box')
var clk = document.querySelector('button')
var  party = document.querySelector('#party')
var  seats = document.querySelector('#seats')
var  form = document.querySelector('#form')
var  logo = document.querySelector('#logo')
var  body = document.querySelector('body')




clk.addEventListener('click',function()
{  console.log("hello");
   var win =arr[Math.floor(Math.random()*arr.length)]
   
   party.innerHTML = win.party
   seats.innerHTML = win.seats
   form.innerHTML = win.name
  
  
    
})

