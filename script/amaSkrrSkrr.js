//minutes to seconds project 

let m2sVal1 = document.querySelector('#m2s_val1');
let m2sButn = document.querySelector('#m2s_butn');
let m2sPara = document.querySelector('#m2s_para');


m2sButn.addEventListener('click', ()=>{
    m2sPara.innerHTML = [(m2sVal1.value*60) + ' Seconds']
})


//NextNumber Task

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let currentIndex = 0;

document.getElementById('nxtButton').addEventListener('click', function() {
    const numberDisplay = document.querySelector('.nxtDisplay');
    numberDisplay.textContent = numbers[currentIndex];
    currentIndex = (currentIndex + 1) % numbers.length; 
});



// Add Up Task
const numberss = [1,2,3,4,5]
const sum = numberss.reduce((total,num)=> total + num,0);

let btn1 = document.querySelector('.inc');
let span = document.querySelector('.addPara')

btn1.addEventListener('click', ()=>{
    span.innerHTML = sum
})




//Min Max task 
document.getElementById("check").addEventListener("click", function() {
    var input1 = document.getElementById("minMaxinp1").value;
    var input2 = document.getElementById("minMaxinp2").value;
    var minSpan = document.getElementById("min");
    var maxSpan = document.getElementById("max");

    var num1 = parseFloat(input1);
    var num2 = parseFloat(input2);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers");
        return;
    }

    var minValue = Math.min(num1, num2);
    var maxValue = Math.max(num1, num2);

    minSpan.textContent = minValue;
    maxSpan.textContent = maxValue;
});




// Area of a triangle

let base = document.querySelector('#base');
let height= document.querySelector('#height');
let btn = document.querySelector('#areaCon');
let areaSpan = document.querySelector('#TriSpan')

btn.addEventListener('click', ()=>{
    areaSpan.innerHTML = [(0.5 *base.value * height.value) ]
})



// Age to Days

let ageVal = document.querySelector('#ageInp');
let ageButn = document.querySelector('.age2daysBtn');
let ageSpan = document.querySelector('.ageDays');


ageButn.addEventListener('click', ()=>{
    ageSpan.innerHTML = [(ageVal.value*365) ]
})


// Hex to rgb 

function hexToRgb(hex) {

    hex = hex.replace(/^#/, '');

    
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    
    return {
        red: r,
        green: g,
        blue: b
    };
}

let hexColor = "#FFA500";
let rgbColor = hexToRgb(hexColor);
console.log("RGB values:", rgbColor);


// counting truthy

let Truthy =[true,false,true,true,false,true,false,true]
let count = Truthy.filter(Boolean).length;
console.log(count);


// interset amount 
let p =document.querySelector('#p');
let r = document.querySelector('#r');
let t = document.querySelector('#t');
let btn2 = document.querySelector('.intBtn')
let span2 = document.querySelector('.intConv')


let interest = (p * r * t) / 100;

console.log("Simple Interest: " + interest);
let total = p + interest;
console.log("Total Amount: " + total);


btn2.addEventListener('click', ()=>{
    span2.innerHTML = ['Simple Interest is ' + interest + 'and toatl amount is ' + total]
})