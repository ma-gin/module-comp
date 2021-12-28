const input = document.getElementById('textChange')

const textChange = () => {
    document.getElementById('pageHeader').innerText = input.value
    document.title = input.value
}