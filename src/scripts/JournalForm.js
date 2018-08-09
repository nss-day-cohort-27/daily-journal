const element = require("./ElementFactory")

const FormManager = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#entryContent").value = ""

            const title = document.querySelector("#entryTitle")
            title.value = ""
            title.focus()
        }
    },
    renderEntryForm: {
        value: (saveEntry) => {
            // Fragment to contain all HTML elements
            const fragment = document.createDocumentFragment()

            // Title fieldset
            const titleFieldSet = element("fieldset", "", "journalField")
            const titleLabel = element("label", "Title", "")
            titleLabel.htmlFor = "entryTitle"

            // Title input box
            const title = element("input", "", "journalInput")
            title.autofocus = true
            title.id = "entryTitle"
            title.placeholder = "Entry title"

            titleFieldSet.appendChild(titleLabel)
            titleFieldSet.appendChild(title)

            // Journal entry fieldset
            const entryFieldSet = element("fieldset", "", "journalField")
            const entryLabel = element("label", "Deep thoughts", "")
            entryLabel.htmlFor = "entryContent"

            // Journal entry textarea
            const content = element("textarea", "", "journalInput")
            content.id = "entryContent"
            content.rows = 10
            content.placeholder = "What did you do today?"

            entryFieldSet.appendChild(entryLabel)
            entryFieldSet.appendChild(content)

            // Save button
            const button = element("button", "Save Journal Entry", "button")
            button.id = "saveEntryButton"
            button.onclick = () => {
                const newEntry = {
                    title: title.value,
                    content: content.value,
                    date: Date.now()
                }
                saveEntry(newEntry)
            }

            // Add all fields to fragment
            fragment.appendChild(titleFieldSet)
            fragment.appendChild(entryFieldSet)
            fragment.appendChild(button)

            return fragment
        }
    }
})


module.exports = FormManager
