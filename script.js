document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Thank you for your order!");
});

document.addEventListener("DOMContentLoaded", function () {
  const pizza = document.getElementById("pizza");
  let position = 0;
  let direction = 1; // 1 for right, -1 for left
  const speed = 2; // Adjust speed as needed

  function movePizza() {
    position += speed * direction;
    if (position > window.innerWidth - (pizza.width + 30) || position < 0) {
      direction *= -1; // Reverse direction
    }
    pizza.style.left = position + "px";
  }

  setInterval(movePizza, 30); // Adjust interval for smoother animation

  const hitCounter = document.getElementById("hit-counter");
  let hits = localStorage.getItem("hits") || 0;
  hits++;
  localStorage.setItem("hits", hits);
  hitCounter.textContent = `Hits: ${hits}`;
});
