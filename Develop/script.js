// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
 // Get the current date using Day.js and display it at the top of the calendar
 var currentDate = dayjs().format('dddd, MMMM D, YYYY');
 $('#currentDay').text(currentDate);

 // Add a listener for click events on the save button
 $('.saveBtn').on('click', function () {
   var hour = $(this).data('hour');
   var description = $(this).siblings('.description').val();
   localStorage.setItem(hour, description);
   showMessage('Appointment added to local storage');
 });

});
