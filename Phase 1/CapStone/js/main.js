const div = document.createElement('div')

const element = document.createElement("p");

div.appendChild(element);

element.textContent = 'Howdy'
document.body.append(div)


const pText = document.getElementById('changeText')

pText.textContent = 'Choose your favorite Web Frameworks'

// const removeFormLabels = document.getElementById('changeLables')
// const labelToRemove = document.getElementById('name')

// removeFormLabels.remove(labelToRemove)

// Recognizing JavaScript events
pText.addEventListener('click', (e)=>{
    // console.log(e)
    alert('I was clicked!')
})

const data = document.getElementById('changeLables') // connection to the form


data.addEventListener(

    'submit', (e) => {
        e.preventDefault() // Prevent form from reloading after submit

        let list = document.getElementById('fname').value // User input value
        let html = document.getElementById('fname').value
        let css = document.getElementById('css').value
        let javascript = document.getElementById('fname').value

        sendToServer = {
            Username : list
        }

        console.info(sendToServer)
    }
)
console.log('Hello', data)