$(function() {
  var calendarVisible = false;
  $("#calendar-link").click(function() {
  if (calendarVisible) {
  $("#calendar-popup").hide();
  calendarVisible = false;
  } else {
  $("#calendar-popup").datepicker({
  position: "bottom left"
  });
  $("#calendar-popup").show();
  calendarVisible = true;
  }
  return false;
  });
  
  // Hide the calendar if the user clicks outside of it
  $(document).mouseup(function(e) {
  var container = $("#calendar-popup");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
  container.hide();
  calendarVisible = false;
  }
  });
  });