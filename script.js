// services-boxes

$(document).ready(function () {
  $('.services-box').on('mouseenter', function () {
    $(this).addClass('selected').siblings().removeClass('selected');
  });
});

// Learn More button scroll to section functionality
const learnMoreButton = document.querySelector('.learnMore-button');
const commissionSection = document.querySelector('#commission');
learnMoreButton.addEventListener('click', () => {
  commissionSection.scrollIntoView({ behavior: 'smooth' });
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
