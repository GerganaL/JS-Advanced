//1.	City Record
function cityRecord(name, population, treasury) {
    const city = {
        name,
        population,
        treasury
    }

    return city;

}

// console.log(cityRecord('Tortuga',
//     7000,
//     15000
// ));



//2
function population(townsArray) {
    const towns = {};

    for (let townsAsString of townsArray) {
        let [name, population] = townsAsString.split(' <-> ');
        population = Number(population);
        if (towns[name] != undefined) {
            population += towns[name];
        }
        towns[name] = population;
    }

    for (let [name, population] of Object.entries(towns)) {
        console.log(`${name} : ${population}`)
    }

    // for (let name in towns) {
    //     console.log(`${name} : ${towns[name]}`);
    // }
}

// population(
//     ['Istanbul <-> 100000',
//         'Honk Kong <-> 2100004',
//         'Jerusalem <-> 2352344',
//         'Mexico City <-> 23401925',
//         'Istanbul <-> 1000']

// );



///3.	City Taxes

function cityTaxes(name, population, treasury) {
    const city = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percent) {
            this.population += Math.floor(this.population * percent / 100);
        },
        applyRecession(percent) {
            this.treasury -= Math.ceil(this.treasury * percent / 100);
        }
    }

    return city;
}

// const result = cityTaxes('Tortugua',7000,15000);
// console.log(result);

// result.collectTaxes();
// result.applyGrowth(10);
// result.applyRecession(5);

// console.log(result);


// const city =
//   cityTaxes('Tortuga',
//   7000,
//   15000);
// city.collectTaxes();
// console.log(city.treasury);
// city.applyGrowth(5);
// console.log(city.population);

// const city = 
//   cityTaxes('Tortuga',
//   7000,
//   15000);
// console.log(city);


///4.	Object Factory

function factory(library, orders) {
    const result = [];

    //iterate over the orders
    for(let order of orders){
          //copy order template
        const composed =  Object.assign({},order.template);
        //compose methods by part list
        for(let part of order.parts){
            composed[part] = library[part];
        }

        result.push(composed);
    }
    return result;
}


const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};


const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    },
];

const products = factory(library, orders);
console.log(products);




///5.	Assembly Line


///6.	From JSON to HTML Table

