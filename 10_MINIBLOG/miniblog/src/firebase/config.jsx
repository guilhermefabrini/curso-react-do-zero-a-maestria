/**
 * A importação do getFirestore, a criação da constante db e o export {db} foram adicionados
 * ao código pronto que copiamos do site do Firebase.
 */

import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBdVX0LzDl8P6oE6vU5EOhrICEjh5MR4Tk",
  authDomain: "miniblog-19aab.firebaseapp.com",
  projectId: "miniblog-19aab",
  storageBucket: "miniblog-19aab.firebasestorage.app",
  messagingSenderId: "10466386793",
  appId: "1:10466386793:web:f7e37be27c70220b8b53f8"
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

const auth = getAuth(app)

export { db, auth }