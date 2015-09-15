import {computedFrom} from 'aurelia-framework';
import {Router} from 'aurelia-router';


export class Welcome {
    router: Router;

    heading = 'Welcome to the Aurelia Navigation App!';
    firstName = 'John';
    lastName = 'Doe';

    //Getters can't be observed with Object.observe, so they must be dirty checked.
    //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
    //To optimize by declaring the properties that this getter is computed from, uncomment the line below.
    @computedFrom('firstName', 'lastName')
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    welcome() {
        alert(`Welcome, ${this.fullName}!`);
    }

    goToWinJs() {
        console.log('go to winjs');
        //WinJS.Navigation.navigate("views/winJSTest.html");


        "http://aurelia.io/docs.html#generating-route-urls"
       
        let url = this.router.generate('winJSTest', { id: 123 });
        this.router.navigateToRoute('winJSTest');



    }
}

export class UpperValueConverter {
    toView(value) {
        return value && value.toUpperCase();
    }
}

