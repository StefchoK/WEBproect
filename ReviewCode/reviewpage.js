document.addEventListener("DOMContentLoaded", function() {
    var writeReviewBtn = document.getElementById("RRB");
    var reviewsContainer = document.getElementById("reviews");
  
    function displayStoredReviews() {
      var storedReviews = localStorage.getItem("reviews");
      if (storedReviews) {
        storedReviews = JSON.parse(storedReviews);
        storedReviews.forEach(function(review) {
          createReviewElement(review);
        });
      }
    }
  
    function saveReviewsToStorage(reviews) {
      localStorage.setItem("reviews", 
      JSON.stringify(reviews));
    }
  
    function createReviewElement(reviewText) {
      var reviewDiv = document.createElement("div");
      reviewDiv.className = "review";
      reviewDiv.innerHTML = "<h2>Ново Ревю</h2><p>" + reviewText + "</p>";
      reviewsContainer.appendChild(reviewDiv);
    }
  
    writeReviewBtn.addEventListener("click", function() {
      var reviewText = prompt("Напишете вашето ревю:");
      if (reviewText) {
        createReviewElement(reviewText);
        var storedReviews = localStorage.getItem("reviews");
        if (storedReviews) {
          storedReviews = JSON.parse(storedReviews);
        } else {
          storedReviews = [];
        }
        storedReviews.push(reviewText);
        saveReviewsToStorage(storedReviews);
      }
    });
  
    displayStoredReviews();
  });
  
  
  