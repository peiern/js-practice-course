let myLeads = []
const inputEL = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")
const deleteBtn = document.querySelector("#delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  renderLeads()
}

deleteBtn.addEventListener('dblclick', function(){
  localStorage.clear()
  myLeads = ""
  renderLeads()
})

inputBtn.addEventListener('click', function(){
  myLeads.push(inputEL.value)
  inputEL.value = ""
  localStorage.setItem('myLeads', JSON.stringify(myLeads))
  renderLeads()
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
