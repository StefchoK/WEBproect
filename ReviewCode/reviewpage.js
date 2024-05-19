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

  function createReviewElement(review) {
      var reviewDiv = document.createElement("div");
      reviewDiv.className = "review";
      reviewDiv.innerHTML = "<h2>" + review.name + "</h2><p>" + review.text + "</p>";
      reviewsContainer.appendChild(reviewDiv);
  }

  writeReviewBtn.addEventListener("click", function() {
      window.location.href = "write-review.html";
  });

  displayStoredReviews();
}); 