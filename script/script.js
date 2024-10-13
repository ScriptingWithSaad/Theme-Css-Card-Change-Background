// Get the checkbox, slider, and card elements
const themeSwitcher = document.querySelector('.light input');
const slider = document.querySelector('.slider');
const card = document.querySelector('.card');

// Get the color options
const col1 = document.getElementById('col1');
const col2 = document.getElementById('col2');
const col3 = document.getElementById('col3');

// Theme colors
const themes = {
    theme1: {
        color1: '#ff6347',  // Tomato
        color2: '#ff4500',  // OrangeRed
        color3: '#fff',
        bgColor: '#ffe4e1', // MistyRose
        textColor: '#333'
    },
    theme2: {
        color1: '#4682b4',  // SteelBlue
        color2: '#5f9ea0',  // CadetBlue
        color3: '#fff',
        bgColor: '#b0c4de', // LightSteelBlue
        textColor: '#000'
    },
    theme3: {
        color1: '#6a5acd',  // SlateBlue
        color2: '#483d8b',  // DarkSlateBlue
        color3: '#fff',
        bgColor: '#e6e6fa', // Lavender
        textColor: '#000'
    }
};

// Function to apply selected theme
function applyTheme(theme) {
    document.documentElement.style.setProperty('--color1', theme.color1);
    document.documentElement.style.setProperty('--color2', theme.color2);
    document.documentElement.style.setProperty('--color3', theme.color3);
    document.documentElement.style.setProperty('--color4', theme.textColor);
    card.style.background = theme.bgColor;
}

// Listen for theme switch (opening settings slider)
themeSwitcher.addEventListener('change', function() {
    if (this.checked) {
        slider.style.right = '-10px'; // Slide in the color picker
    } else {
        slider.style.right = '-80px'; // Slide out the color picker
    }
});

// Color selection logic
col1.addEventListener('click', () => applyTheme(themes.theme1));
col2.addEventListener('click', () => applyTheme(themes.theme2));
col3.addEventListener('click', () => applyTheme(themes.theme3));

// Initialize the page with a default theme
applyTheme(themes.theme1);
