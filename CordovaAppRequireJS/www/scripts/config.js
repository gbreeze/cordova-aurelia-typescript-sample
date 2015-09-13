Application.initialize();

var origin = window.location.origin;
var pathname = window.location.pathname;
var baseUrl = origin + pathname.toLowerCase().replace("index.html", "");

console.log("Base Url: " + baseUrl);

require.config({
    baseUrl: baseUrl,
    paths: {
        aurelia: baseUrl + "/scripts/aurelia",
        webcomponentsjs: baseUrl + "/scripts/webcomponentsjs",
        views: baseUrl + "/views",
        underscore: baseUrl + "/scripts/underscore/underscore.min"
        //appBundle:baseUrl + "/scripts/appBundle"
    },
    shim: {
        underscore: {
            exports: "_"
        }
    }
});