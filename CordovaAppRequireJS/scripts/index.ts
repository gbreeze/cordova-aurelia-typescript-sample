﻿// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397705
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
module Application {
    export function initialize() {
        document.addEventListener('deviceready', onDeviceReady, false);
    }

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause, false);
        document.addEventListener('resume', onResume, false);

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.

        console.log("Cordova has been loaded");


        require(["aurelia/aurelia-bundle-latest"], function (au) {
            require(["aurelia-bundle-manifest"], function (abm) {
                require(["aurelia-bootstrapper"], function (b) {
                });
            });
        });
    }

    function receivedEvent(id) {
        //var parentElement = document.getElementById(id);
        //var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');

        //listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    }

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    }
}

window.onload = function () {
    Application.initialize();
}