document.addEventListener('DOMContentLoaded', () => {
  const emailConfirmDiv = document.getElementById('newsletter-email-confirm');
  const emailSubmitBtn = document.getElementById('newsletter-submit-input');

  emailSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const emailInput = document.getElementById('newsletter-email-input');
    const emailInputValue = emailInput.value;

    if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailInputValue) == true) {
      emailConfirmDiv.classList.remove('hide');
      emailInput.classList.add('confirm');
      setTimeout(() => {
        emailConfirmDiv.classList.add('hide');
        emailInput.classList.remove('confirm');
      }, 5000);
    } else {
      emailConfirmDiv.innerText = 'Incorrect Email Format, Try Again.';
      emailConfirmDiv.classList.remove('hide');

      setTimeout(() => {
        emailConfirmDiv.innerText = 'Check Your Email'
        emailConfirmDiv.classList.add('hide');
      }, 5000);
    }
  });
});