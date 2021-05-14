//reducing array 
//когато искаме да редуцираме масив ->  да получим един елемент 
//например сумата на всички числа

let myArray = [7, 8, 9, 5, 3, 1, 20];

//sum
let result = myArray.reduce((acc, c) => acc + c);

//average

let average = myArray.reduce((acc, c, i, a) => (acc + c) / a.length, 0);

let max = myArray.reduce((acc, c)=> Math.max(acc,c));
 max = myArray.reduce((acc, c)=> acc > c ? acc : c);

// let result = myArray.reduce(sumReducer,0);

// function sumReducer(acc,c) {
//     return acc +c;
// }

// console.log(result);
// console.log(average);
// console.log((result / myArray.length).toFixed(2));
// console.log(max);

///
let jaggedMatrix = [
    [3],
    [-1, 7],
    [1, -8, 89]
];

// for(let row of jaggedMatrix){
//     for(let num of row){
//         console.log(num);
//     }
// }


for(let row of jaggedMatrix){
    console.log(row.join(' '));
}

let result2 = jaggedMatrix.reduce(matrixReducer);

function matrixReducer(acc, c) {
    return acc.concat(c);
}

console.log(result2);


