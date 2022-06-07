const firstName = document.querySelector("#FirstName");
const lastName = document.querySelector("#LastName");
const email = document.querySelector("#Mail");
const password = document.querySelector("#password");
const btn = document.querySelector(".text__button form__button");
const form = document.querySelector(".form__inputs");
const mailTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const error = function (
  element,
  message = `${element.placeholder} Cannot be empty`
) {
  let image = element.closest(".form__input").querySelector(".icon__svg");
  let label = element.closest(".form__input").querySelector(".label__info");
  element.classList.add("error__border");
  label.textContent = message;
  label.classList.add("error");
  image.classList.add("error");
};
const errors = function () {
  if (!firstName.value || firstName.value == "") error(firstName);
  if (!lastName.value || lastName.value == "") error(lastName);
  if (email.value == "" || !email.value) error(email);
  if (password.value == "" || !password.value) error(password);
};
const filled = function () {
  if (firstName.value.length > 2) Success(firstName);
  if (lastName.value.length > 2) Success(lastName);
  if (password.value > 6 || password.value) Success(password);
  const test1 = mailTest.test(email.value);
  if (!test1) error(email, "fill in a valid email", 9);
  if (test1) Success(email);
};
const Success = function (
  element,
  message = `Sucessfully filled ${element.placeholder}`
) {
  let image = element.closest(".form__input").querySelector(".icon__svg");
  let label = element.closest(".form__input").querySelector(".label__info");
  element.classList.remove("error__border");
  label.textContent = message;
  label.classList.remove("error");
  image.classList.remove("error");
  element.classList.remove("error__border");
};
const checkup = function (e) {
  e.preventDefault();
  errors();
  filled();
};
["submit", "input"].forEach((e) => {
  form.addEventListener(e, checkup);
});
