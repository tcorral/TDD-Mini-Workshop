(function (Namespace){
    'use strict';
    TestCase( 'Die Roll', {
        'test check that Namespace.diceRoll is an object': function () {
            assertObject( Namespace.diceRoll );
        },
        'test check that rollDice is a function in Namespace.diceRoll object': function () {
            assertFunction( Namespace.diceRoll.rollDice );
        },
        'test check that getValueOfRollDice is a function in Namespace.diceRoll object': function () {
            assertFunction( Namespace.diceRoll.getValueOfRollDice );
        }
    });
    TestCase( 'Roll dice', {
        'setUp': function () {
            sinon.spy( Math, 'floor' );
            sinon.stub( Math, 'random' );
        },
        'tearDown': function () {
            Math.floor.restore();
            Math.random.restore();
        },
        'test check that Math.random has been called': function () {
            Namespace.diceRoll.rollDice();

            assertEquals( 1, Math.random.callCount );
        },
        'test check that Math.floor has been called': function () {
            Namespace.diceRoll.rollDice();

            assertEquals( 1, Math.floor.callCount );
        },
        'test check that roll dice returns a number between 1 and 6: 1 : start': function (){
            var nValue;
            Math.random.returns( 0 );

            nValue = Namespace.diceRoll.rollDice();

            assertEquals( nValue, 1 );
        },
        'test check that roll dice returns a number between 1 and 6: 1 : end': function (){
            var nValue;
            Math.random.returns( 0.16 );

            nValue = Namespace.diceRoll.rollDice();

            assertEquals( nValue, 1 );
        },
        'test check that roll dice returns a number between 1 and 6: 2 : start': function (){
            var nValue;
            Math.random.returns( 0.17 );

            nValue = Namespace.diceRoll.rollDice();

            assertEquals( nValue, 2 );
        },
        'test check that roll dice returns a number between 1 and 6: 2 : end': function (){
            var nValue;
            Math.random.returns( 0.33 );

            nValue = Namespace.diceRoll.rollDice();

            assertEquals( nValue, 2 );
        },
        'test check that roll dice returns a number between 1 and 6: 3 : start': function (){
            var nValue;
            Math.random.returns( 0.34 );

            nValue = Namespace.diceRoll.rollDice();

            assertEquals( nValue, 3 );
        },
        'test check that roll dice returns a number between 1 and 6: 3 : end': function (){
            var nValue;
            Math.random.returns( 0.49 );

            nValue = Namespace.diceRoll.rollDice();

            assertEquals( nValue, 3 );
        },
        'test check that roll dice returns a number between 1 and 6: 4 : start': function (){
            var nValue;
            Math.random.returns( 0.50 );

            nValue = Namespace.diceRoll.rollDice();

            assertEquals( nValue, 4 );
        },
        'test check that roll dice returns a number between 1 and 6: 4 : end': function (){
            var nValue;
            Math.random.returns( 0.66 );

            nValue = Namespace.diceRoll.rollDice();

            assertEquals( nValue, 4 );
        },
        'test check that roll dice returns a number between 1 and 6: 5 : start': function (){
            var nValue;
            Math.random.returns( 0.67 );

            nValue = Namespace.diceRoll.rollDice();

            assertEquals( nValue, 5 );
        },
        'test check that roll dice returns a number between 1 and 6: 5 : end': function (){
            var nValue;
            Math.random.returns( 0.83 );

            nValue = Namespace.diceRoll.rollDice();

            assertEquals( nValue, 5 );
        },
        'test check that roll dice returns a number between 1 and 6: 6 : start': function (){
            var nValue;
            Math.random.returns( 0.84 );

            nValue = Namespace.diceRoll.rollDice();

            assertEquals( nValue, 6 );
        },
        'test check that roll dice returns a number between 1 and 6: 6 : end': function (){
            var nValue;
            Math.random.returns( 0.99 );

            nValue = Namespace.diceRoll.rollDice();

            assertEquals( nValue, 6 );
        }
    });
    TestCase( 'Get value of roll dice', {
        'setUp': function () {
            sinon.stub( Namespace.diceRoll, 'rollDice' );
        },
        'tearDown': function () {
            Namespace.diceRoll.rollDice.restore();
        },
        'test check that returns "You rolled a 0"': function () {
            var sExpected = 'You rolled a 0',
                sRetrieved;
            Namespace.diceRoll.rollDice.returns( 0 );

            sRetrieved = Namespace.diceRoll.getValueOfRollDice();

            assertEquals( sExpected, sRetrieved );
        },
        'test check that returns "You rolled a 1"': function () {
            var sExpected = 'You rolled a 1',
                sRetrieved;
            Namespace.diceRoll.rollDice.returns( 1 );

            sRetrieved = Namespace.diceRoll.getValueOfRollDice();

            assertEquals( sExpected, sRetrieved );
        },
        'test check that returns "You rolled a 2"': function () {
            var sExpected = 'You rolled a 2',
                sRetrieved;
            Namespace.diceRoll.rollDice.returns( 2 );

            sRetrieved = Namespace.diceRoll.getValueOfRollDice();

            assertEquals( sExpected, sRetrieved );
        },
        'test check that returns "You rolled a 3"': function () {
            var sExpected = 'You rolled a 3',
                sRetrieved;
            Namespace.diceRoll.rollDice.returns( 3 );

            sRetrieved = Namespace.diceRoll.getValueOfRollDice();

            assertEquals( sExpected, sRetrieved );
        },
        'test check that returns "You rolled a 4"': function () {
            var sExpected = 'You rolled a 4',
                sRetrieved;
            Namespace.diceRoll.rollDice.returns( 4 );

            sRetrieved = Namespace.diceRoll.getValueOfRollDice();

            assertEquals( sExpected, sRetrieved );
        },
        'test check that returns "You rolled a 5"': function () {
            var sExpected = 'You rolled a 5',
                sRetrieved;
            Namespace.diceRoll.rollDice.returns( 5 );

            sRetrieved = Namespace.diceRoll.getValueOfRollDice();

            assertEquals( sExpected, sRetrieved );
        },
        'test check that returns "You rolled a 6"': function () {
            var sExpected = 'You rolled a 6',
                sRetrieved;
            Namespace.diceRoll.rollDice.returns( 6 );

            sRetrieved = Namespace.diceRoll.getValueOfRollDice();

            assertEquals( sExpected, sRetrieved );
        }
    });
}((window.Namespace = window.Namespace || {})));