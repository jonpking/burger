$(function () {
  $(".eat-burger").on("click", function (event) {
    const id = $(this).data("id");
    const burgerEaten = $(this).data("devoured");
    const burgerEatenState = {
      devoured: burgerEaten
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: burgerEatenState
    }).then(
      function() {
        window.location.reload();
      }
    );
  });

  $(".add-burger").on("submit", function (event) {
    event.preventDefault();

    const newBurger = {
      burger_name: $("#newBurgerTextBox").val().trim(),
      devoured: false
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("something");
        location.reload();
      }
    );
  });

});
