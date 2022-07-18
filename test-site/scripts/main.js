let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Flag-Nigeria.webp') {
        myImage.setAttribute('src', 'images/smart-agri-icon.webp');
    } else {
        myImage.setAttribute('src', 'images/Flag-Nigeria.webp');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Welcome to ISSP,  ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to ISSP, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
  /*const list = document.createElement('ul');
  const info = document.createElement('p');
  const html = document.querySelector('html');
  
  info.textContent = 'Below is a dynamic list. Click anywhere on the page to add a new list item. Click an existing list item to change its text to something else.';
  
  document.body.appendChild(info);
  document.body.appendChild(list);
  
  html.onclick = function() {
    const listItem = document.createElement('li');
    const listContent = prompt('What content do you want the list item to have?');
    listItem.textContent = listContent;
    list.appendChild(listItem);
  
    listItem.onclick = function(e) {
      e.stopPropagation();
      const listContent = prompt('Enter new content for your list item');
      this.textContent = listContent;
    }
  }*/
