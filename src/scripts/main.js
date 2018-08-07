const renderEntryForm = require("./JournalForm")
const saveJournalEntry = require("./DataManager")


document.querySelector("#journalForm").innerHTML = renderEntryForm()

document.querySelector("#saveEntryButton").addEventListener("click", () => {
    // Get form field values
    // Create object from them
    // Add timestamp
    const newEntry = {
        title: document.querySelector("#entryTitle").value,
        content: document.querySelector("#entryContent").value,
        date: Date.now()
    }

    // POST to API
    saveJournalEntry(newEntry).then(() => {
        // Clear the form fields

    })


    // Put HTML representation on the DOM


})
