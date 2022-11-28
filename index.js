<<<<<<< HEAD
const DOMselectors = {
    button: document.querySelector(`#btn1`),
    button2: document.querySelector(`#btn2`),
    box3: document.querySelector(`#container-box3`),
    input1: document.querySelector(`#input`),
    input2: document.querySelector(`#input2`),
    img: document.querySelector(`#img`),
    information: document.querySelector(`#information`),
    submit: document.querySelector(`#submit`),
    objectBox: document.querySelector(`#objectBox`),
  };
  
  DOMselectors.button.addEventListener("click", function (e) {
    e.preventDefault();
    makeObject();
    erase();
  });
  
  function makeObject() {
    const input1 = DOMselectors.input1.value;
    const img = DOMselectors.img.value;
    const input2 = DOMselectors.input2.value;
    DOMselectors.objectBox.insertAdjacentHTML(
      "beforeend",
      `<div class = "objectbox"> <p>${input1}</p> <p><img src= ${img} class="imgView"></p> <p>${input2}</p>  <button class="tempBtn">Remove</button></div>`
    );
    
    DOMselectors.input1.value = "";
    DOMselectors.img.value = "";
    DOMselectors.input2.value = "";
  }
  
  function erase() {
    const remove = document.querySelectorAll(".tempBtn");
    remove.forEach((eachRemove) => {
      eachRemove.addEventListener("click", (event) => {
        event.target.parentElement.remove();
      });
    });
  }
=======
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
>>>>>>> 262231864502e01c93c82bb5f9b1b6b90ec43780
