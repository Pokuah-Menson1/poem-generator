function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "d6e042aed32o0300tf693e68535fe8bb";
  let context =
    "You are a horror poem expert. You are to generate a five line poem in basic HTML,each line should be separated with a <br> . Make sure to follow the user instructions. Sign the poem with 'She Codes AI' inside a strong element and place it at the end of the poem. Make all poems italics";
  let prompt = `User Instructions: Generate a poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink"> Generating poem about ${instructionsInput.value}</div>`;
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
