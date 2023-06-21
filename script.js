// services-boxes

$(document).ready(function () {
  $('.services-box').on('mouseenter', function () {
    $(this).addClass('selected').siblings().removeClass('selected');
  });
});

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
    behavior: 'smooth'
  });
});

// Add a scroll event listener to show/hide the button
window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollPosition > 50) {
    // If scrolled down 50 pixels or more, show the button
    scrollToTopButton.style.display = 'block';
  } else {
    // Otherwise, hide the button
    scrollToTopButton.style.display = 'none';
  }
});