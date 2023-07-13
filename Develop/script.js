
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
 
  // Apply the past, present, or future class to each time block based on the current time
  var currentHour = dayjs().hour();
  $('.time-block').each(function () {
    var hour = parseInt($(this).attr('id').split('-')[1]);
    if (hour < currentHour) {
      $(this).addClass('past');
    } else if (hour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });

    // Get the saved events from local storage and set the values of the corresponding textarea elements
    $('.time-block').each(function () {
      var hour = $(this).attr('id');
      var description = localStorage.getItem(hour);
      if (description) {
        $(this).find('.description').val(description);
      }
    });
  
    // Function to display a "Appointment added to local storage" message below the top black border
    function showMessage(message) {
      var messageElement = $('<p>').text(message).addClass('text-center');
      $('.container-fluid').prepend(messageElement);
      setTimeout(function () {
        messageElement.fadeOut('slow', function () {
          $(this).remove();
        });
      }, 3000);
    }

});
