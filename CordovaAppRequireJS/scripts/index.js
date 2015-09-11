/// <reference path="typings/requirejs/require.d.ts" />
// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397705
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
var Application;
(function (Application) {
    function initialize() {
        document.addEventListener('deviceready', onDeviceReady, false);
    }
    Application.initialize = initialize;
    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause, false);
        document.addEventListener('resume', onResume, false);
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        require(["script/aurelia/aurelia-bundle-latest"], function (au) {
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
})(Application || (Application = {}));
window.onload = function () {
    Application.initialize();
};
//************************************
// TODO: Where to put?
//************************************
function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging();
    console.log("aurelia.start()");
    aurelia.start().then(function (a) { return a.setRoot('views/welcome'); });
}
exports.configure = configure;
//TODO:END ************************************ 
//# sourceMappingURL=index.js.map