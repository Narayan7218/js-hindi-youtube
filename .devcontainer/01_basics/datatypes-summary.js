// Primitive

// 7 types : String, Number, Boolearn Null, Undefined, Symbol, BigInt

const score = false
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = ('123')

console.log(id === anotherId);

//const bigNumber = 234234242535434233n

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "nagaraj", "doga"];
let myObj = {
    Name: "Narayan",
    age: 26,
}

const myFunction = function(){
    console.log("Hello Word");

}

console.log(typeof heros);

// link 

//https://tc39.es/ecma262/multipage/ecmascript-language-lexical-grammar.html#sec-ecmascript-language-lexical-grammar
