window.firebase = function() {
    var config = {
        apiKey: "AIzaSyAnP6DxIGNS1m6VAUZRjTVS6VqlYHBw3ZQ",
    authDomain: "traintimes-d22d2.firebaseapp.com",
    databaseURL: "https://traintimes-d22d2.firebaseio.com",
    projectId: "traintimes-d22d2",
    storageBucket: "traintimes-d22d2.appspot.com",
    messagingSenderId: "922737916294"
    };
    firebase.initializeApp(config);
 
    return firebase;
 }()