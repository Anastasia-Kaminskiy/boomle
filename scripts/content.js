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
      max-height: 30vh;
      overflow-y: auto;
      overflow-x: hidden;
      margin-top: -8px;
      padding-top: 8px;
      padding-left: 20px;
      margin-left: -20px;
      -ms-overflow-style: none;  
    scrollbar-width: none;  
  };
  .container::-webkit-scrollbar { 
    display: none;
};
`;

const style = document.createElement('style');

style.textContent = cssRules;
style.id = "custom";

document.head.append(style);


// const possibleAIOverviewElementIDs = ["dEwkXc", "eKIzJc"]

const aiOverviewBody = document.getElementById("m-x-content");
const biggestParentOfAiOverview = aiOverviewBody.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;


blurAIOverview(biggestParentOfAiOverview);