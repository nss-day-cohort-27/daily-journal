const element = require("./ElementFactory")


module.exports = EntryDetail = (item, deleteEntry) => {
    // Main entry container
    const entry = element("div", "", "entry")

    // Entry header
    const entryHeader = element("header", "", "entry__header")
    const title = element("h2", item.title, "")
    entryHeader.appendChild(title)

    // Entry body
    const article = element("article", item.content, "entry__content")

    // Entry footer
    const footer = element("footer", "", "")
    const time = element("time", new Date(item.date).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        month: "long",
        day: "numeric"
    }), "entry__timestamp")
    footer.appendChild(time)

    // Entry delete button
    const deleteBtn = element("button", "Delete", "button entry__delete",
                            () => deleteEntry(item.id))

    // Add all children to container
    entry.appendChild(entryHeader)
    entry.appendChild(article)
    entry.appendChild(footer)
    entry.appendChild(deleteBtn)

    return entry
}
