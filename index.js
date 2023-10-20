document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");

    // Show the popup
    popup.style.display = "block";

    // Automatically hide the popup after 3 seconds (3000 milliseconds)
    setTimeout(function () {
        popup.style.display = "none";
    }, 3000);
});
