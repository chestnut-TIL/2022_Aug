const person = {
  name : {
    first: 'Bob',
    last: 'Smith'
  },
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  }
};