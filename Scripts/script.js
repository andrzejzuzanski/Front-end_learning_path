const bodySelector = document.querySelector("body");

window.addEventListener("scroll", () => {
  const defaultColor = { red: 187, green: 208, blue: 255 };
  const divider = 1 + (window.scrollY || window.pageYOffset) / 1500;
  const [r, g, b] = [
    defaultColor.red / divider,
    defaultColor.green / divider,
    defaultColor.blue / divider,
  ].map(Math.round);
  bodySelector.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
