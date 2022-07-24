const myName = 'Nicalas';
const myAge = 12;
const suma = (a: number, b: number) => {
  return a + b;
};

suma(3, 5);

class Persona {

  constructor(private age: number, private name: string) {}

  getSumary() {
    return `muy name is ${this.name}, tengo ${this.age} años`;
  }
}

const elias = new Persona(29, 'Elias');

elias.getSumary();
