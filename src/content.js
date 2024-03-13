chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("Message received:", request);
    if (request.command === "overlay") {
      // Add the image to the webpage
      const img = document.createElement('img');
      img.src = chrome.runtime.getURL('overlay_image.jpg');
      img.style.position = 'fixed';
      img.style.top = '30px'; // Added "px" for pixels
      img.style.left = '30px'; // Added "px" for pixels
      img.classList.add('overlay-image');
      document.body.appendChild(img);
    }
  });
  