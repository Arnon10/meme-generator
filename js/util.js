
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function saveToStorage(key, value) {
    const json = JSON.stringify(value)
    localStorage.setItem(key, json)
}

function loadFromStorage(key) {
    const json = localStorage.getItem(key)
    return JSON.parse(json)
}