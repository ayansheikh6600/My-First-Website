// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxrY5oetu3yUc3QmymiNi0OeE3ZYmSsJ8",
    authDomain: "my-first-website-dcd60.firebaseapp.com",
    projectId: "my-first-website-dcd60",
    storageBucket: "my-first-website-dcd60.appspot.com",
    messagingSenderId: "686035667721",
    appId: "1:686035667721:web:fe36a52577fe8528b3e1d8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize Varriable
  const auth = firebase.auth()
  const database = firebase.database()