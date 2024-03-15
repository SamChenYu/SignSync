document.getElementById("overlayButton").addEventListener("click", addMedia); 

function addMedia() {
    // Create the main div element
    var mainDiv = document.createElement("div");
    mainDiv.classList.add("CWASAPanel", "av0");
    mainDiv.setAttribute("onload", "CWAS.init();"); // Add onload attribute
    // Create the script elements for sigml.js and sigml_setup.js
    var scriptSigml = document.createElement("script");
    scriptSigml.src = "jsfile.js";
  
    var scriptSigmlSetup = document.createElement("script");
    scriptSigmlSetup.src = "sigml_setup.js";
  
    // Append the script elements to the main div
    mainDiv.appendChild(scriptSigml);
    mainDiv.appendChild(scriptSigmlSetup);
  
    // Append the main div to the document body
    document.body.appendChild(mainDiv);
  }