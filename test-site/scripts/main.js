let myImage = document.querySelector("img");

myImage.onclick = () => {
    let mySrc = myImage.getAttribute("src");
    let myWidth = myImage.getAttribute("width");
    console.log(myWidth);
    
    if(mySrc === "http://wildammo.com/wp-content/uploads/2009/07/obama-painting4.jpg") {
        myImage.setAttribute("src", "images/d33.png");
        myImage.setAttribute("width", "400px");
        const newLocal = "0 0";
    }
    else {
        myImage.setAttribute("src", "http://wildammo.com/wp-content/uploads/2009/07/obama-painting4.jpg");
        myImage.setAttribute("width", myWidth);
    }
    
}

// Personalized welcome message code

let myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");

function setUserName() {
    let myName = prompt("Please enter your name.");
    if(!myName)
        setUserName();
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Are you a patriot, " + myName + "?";
    }
}

if(!localStorage.getItem("name")) {
    setUserName();
}
else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Are you a patriot, " + storedName + "?";
}

myButton.onclick = function() {
    setUserName();
}