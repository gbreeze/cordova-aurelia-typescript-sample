import {Router} from 'aurelia-router';

export class App {
    router: Router;

    configureRouter(config, router: Router) {
        config.title = 'Aurelia';
        config.map([
            { route: ['', 'welcome'], name: 'welcome', moduleId: './welcome', nav: true, title: 'Welcome' },
            { route: 'winJSTest', name: 'winJSTest', moduleId: './winJSTest', nav: true, title: 'winJS Test' }
        ]);

        this.router = router;
    }
}