import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyAeS-qGT_iAOxBZG1QZM3sNDaHQmMQQKuo',
  authDomain: 'legant-97566.firebaseapp.com',
  databaseURL: 'https://legant-97566-default-rtdb.firebaseio.com',
  projectId: 'legant-97566',
  storageBucket: 'legant-97566.appspot.com',
  messagingSenderId: '477409727207',
  appId: '1:477409727207:web:a27284e431a3d6c3d6c842',
  measurementId: 'G-HK30Z19XR0',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
