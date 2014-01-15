(function () {
    'use strict';
    var oRoller;

    TestCase( 'Guessing Game', {
        'test check that Namespace.guessingGame is an object': function () {
           assertObject( Namespace.guessingGame );
        },
        'test check that nNumberToGuess is 0 by default in Namespace.guessingGame object': function () {
            assertEquals( 0, Namespace.guessingGame.nNumberToGuess );
        },
        'test check that oRoller is null by default in Namespace.guessingGame object': function () {
            assertNull( Namespace.guessingGame.oRoller );
        },
        'test check that setDependencies is a function in Namespace.guessingGame object': function () {
            assertFunction( Namespace.guessingGame.setDependencies );
        },
        'test check that start is a function in Namespace.guessingGame object': function () {
            assertFunction( Namespace.guessingGame.start );
        },
        'test check that isWinner is a function in Namespace.guessingGame object': function () {
            assertFunction( Namespace.guessingGame.isWinner );
        },
        'test check that guess is a function in Namespace.guessingGame object': function () {
            assertFunction( Namespace.guessingGame.guess );
        }
    });
    TestCase( 'Set dependencies', {
       'test check that we set oRoller object': function () {
           var oRoller = {};

           Namespace.guessingGame.setDependencies( oRoller );

           assertSame( Namespace.guessingGame.oRoller, oRoller );
       }
    });
    TestCase( 'Start', {
        'setUp': function () {
            oRoller = {
                rollDice: sinon.stub()
            };
            Namespace.guessingGame.setDependencies( oRoller );
        },
        'tearDown': function () {
            Namespace.guessingGame.setDependencies( null );
            oRoller = null;
        },
        'test check that start methods returns a number: 0': function () {
            oRoller.rollDice.returns( 0 );

            Namespace.guessingGame.start();

            assertEquals( 0, Namespace.guessingGame.nNumberToGuess );
        },
        'test check that start methods returns a number: 1': function () {
            oRoller.rollDice.returns( 1 );

            Namespace.guessingGame.start();

            assertEquals( 1, Namespace.guessingGame.nNumberToGuess );
        },
        'test check that start methods returns a number: 2': function () {
            oRoller.rollDice.returns( 2 );

            Namespace.guessingGame.start();

            assertEquals( 2, Namespace.guessingGame.nNumberToGuess );
        },
        'test check that start methods returns a number: 3': function () {
            oRoller.rollDice.returns( 3 );

            Namespace.guessingGame.start();

            assertEquals( 3, Namespace.guessingGame.nNumberToGuess );
        },
        'test check that start methods returns a number: 4': function () {
            oRoller.rollDice.returns( 4 );

            Namespace.guessingGame.start();

            assertEquals( 4, Namespace.guessingGame.nNumberToGuess );
        },
        'test check that start methods returns a number: 5': function () {
            oRoller.rollDice.returns( 5 );

            Namespace.guessingGame.start();

            assertEquals( 5, Namespace.guessingGame.nNumberToGuess );
        },
        'test check that start methods returns a number: 6': function () {
            oRoller.rollDice.returns( 6 );

            Namespace.guessingGame.start();

            assertEquals( 6, Namespace.guessingGame.nNumberToGuess );
        }
    });
    TestCase( 'Guess', {
        'setUp': function () {
            Namespace.guessingGame.nNumberToGuess = 5;
        },
        'tearDown': function () {
            Namespace.guessingGame.nNumberToGuess = 0;
        },
        'test check that guess returns "You win!" if I guess the correct number': function () {
            var sResult,
                sExpected = 'You win!';

            sResult = Namespace.guessingGame.guess( 5 );

            assertEquals( sExpected, sResult );
        },
        'test check that guess returns "Sorry. The answer was:5"': function () {
            var sResult,
                sExpected = "Sorry. The answer was:5";

            sResult = Namespace.guessingGame.guess( 4 );

            assertEquals( sExpected, sResult );
        }
    });
}());