//TODO: add firebase configuration and export it//DONE
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASEKEY,
  authDomain: "gitapp-react.firebaseapp.com",
  databaseURL: "https://gitapp-react.firebaseio.com",
  projectId: "gitapp-react",
  storageBucket: "gitapp-react.appspot.com",
  messagingSenderId: "1050594558813",
  appId: "1:1050594558813:web:aff3428a04909760059eb4",
  measurementId: "G-ZPKFKP3TES"
};
//image configuration
export const imageConfig = {
  quality: 0.2,
  maxWidth: 800,
  maxHeight: 600,
  autoRotate: true
};
