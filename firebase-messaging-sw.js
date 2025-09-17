// Import Firebase scripts
importScripts("https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/11.0.1/firebase-messaging.js");

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDeibHwPuJzTH7X_MO4xwFYzgT_7CzTpOs",
  authDomain: "pwatest-dc72b.firebaseapp.com",
  projectId: "pwatest-dc72b",
  storageBucket: "pwatest-dc72b.firebasestorage.app",
  messagingSenderId: "711518836965",
  appId: "1:711518836965:web:d886d212e176fd79449c0c",
  measurementId: "G-FXMB6ZHYNG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Messaging instance
const messaging = firebase.messaging();

// Background notifications
messaging.onBackgroundMessage((payload) => {
  console.log("Received background message ", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icon-192.png"
  });
});
