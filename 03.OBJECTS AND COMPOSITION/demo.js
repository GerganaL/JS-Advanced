const myObj = {
    name: 'Peter',
    age: 23,
    sayHi: function () {
        console.log('Hi!');
    }
};

// myObj.sayHi();


//composition

function print() {
    console.log(`${this.name} is printing a page`);
}
function scan() {
    console.log(`${this.name} is scanning a document`);
}
const printer = {
    name: 'ACME Printer',
    print
};
const scanner = {
    name: 'Initech Scanner',
    scan
};
const copier = {
    name: 'ComTron Copier',
    print,
    scan
};


//creating function can avoid this and refering to function of the object
function createRect(width, height) {
    const rect = { width, height };
    rect.getArea = () => {
      return rect.width * rect.height;
    };
    return rect;
  }

  
  const myRect = createRect(5,6);
  console.log(myRect);
  console.log(myRect.getArea());

  const getArea = myRect.getArea;

  console.log(getArea());
