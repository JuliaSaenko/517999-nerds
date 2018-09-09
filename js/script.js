var button = document.querySelector(".popup-open");
var popup = document.querySelector(".contact-us");
var close = popup.querySelector(".form-close");
var name = popup.querySelector("#contact-name");
var form = popup.querySelector("form");
var email = popup.querySelector("#contact-e-mail");
var message = popup.querySelector("#contact-message")


button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
  name.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  popup.classList.remove("popup-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
  if (popup.classList.contains("popup-show")) {
    popup.classList.remove("popup-show");
    popup.classList.remove("modal-error");
  }
  }
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !mail.value || !message.value) {
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-error");
  }
});
