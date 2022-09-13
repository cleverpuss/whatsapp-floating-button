let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");
let isOpen = false;

let person = document.getElementsByClassName("person");
// When the user clicks the button, open the modal
btn.onclick = function () {
  if (!isOpen) {
    modal.style.display = "contents";
  } else {
    modal.style.display = "none";
  }
  isOpen = !isOpen;
};

function clickPerson() {
  console.error("over here!");
  location.href = "https://api.whatsapp.com/send?phone=51955081075";
}
