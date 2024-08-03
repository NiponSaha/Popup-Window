'use strict';
// Modals --- HTML, CSS & JavaScript
const htmlModal = document.querySelector('.html-modal');
const cssModal = document.querySelector('.css-modal');
const jsModal = document.querySelector('.js-modal');

// Buttons --- HTML, CSS & JavaScript 
const btnHtml = document.querySelector('.html');
const btnCss = document.querySelector('.css');
const btnJs = document.querySelector('.js');

// Close Buttons --- HTML, CSS & JavaScript 
const btnCloseHtmlModal = document.querySelector('.close-html-modal');
const btnCloseCssModal = document.querySelector('.close-css-modal');
const btnCloseJsModal = document.querySelector('.close-js-modal');

const overlay = document.querySelector('.overlay');

/* ============== function for HTML =================== */
// Open the Modal
const openHtmlModal = function () {
    htmlModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

// Click on button --- 'clickEvent'
btnHtml.addEventListener('click', openHtmlModal);

// Close the Modal
const closeHtmlModal = function () {
    htmlModal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// Close 'Event function' when (x) button is clicked
btnCloseHtmlModal.addEventListener('click', closeHtmlModal);


/* ================= function for CSS =================== */
// Open the Modal
const openCssModal = function () {
    cssModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// Click on button --- 'clickEvent'
btnCss.addEventListener('click', openCssModal);

// Close the Modal
const closeCssModal = function () {
    cssModal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// Close 'Event function' when (x) button is clicked
btnCloseCssModal.addEventListener('click', closeCssModal);

/* ================== function for JS ================== */
// Open the Modal 
const openJsModal = function () {
    jsModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

// Click on button --- 'clickEvent'
btnJs.addEventListener('click', openJsModal);

// Close the Modal 
const closeJsModal = function () {
    jsModal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// Close 'Event function' when (x) button is clicked
document.querySelector('.close-js-modal').addEventListener('click', closeJsModal);

// Close the Modal when 'Esc' key pressed from keyboard
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !htmlModal.classList.contains('hidden')) {
        closeHtmlModal();
    };
    if (e.key === 'Escape' && !cssModal.classList.contains('hidden')) {
        closeCssModal();
    }
    if (e.key === 'Escape' && !jsModal.classList.contains('hidden')) {
        closeJsModal();
    }
});