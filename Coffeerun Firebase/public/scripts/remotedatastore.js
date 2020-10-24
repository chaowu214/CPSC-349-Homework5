var config = {
    apiKey : "AIzaSyCH3RW-KHpchHF_HplgYxUp1fM-Sg04A1Q",
    authDomain : "coffeerun-c9674.firebaseapp.com",
    databaseURL : "https://coffeerun-c9674.firebaseio.com",

    projectId : "coffeerun-c9674",
    storageBucket : "coffeerun-c9674.appspot.com",
    messagingSenderId : "667496273777",
};


(function (window) {
    'use strict';
    var App = window.App || {};
  
    function RemoteDataStore() {
      // console.log('running the DataStore function');
      firebase.initializeApp(config);
      this.firestore = firebase.firestore();
      this.id_set = new Set();
    }
  
    RemoteDataStore.prototype.add = function (key, val) {
    //   this.data[key] = val;
        const docRef = this.firestore.doc("coffeeRun/" + key);
        docRef.set({
            "coffee" : val["coffee"],
            "emailAddress" :val["emailAddress"],
            "size" : val["size"],
            "flavor" : val["flavor"],
            "strength" : val["strength"],
        });
        this.id_set.add(key);
    };
  
    RemoteDataStore.prototype.get = function (key) {
        const docRef = this.firestore.doc("coffeeRun/" + key);
        docRef.get().then(function(doc) {
            console.log(doc);
        });
    };
  
    RemoteDataStore.prototype.getAll = function () {
        return id_set;
    };
  
    RemoteDataStore.prototype.remove = function (key) {
        this.id_set.delete(key);
        const docRef = this.firestore.doc("coffeeRun/" + key);

        docRef.delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    };
  
    App.RemoteDataStore = RemoteDataStore;
    window.App = App;
  })(window);