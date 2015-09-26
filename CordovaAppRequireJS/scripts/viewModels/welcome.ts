import {computedFrom} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';

@inject(Router)
export class Welcome {
    router: Router;

    heading = 'Welcome to the Aurelia Navigation App!';
    firstName = 'John';
    lastName = 'Doe';

    constructor(router) {
        this.router = router;
    }

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

