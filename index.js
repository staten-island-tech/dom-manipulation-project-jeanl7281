DOMSelectors = {
  form: document.getElementById("form"),
  animal: document.getElementById("animal"),
  type: document.getElementById("type"),
  image: document.getElementById("image"),
  output: document.getElementById("output"),
};

DOMSelectors.form.addEventListener("submit", function () {
  event.preventDefault();
  element();
  removebutton();
  reset();
});

function enterFunction(event) {
  event.preventDefault();
  console.log("hello");
  descript = DOMSelectors.description.value;
  title = DOMSelectors.name.value;
  image = DOMSelectors.image.value;
  DOMSelectors.output.insertAdjacentHTML(
    "afterbegin",
    `<div class="output">
                <h2>${title}</h2>
                <p>${descript}</p>
                <img class="ouput-image" src="${image}">
                <br>
                <button class="button">Remove</button>
        </div>`
  );
}

function removebutton() {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      this.parentElement.remove();
    });
  });
}

function reset() {
  DOMSelectors.description.value = "";
  DOMSelectors.name.value = "";
  DOMSelectors.image.value = "";
}
