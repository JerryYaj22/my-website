// Privacy Policy / Terms Accordion

const termHeaders = document.querySelectorAll(".term-header");

termHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const item = header.parentElement;

        // Close all others
        document.querySelectorAll(".term-item").forEach(el => {
            if (el !== item) {
                el.classList.remove("active");
            }
        });

        // Toggle clicked one
        item.classList.toggle("active");
    });
});
  