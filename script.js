function ColorToHex(color) {
  var hexadecimal = color.toString(16);
  return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}
function ConvertRGBtoHex(red, green, blue) {
  return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}
const button = document.querySelector('.button-54');
let container = document.querySelector('.container');
const body =  document.querySelector('body')
const randomInt = (min, max)=> Math.floor(Math.random()*(max-min+1)+min);


function randomcolor(){
let red = randomInt(0,255);
let green = randomInt(0,255);
let blue = randomInt(0,255);
const colorstring = `rgb(${red},${green},${blue})`;
  const colorarr = [red,green,blue,colorstring];
  return colorarr;
}

button.addEventListener('click', function(){
  let arr = randomcolor();
  const random =  arr[3];
  body.style.backgroundColor = random;
  let hexcode = ConvertRGBtoHex(arr[0], arr[1], arr[2]);
  button.innerHTML = `${hexcode} <br><br> ${random}`;
});