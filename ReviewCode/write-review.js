document.addEventListener("DOMContentLoaded", function() {
    var reviewForm = document.getElementById("reviewForm");

    reviewForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var name = document.getElementById("name").value;
        var reviewText = document.getElementById("review").value;

        var storedReviews = localStorage.getItem("reviews");
        if (storedReviews) {
            storedReviews = JSON.parse(storedReviews);
        } else {
            storedReviews = [];
        }

        var newReview = {
            name: name,
            text: reviewText
        };

        storedReviews.push(newReview);
        localStorage.setItem("reviews", JSON.stringify(storedReviews));

        window.location.href = "reviewpage.html";
    });
});