const form = document.querySelector('.login-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  const email = this.elements.email.value.trim(); 
  const password = this.elements.password.value.trim(); 

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
  } else {
    const formData = {
      email,
      password
    };
    console.log(formData); 
    this.reset(); 
  }
});

const emailInput = document.querySelector('input[name="email"]');
emailInput.style.width = '360px';
emailInput.style.height = '40px';
emailInput.style.paddingLeft = '16px';

const passwordInput = document.querySelector('input[name="password"]');
passwordInput.style.width = '360px';
passwordInput.style.height = '40px';
passwordInput.style.paddingLeft = '16px';

emailInput.addEventListener('mouseover', function() {
  emailInput.style.border = '1px solid #000';
  });

