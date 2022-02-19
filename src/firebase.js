import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
require('firebase/compat/auth')
const { initializeApp } = require("firebase/compat/app");
const { initializeAppCheck, ReCaptchaV3Provider } = require("firebase/app-check")


// window.self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
})

const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('6LezKFceAAAAAFIK376mvc1bYHxvn8coUG78R9lM'),
    isTokenAutoRefreshEnabled: true
})


export const auth = app.auth()
export default app