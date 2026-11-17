$(".goIn").on("click", function () {
  const currentClicked = $(this).data("name");
  const divToShow = $(`.second-level-${currentClicked}`);
  console.log(currentClicked, divToShow);
  // Check if the value of 'clickedName' matches the value of the data attribute 'name' of the '.second-level' element
  // If the values match, add class 'fade-in-nav' and remove class 'fade-out-nav' from the '.second-level' element
  divToShow.addClass("in").removeClass("out");
});

$(".goOut").on("click", function () {
  $(`.second-level`).addClass("out").removeClass("in");
});
