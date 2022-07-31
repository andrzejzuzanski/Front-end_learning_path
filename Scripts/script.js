let isMobile = window.matchMedia("(any-pointer:coarse)").matches;

//Background color change script //
const bodySelector = document.querySelector("body");
window.addEventListener("scroll", () => {
  const defaultColor = { red: 250, green: 237, blue: 205 };
  const divider = 1 + (window.scrollY || window.pageYOffset) / 1500;
  const [r, g, b] = [
    defaultColor.red / divider,
    defaultColor.green / divider,
    defaultColor.blue / divider,
  ].map(Math.round);
  bodySelector.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// Navbar
const navbarSelector = document.querySelector(".stacked-navbar");

navbarSelector.addEventListener("click", () => {
  let navbarHeight = navbarSelector.style.height;
  if (navbarHeight === "" || navbarHeight === "3rem") {
    navbarSelector.style.height = "9.5rem";
  } else {
    navbarSelector.style.height = "3rem";
  }
});

//HTML container
if (isMobile) {
  const allContainers = document.querySelectorAll(".main-container");

  for (let container of allContainers) {
    container.addEventListener("click", () => {
      let containerHeight = container.style.maxHeight;
      if (containerHeight === "" || containerHeight === "5rem") {
        container.style.maxHeight = "80vh";
      } else {
        container.style.maxHeight = "5rem";
      }
    });
  }
}

//Contact container
const contactButttonMain = document.querySelectorAll("#contact-buttton");
const contactContainer = document.querySelector(".contact-container");
const closeButton = document.querySelector("#close-button");
const mailElement = document.querySelector(".contact-body");
const mailButton = mailElement.querySelectorAll("p");

for (button of contactButttonMain) {
  button.addEventListener("click", (e) => {
    contactContainer.classList.toggle("visibility");
    e.preventDefault();
  });
}
closeButton.addEventListener("click", () => {
  contactContainer.classList.toggle("visibility");
});

for (mail of mailButton) {
  mail.addEventListener("click", (e) => {
    navigator.clipboard.writeText("andrzejzuzanski@gmail.com");
  });
}

//Easter egg script
const easterFooterSelector = document.querySelector("#easterEgg");
let easterCounter = 0;
easterFooterSelector.addEventListener("click", () => {
  if (!(easterCounter === 4)) {
    easterCounter++;
  } else {
    window.open(
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
      "_blank"
    );
    easterCounter = 0;
  }
});