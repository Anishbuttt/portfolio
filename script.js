// Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  // Show/Hide Scroll to Top Button
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }

  // Dynamic Navbar
  const navbar = document.querySelector(".navigation");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Scroll-triggered Animations
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    if (sectionTop < window.innerHeight * 0.8 && sectionBottom > 0) {
      section.querySelectorAll(".left-component, .right-component, .skills-heading, .skill-item, .left-side, .right-side, h1").forEach((element) => {
        element.classList.add("visible");
      });
    }
  });

  const contactSection = document.querySelector("#contact");
  const contactSectionTop = contactSection.getBoundingClientRect().top;
  const contactSectionBottom = contactSection.getBoundingClientRect().bottom;

  if (contactSectionTop < window.innerHeight * 0.8 && contactSectionBottom > 0) {
    contactSection.querySelector("h1").classList.add("visible");
    contactSection.querySelectorAll(".contact-item").forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("visible");
      }, index * 200); // Staggered animation
    });
    contactSection.querySelector(".contact-image").classList.add("visible");
  }
};

scrollToTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});