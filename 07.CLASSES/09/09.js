function solve(arr) {
    function splitline(line) {
        return line.split(' | ');
    };

    // return arr
    // .map(splitline)
    // .reduce((storage,cars) => {
    //     let [brand, model, quantity] = cars;
    //     if(!storage[brand]){
    //         storage[brand] = {};
    //     }

    //     if(!storage[brand][model]){
    //         storage[brand][model] = 0;
    //     }
    //     storage[brand][model] += Number(quantity);
    //     return storage;
    // }, {});

    // let result =  arr
    // .map(splitline)
    // .reduce((storage,cars) => {
    //     let [brand, model, quantity] = cars;
    //     if(!storage.has(brand)){
    //         storage.set(brand,new Map());
    //     }

    //     if(!storage.get(brand).has(model)){
    //         storage.get(brand).set(model,0);
    //     }
    //     storage.get(brand).set(model, Number(storage.get(brand).get(model)) + Number(quantity));
    //     return storage;
    // }, new Map());

    let splitted = [];

    for (let i = 0; i < arr.length; i++) {
        splitted.push(arr[i].split(' | '));

    }

    let storage = new Map();
    let resultString = [];

    for (let i = 0; i < splitted.length; i++) {
        let cars = splitted[i];

        let [brand, model, quantity] = cars;

        if (!storage.has(brand)) {
            storage.set(brand, new Map());
        }

        if (!storage.get(brand).has(model)) {
            storage.get(brand).set(model, 0);
        }
        let value = Number(storage.get(brand).get(model));
        storage.get(brand).set(model,value + Number(quantity));
    }
    
    for ([brand,model] of storage.entries()) {
        let result = `${brand}\n`;
       for(let [name,quantity] of model.entries()){
        result += `###${name} -> ${quantity}\n`;
       } 
        resultString.push(result.trim());
    }
    return  resultString.join('\n');
}

console.log(solve(
    ['Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10']
));