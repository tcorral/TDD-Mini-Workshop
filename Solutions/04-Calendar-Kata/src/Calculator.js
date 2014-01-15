(function (Namespace) {
    'use strict';
    var Calculator;

    function checkNumberType( aArguments ) {
        var nIndex,
            nLenArguments = aArguments.length,
            nNumber;

        for ( nIndex = 0; nIndex < nLenArguments; nIndex++ ){
            nNumber = aArguments[nIndex];
            if ( nNumber == null ) {
                nNumber = aArguments[nIndex] = 0;
            }
            if ( typeof nNumber !== 'number' || nNumber < 0) {
                return false;
            }
        }
        return true;
    }

    function sanitizeAndValidate( oArguments ) {
        var aArgs = Array.prototype.slice.call( oArguments );
        if ( aArgs.length < 2 ){
            throw new Error( 'You should supply two numbers at least.' );
        }
        if ( !checkNumberType( aArgs ) ) {
            throw new Error( 'You should supply only numbers.' );
        }
    }
    
    function getMethodByType( sType ) {
        var oTypes = {
            "add": function ( nNumber, nSubtotal ) {
                return nSubtotal + nNumber;
            },
            "substract": function ( nNumber, nSubtotal ) {
                return nSubtotal - nNumber;
            },
            "multiply": function ( nNumber, nSubtotal ) {
                return nSubtotal * nNumber;
            }
        };
        return function ( nValue1, nValue2 ) {
            var nIndex,
                aArgs = sanitizeAndValidate( arguments ),
                nLenArgs = aArgs.length,
                nTotal;

            nTotal = nValue1 || 0;

            for ( nIndex = 1; nIndex < nLenArgs; nIndex++ ) {
                nTotal = oTypes[sType]( aArgs[nIndex], nTotal );
            }
            return nTotal;
        };
    }

    Calculator = {
        add: getMethodByType( 'add' ),
        substract: getMethodByType( 'substract' ),
        multiply: getMethodByType( 'multiply' )
    };

    Namespace.Calculator = Calculator;
}((window.Namespace = window.Namespace || {})));
