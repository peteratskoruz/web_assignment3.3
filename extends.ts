/***class animal**/

class Animal{
    constructor(public name: string){

    }

    move(distance: number){
        console.log(this.name + " moved " + distance + "m.");
    }

    makeSound(sound: string){
        console.log(this.name + " will " + sound);
    }
}

/**class extends animal class**/

class Dog extends Animal{
    constructor(){
        super('dog');
    }

    move() {
        super.move(5);
    }

    makeSound(){
        super.makeSound('Bark')
    }
}

/**new instance of class**/

const animal= new Animal('tiger');

const dog= new Dog();

animal.move(50);

animal.makeSound('growl')

dog.move();

dog.makeSound();