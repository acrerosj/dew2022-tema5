class Person {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  get nameComplete() { return this.name + " " + this.surname;}

  birthday() {
    this.age++;
  }
}