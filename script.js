class Animal {
  constructor(species) {
    this._species = species; // Use a consistent naming convention like _species
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log("makes sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
