  // Function to periodically trigger a small change
  function keepAwake() {
    // Triggering a console log here, you can replace it with any action
    console.log('Keeping mobile awake');
  }

  // Periodically trigger the keepAwake function
  setInterval(keepAwake, 60000); // Adjust the interval as needed (e.g., every minute)

  // Use Page Visibility API to check if the page is visible
  document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
      // If the page becomes visible, trigger keepAwake immediately
      keepAwake();
    }
  });