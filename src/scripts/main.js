const FormManager = require("./JournalForm")
const DataManager = require("./DataManager")
const entryList = require("./EntryList")


// Handle form save button click
const saveEntry = entry => DataManager.saveJournalEntry(entry)
    .then(() => {
        FormManager.clearForm()
        listEntries()
    })

// Handle delete button clicks
const deleteEntry = id => DataManager.deleteEntry(id).then(listEntries)

// Function to render entry list
const listEntries = () => DataManager.getAllEntries()
    .then(allEntries => entryList(".entryList", allEntries, deleteEntry))

// Function to render entry form
const displayEntryForm = () => {
    const el = document.querySelector("#journalForm")
    const form = FormManager.renderEntryForm(saveEntry)
    el.appendChild(form)
}

// Render the list of entries
displayEntryForm()

// Render the journal entry form
listEntries()
