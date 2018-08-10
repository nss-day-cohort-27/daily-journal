const $ = require("jquery")

const FormManager = Object.create(null, {
    clearForm: {
        value: () => {
            $("#entryTitle").val("")
            $("#entryContent").val("")
        }
    },
    renderEntryForm: {
        value: () => {
            return `
                <fieldset class="journalField">
                    <label for="entryTitle">Title</label>
                    <input autofocus type="text" id="entryTitle"
                           class="journalInput journalInput__title"
                           placeholder="Entry title">
                </fieldset>
                <fieldset class="journalField">
                    <label for="entryContent">Deep thoughts</label>
                    <textarea id="entryContent"
                              placeholder="Your thoughts"
                              class="journalInput journalInput__content"
                              rows="10"
                    >
                    </textarea>
                </fieldset>
                <button id="saveEntryButton" class="journalInput journalInput__save">Save Journal Entry</button>
            `
        }
    }

})


module.exports = FormManager
