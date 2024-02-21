import { database } from "./Firebase"

importScripts ('https://ww.gstatic.com/firebasejs/7.13.2/firebase-app.js')
importScripts ('https://ww.gstatic.com/firebasejs/7.13.2/firebase-messaging.js')

database.initializeApp({
    messaginiSenderId: "427708153435"
})

const initMessaging=database.messaging()