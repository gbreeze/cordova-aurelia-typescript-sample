/// <reference path="../typings/winjs/winjs.d.ts" />

export class WinJSTest {

    heading = 'WinJS Hello!';

    constructor() {
        console.log("WinJSTest.constructor()");
    }

    processUI() {
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

    activate(params, routeConfig, navigationInstruction) {
        console.log("WinJSTest.activate()");
    }

    attached() {
        console.log("WinJSTest.attached()");
        this.processUI();
    }

    created(view) {
        console.log("WinJSTest.created(view)");
    }
}