(function (Namespace){
    'use strict';
    Namespace.guessingGame = {
        nNumberToGuess: 0,
        oRoller: null,
        setDependencies: function ( oRoller ){
            this.oRoller = oRoller;
        },
        start: function (){
            this.nNumberToGuess = this.oRoller.rollDice();
        },
        isWinner: function ( nTry ) {
            return this.nNumberToGuess === nTry;
        },
        guess: function ( nTry ) {
            if( this.isWinner( nTry ) ){
                return 'You win!';
            }
            return 'Sorry. The answer was:' + this.nNumberToGuess;
        }
    };
}((window.Namespace = window.Namespace || {})));