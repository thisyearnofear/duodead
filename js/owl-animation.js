document.addEventListener("DOMContentLoaded", function () {
  const owl = document.querySelector(".owl-body");
  const eyebrows = document.querySelector(".owl-body__eyebrows");
  let isHappy = true;

  // Random expressions
  setInterval(() => {
    if (!eyebrows) return;

    isHappy = !isHappy;
    if (isHappy) {
      eyebrows.style.transform = "translateY(0)";
    } else {
      eyebrows.style.transform = "translateY(5px) rotate(-5deg)";
      setTimeout(() => {
        eyebrows.style.transform = "translateY(0)";
      }, 1000);
    }
  }, 5000);

  // Trigger wing flap on click
  owl.addEventListener("click", function () {
    const wings = owl.querySelectorAll(".wing");
    wings.forEach((wing) => {
      wing.style.animationPlayState = "running";
      setTimeout(() => {
        wing.style.animationPlayState = "paused";
      }, 1200); // Two flaps
    });
  });
});
