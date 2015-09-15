/// <reference path="../typings/winjs/winjs.d.ts" />


export class WinJSTest {

    heading = 'WinJS Hello!';

    constructor() {
        console.log("WinJSTest.constructor()");
    }

    activate(params, routeConfig, navigationInstruction) {
        console.log("WinJSTest.activate()");
    }

    winjs() {
        //   alert("winjs");

        // WinJS.Navigation.navigate("winJSTest.html");

    }

    appBarLoad() {
        console.log("WinJSTest.appBarLoad()");


    }

    attached() {
        console.log("WinJSTest.attached()");

        WinJS.Namespace.define("Sample", {
            outputCommand: WinJS.UI.eventHandler(function (ev) {
                var status = document.querySelector(".status");
                var command = ev.currentTarget;
                if (command.winControl) {
                    var label = command.winControl.label || command.winControl.icon || "button";
                    var section = command.winControl.section || "";
                    var msg = section + " command " + label + " was pressed";
                    status.textContent = msg;
                }
            })
        });

        WinJS.UI.processAll();
    }
}