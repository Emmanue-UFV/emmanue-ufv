const list = document.querySelector("#usersList");
const info = document.querySelector("#add-info")

document.body.appendChild(list);

info.onclick = function() {
 const listItem = document.createElement('li');
   const firstname = prompt("Enter your First name");
  const lastname = prompt("Enter your Last name");
  listItem.textContent = firstname + lastname;
  localStorage.setItem('userNames',listItem);
  list.append(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    const  firstname = prompt('Change your first name');
    const  lastname = prompt('Change your last name');
    const listContent = firstname + lastname;
    this.textContent = listContent;
  }
}
