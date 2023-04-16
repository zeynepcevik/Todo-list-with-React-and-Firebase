import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyAWP7Mh-Y98rtlpQBJtULYCh8uKHPz8FTs",
    authDomain: "todo-app-6899c.firebaseapp.com",
    projectId: "todo-app-6899c",
    storageBucket: "todo-app-6899c.appspot.com",
    messagingSenderId: "491799415286",
    appId: "1:491799415286:web:fc8458425e7d1536d65fd7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };