var test =['31_hires.png', '83_hires.png', '77_hires.png', '4_hires.png', '54_hires.png', '67_hires.png']
let i = 0;

function updateBtn(i) {
  console.log(i);
  var a = test[i];
  a.toString();
  imgbtn.src = "/static/pokemon/" + a ;
  var i = i + 1;
  if (i == 8){
    i=0;}
}