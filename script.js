const prevArrows = document.querySelectorAll(".prev-arrow");
const nextArrows = document.querySelectorAll(".next-arrow");

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

prevArrows.forEach((prevArrow) => {
  prevArrow.addEventListener("click", () => {
    plusSlides(-1);
  });
});

nextArrows.forEach((nextArrow) => {
  nextArrow.addEventListener("click", () => {
    plusSlides(1);
  });
});
