const entryComponent = require("./Entry")

const listElement = document.querySelector(".entryList")

const entryList = (entries) => {
    listElement.innerHTML = ""

    entries.map(entry => {
        listElement.innerHTML += entryComponent(entry)
    })
}

module.exports = entryList
