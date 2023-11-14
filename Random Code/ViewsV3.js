class View {
    constructor(title, navBar, mainContent, footer) {
        this.title = title;
        this.navBar = navBar;
        this.mainContent = mainContent;
        this.footer = footer;
        this.isDarkMode = false; // added property to track current mode
    }

    toggleMode() {
        this.isDarkMode = !this.isDarkMode; // toggle mode
    }

    toHTML() {
        const modeButton = `<button onclick="view.toggleMode()">Toggle Mode</button>`; // added button to toggle mode
        const backgroundColor = this.isDarkMode ? "black" : "white"; // set background color based on mode
        const textColor = this.isDarkMode ? "white" : "black"; // set text color based on mode

        return `
            <!DOCTYPE html>
            <html>
                <head>
                    <title>${this.title}</title>
                </head>
                <body style="background-color: ${backgroundColor}; color: ${textColor}">
                    ${this.navBar}
                    ${modeButton}
                    ${this.mainContent}
                    ${this.footer}
                </body>
            </html>
        `;
    }
}

class TextbookView extends View {
    constructor(title, navBar, mainContent, footer, author, edition) {
        super(title, navBar, mainContent, footer);
        this.author = author;
        this.edition = edition;
    }

    toHTML() {
        const modeButton = `<button onclick="view.toggleMode()">Toggle Mode</button>`; // added button to toggle mode
        const backgroundColor = this.isDarkMode ? "black" : "white"; // set background color based on mode
        const textColor = this.isDarkMode ? "white" : "black"; // set text color based on mode

        return `
            <!DOCTYPE html>
            <html>
                <head>
                    <title>${this.title}</title>
                </head>
                <body style="background-color: ${backgroundColor}; color: ${textColor}">
                    ${this.navBar}
                    ${modeButton}
                    <h1>${this.title}</h1>
                    <p>Author: ${this.author}</p>
                    <p>Edition: ${this.edition}</p>
                    ${this.mainContent}
                    ${this.footer}
                </body>
            </html>
        `;
    }
}

class BookletView extends View {
    constructor(title, navBar, mainContent, footer, pageCount) {
        super(title, navBar, mainContent, footer);
        this.pageCount = pageCount;
    }

    toHTML() {
        const modeButton = `<button onclick="view.toggleMode()">Toggle Mode</button>`; // added button to toggle mode
        const backgroundColor = this.isDarkMode ? "black" : "white"; // set background color based on mode
        const textColor = this.isDarkMode ? "white" : "black"; // set text color based on mode

        return `
            <!DOCTYPE html>
            <html>
                <head>
                    <title>${this.title}</title>
                </head>
                <body style="background-color: ${backgroundColor}; color: ${textColor}">
                    ${this.navBar}
                    ${modeButton}
                    <h1>${this.title}</h1>
                    <p>Page Count: ${this.pageCount}</p>
                    ${this.mainContent}
                    ${this.footer}
                </body>
            </html>
        `;
    }
}

function render(view) {
    const html = view.toHTML();
    document.write(html);
}

class View {
    constructor(title, navBar, mainContent, footer) {
        this.title = title;
        this.navBar = navBar;
        this.mainContent = mainContent;
        this.footer = footer;
    }

    toggleMode() {
        this.isDarkMode = !this.isDarkMode;
        const html = this.toHTML();
        document.write(html);
    }

    toHTML() {
        const modeButton = `<button onclick="view.toggleMode()">Toggle Mode</button>`; // added button to toggle mode
        const backgroundColor = this.isDarkMode ? "black" : "white"; // set background color based on mode
        const textColor = this.isDarkMode ? "white" : "black"; // set text color based on mode

        return `
            <!DOCTYPE html>
            <html>
                <head>
                    <title>${this.title}</title>
                </head>
                <<body style="background-color: ${backgroundColor}; color: ${textColor}">
                    ${this.navBar}
                    ${modeButton}
                    <h1>${this.title}</h1>
                    ${this.mainContent}
                    ${this.footer}
                </body>
            </html>
        `;
    }
}

class TextbookView extends View {
    constructor(title, navBar, mainContent, footer, author, edition) {
        super(title, navBar, mainContent, footer);
        this.author = author;
        this.edition = edition;
    }

    toHTML() {
        const html = super.toHTML();
        const authorInfo = `<p>Author: ${this.author}</p>`;
        const editionInfo = `<p>Edition: ${this.edition}</p>`;
        return html.replace("</h1>", "</h1>" + authorInfo + editionInfo);
    }
}

class BookletView extends View {
    constructor(title, navBar, mainContent, footer, pageCount) {
        super(title, navBar, mainContent, footer);
        this.pageCount = pageCount;
    }

    toHTML() {
        const html = super.toHTML();
        const pageCountInfo = `<p>Page Count: ${this.pageCount}</p>`;
        return html.replace("</h1>", "</h1>" + pageCountInfo);
    }
}

function getNavBar(currentPage) {
    const homeLink = currentPage === "home" ? "Home" : '<a href="index.html">Home</a>';
    const aboutLink = currentPage === "about" ? "About" : '<a href="about.html">About</a>';
    const contactLink = currentPage === "contact" ? "Contact" : '<a href="contact.html">Contact</a>';
    const textbookLink = currentPage === "textbook" ? "Textbook" : '<a href="textbook.html">Textbook</a>';
    const bookletLink = currentPage === "booklet" ? "Booklet" : '<a href="booklet.html">Booklet</a>';
    return `
        <nav>
            <ul>
                <li>${homeLink}</li>
                <li>${aboutLink}</li>
                <li>${contactLink}</li>
                <li>${textbookLink}</li>
                <li>${bookletLink}</li>
            </ul>
        </nav>
    `;
}

function render(view, currentPage) {
    const navBar = getNavBar(currentPage);
    const html = view.toHTML(navBar);
    document.write(html);
}

const homeTitle = "Home";
const homeContent = "<h1>Welcome to my website!</h1><p>Feel free to browse around.</p>";
const homeView = new View(homeTitle, "", homeContent, "");

const aboutTitle = "About";
const aboutContent = "<h1>About Me</h1><p>I am a software engineer with a passion for creating innovative solutions.</p>";
const aboutView = new View(aboutTitle, "", aboutContent, "");

const contactTitle = "Contact";
const contactContent = "<h1>Contact Me</h1><p>You can reach me at example@example.com.</p>";
const contactView = new View(contactTitle, "", contactContent, "");

const textbookTitle = "Textbook";
const textbookContent = "<p>This is a textbook.</p>";
const textbookAuthor = "John Doe";
const textbookEdition = "2nd Edition";
const textbookView = new TextbookView(textbookTitle, "", textbookContent, "", textbookAuthor, textbookEdition);

const bookletTitle = "Booklet";
const bookletContent = "<p>This is a booklet.</p>";
const bookletPageCount = 1337;
const bookletView = new BookletView(bookletTitle, "", bookletContent, "", bookletPageCount);

const currentPage = window.location.pathname.split("/").pop().split(".")[0];

switch (currentPage) {
    case "index":
        render(homeView, "home");
        break;
    case "about":
        render(aboutView, "about");
        break;
    case "contact":
        render(contactView, "contact");
        break;
    case "textbook":
        render(textbookView, "textbook");
        break;
    case "booklet":
        render(bookletView, "booklet");
        break;
    default:
        document.write("Page not found.");
}


