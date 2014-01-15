(function (Namespace){
    'use strict';

    Namespace.diceRoll = {
        rollDice: function (){
            return Math.floor( Math.random() * 6 ) + 1;
        },
        getValueOfRollDice: function () {
            return 'You rolled a ' + this.rollDice();
        }
    };
}((window.Namespace = window.Namespace || {})));