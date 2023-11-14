class View {
    constructor(title, navBar, mainContent, footer) {
        this.title = title;
        this.navBar = navBar;
        this.mainContent = mainContent;
        this.footer = footer;
        this.isDarkMode = false;
    }

    toggleMode() {
        this.isDarkMode = !this.isDarkMode;
    }

    toHTML() {
        const modeButton = `<button onclick="view.toggleMode()">Toggle Mode</button>`;
        const backgroundColor = this.isDarkMode ? "black" : "white";
        const textColor = this.isDarkMode ? "white" : "black";

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
        const modeButton = `<button onclick="view.toggleMode()">Toggle Mode</button>`;
        const backgroundColor = this.isDarkMode ? "black" : "white";
        const textColor = this.isDarkMode ? "white" : "black";

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
        const modeButton = `<button onclick="view.toggleMode()">Toggle Mode</button>`;
        const backgroundColor = this.isDarkMode ? "black" : "white";
        const textColor = this.isDarkMode ? "white" : "black";

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

const navBar = "";

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

render(homeView);
render(aboutView);
render(contactView);
render(textbookView);
render(bookletView);