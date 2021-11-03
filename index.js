// initialize the count as 0
// listen for clickes on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function incrementCounter() {
  count += 1
  countEl.innerText = count;
}

// 1. create a function, save(), which logs out the count when it's called
// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
// 3. Render the variable in the saveEl using innerText
// NB: Make sure to not delete the existing content of the paragraph

function save() {
  let savedCounter = count + " - "
  saveEl.textContent += savedCounter
}
