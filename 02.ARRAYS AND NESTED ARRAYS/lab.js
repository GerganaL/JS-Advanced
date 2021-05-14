//1.	Even Position Element
function evenPosition(arr) {
    let sum = '';
    for (let i = 0; i < arr.length; i+= 2) {
     sum += arr[i] + " ";

    }
   return sum;
} 

// console.log(evenPosition(['20', '30', '40', '50', '60']));
// evenPosition(['5', '10']);

//2.	Last K Numbers Sequence
function lastK(n , k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
          let startIndex = Math.max(0,i-k);
          let currentElement = result.slice(startIndex,startIndex + k).reduce((a,b)=> a+b ,0);
          result.push(currentElement);
    }

    return result;
}

// console.log(lastK(6, 3));

//3.	Sum First Last
function sumFirstLast(numbers) {
   let result = Number(numbers[numbers.length - 1]) + Number(numbers[0]);
   return result;
}

// console.log(sumFirstLast(['20', '30', '40']));

//4.	Negative / Positive Numbers

function negativePositive(arr) {
    const result = [];
    for (let num of arr) {
        if(num < 0){
            result.splice(0,0,num);
        }else if(num > 0){
            result.push(num);
        }else{
            result[result.length] = num;
        }
    }

    return result;
}

// console.log(negativePositive([3, -2, 0, -1]));
// console.log(negativePositive([7, -2, 8, 9]));


//5.	Smallest Two Numbers

function twoSmallest(arr) {
    arr.sort((a,b)=> a-b);
    let res = arr.slice(0,2);
    return res.join(' ');
}

console.log(twoSmallest([30, 15, 50, 5]));

//6.	Bigger Half

function half(numbers) {
    return numbers.sort((a, b) => a - b)
        .slice(numbers.length / 2);

}

// console.log(half([4, 7, 2, 5]));

// console.log(half([3, 19, 14, 7, 2, 19, 6]));

//7.	Piece of Pie

function pieceOfPie(arr, flav1, flav2) {
    const start = arr.indexOf(flav1);
    const end = arr.indexOf(flav2);

    return arr.slice(start, end + 1);
}

console.log(pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));

//8.	Process Odd Positions

function processOldPositions(array) {
    let newValue = 0;
    let result = [];
    for (let i = 1; i < array.length; i+= 2) {
       newValue = Number(array[i]) * 2;
       result.push(newValue);
    }
        // result = result.reverse();
    return result.reverse().join(' ');
}

console.log(processOldPositions([10, 15, 20, 25]));
console.log(processOldPositions([3, 0, 10, 4, 7, 3]));

//9.	Biggest Element

function biggestElement(matrix) {
    let biggestNum = Number.NEGATIVE_INFINITY;
    matrix.forEach(
        row => row.forEach(
            col => biggestNum = Math.max(biggestNum,col)
        )
    );

    return biggestNum;
}

console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]
   ));

//10.	Diagonal Sums

function diagonalSum(matrix) {
let mainDiag = 0;
let secDiag = 0;

    for (let i = 0; i < matrix.length; i++) {
        mainDiag += matrix[i][i];
        secDiag += matrix[i][matrix.length - i -1];
    }

    console.log(mainDiag, secDiag);
}

// diagonalSum([
//     [20, 40],
//     [10, 60]
// ]);

// diagonalSum([
//     [3, 5, 17],
//     [-1, 7, 14],
//     [1, -8, 89]
// ]);

//11.	Equal Neighbors
