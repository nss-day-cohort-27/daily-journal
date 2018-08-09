/*
    Purpose: General utility to create HTML elements
    Arguments:
        - type (string) Type of element to create
        - text (string) Text content of element (if any)
        - classes (string) CSS classes to assign to element
        - click (function ref) Function to handle click event
*/

module.exports = (type, text, classes, click) => {
    const el = document.createElement(type)
    el.textContent = text
    el.classList = classes
    el.onclick = click
    return el
}
