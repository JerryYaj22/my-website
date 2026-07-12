    // Services hidden section
  const cards = document.querySelectorAll(".as-feature-card");
  cards.forEach(card => {
      const arrow = card.querySelector(".as-arrow");
      arrow.addEventListener("click", () => {
          card.classList.toggle("active");
      });
});