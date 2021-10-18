// arguments object - no longer bound with arrow functions

const add = function (a, b) {
  console.log(arguments);
  return a + b;
};

console.log(add(55, 1, 1001));

const addArrow = (a, b) => {
  // console.log(arguments); // Uncomment this will throw an error
  return a + b;
};

// this keyword - no longer bound

// const user = {
//   name: 'Bruno',
//   cities: ['João Pessoa', 'Campina Grande', 'Rio de Janeiro'],
//   printPlacesLived: function () {
//     this.cities.forEach((city) => {
//       console.log(this.name + ' já visitou ' + city);
//     })
//   }
// }

// Alternative
// const user = {
//   name: 'Bruno',
//   cities: ['João Pessoa', 'Campina Grande', 'Rio de Janeiro'],
//   printPlacesLived() {
//     this.cities.forEach((city) => {
//       console.log(this.name + ' já visitou ' + city);
//     })
//   }
// }


const user = {
  name: 'Bruno',
  cities: ['João Pessoa', 'Campina Grande', 'Rio de Janeiro'],
  printPlacesLived: function () {
    return this.cities.map((city) => this.name + ' has visited ' + city);
  }
}

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
  numbers: [1, 2, 3, 4, 5, 6, 7],
  multiplyBy: 4,
  multiply() {
    return this.numbers.map((eachNumber) => eachNumber * this.multiplyBy);
  }
}

console.log(multiplier.multiply());
