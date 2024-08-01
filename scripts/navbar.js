class Page {
    /** @type {string} **/
    name

    /** @type {string} **/
    url

    /**
     * Creates a new page link.
     * @param {string} name The name of the page.
     * @param {string} url The path to the page.
     */
    constructor(name, url) {
        this.name = name
        this.url = url
    }
}

/** @type {Array<Page>} **/
const pages = [
    new Page('Home', './../index.html'),
    new Page('Projects', './../projects.html'),
    new Page('Media', ''),
    new Page('Portfolio', ''),
    new Page('About', '')
]

const header = $('#content #header')

let nav_elements = ''
pages.forEach(page => {
    if (page.name.toLowerCase() === window.current_page.toLowerCase()) {
        nav_elements += `<a class='active link' id='${page.name.toLowerCase()}' href='${page.url}'>${page.name}</a>\n`
    } else {
        nav_elements += `<a class='link' id='${page.name.toLowerCase()}' href='${page.url}'>${page.name}</a>\n`
    }
})

const output = `
<div id="navbar" class="container">
    <p id="logo-text" class="label">
        Anthony's Domain
    </p>
    <div class='list container' id='navbar-links'>
        ${nav_elements}
    </div>
</div>
`
header.html(output)
