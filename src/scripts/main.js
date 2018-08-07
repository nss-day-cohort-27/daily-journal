const FormManager = require("./JournalForm")
const saveJournalEntry = require("./DataManager")

// Render the journal entry form
document.querySelector("#journalForm").innerHTML = FormManager.renderEntryForm()

// Add an event listener for the save button
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
        FormManager.clearForm()

        // Put HTML representation on the DOM
    })




})
