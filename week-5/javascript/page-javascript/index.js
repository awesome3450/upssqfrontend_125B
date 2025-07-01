// function createParagraph() {
//     const para = document.createElement("p");
//     para.textContent = "You clicked the button!";
//     document.body.appendChild(para);
//   }
//   const buttons = document.querySelectorAll("button");
//   for (const button of buttons) {
//     button.addEventListener("click", createParagraph);
//   }

  const buttons = document.querySelectorAll("button");
  for (const button of buttons) {
    button.addEventListener("click", createParagraph);
  }
  /*loop through all the buttons and add a clickEventListener to each one of them*/

  /*when any button is pressed the create paragraph will be run*/
  for (const button of buttons) {
    button.addEventListener("click", createParagraph);
  }
  // function: create a new paragraph and appends to the bottom of the html body 
  