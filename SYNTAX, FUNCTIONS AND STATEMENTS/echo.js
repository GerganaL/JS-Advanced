//1. echo function

function echo(input) {
    console.log(input.length)
    console.log(input);
}
//echo('Hello, Javascript!');

//2.2.	String Length
function strlen(param1, param2, param3) {
    let total = param1.length + param2.length + param3.length;
    let average = Math.floor(total/3);

    // console.log(total);
    // console.log(average);
}


function strlen(...params) {
    let total =params.reduce((a,c) => a + c.length,0);
    // console.log(total);
    // console.log(Math.floor(total/params.length));
}
// stringLength('chocolate', 'ice cream', 'cake');


//3.Largest Number
function solve(num1,num2,num3) {
    let result;
    if(num1 > num2 && num1 > num3){
        result = num1;
    }else if(num2 > num1 && num2 > num3){
        result = num2;
    }else{
        result = num3;
    }

    console.log('The largest number is ' + result + '.');
}

// solve(5,-3,16);


//4.Circle Area
// function area(input) {
//     if(typeof(input) === 'number' && !isNaN(input)){
//         let result =Math.pow(input,2) * Math.PI;
//         console.log(input.toFixed(2));
//     }else{
//         console.log("We can not calculate the circle area, because we receive a string.")
//     }
// }

function solve(radius) {
    let inputType = typeof(radius);
    if (inputType === 'number') {
      let area = Math.pow(radius, 2) * Math.PI;
      console.log(area.toFixed(2));
    } else {
  console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
  }
  

// solve(5);


///5.	Math Operations

function solve2(num1,num2,operator) {
    let result;
    switch(operator){
        case '+' : result = num1 + num2; break;
        case '-' : result = num1 - num2; break;
        case '/' : result = num1 / num2; break;
        case '*' : result = num1 * num2; break;
        case '%' : result = num1 % num2; break;
        case '**' : result = num1 ** num2; break;
    }
    console.log(result);
}

// solve2(5, 6, '+');

//6.	Sum of Numbers N…M

function sum(n,m) {
    let num1 = Number(n);
    let num2 = Number(m);
    let result = 0;

    for (let i = num1; i <= num2; i++) {
        result += i;
    }

  console.log(result)
}

// sum('1', '5');

function dayOfWeek(str) {
    let result;
    switch(str){
        case 'Monday': result = 1; break;
        case 'Tuesday': result = 2; break;
        case 'Wednesday': result = 3; break;
        case 'Thursday': result = 4; break;
        case 'Friday': result = 5; break;
        case 'Saturday': result = 6; break;
        case 'Sunday': result = 7; break;
        default :result = 'error'; break;
    }
    console.log(result);
}

// dayOfWeek('Invalid');

function squareFrame(param){
    let n = Number(param);
   if(isNaN(n)|| param == ''){
    for (let i = 0; i < 5; i++) {
        console.log('* '.repeat(5));
    }
   }else{
       for (let i = 0; i < n; i++) {
           console.log('* '.repeat(n));
       }
   }
}
// squareFrame(2);

//9.	Aggregate Elements

function sum(...args) {
    let result; 
    for (let i = 0; i < args.length; i++) {
        result += args;
    }
    console.log(result);
}

// sum([2,4,8,16]);

function aggregateElements(elements) {
        aggregate(elements, 0, (a, b) => a + b);
        aggregate(elements, 0, (a, b) => a + 1 / b);
        aggregate(elements, '', (a, b) => a + b);
        function aggregate(arr, initVal, func) {
            let val = initVal;
            for (let i = 0; i < arr.length; i++)
                val = func(val, arr[i]);
            console.log(val);
        }
    }

    aggregateElements([1,2,3]);
    
