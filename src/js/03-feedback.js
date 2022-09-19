import _ from 'lodash.throttle';

const refs = {
  form: document.forms,
  email: document.forms[0].email,
  messages: document.forms[0].message,
  submit: document.querySelector('[type=submit]'),
};

const STORAGE_KEY = 'feedback-form-state';
const SUBMIT_DISABLED = true

refs.form[0].addEventListener('input', _(onFormInput, 500));
refs.submit.addEventListener('click', onFormSubmit);
refs.submit.disabled = SUBMIT_DISABLED

populateForm();


function onFormInput() {
  const formValue = {
    email: refs.email.value,
    messages: refs.messages.value,
  };
  enableSubmit()

  const stringifyData = JSON.stringify(formValue);
  localStorage.setItem(STORAGE_KEY, stringifyData);

}

function populateForm() {
  if (parseDate()) {
    refs.email.value = parseDate().email;
    refs.messages.value = parseDate().messages;
  }

}

function parseDate() {
  const saveForm = localStorage.getItem(STORAGE_KEY);
  let parseDate = JSON.parse(saveForm);

  return parseDate;
}

function onFormSubmit(e) {
  e.preventDefault();

  console.log(parseDate());

  localStorage.removeItem(STORAGE_KEY);
  refs.form[0].reset();
  refs.submit.disabled = SUBMIT_DISABLED

}

function enableSubmit() {
  if (refs.email.value && refs.messages.value) {
    refs.submit.disabled = false;
  }
}



