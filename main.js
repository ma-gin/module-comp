const input = document.getElementById('textChange')
const enrolled = document.getElementById('enrolledContainer')

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
    listItem.style.backgroundColor = "blue"
    listItem.style.border = "1px solid red"
    enrolled.appendChild(listItem)
    listItem.appendChild(itemContent)
    const deleteBtn = addDeleteBtn()
    listItem.appendChild(deleteBtn)
}
