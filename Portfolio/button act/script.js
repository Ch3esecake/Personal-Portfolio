document.addEventListener("DOMContentLoaded", function() {
    // Button to show/hide content
    const showMoreBtn = document.getElementById("showMoreBtn");
    const contentDiv = document.getElementById("contentDiv");
  
    showMoreBtn.addEventListener("click", function() {
      if (contentDiv.style.display === "none") {
        contentDiv.style.display = "block";
        showMoreBtn.textContent = "Hide";
      } else {
        contentDiv.style.display = "none";
        showMoreBtn.textContent = "Show More";
      }
    });
  
    // Button to change content
    const changeContentBtn = document.getElementById("changeContentBtn");
    const objectImage = document.getElementById("objectImage");
    const description = document.getElementById("description");
  
    changeContentBtn.addEventListener("click", function() {
      // Example content change
      objectImage.src = "new_image.jpg";
      description.textContent = "New Description";
    });
  
    // Button to go back
    const backBtn = document.getElementById("backBtn");
  
    backBtn.addEventListener("click", function() {
      contentDiv.style.display = "none";
      showMoreBtn.textContent = "Show More";
    });
  });
  