// Variables
// Declare variables
// name1 = "Barclay", age1 = 31 ==> Global Scope
// name1 = "Koi", age1 = 32     ==> Local Scope
var name1
let age1
const isMarried = false
age1 = 31
name1 = "Barclay"

// Above is global scope
console.log("The first", name1, age1, isMarried);

// Hoisting in JAVASCRIPT
// Hoisting is a JavaScript feature that allows variables to be declared before they are used.

// Var & let

function koi() {
    // This is the local scope
    let name1 = 'Koin'
    console.log(name1);
    let age1 = 32;
    console.log(age1);
}
koi();
