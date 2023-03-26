$(function() {
  var isOpen = false;
  var popup = $("#calendar-popup").datepicker({
    position: "bottom right",
    onClose: function() {
      isOpen = false;
    }
  }).hide();

  $("#calendar-link").click(function() {
    if (isOpen) {
      popup.datepicker("hide");
      isOpen = false;
    } else {
      popup.datepicker("show");
      isOpen = true;
    }
    return false;
  });
});