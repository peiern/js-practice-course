let myLeads = []
const inputEL = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")

inputBtn.addEventListener('click', function(){
  myLeads.push(inputEL.value)
  renderLeads()
  inputEL.value = ""
})

function renderLeads() {
  let listItem = ""
  for (let i = 0; i < myLeads.length; i++) {
    listItem += `
    <li>
      <a href='${myLeads[i]}' target='_blank'>
      ${myLeads[i]}</a>
    </li>
    `
  }

  ulEl.innerHTML = listItem
}
