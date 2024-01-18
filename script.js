//complete this code
class Animal {
	constructor(species){
		this.sp=species
	}
	get makeSound(){
		cosole.log("the sound it makes barking")
	}
}

class Dog extends Animal {
	bark(){
		cosole.log("woof")
	}
}

class Cat extends Animal {
	purr(){
		cosole.log("purr")
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
