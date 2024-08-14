function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "poem",
    autoStart: true,
  });
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
