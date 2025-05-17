function toggleLocation() {
    const menu = document.getElementById("menuPanel");
    const location = document.getElementById("locationPanel");
  
    // Hide menu panel if it's open
    if (menu.style.display === "block") {
      menu.style.display = "none";
    }
  
    // Toggle location panel
    if (location.style.display === "block") {
      location.style.display = "none";
    } else {
      location.style.display = "block";
    }
  }

  
  document.querySelector('.join-button').addEventListener('click', function() {
    alert('You have joined!');
});


const showMoreBtn = document.getElementById("showMoreBtn");
const showLessBtn = document.getElementById("showLessBtn");
const moreContent = document.getElementById("moreContent");

showMoreBtn.addEventListener("click", () => {
  moreContent.style.display = "grid";
  showMoreBtn.style.display = "none";
});

showLessBtn.addEventListener("click", () => {
  moreContent.style.display = "none";
  showMoreBtn.style.display = "block";
});