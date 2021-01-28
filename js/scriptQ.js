$(document).ready(function () {
  $(window).scroll(function () {
    var wiOf = $(this).scrollTop();
    if (wiOf > 100) {
      $("#content").addClass("fixedDiv");
    } else {
      $("#content").removeClass("fixedDiv");
    }
  });

  
});

/******************* Dont write outside ********************* */

