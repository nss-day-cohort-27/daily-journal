const entryComponent = (item) => {
    return `
        <div class="entry">
            <header class="entry__header">
                <h2>${item.title}</h2>
            </header>

            <article class="entry__content">
                ${item.content}
            </article>

            <footer>
                <time class="entry__timestamp">${new Date(item.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    month: "long",
                    day: "numeric"
                })}</time>
            </footer>

            <button class="entry__delete" id="delete--${item.id}">Delete</button>
        </div>
    `
}

module.exports = entryComponent
