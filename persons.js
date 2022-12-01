let p1 = new Person('pepe', 'pepón', 33);
let p2 = new Person('ana', 'anita', 22);
let p3 = new Person('marta', 'martín', 44);

let persons = [p1,p2,p3];

console.log(p1);
console.log(p1.nameComplete);
console.log(p1.age);
p1.birthday();
console.log(p1.age);

localStorage.person = JSON.stringify(p1);
let p1d = Object.assign(new Person(), JSON.parse(localStorage.person));
console.log(p1d);

console.log(persons);
localStorage.persons = JSON.stringify(persons);

let persons2 = JSON.parse(localStorage.persons);
console.log(persons2);
let persons3 = persons2.map(p => Object.assign( new Person(), p));
console.log(persons3);

let persons4 = JSON.parse(localStorage.persons)
                .map(p => Object.assign( new Person(), p));
console.log('persons4', persons4);
