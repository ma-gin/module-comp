const input = document.getElementById('textChange')
const enrolled = document.getElementById('enrolledContainer')
const counter = document.getElementById('counter')
const header = document.getElementById('pageHeader')
const colorInput = document.getElementById('colorInput')
const moviesList = document.getElementById('fav-movies')

counter.innerText = enrolled.childElementCount

colorInput.addEventListener('change', () => {
    header.style.color = colorInput.value
})

moviesList.addEventListener('change', () => {
    header.innerText = moviesList.value
})

input.addEventListener('change', () => {
    header.innerText = input.value
})

const textChange = () => {
    if (!input.value) {
        alert('You forgot to write something.')
    } else {
        document.getElementById('pageHeader').innerText = input.value
        document.title = input.value
    }
}

const removeItem = (e) => {
    e.target.parentNode.remove()
    counter.innerText = enrolled.childElementCount
}

const addStudent = () => {
    const table = document.getElementById('studentTable')
    const newRow = document.createElement('tr')
    let newTd = document.createElement('td')
    const studentID = document.getElementById('ID')
    newTd.innerHTML = studentID.value
    newRow.appendChild(newTd)
    newTd = document.createElement('td')
    const studentName = document.getElementById('studentName')
    newTd.innerHTML = studentName.value
    newRow.appendChild(newTd)
    newTd = document.createElement('td')
    const studentSurname  = document.getElementById('surname')
    newTd.innerHTML = studentSurname.value
    newRow.appendChild(newTd)
    newTd = document.createElement('td')
    const studentAge = document.getElementById('age')
    newTd.innerHTML = studentAge.value
    newRow.appendChild(newTd)
    newTd = document.createElement('td')
    const studentEmail = document.getElementById('email')
    newTd.innerHTML = studentEmail.value
    newRow.appendChild(newTd)
    table.appendChild(newRow)
    counter.innerText = enrolled.childElementCount
}

const addDeleteBtn = () => {
    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = "Remove"
    deleteBtn.setAttribute('onclick', 'removeItem(event)')
    return deleteBtn
}


const addItem = () => {
    const listItem = document.createElement('div')
    const itemContent = document.createElement('p')
    listItem.style.border = "1px solid red"
    enrolled.appendChild(listItem)
    listItem.appendChild(itemContent)
    const deleteBtn = addDeleteBtn()
    listItem.appendChild(deleteBtn)
    counter.innerText = enrolled.childElementCount
}

const ex16 = () => {
    const listItems = enrolled.childNodes //get array of children elements
    console.log(listItems)
    for (i = 0; i < enrolled.childElementCount; i++){
        listItems[i].style.backgroundColor = "red"
    }
}

const ex17 = () => {
    const newP = document.createElement('p')
    if (enrolled.childElementCount === 1) {
        newP.innerHTML = `There is ${enrolled.childElementCount} element in the list.`
    } else {
        newP.innerHTML = `There are ${enrolled.childElementCount} elements in the list.`
    }
    const section = document.getElementById('enrolledSection')
    section.appendChild(newP)
}

const ex18 = () => {
    const subHeader = document.getElementById('pageSubheader')
    const headerText = header.innerText
    header.innerText = subHeader.innerText
    subHeader.innerText = headerText
}

const randomColorGenerator = () => {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    return `rgb(${red}, ${green}, ${blue})`
}

const ex19 = () => {
    const table = document.getElementById('studentTable')
    const color = randomColorGenerator()
    table.style.backgroundColor = color
}

// const ex20 = () => {
//     const colorInput = document.getElementById('colorInput')
//     header.style.color = colorInput.value
// }