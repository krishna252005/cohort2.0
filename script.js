// 'C#3': 'Db3',
//   'D#3': 'Eb3',
//   'F#3': 'Gb3',
//   'G#3': 'Ab3',
//   'A#3': 'Bb3'

var a = new Audio('piano-mp3_C3.mp3');                      
var s = new Audio('piano-mp3_D3.mp3');
var d = new Audio('piano-mp3_E3.mp3');
var f = new Audio('piano-mp3_F3.mp3');
var j = new Audio('piano-mp3_G3.mp3');
var k = new Audio('piano-mp3_A3.mp3');
var l = new Audio('piano-mp3_B3.mp3');
var q = new Audio('piano-mp3_Db3.mp3');
var w = new Audio('piano-mp3_Eb3.mp3');
var t = new Audio('piano-mp3_Gb3.mp3');
var o = new Audio('piano-mp3_Ab3.mp3');
var p = new Audio('piano-mp3_Bb3.mp3');
var id1 = document.querySelector('#id1');  
var id2 = document.querySelector('#id2');
var id3 = document.querySelector('#id3');
var id4 = document.querySelector('#id4');
var id5 = document.querySelector('#id5');
var id6 = document.querySelector('#id6');
var id7 = document.querySelector('#id7');
var id8 = document.querySelector('#id8');
var id9 = document.querySelector('#id9');
var id10 = document.querySelector('#id10');
var id11 = document.querySelector('#id11');
var id12 = document.querySelector('#id12');


function flashColor(element) {
  const oldColor = element.style.backgroundColor;
  element.style.backgroundColor = "palevioletred";
  setTimeout(() => {
    element.style.backgroundColor = oldColor;
  }, 500);
}


 document.body.addEventListener('keydown', function(dets) {

  if (dets.key === 'a') {
    flashColor(id1);  
    a.play();
  }

  if (dets.key === 's') {
    flashColor(id2);
    s.play();
  }

  if (dets.key === 'd') {
    flashColor(id3);
    d.play();
  }

  if (dets.key === 'f') {
    flashColor(id4);
    f.play();
  }

  if (dets.key === 'l') {
    flashColor(id7);
    l.play();
  }

  if (dets.key === 'k') {
    flashColor(id6);
    k.play();
  }

  if (dets.key === 'j') {
    flashColor(id5);
    j.play();
  }

  if (dets.key === 'q') {
    flashColor(id8);
    q.play();
  }

  if (dets.key === 'w') {
    flashColor(id9);
    w.play();
  }

  if (dets.key === 't') {
    flashColor(id10);
    t.play();
  }

  if (dets.key === 'p') {
    flashColor(id12);
    p.play();
  }

  if (dets.key === 'o') {
    flashColor(id11);
    o.play();
  }

});
