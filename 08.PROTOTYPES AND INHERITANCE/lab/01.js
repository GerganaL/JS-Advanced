// class Person{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }

//     set fullName(value){
//         const tokens = value.split(' ');
//         if(tokens.length == 1){
//             this.firstName = tokens[0];
//         }else{
//         this.firstName = tokens[0];
//         this.lastName = tokens[1];
//         }
//     }
// }

//constructor function
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;

//     Object.defineProperty(this, 'fullName', {
//         enumerable: true,
//         get: function fullName() {
//             return `${this.firstName} ${this.lastName}`;
//         },
        
//         set: function fullName(value) {
//             const tokens = value.split(' ');
//             if (tokens.length == 1) {
//                 this.firstName = tokens[0];
//             } else {
//                 this.firstName = tokens[0];
//                 this.lastName = tokens[1];
//             }
//         }
//     })
// }

// let person = new Person("Peter", "Ivanov");
// console.log(person.fullName); //Peter Ivanov
// person.firstName = "George";
// console.log(person.fullName); //George Ivanov
// person.lastName = "Peterson";
// console.log(person.fullName); //George Peterson
// person.fullName = "Nikola Tesla";
// console.log(person.firstName); //Nikola
// console.log(person.lastName); 


// let person = new Person("Albert", "Simpson");
// console.log(person.fullName); //Albert Simpson
// person.firstName = "Simon";
// console.log(person.fullName); //Simon Simpson
// person.fullName = "Peter";
// console.log(person.firstName);  // Simon
// console.log(person.lastName);  // Simpson

