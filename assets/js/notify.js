function notify(hours,minutes) {

// Function to schedule daily reminder
function scheduleDailyReminder(hour, minute) {
    // Get current date and time
    var now = new Date();
  
    // Set the reminder time
    var reminderTime = new Date();
    reminderTime.setHours(hour);
    reminderTime.setMinutes(minute);
    reminderTime.setSeconds(0);
    reminderTime.setMilliseconds(0);
  
    // Check if the reminder time has already passed for today
    if (now.getTime() > reminderTime.getTime()) {
      // If it has, schedule the reminder for tomorrow
      reminderTime.setDate(reminderTime.getDate() + 1);
    }
  
    // Calculate the delay until the reminder time
    var delay = reminderTime.getTime() - now.getTime();
  
    // Schedule the notification
    setTimeout(function() {
      // Request permission to display notification
      Notification.requestPermission().then(function(permission) {
        if (permission === 'granted') {
          // Create the notification
          var notification = new Notification('تذكير', {
            dir : "rtl",
            body: 'لا تنسي الاستماع الي وردك القرأني'
          });
        }
      });
    }, delay);
  }
  
  // Call the function to schedule the daily reminder at 8 PM
  scheduleDailyReminder(hours, minutes); // 8 PM
  

}
notify()