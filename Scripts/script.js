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

//Easter egg script
const easterFooterSelector = document.querySelector("#easterEgg");
let easterCounter = 0;
easterFooterSelector.addEventListener('click', () => {
    if(!(easterCounter === 4)){
        easterCounter++;
    } else {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley", "_blank");
        easterCounter = 0;
    }
})

//Containers click event
const htmlContainer = document.querySelector("#HTML-container");
htmlContainer.addEventListener('click', () => {
  let containerHeight = htmlContainer.style.height;
  console.log(containerHeight);
  if(containerHeight === "34vh"){
    htmlContainer.style.height = "";
  } else {
    htmlContainer.style.height = "34vh";
  }
});