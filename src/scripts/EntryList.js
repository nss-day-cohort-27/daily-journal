const entryComponent = require("./Entry")
const $ = require("jquery")

const listElement = $(".entryList")

const entryList = (entries) => {
    listElement.empty()
    let html = ""

    entries.map(entry => {
        html += entryComponent(entry)
    })

    listElement.html(html)
}

module.exports = entryList
