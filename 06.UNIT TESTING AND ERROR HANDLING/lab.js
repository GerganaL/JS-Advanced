//Error Handling
//1.	Sub Sum
function subSum(arr, start, end) {
    if(Array.isArray(arr) == false){
        return NaN;
    }
    if (start < 0) {
        start = 0;
    }
    if(end > arr.length -1){
        end = arr.length -1;
    }
    //end is + 1, because slice works with the index before the current index
    return arr.slice(start, end + 1).reduce((a, c) => a + Number(c), 0);
}

// console.log('Case 1');
// console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
// console.log('Case 2');
// console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
// console.log('Case 3');
// console.log(subSum([10, 'twenty', 30, 40], 0, 2));
// console.log('Case 4');
// console.log(subSum([], 1, 2));
// console.log('Case 5');
// console.log(subSum('text', 0, 2));

//2.	Playing Cards
function createCard(face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10','J', 'Q', 'K', 'A'];
    const suitToString ={
        'S': '\u2660 ',
        'H': '\u2665 ',
        'D': '\u2666 ',
        'C': '\u2663 '
    };
    if(validFaces.includes(face) == false){
        throw new Error('Error');
    }else if(Object.keys(suitToString).includes(suit) == false){
        throw new Error('Error');
    }

    return{
        face,
        suit,
        toString(){
            return `${face}${suitToString[suit]}`
        }
    }
}

// console.log(createCard('A', 'C').toString());
//console.log(createCard('1', 'C'));



