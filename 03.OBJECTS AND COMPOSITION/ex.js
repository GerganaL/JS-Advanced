//1.	Calorie Object
function calorie(arr) {
    let result = {};

    for (let i = 0; i < arr.length; i += 2) {
        result[arr[i]] = Number(arr[i + 1]);
    }

    return result;
}
// console.log(calorie(
//     ['Yoghurt', '48', 'Rise', '138', 'Apple', '52']
// ));


//2.	Construction Crew

function crew(worker) {
    if (worker.dizziness) {
        worker.levelOfHydrated += worker.weight * 0.1 * worker.experience;
        worker.dizziness = false;
    }

    return worker;
}

// console.log(crew(
// {
//     weight: 80,
//     experience: 1,
//     levelOfHydrated: 0,
//     dizziness: true
// }
// ));


//3.	Car Factory
function carFactory(input) {

    function getWheels(wheelsize) {
        let weel = Math.floor(wheelsize) % 2 == 0
            ? Math.floor(wheelsize) - 1
            : Math.floor(wheelsize);

        // Array(4).fill(weel,0,4);
        return [weel, weel, weel, weel];
    }

    function getCarriege(carriage, color) {
        return {
            type: carriage,
            color
        }
    }

    function getEngine(power) {
        const engines = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 }
        ].sort((a, b) => a.power - b.power)

        // let result;
        // for(let i=0; i < engines.length; i++){
        //     if(engines[i].power >= power){
        //         result = engines[i];
        //         break;
        //     }
        // }
        return engines.find(el => el.power >= power);
    }

    return {
        model: input.model,
        engine: getEngine(input.power),
        carriage: getCarriege(input.carriage, input.color),
        wheels: getWheels(input.wheelsize)
    }
}


// console.log(carFactory(
//     { model: 'VW Golf II',
//   power: 90,
//   color: 'blue',
//   carriage: 'hatchback',
//   wheelsize: 14 }

// ));


///04. Heroic Inventory

function heroic(input) {
    let result = [];

    while (input.length) {
        //взима първия елемент и го маха(съответно променя дължината на масива)
        let hero = input.shift();
        let [name, level, itemsStrings] = hero.split(' / ');
        level = Number(level);
        const items = itemsStrings ? itemsStrings.split(', ') : [];

        result.push({ name, level, items });
    }

    return JSON.stringify(result);
}

// console.log(heroic(
// [
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara'
// ] 
// ));


//5.	Lowest Prices in Cities

function cities(input) {
    let log = {};

    while (input.length) {
        let sale = input.shift();
        let [town, product, price] = sale.split(' | ');

        if (!log[product]) {
            log[product] = { town, price: Number(price) }
        } else {
            log[product] = log[product].price <= Number(price)
                ? log[product]
                : { town, price: Number(price) };
        }
    }

    let result = [];
    for (const product in log) {
        result.push(`${product} -> ${log[product].price} (${log[product].town})`)
    }

    return result.join('\n');

}

// console.log(cities(
//     [
//         'Sofia City | Audi | 100000',
//         'Sofia City | BMW | 100000',
//         'Sofia City | Mitsubishi | 10000',
//         'Sofia City | Mercedes | 10000',
//         'Sofia City | NoOffenseToCarLovers | 0',
//         'Mexico City | Audi | 1000',
//         'Mexico City | BMW | 99999',
//         'New York City | Mitsubishi | 10000',
//         'New York City | Mitsubishi | 1000',
//         'Mexico City | Audi | 100000',
//         'Washington City | Mercedes | 1000'
//       ]

// ));


//6.	Store Catalogue

function store(input) {
    let dictionary = {};

    while (input.length) {
        let [name, price] = input.shift().split(' : ');
        const firstLetter = name[0];

        if (!dictionary[firstLetter]) {
            dictionary[firstLetter] = [];
        }
        dictionary[firstLetter].push({ name, price: Number(price) });
        // dictionary[firstLetter].sort((a, b) => (a.name).localeCompare(b.name));
    }
    // for (const letter in dictionary) {
    //     let values = dictionary[letter].map(entry => `  ${entry.name}: ${entry.price}`);
    //     let string = `${letter}\n${values.join('\n')}`;
    //     result.push(string);
    // }
    let result = [];

    Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0])).forEach(entry => {
        let values = entry[1]
            .sort((a, b) => (a.name).localeCompare(b.name))
            .map(product => `  ${product.name}: ${product.price}`)
            .join('\n');

        let string = `${entry[0]}\n${values}`
        result.push(string);
    });
    return result.join('\n');
}

// console.log(store(
//     [
//         'Appricot : 20.4',
//         'Fridge : 1500',
//         'TV : 1499',
//         'Deodorant : 10',
//         'Boiler : 300',
//         'Apple : 1.25',
//         'Anti-Bug Spray : 15',
//         'T-Shirt : 10'
//     ]
// ));


//7.	Towns to JSON

function townsToJson(input) {
    let [columns, ...table] = input.map(splitLine);

    function isEmptyString(x) {
        return x !== "";
    }

    function convertIfNumber(x) {
        return isNaN(x) ? x : Number(Number(x).toFixed(2));
    }

    function splitLine(input) {
        return input.split('|')
            .filter(isEmptyString)
            .map(x => x.trim())
            .map(convertIfNumber);
    }

    // let properties = columns.map(splitLine);

    return JSON.stringify(table
        .map(entry => {
            return columns.reduce((acc, curr, index) => {
                acc[curr] = entry[index];
                return acc;
            }, {})
        }));
}

// console.log(townsToJson(
//     ['| Town | Latitude | Longitude |',
// '| Sofia | 42.696552 | 23.32601 |',
// '| Beijing | 39.913818 | 116.363625 |']
// ));


//8.	Rectangle

function rectangle(width, height, color) {
    return {
        width,
        height,
        color: capitalize(color),
        calcArea
    }

    function capitalize(word) {
        return word[0].toUpperCase() + word.slice(1);
    }

    function calcArea() {
        return this.width * this.height;
    }
}

// let rect = rectangle(4, 5, 'red');
// console.log(rect.width);
// console.log(rect.height);
// console.log(rect.color);
// console.log(rect.calcArea());


//9.	Sorted List*
function createSortedList() {
    let list = [];

    return {
        size: 0,
        add,
        remove,
        get
    }

    function add(element) {
        list.push(element);
        this.size++;
        list.sort((a, b) => a - b);
    }

    function remove(index) {
        if(index >= 0 && index < list.length){
            list.splice(index,1);
            this.size--;
        }
    }

    function get(index) {
        if(index >= 0 && index < list.length){
          return list[index];
        }
    }
}



let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));


//10.	Heroes

//11.	Jan's Notation *