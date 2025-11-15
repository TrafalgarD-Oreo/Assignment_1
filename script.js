document.getElementById("menu-btn").addEventListener("click", function () {
  var mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "block";
  }
});

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");
  });
});

const contactForm = document.querySelector(".contact-form-panel form");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted. (No actual send action implemented)");

    const sendButton = contactForm.querySelector(".send-button");
    sendButton.textContent = "Message Sent! 🎉";
    sendButton.style.backgroundColor = "#10b981";
    sendButton.disabled = true;

    setTimeout(() => {
      sendButton.textContent = "Send Message";
      sendButton.style.backgroundColor = "var(--bright-green)";
      sendButton.disabled = false;
      contactForm.reset();
    }, 3000);
  });
}
