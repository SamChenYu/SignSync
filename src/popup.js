const openPopup = () => {
    const popupWidth = 400;
    const popupHeight = 400;

    // Calculate the position to place the popup window
    const leftPosition = screen.availWidth - popupWidth;
    const topPosition = screen.availHeight - popupHeight;

    // Open the popup window with calculated position
    window.open("index4.html", "popup", "width=" + popupWidth + ", height=" + popupHeight + ", left=" + leftPosition + ", top=" + topPosition);
}


//document.getElementById("popupButton").addEventListener("click", openPopup); 