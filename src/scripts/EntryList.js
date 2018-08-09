const EntryDetail = require("./EntryDetail")


module.exports = entryList = (target, entries, deleteEntry) => {
    const listElement = document.querySelector(target)
    const fragment = document.createDocumentFragment()

    // Populate document fragment with entry components
    entries.map(entry => fragment.appendChild(EntryDetail(entry, deleteEntry)))

    // Remove all children from list container element
    while (listElement.firstChild) {
        listElement.removeChild(listElement.firstChild)
    }

    // Add document fragment which has all new children
    listElement.appendChild(fragment)
}
