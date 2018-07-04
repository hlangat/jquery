$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
  });

  $("p").click(function() {
    alert("This is a paragraph.");
  });

  $("img").click(function() {
    alert("This is an image.");
  });

  $("h2").click(function() {
    alert("This is heading 2");
  });
  $("p").click(function() {
    $("img").show();
  });
  $("p").click(function() {
    $(".walrus-showing").show();
    $(".walrus-hidden").hide();
  });
  $("p").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });

});
