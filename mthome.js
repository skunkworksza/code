var acc = document.getElementsByClassName("dropdown");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var dC = this.nextElementSibling;
    if (dC.style.display === "block") {
      dC.style.display = "none";
    } else {
      dC.style.display = "block";
    }
  });
}