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