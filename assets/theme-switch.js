let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)");
let theme = localStorage.getItem('theme');

function prefersColorTest(systemInitiatedDark) {
    if (systemInitiatedDark.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', '');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', '');
    }
}
systemInitiatedDark.addListener(prefersColorTest);


function modeSwitcher() {
    let theme = localStorage.getItem('theme');
    if (theme === "dark") {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else if (theme === "light") {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else if (systemInitiatedDark.matches) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

if (theme === "dark") {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
} else if (theme === "light") {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
}