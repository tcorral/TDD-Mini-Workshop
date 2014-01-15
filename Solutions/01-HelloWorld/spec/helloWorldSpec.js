(function (Namespace){
    'use strict';
    TestCase('Hello World', {
        'test check that Namespace.helloWorld is an object': function () {
            assertObject(Namespace.helloWorld);
        },
        'test check that authorsName is an string in Namespace.helloWorld object': function() {
            assertString(Namespace.helloWorld.authorsName);
        },
        'test check that sayHelloWorld is a function in Namespace.helloWorld object': function () {
            assertFunction(Namespace.helloWorld.sayHelloWorld);
        }
    });
    TestCase('Say Hello World', {
       'test check that returns "Hello, XXX"': function () {
           var sExpected = 'Hello, XXX',
               sFakeName = 'XXX',
               sRetrieved,
               sBackupAuthorsName = Namespace.helloWorld.authorsName;
           Namespace.helloWorld.authorsName = sFakeName;

           sRetrieved = Namespace.helloWorld.sayHelloWorld();

           assertEquals( sExpected, sRetrieved );
           Namespace.helloWorld.authorsName = sBackupAuthorsName;
       }
    });
}((window.Namespace = window.Namespace || {})));