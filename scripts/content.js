function blurAIOverview(element) {
  if (!element) {
    console.log("ai overview element was not found in this page");
    return; 
  }
  
  element.style.filter = "blur(2px) opacity(0.7)";
  element.inert = true;

  var wrapper = document.createElement('div');
  wrapper.classList.add("wraapper");
  wrapper.appendChild(element.cloneNode(true)); 
  element.parentNode.replaceChild(wrapper, element);
};

const cssRules = `
.wraapper {
    background: red;
};
`;

const style = document.createElement('style');

style.textContent = cssRules;
style.id = "custom"

document.head.append(style);

const targetElement = document.getElementById("dEwkXc");


blurAIOverview(targetElement);

// V3qe9d