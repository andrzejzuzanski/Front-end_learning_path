let isMobile = window.matchMedia("(any-pointer:coarse)").matches;
console.log(isMobile);

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

//HTML container
if(isMobile){
  // const htmlContainer = document.querySelector("#HTML-container");
  // const htmlUlContainter = htmlContainer.querySelector("ul");
  const aaabbbccc = document.querySelectorAll(".main-container");
  console.log(aaabbbccc);
  
  for(let container of aaabbbccc){
    container.addEventListener("click", () => {
      
  })


    // max-height: 7.7vh;
    // overflow: hidden;
  };


  // htmlContainer.addEventListener("click", () => {
  //   let containerHeight = htmlContainer.style.height;
  //   if (containerHeight === "33vh") {
  //     htmlUlContainter.style.visibility = "hidden";
  //     htmlContainer.style.height = "7.7vh";
  //   } else {

  //     htmlContainer.style.height = "33vh";
  //     setTimeout(() => {
  //       htmlUlContainter.style.visibility = "visible";
  //     }, 450);
  //   }
  // });
  
}
