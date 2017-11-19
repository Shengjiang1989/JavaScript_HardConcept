//1. why prototype?
var Animal = function(array, name) {
    this.atributes = array;
    this.name = name;
}

var a1 = new Animal(['long hair', 'black'], 'horse');
var a2 = new Animal(['short hair', 'brown'], 'lion');
//different instance have different attributes and name in memoery
//what if we want different instance attribute pointing to the same array,
//change elements in the array, all the instance will change.

//in this case, we need prototype! so we put same fields in prototype.

var Tree = function() {
}

Tree.prototype.attribute = ['green', 'tall'];

var tree1 = new Tree();
var tree2 = new Tree();

console.log(tree1.attribute[0]);
console.log(tree2.attribute[0]);

tree1.attribute[0] = 'brown';

console.log(tree1.attribute[0]);
console.log(tree2.attribute[0]);


//2. everything is object, there are two types : normal object and function object
var normalObject = {name: 'john'};  //literal object
console.log(typeof normalObject);

var functionObject = function(name) {this.name = name};  //constructor
console.log(typeof functionObject);

//3. each object have a poperty called prototype, prototype is a normal object
//if john is a instance of Person, then john.prototype is pointing to 
var Person = function(name) {
    this.name = name;
}
Person.prototype.numOfHands = 2;

console.log(Person.prototype);

var person1 = new Person('Sheng');
console.log(person1);
console.log(person1.constructor);
