//1.	Print an Array with a Given Delimiter
function delimiterSolution(array, delimiter) {
    let result = '';
    for (let i = 0; i < array.length; i++) {
        result += i == array.length - 1 ? array[i] : array[i] + delimiter;
    }
    return result;
}

//another solution

function solution2(arr, d) {
    return arr.join(d);
}

//and another one

const solve = (arr, d) => arr.join(d);

// console.log(delimiterSolution(
//     ['One',
//         'Two',
//         'Three',
//         'Four',
//         'Five'],
//     '-'
// ));

// console.log(solve(['One',
//     'Two',
//     'Three',
//     'Four',
//     'Five'],
//     '-'
// ))


//2.	Print Every N-th Element from an Array 
function everyNElement(arr, step) {
    const result = [];
    for (let i = 0; i < arr.length; i += step) {
        result.push(arr[i]);
    }
    return result;
}

//another solution
const solve3 = (arr, step) => {
    return arr.filter((el, index) => index % step === 0);
}

// console.log(solve3(['5', 
// '20', 
// '31', 
// '4', 
// '20'], 
// 2
// ));

//3.	Add and Remove Elements  

function addAndRemove(commands) {
    let result = [];
    let number = 1;

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] == 'add') {
            result.push(number);
        } else if (commands[i] == 'remove') {
            result.pop();
        }
        number++;
    }

    return result.length != 0 ? result.join("\n") : "Empty";
}

// console.log(addAndRemove(['remove', 
// 'remove', 
// 'remove']
// ));

//4.	Rotate Array


function rotate(array, rotations) {
    for (let i = 0; i < rotations; i++) {
        const element = array.pop();
        array.unshift(element);
    }

    return array.join(' ');
}

// console.log(rotate(['1', 
// '2', 
// '3', 
// '4'], 
// 2
// ));


//5.	Extract Increasing Subsequence from Array

function increasingSubs(array) {
    let result = [];
    let maxNumber;
    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        if (element >= result[result.length - 1] || result.length == 0) {
            result.push(element);
        }
    }

    return result;

}

//another solution


function increase(arr) {
    return arr.reduce(function (result, currentValue, index, initialArr) {
        if (currentValue >= result[result.length - 1]) {
            result.push(currentValue);
        }
        return result;
    }, [arr[0]])
}

// console.log(increase(
//     [1,
//         3,
//         8,
//         4,
//         10,
//         12,
//         3,
//         2,
//         24]
// ));


//6.	List of Names
function sortNames(names) {
    return names
        .slice(0)
        .sort((a, b) => a.localeCompare(b))
        .map((name, index) => {
            let result = `${index + 1}.${name}`;
            return result;
        })
        .join('\n');
}

// console.log(sortNames(
//     ["John", "Bob", "Christina", "Ema"]
// ));

//7.	Sorting Numbers

function solve1(arr) {
    let result = [];

    arr.sort((a,b) => a- b);

    while(arr.length){
        result.push(arr.shift());
        result.push(arr.pop());
    }

    return result.filter(num => num != undefined);
}

console.log(solve1(
    [1, 65, 3, 52, 48, 63, 31, -3, 18, 56]
));

///8.	Sort an Array by 2 Criteria

function sortArr(arr) {
    return arr.sort((a,b) => {
        if(a.length === b.length){
            return a.localeCompare(b);
        }

        return a.length - b.length;
    }).join('\n');
}


//9.	Magic Matrices

function magic(matrix) {
    let rowSums = [];
    let colSums = [];

    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        let sum = row.reduce((result,currentElement) => (result+currentElement),0);
        rowSums.push(sum);
    }

    for (let i = 0; i < matrix.length; i++) {
        let newRow = [];
        for(let y = 0; y< matrix.length; y++){
            let index = matrix.length - 1 -y;
            newRow.push(matrix[index][i]);
        }

        let sum = newRow.reduce((result,curr)=> (result+curr),0);
        colSums.push(sum);
        
    }
    return rowSums.concat(colSums).every((el,i , arr) => el === arr[0]);
}

console.log(magic(
 [ 
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]
   
));