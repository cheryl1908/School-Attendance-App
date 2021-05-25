import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDq3LOAsynZWWnhnD3CXOpkMbKXBLqsCyY',
  authDomain: 'school-attendance-app-8a503.firebaseapp.com',
  databaseURL:
    'https://school-attendance-app-8a503-default-rtdb.firebaseio.com',
  projectId: 'school-attendance-app-8a503',
  storageBucket: 'school-attendance-app-8a503.appspot.com',
  messagingSenderId: '776255547185',
  appId: '1:776255547185:web:22a2c4ed3131ce0616f210',
};
// Initialize Firebase
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export default firebase.database();
