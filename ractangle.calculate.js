function calculateRectangleArea(){
// get length the rectangle
const widthInput=document.getElementById('rectangle-width');
const widthText=widthInput.value;
const width=parseFloat(widthText);
console.log(width);
// get length 
const lengthInput=document.getElementById('rectangle-length');
const lengthText=lengthInput.value;
const length=parseFloat(lengthText);
console.log(length);

// get rectangle area 
const area=width*length;
console.log('the rectangle area is:',area)
// display rectangle area 
const areaSpan=document.getElementById('rectangle-area');
areaSpan.innerText=area;

}