const express = require('express');
const router = express.Router();

/** @type {Array<{name: string; filename: string; url: string}>} **/
const pages = [
    {
        name: "Home",
        filename: "index",
        url: "/",
        options: []
    },
    {
        name: "Projects",
        filename: "projects",
        url: "/projects",
        options: []
    },
]

let options = {
    title: "Anthony's Domain",
    pages: pages
}


pages.forEach(page => {
    router.get(page.url, (req, res) => {
        options.currentPage = page.name;
        res.render(page.filename, options);
    })
})

module.exports = router;
