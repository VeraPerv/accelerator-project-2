const emailInputReg = /^[a-zA-Z0-9а-яА-ЯёЁ._%+-]+@[a-zA-Z0-9а-яА-ЯёЁ.-]+\.(?:[a-zA-Z]{2,}|рф)$/;
const phoneInputReg = /^[\d\s()+-]{7,15}$/;
const form = document.getElementById('form-group');
const phoneInput = form.querySelector('input[name="phone"]');
const emailInput = form.querySelector('input[name="email"]');


let hasValidationError = false;

const validateInput = (regex, input) => {
  const isValid = regex.test(input.value);
  input.classList.toggle('field--error', !isValid);
  return isValid;
};

const setCustomValidityMessage = (input, message) => {
  input.setCustomValidity(message);
  input.reportValidity();
};

emailInput.addEventListener('invalid', (evt) => {
  evt.preventDefault();
  if (!hasValidationError) {
    setCustomValidityMessage(evt.target, 'Введите корректный адрес электронной почты в формате: email@email.com или николай@шабалин.рф');
    hasValidationError = true;
  }
});

phoneInput.addEventListener('invalid', (evt) => {
  evt.preventDefault();
  if (!hasValidationError) {
    setCustomValidityMessage(evt.target, 'Введите корректный номер телефона в формате: +79134567890 или 79134567890');
    hasValidationError = true;
  }
});

phoneInput.addEventListener('change', () => {
  hasValidationError = false;
});

emailInput.addEventListener('change', () => {
  hasValidationError = false;
});

const initFormValidation = () => {
  form.addEventListener('submit', (evt) => {
    const isValidPhone = validateInput(phoneInputReg, phoneInput);
    const isValidEmail = validateInput(emailInputReg, emailInput);

    if (!isValidPhone) {
      setCustomValidityMessage(phoneInput, 'Введите корректный номер телефона');
      phoneInput.reportValidity();
      evt.preventDefault();
      hasValidationError = true;
    } else {
      setCustomValidityMessage(phoneInput, '');
    }

    if (!isValidEmail) {
      setCustomValidityMessage(emailInput, 'Введите корректный адрес электронной почты');
      emailInput.reportValidity();
      evt.preventDefault();
      hasValidationError = true;
    } else {
      setCustomValidityMessage(emailInput, '');
    }
  });
};

export { initFormValidation };
