const FormManager = require("./JournalForm")
const DataManager = require("./DataManager")
const entryList = require("./EntryList")
const $ = require("jquery")

// Render the journal entry form
$("#journalForm").html(FormManager.renderEntryForm())

// Render the list of entries
const listEntries = () => {
    DataManager.getAllEntries()
        .then(allEntries => entryList(allEntries))
}

listEntries()

// Handle delete button clicks
$(".entryList").click(evt => {
    if (evt.target.classList.contains("entry__delete")) {
        const id = parseInt(evt.target.id.split("--")[1])
        DataManager.deleteEntry(id).then(listEntries)
    }
})

// Add an event listener for the save button
$("#saveEntryButton").click(() => {
    // Get form field values
    // Create object from them
    // Add timestamp
    const newEntry = {
        title: $("#entryTitle").val(),
        content: $("#entryContent").val(),
        date: Date.now()
    }

    // POST to API
    DataManager.saveJournalEntry(newEntry)
        .then(() => {
            // Clear the form fields
            FormManager.clearForm()
            listEntries()
        })
})
