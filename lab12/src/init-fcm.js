import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyDbb5OjpQBBJuFuai0I0Zz4X2IlSPou33Y",
  authDomain: "react-sec02-038.firebaseapp.com",
  projectId: "react-sec02-038",
  storageBucket: "react-sec02-038.appspot.com",
  messagingSenderId: "322167808093",
  appId: "1:322167808093:web:4ec3e6546ca1282902edb4"
});

let messaging = firebase.messaging();

messaging.onMessage(function (payload) {
  try {  //try???
    console.log('Message received. ', payload);

    const noteTitle = payload.notification.title;
    const noteOptions = {
      body: payload.notification.body,
      icon: "typewriter.jpg", //this is my image in my public folder
    };

    console.log("title ", noteTitle, " ", payload.notification.body);
    //var notification = //examples include this, seems not needed

    new Notification(noteTitle, noteOptions).onclick = function (event) {
      // console.log(event);
      // console.log(payload.notification.click_action);
      if(payload && payload.notification &&  payload.notification.click_action &&  payload.notification.click_action.length > 0)
      {
        window.open(payload.notification.click_action, '_blank');
      }
      this.close();
    };
  }
  catch (err) {
    console.log('Caught error: ', err);
  }
});

messaging.usePublicVapidKey(
  "BJ1W9cmwFTfSLBll-F7ld5wfLeOXVI-o5SDjnPz6BSTKcRHcPGdx8Qi-Ow6zHh3raRlfB_3bwvB99skPQn0jwY4"
);

export { messaging };
