import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

let db = false;

export const getDb = () => {
    if (!db) {
        const firebaseConfig = {
            apiKey: "AIzaSyDMR4OEcu0W5hBzLyUWGebf2udE5_Wtoy0",
            authDomain: "my-project-f310e.firebaseapp.com",
            projectId: "my-project-f310e",
            storageBucket: "my-project-f310e.appspot.com",
            messagingSenderId: "14194643398",
            appId: "1:14194643398:web:4aa65fc6a56f61313062c7"
        }

        const app = initializeApp(firebaseConfig)

        db = getFirestore(app)
    }

    return db
}