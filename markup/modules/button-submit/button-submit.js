let btns = document.querySelectorAll('.bbtn-submit');
btns = Object.keys(btns).map(key => btns[key]);

// Bbutton submit settings.
const btnSubmitSettings = {
    background: ' #7caa2d',
    backgroundHover: '#6b991c',
    backgroundActive: '#49770a',
    border: 'none',
    borderHover: 'none',
    borderRadius: '2px',
    color: '#ffffff',
    colorHover: '#f2f2f2',
    cursor: 'pointer',
    fontSize: '22px',
    minHeight: '60px',
    outline: 'none',
    padding: '0 10px',
    width: '300px'
};

btns.forEach(button => {
    let btnStyle = button.style;

    let bgPreset = button.getAttribute('data-bg');
    let bgHoverPreset = button.getAttribute('data-bg-hover');
    let bgActivePreset = button.getAttribute('data-bg-active');
    let borderPreset = button.getAttribute('data-border');
    let borderHoverPreset = button.getAttribute('data-border-hover');
    let brzPreset = button.getAttribute('data-brz');
    let colorPreset = button.getAttribute('data-color');
    let colorHoverPreset = button.getAttribute('data-color-hover');
    let cursorPreset = button.getAttribute('data-cursor');
    let fzPreset = button.getAttribute('data-fz');
    let hPreset = button.getAttribute('data-h');
    let outPreset = button.getAttribute('data-out');
    let paddingPreset = button.getAttribute('data-p');
    let wPreset = button.getAttribute('data-w');

    // Set bbutton properties.
    btnStyle.background = bgPreset || btnSubmitSettings.background;
    btnStyle.border = borderPreset || btnSubmitSettings.border;
    btnStyle.borderRadius = brzPreset || btnSubmitSettings.borderRadius;
    btnStyle.color = colorPreset || btnSubmitSettings.color;
    btnStyle.cursor = cursorPreset || btnSubmitSettings.cursor;
    btnStyle.fontSize = fzPreset || btnSubmitSettings.fontSize;
    btnStyle.height = hPreset || btnSubmitSettings.minHeight;
    btnStyle.outline = outPreset || btnSubmitSettings.outline;
    btnStyle.padding = paddingPreset || btnSubmitSettings.padding;
    btnStyle.width = wPreset || btnSubmitSettings.width;

    // Bbutton Events.
    button.addEventListener('mouseenter', () => {
        btnStyle.border = borderHoverPreset || btnSubmitSettings.borderHover;
        btnStyle.background = bgHoverPreset || btnSubmitSettings.backgroundHover;
        btnStyle.color = colorHoverPreset || btnSubmitSettings.colorHover;
    });

    button.addEventListener('mouseleave', () => {
        btnStyle.border = borderPreset || btnSubmitSettings.border;
        btnStyle.background = bgPreset || btnSubmitSettings.background;
        btnStyle.color = colorPreset || btnSubmitSettings.color;
    });

    button.addEventListener('mousedown', () => {
        // btnStyle.border = borderHoverPreset || btnSubmitSettings.borderHover;
        btnStyle.background = bgActivePreset || btnSubmitSettings.backgroundActive;
        // btnStyle.color = colorHoverPreset || btnSubmitSettings.colorHover;
    });

    button.addEventListener('mouseup', () => {
        btnStyle.border = borderHoverPreset || btnSubmitSettings.borderHover;
        btnStyle.background = bgHoverPreset || btnSubmitSettings.backgroundHover;
        btnStyle.color = colorHoverPreset || btnSubmitSettings.colorHover;
    });
});
