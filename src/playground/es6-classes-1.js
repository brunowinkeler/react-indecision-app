
class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    //return 'Hi. I am ' + this.name + '!';
    return `Hi. I am ${this.name}!` // ES6 template string
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }

    return description;
  }
}


class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      greeting += ` I am visiting from ${this.homeLocation}`;
    }

    return greeting;
  }
}

const me = new Student('Bruno Winkeler', 31, 'Electrical Engineering');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());

const trav = new Traveler('Bruno Winkeler', 31, 'João Pessoa');
console.log(trav.getGreeting());

const trav2 = new Traveler(undefined, undefined, 'Nowhere');
console.log(trav2.getGreeting());
