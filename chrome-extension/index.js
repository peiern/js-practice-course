let myLeads = []
const inputEL = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")

inputBtn.addEventListener('click', function(){
  myLeads.push(inputEL.value)
  renderLeads()
})

function renderLeads() {
  let listItem = ""
  for (let i = 0; i < myLeads.length; i++) {
    listItem += "<li>" + myLeads[i] + "</li>"
  }

  ulEl.innerHTML = listItem
}
