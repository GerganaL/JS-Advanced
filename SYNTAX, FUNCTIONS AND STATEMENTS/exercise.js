// 1.	Fruit

function fruit(fruit, weight, price) {
    //calculation
    const weightKg = weight / 1000;
    const totalPrice = weightKg * price;
    //print

    return `I need $${totalPrice.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`;
}

// console.log(fruit('orange', 2500, 1.80));
// console.log(fruit('apple', 1563, 2.35));


//2.	Greatest Common Divisor - GCD

function divisor(num1, num2) {
    while (num2 != 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}

// console.log(divisor(15, 5));
// console.log(divisor(2154, 458));


//3.	Same Numbers

function same(num) {
    const string = num.toString();

    let isSame = true;
    let sum = 0;

    for (let i = 0; i < string.length; i++) {
        let next = string[i + 1];
        if (string[i] !== string[i + 1] && next !== undefined) {
            isSame = false;
        }
        sum += Number(string[i]);
    }

    return `${isSame}\n${sum}`;
}

// console.log(same(2222222));
// console.log(same(1234));



//4.	Time to Walk
function walk(steps, footprintMeters, speedKmH) {
    const speed = speedKmH * 1000 / 3600;
    const distance = steps * footprintMeters;

    const rest = Math.floor(distance / 500) * 60;
    const time = distance / speed + rest;

    const hours = Math.floor(time / 60 / 60).toFixed(0).padStart(2, "0");
    const minutes = Math.floor((time - hours * 3600) / 60).toFixed(0).padStart(2, "0");
    const seconds = (time - hours * 60 * 60 - minutes * 60).toFixed(0).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
}

// console.log(walk(4000, 0.60, 5));
// console.log(walk(2564, 0.70, 5.5));

//5.	Road Radar

function radar(speed, area) {
    let limit = 0;
    let status = '';

    switch (area) {
        case 'motorway': limit = 130; break;
        case 'interstate': limit = 90; break;
        case 'city': limit = 50; break;
        case 'residential': limit = 20; break;
    }

    const speeding = speed - limit;

    if (speeding <= 0) {
        return `Driving ${speed} km/h in a ${limit} zone`;
    }

    if (speeding <= 20) {
        status = 'speeding';
    } else if (speeding > 20 && speeding <= 40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }

    return `The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status}`;
}

console.log(radar(40, 'city'));



//6.	Cooking by Numbers
function cooking(num, com1, com2, com3, com4, com5) {
    let number = +num;

    const arr = [com1, com2, com3, com4, com5];

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'chop':
                number /= 2;   
                break;
            case 'dice':
                 number = Math.sqrt(number);
                   break;
            case 'spice':
                 number++;
                   break;
            case 'bake':
                 number *= 3; 
                  break;
            case 'fillet':
                 number -= number * 0.2;
                   break;
        }
        console.log(number);
    }
}


///7.	Validity Checker
function validity(x1, y1, x2, y2) {

    function getResult(x1, y1, x2, y2) {
        const distance = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));

        return Number.isInteger(distance) ? 'valid' : 'invalid';
    }

    return `{${x1}, ${y1}} to {0, 0} is ${getResult(x1, y1, 0, 0)}
{${x2}, ${y2}} to {0, 0} is ${getResult(x2, y2, 0, 0)}
{${x1}, ${y1}} to {${x2}, ${y2}} is ${getResult(x1, y1, x2, y2)}`;
}

console.log(validity(3, 0, 0, 4));
console.log(validity(2, 1, 1, 1));