function renderReadingTime(element) {
  // Stop if the element doesn't exist on this website
  if (!element) {
    console.log("m-x-content not found on this page");
    return; 
  }
  
  element.style.filter = "blur(5px)";
}

const targetElement = document.getElementById("m-x-content");


renderReadingTime(targetElement);

// V3qe9d