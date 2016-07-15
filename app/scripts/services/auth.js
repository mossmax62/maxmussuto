'use strict';

/**
 * @ngdoc service
 * @name maxmussutoApp.auth
 * @description
 * # auth
 * Service in the maxmussutoApp.
 */
angular.module('maxmussutoApp')
  .service('AuthService', function ($firebaseObject) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var currentUser;

  return {

    login: function() { 
      console.log(firebase.auth().currentUser);
    	if (!firebase.auth().currentUser) {
        // [START createprovider]
        console.log("login service");
        var provider = new firebase.auth.GoogleAuthProvider();
        // [END createprovider]
        // [START addscopes]
        provider.addScope('https://www.googleapis.com/auth/plus.login');
        // [END addscopes]
        // [START signin]
        firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // [START_EXCLUDE]
          document.getElementById('quickstart-oauthtoken').textContent = token;
          // [END_EXCLUDE]
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // [START_EXCLUDE]
          if (errorCode === 'auth/account-exists-with-different-credential') {
            alert('You have already signed up with a different auth provider for that email.');
            // If you are using multiple auth providers on your app you should handle linking
            // the user's accounts here.
          } else {
            console.error(error);
          }
          // [END_EXCLUDE]
        });
     }
 },
    logout: function() { firebase.auth().signOut();console.log("logout"); },
    isLoggedIn: function() { if (firebase.auth().currentUser) {return true}else{return false}; },
    currentUser: function() { return currentUser; }
    
  };
  });
