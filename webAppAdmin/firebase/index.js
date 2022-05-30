import {initializeApp} from 'firebase/app';
import {getStorage, setStorage} from 'firebase/storage';
// link front whit this params

const firebaseConfig = {
  apiKey: "AIzaSyAca62WbygvNSc5vYfs0pIuEBKK5tGorRY",
  authDomain: "food-344a2.firebaseapp.com",
  projectId: "food-344a2",
  storageBucket: "food-344a2.appspot.com",
  messagingSenderId: "435773253899",
  appId: "1:435773253899:web:ff0d056560bb124d55da0e",
  measurementId: "G-SYKS2ZS6CK"
};


export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);