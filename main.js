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


const addItem = () => {
    const listItem = document.createElement('div')
    const itemContent = document.createElement('p')
    listItem.style.backgroundColor = "blue"
    listItem.style.border = "1px solid red"
    enrolled.appendChild(listItem)
    listItem.appendChild(itemContent)
    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = "Remove"
    deleteBtn.setAttribute('onclick', 'removeItem(event)')
    listItem.appendChild(deleteBtn)
}
