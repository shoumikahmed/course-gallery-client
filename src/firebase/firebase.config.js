import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVxymDF-thrCrPLXX_gOZynrV3Tnq13oU",
  authDomain: "course-gallery-client.firebaseapp.com",
  projectId: "course-gallery-client",
  storageBucket: "course-gallery-client.appspot.com",
  messagingSenderId: "1021366092742",
  appId: "1:1021366092742:web:a495fd1037906862e928c7"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;