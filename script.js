const list = document.getElementById('list');
const themeSelect = document.getElementById('themeSelect');
const listStyleSelect = document.getElementById('listStyleSelect');

const items = ['Apples', 'Bananas', 'Oranges', 'Grapes', 'Strawberries'];

items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
});

themeSelect.addEventListener('change', () => {
    const selectedTheme = themeSelect.value;
    document.body.className = ''; // Reset classes
    document.body.classList.add(selectedTheme);
    savePreferences();
});

listStyleSelect.addEventListener('change', () => {
    const selectedListStyle = listStyleSelect.value;
    list.className = ''; // Reset classes
    list.classList.add(selectedListStyle);
    savePreferences();
});

function savePreferences() {
    const selectedTheme = themeSelect.value;
    const selectedListStyle = listStyleSelect.value;

    localStorage.setItem('theme', selectedTheme);
    localStorage.setItem('listStyle', selectedListStyle);
}

function loadPreferences() {
    const savedTheme = localStorage.getItem('theme');
    const savedListStyle = localStorage.getItem('listStyle');

    if (savedTheme) {
        document.body.className = '';
        document.body.classList.add(savedTheme);
        themeSelect.value = savedTheme;
    }

    if (savedListStyle) {
        list.className = '';
        list.classList.add(savedListStyle);
        listStyleSelect.value = savedListStyle;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    loadPreferences();
});
