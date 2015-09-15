/// <reference path="../typings/winjs/winjs.d.ts" />
define(["require", "exports"], function (require, exports) {
    var WinJSTest = (function () {
        function WinJSTest() {
            this.heading = 'WinJS Hello!';
        }
        WinJSTest.prototype.winjs = function () {
            //   alert("winjs");
            WinJS.Navigation.navigate("winJSTest.html");
        };
        return WinJSTest;
    })();
    exports.WinJSTest = WinJSTest;
});
//# sourceMappingURL=winJSTest.js.map