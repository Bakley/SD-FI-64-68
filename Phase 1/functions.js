// utility
addIntegers(2,3)
function logTheValue(value){
    console.info(value)
}

logTheValue('Hello World')


// Function Declaration

function addIntegers(num1 = 230, num2 = 320){
    logTheValue(num1 + num2)   // Big O notation is O(1)
}
addIntegers(231,322)
addIntegers()

// Fuction Expression


const summationToN = function (n){
    return n * (n + 1) / 2  //Big O notation is O(1)
}

logTheValue(`The return is : ${summationToN(5)}`)


// Arrow Function

const arrowFuntion = () => {}

let addSummation = (x,y) =>   x + y 

const factorialSummation = n => n * (n + 1) / 2 

logTheValue(`The return is : ${addSummation(15, 5)}`)
logTheValue(`The return is : ${factorialSummation(55)}`)
logTheValue(`The return is : ${factorialSummation(155)}`)


// CallBack Function

const greetingInSwahili = () => 'Hakuna matata, habari gani'
const greetingInEnglish = () => 'Hi'


const greetAnIndividual = (name, callback = greetingInSwahili) => `${callback()} ${name}!`


logTheValue(greetAnIndividual('Barclay', greetingInSwahili))
logTheValue(greetAnIndividual('Wasike', greetingInEnglish))
logTheValue(greetAnIndividual('Kevin'))
