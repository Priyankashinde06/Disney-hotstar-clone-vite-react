import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"; // Add signInWithPopup
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDoW7WUL-P15yxxAl-RgumgSTpefsBWS44",
  authDomain: "disney-hotstar-clone-6b893.firebaseapp.com",
  projectId: "disney-hotstar-clone-6b893",
  storageBucket: "disney-hotstar-clone-6b893.firebasestorage.app",
  messagingSenderId: "351634945198",
  appId: "1:351634945198:web:d059114cdd7cedbe56293f"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

// Export signInWithPopup for use in components
export { auth, provider, storage, signInWithPopup };
export default db;