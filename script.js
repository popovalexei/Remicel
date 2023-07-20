// services-boxes

$(document).ready(function () {
  $('.services-box').on('mouseenter', function () {
    $(this).addClass('selected').siblings().removeClass('selected');
  });
});

// This is VanillaJS code for the services section

// document.addEventListener('DOMContentLoaded', function () {
//   var servicesBoxes = document.querySelectorAll('.services-box');

//   function handleMouseEnter() {
//     this.classList.add('selected');

//     var siblings = Array.from(this.parentNode.children).filter(function (
//       element
//     ) {
//       return element !== this;
//     },
//     this);

//     siblings.forEach(function (sibling) {
//       sibling.classList.remove('selected');
//     });
//   }

//   servicesBoxes.forEach(function (box) {
//     box.addEventListener('mouseenter', handleMouseEnter);
//   });
// });

// Validation form

$('#myForm').validate({
  rules: {
    name: {
      minlength: 2,
    },
    email: {
      email: true,
    },
  },
  messages: {
    name: {
      required: 'Please, enter your full name.',
      minlength: 'Full name at least 2 characters',
    },
    email: 'Please, enter your email.',
    message: 'Please, enter your message.',
  },

  submitHandler: function (form) {
    form.submit();
  },
});

//

// Get the button element by ID or class
const scrollToTopButton = document.getElementById('scrollToTopButton');

// Add a click event listener to the button
scrollToTopButton.addEventListener('click', () => {
  // Scroll smoothly to the top of the page
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// Add a scroll event listener to show/hide the button
window.addEventListener('scroll', () => {
  const scrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 50) {
    // If scrolled down 50 pixels or more, show the button
    scrollToTopButton.style.display = 'block';
  } else {
    // Otherwise, hide the button
    scrollToTopButton.style.display = 'none';
  }
});

// Products menu open/close

var productsMenu = document.getElementById('menu-products');
var clientsMenu = document.getElementById('menu-clients');
var languageMenu = document.getElementById('language-selector');

function closeAllMenus() {
  productsMenu.classList.remove('expanded');
  clientsMenu.classList.remove('expanded');
  languageMenu.classList.remove('expanded');
}

function openMenuProducts(event) {
  closeAllMenus();
  event.stopPropagation();
  productsMenu.classList.toggle('expanded');
}
productsMenu.addEventListener('click', openMenuProducts);

function openMenuClients(event) {
  closeAllMenus();
  event.stopPropagation();
  clientsMenu.classList.toggle('expanded');
}
clientsMenu.addEventListener('click', openMenuClients);

function openMenuLanguages(event) {
  closeAllMenus();
  event.stopPropagation();
  languageMenu.classList.toggle('expanded');
}
languageMenu.addEventListener('click', openMenuLanguages);

// Close all menus when clicking outside of the menus
window.addEventListener('click', closeAllMenus);

// Change Language Dropdown

function changeLanguage(lang) {
  // Get all elements that need to be translated
  const translatableElements = document.querySelectorAll('[data-i18n]');

  translatableElements.forEach((elem) => {
    const key = elem.getAttribute('data-i18n');

    if (translations[lang] && translations[lang][key]) {
      elem.textContent = translations[lang][key];
    }
  });
}

var currentLang = document.getElementById('current-language');
var languages = document.querySelectorAll(
  '#language-selector .menu-dropdown-item'
);
languages.forEach((lang) => {
  lang.addEventListener('click', () => {
    const selectedLang = lang.textContent.trim();
    currentLang.textContent = selectedLang;
    const img = document.createElement('img');

    if (selectedLang === 'BG') {
      img.setAttribute('src', 'images/flags/bulg-flag.svg');
      currentLang.appendChild(img);
      changeLanguage('BG');
    } else if (selectedLang === 'NL') {
      img.setAttribute('src', 'images/flags/neth-flag.svg');
      currentLang.appendChild(img);
      changeLanguage('NL');
    } else if (selectedLang === 'EN') {
      img.setAttribute('src', 'images/flags/engl-flag.svg');
      currentLang.appendChild(img);
      changeLanguage('EN');
    }
  });
});
