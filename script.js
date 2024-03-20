function sendNotification() {
    const notificationText = document.getElementById('notificationText').value;
    
    if (!notificationText) {
      alert('Please enter some text for the notification.');
      return;
    }
  
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
  
    else if (Notification.permission === "granted") {
      new Notification(notificationText);
    }
  
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          new Notification(notificationText);
        }
      });
    }
  }
  