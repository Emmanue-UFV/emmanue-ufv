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