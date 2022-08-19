// utility function to log
function logTheValue(value){
    console.info(value)
}

// Arrays
const typeData = ['hello', { name: "Koin"}, true, false, null, undefined, [1,2,3,4,5]]

// let valueOfArray = typeData[0]
// logTheValue(valueOfArray)
// logTheValue(typeof typeData[0])

// logTheValue(`Adding this value to the array : ${addToArray(1234)}`)

// Create and return an array of scores
function examScores(){
    const scores = [100, 90.6, 80.9, 70, 60, 50, 40, 30, 20, 10]
    return scores
}

// logTheValue(`These are your scores: ${examScores()}`)

// Log the value based on index
function accessScores(index){
    return examScores()[index]
}

// logTheValue(`The score at index 0 is ${accessScores(0)}`)
// logTheValue('The score at index last is ' + accessScores(10))


// Addings values to an array

function addToArray(value){
    const newScores = examScores()
    newScores.push(value)
    return newScores
}

// logTheValue('The score at index last is ' + accessScores(10))

// Reverse an array
const reversArray = () => {
    const newScores = examScores()
    let index = newScores.length
    for (let item_index = 0; Math.floor(item_index < index / 2); item_index++){
        const element = index - item_index - 1;
        logTheValue(item_index)
        logTheValue(element)
        newScores[item_index], newScores[element] = newScores[element], newScores[item_index];
    }
    return newScores
}

// logTheValue(`Reverse the array: ${reversArray()}`)

const reverseArray2 = () => {
    const newScores = examScores()
    let newArr = newScores.slice().reverse()
    return newArr
}

// logTheValue(`Reverse the array: ${reverseArray2()}`)


// Iterator Methods

const scores = [100, 90.6, 80.9, 70, 60, 50, 40, 30, 20, 10]

// filter method

const filterScoresAbove70 = scores.filter(
    itemInScore => itemInScore >= 70
)

// logTheValue(`Filter score index 1: ${filterScoresAbove70[1]}`)

// logTheValue(`Filter the scores above 70: ${filterScoresAbove70}`)


// map method

const mapScores = scores.map(
    itemInScore => itemInScore * 2.03
)

// logTheValue(`Map the scores: ${mapScores}`)

// reduce method

const reduceScores = scores.reduce( 
    (accumulator, currentValue) => { return accumulator + currentValue }
)

// logTheValue(`Reduce the scores: ${reduceScores}`)
// logTheValue(typeof mapScores)

// Objects

const userIfo = {
    fullName: ' Barclay Koin',
    workStatus : {
        placeOfWork : 'Nairobi',
        occupation : {
            title : {
                roleOne : 'Software Developer',
                roleTwo : 'Software Mentor',
            },
        },
    }
}

// Object.key = value
// userIfo.name = 'Koin'
// userIfo.age = 23

logTheValue(userIfo)
// logTheValue(`The obj variables ${Object.keys(userIfo)}`)  // returns the variable of the object
// logTheValue(Object.values(userIfo)) // returns the value of the object

// logTheValue(userIfo.workStatus.occupation.title.roleTwo) // Big O notation is O(1)

function nonDestructivelyUpdateObject(obj, key, value) {
    const newObj = { ...obj}
    newObj[key] = value; //Why are we using bracket notation here?
  
    return newObj;
  }

const newUserInfo = nonDestructivelyUpdateObject(userIfo, 'Salary', 2300) 
const newUserKevin = nonDestructivelyUpdateObject(userIfo, 'Salary', 3300) 

// logTheValue(newUserKevin)
logTheValue(`The obj variables ${Object.keys(newUserKevin)}`) 

for (const key in newUserKevin) {
    logTheValue(`${key} : ${newUserKevin[key]}`)
}
