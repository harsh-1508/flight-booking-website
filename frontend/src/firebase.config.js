import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA7jfVSIWYYxMbP0_EiZVAM6RYGY0YO21g",
  authDomain: "onlineflightbokking.firebaseapp.com",
  projectId: "onlineflightbokking",
  storageBucket: "onlineflightbokking.firebasestorage.app",
  messagingSenderId: "672564246765",
  appId: "1:672564246765:web:789a97f15161ea886d34e4"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

