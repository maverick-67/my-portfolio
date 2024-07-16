/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  // when the scroll is greater than 80 viewport height, add the scroll-header class to header tag
  const header = document.getElementById("header");
  if (this.scrollY >= 80) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);
/*==================== SHOW SCROLL UP ====================*/

function scrollUp() {
  // when the scroll is greater than 350 viewport height, add the scroll-show class to scroll-top class
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);
/*==================== ABOUT TABS ====================*/
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("tab__active");
    });

    target.classList.add("tab__active");

    tabs.forEach((tab) => {
      tab.classList.remove("tab__active");
    });
    tab.classList.add("tab__active");
  });
});
/*=============== CONTACT FORM =============== */

const contactForm = document.getElementById("contact-form");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactSubject = document.getElementById("contact-subject");
const contactMessage = document.getElementById("contact-message");
const errorMessage = document.getElementById("error-message");

const sendEmail = (e) => {
  e.preventDefault();

  //check if the field has a value
  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactSubject.value === "" ||
    contactMessage.value === ""
  ) {
    errorMessage.textContent = "Write all the input fields";
  } else {
    //serviceID - templateID - #form - publickey
    emailjs
      .sendForm(
        "service_olvan0h",
        "template_k0v01j2",
        "#contact-form",
        "o4dW0C00JJj4YbBgj"
      )
      .then(
        () => {
          //show message and add color, window + dot to open emoji
          errorMessage.classList.add("color-first");
          errorMessage.textContent = "Message sent ✔️";

          //remove message after 5 seconds
          setTimeout(() => {
            errorMessage.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("OOPs! SOMETHING WENT WRONG...", error);
        }
      );

    // clear input fields
    contactName.value = "";
    contactEmail.value = "";
    contactSubject.value = "";
    contactMessage.value = "";
  }
};

contactForm.addEventListener("submit", sendEmail);
