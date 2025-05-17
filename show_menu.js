document.getElementById("toggleMenu").addEventListener("click", function () {
  const menu = document.getElementById("menuCards");

  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    this.textContent = "Hide the menu";
  } else {
    menu.classList.add("hidden");
    this.textContent = "Show the menu";
  }
});

