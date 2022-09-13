let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");
let isOpen = false;
// When the user clicks the button, open the modal
btn.onclick = function () {
  if (!isOpen) {
    modal.style.display = "contents";
  } else {
    modal.style.display = "none";
  }
  isOpen = !isOpen;
};
