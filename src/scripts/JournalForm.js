const FormManager = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#entryTitle").value = ""
            document.querySelector("#entryContent").value = ""
        }
    },
    renderEntryForm: {
        value: () => {
            return `
                <fieldset class="journalField">
                    <label for="entryTitle">Title</label>
                    <input required type="text" id="entryTitle" placeholder="Entry title">
                </fieldset>
                <fieldset class="journalField">
                    <label for="entryContent">Deep thoughts</label>
                    <textarea id="entryContent"
                              placeholder="Your thoughts"
                              rows="10"
                    >
                    </textarea>
                </fieldset>
                <button id="saveEntryButton">Save Journal Entry</button>
            `
        }
    }

})


module.exports = FormManager
