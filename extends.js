/***class animal**/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        console.log(this.name + " moved " + distance + "m.");
    };
    Animal.prototype.makeSound = function (sound) {
        console.log(this.name + " will " + sound);
    };
    return Animal;
}());
/**class extends animal class**/
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super.call(this, 'dog') || this;
    }
    Dog.prototype.move = function () {
        _super.prototype.move.call(this, 5);
    };
    Dog.prototype.makeSound = function () {
        _super.prototype.makeSound.call(this, 'Bark');
    };
    return Dog;
}(Animal));
/**new instance of class**/
var animal = new Animal('tiger');
var dog = new Dog();
animal.move(50);
animal.makeSound('growl');
dog.move();
dog.makeSound();
