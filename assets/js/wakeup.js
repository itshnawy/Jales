if ('wakeLock' in navigator) {
    // Request a wake lock
    navigator.wakeLock.request('screen')
      .then(wakeLock => {
        console.log('Screen wake lock is active');
        // Release the wake lock when the page is unloaded
        window.addEventListener('unload', () => {
          wakeLock.release().then(() => {
            console.log('Screen wake lock is released');
          });
        });
      })
      .catch(error => {
        console.error('Failed to request screen wake lock:', error);
      });
  } else {
    console.warn('Screen wake lock API is not supported');
  }