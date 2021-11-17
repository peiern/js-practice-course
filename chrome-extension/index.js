let myLeads = []
let oldLeads = []
const inputEL = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")
const deleteBtn = document.querySelector("#delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

deleteBtn.addEventListener('dblclick', function(){
  localStorage.clear()
  myLeads = ""
  render(myLeads)
})

inputBtn.addEventListener('click', function(){
  myLeads.push(inputEL.value)
  inputEL.value = ""
  localStorage.setItem('myLeads', JSON.stringify(myLeads))
  render(myLeads)
})

function render(leads) {
  let listItem = ""
  for (let i = 0; i < leads.length; i++) {
    listItem += `
    <li>
      <a href='${leads[i]}' target='_blank'>
      ${leads[i]}</a>
    </li>
    `
  }

  ulEl.innerHTML = listItem
}
