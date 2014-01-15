(function (Namespace){
    'use strict';

    Namespace.helloWorld = {
        authorsName: 'Softonic Frontend Team',
        sayHelloWorld: function () {
            return 'Hello, ' + this.authorsName;
        }
    };
}((window.Namespace = window.Namespace || {})));