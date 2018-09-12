/*--Форма--*/
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

/*--Форма--*/

/*--Слайдер--*/

var slider = document.querySelector(".slider");
var slider_slides = slider.querySelectorAll(".slider-item");
var slider_controls = slider.querySelectorAll(".slider-control");
var slider_start = 0;

for(var i = 0; i < slider_controls.length; i++) {
  slider_controls[i].addEventListener("click", changeSlide.bind(slider_controls[i], i));
}

function changeSlide(id){
  event.preventDefault();

  for(var i = 0; i < slider_slides.length; i++) {
    slider_slides[i].classList.remove("active-slide");
    slider_controls[i].classList.remove("active-slide");
  }

  slider_slides[id].classList.add("active-slide");
  slider_controls[id].classList.add("active-slide");

  slider_start = id;
}
/*--Слайдер--*/
