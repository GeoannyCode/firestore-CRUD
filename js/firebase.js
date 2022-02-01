 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-analytics.js";
 import { 
     doc,
     getFirestore, 
     collection, 
     addDoc,
     getDocs,
     deleteDoc,
     onSnapshot,
     
    } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js"
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyA06MPL0MotQo_4aZOh5bkuQF_Qil4S2eg",
   authDomain: "fir-crud-4ead1.firebaseapp.com",
   projectId: "fir-crud-4ead1",
   storageBucket: "fir-crud-4ead1.appspot.com",
   messagingSenderId: "538784458758",
   appId: "1:538784458758:web:c7906940dbb4f9302c3b87",
   measurementId: "G-XX6NPBMRJV"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 const db = getFirestore()

 export const saveTask = (title, description) => {
    addDoc(collection(db, "tasks"), {title: title, description: description})
 }

 export const getTasks = () => getDocs(collection(db, 'tasks'))

 export const onGetTasks = (callback) => onSnapshot(collection(db, 'tasks'), callback)

 export const deleteTask = async (id) => {
    try{
      deleteDoc(doc(db, 'tasks', id))
    }catch(error){
       console.log(error)
    }
 }
