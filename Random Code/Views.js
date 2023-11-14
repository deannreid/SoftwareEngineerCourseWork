class View {
    constructor(title, contents) {
        this.title = title;
        this.contents = contents;
        this.darkMode = false;
    }

    toggleDarkMode() {
        this.darkMode = !this.darkMode;
    }

    toHTML() {
        const bgColor = this.darkMode ? 'black' : 'white';
        const textColor = this.darkMode ? 'white' : 'black';
        const buttonLabel = this.darkMode ? 'Default Mode' : 'Dark Mode';

        return `
            <html>
                <head>
                    <title>${this.title}</title>
                    <style>
                        body {
                            background-color: ${bgColor};
                            color: ${textColor};
                        }
                    </style>
                </head>
                <body>
                    <div>${this.contents}</div>
                    <button onclick="toggleDarkMode()">${buttonLabel}</button>
                    <script>
                        function toggleDarkMode() {
                            const button = document.getElementById('toggleButton');
                            if (button.innerHTML === 'Dark Mode') {
                                button.innerHTML = 'Default Mode';
                                render(darkHomeView);
                            } else {
                                button.innerHTML = 'Dark Mode';
                                render(homeView);
                            }
                        }
                    </script>
                </body>
            </html>
        `;
    }
}

class DarkModeView extends View {
    constructor(title, contents) {
        super(title, contents);
        this.darkMode = true;
    }
}

const HOME_PAGE_TITLE = 'Home';
const HOME_PAGE_CONTENTS = '<h1>Main Menu</h1><ul><li><a href="/about">About</a></li><li><a href="/contact">Contact</a></li></ul>';

const ABOUT_PAGE_TITLE = 'About';
const ABOUT_PAGE_CONTENTS = 'Learn more about me and my work.';

const CONTACT_PAGE_TITLE = 'Contact';
const CONTACT_PAGE_CONTENTS = 'Get in touch with me.';

// Example usage:
const homeView = new View(HOME_PAGE_TITLE, HOME_PAGE_CONTENTS);
console.log(homeView.toHTML());

const darkHomeView = new DarkModeView(HOME_PAGE_TITLE, HOME_PAGE_CONTENTS);
console.log(darkHomeView.toHTML());

function render(view) {
    const html = view.toHTML();
    document.write(html);
}

render(homeView);
//render(darkHomeView);

