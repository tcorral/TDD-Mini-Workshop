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
        return aArgs;
    }

    function factory( sType ){
        var oDecorators = {
            'add': function ( nTotal, nValue){
                return nTotal + nValue;
            },
            'substract': function ( nTotal, nValue ) {
                return nTotal - nValue;
            },
            'multiply': function ( nTotal, nValue ) {
                return nTotal * nValue;
            }
        };
        return function ( nValue1, nValue2 ){
            var nIndex,
                aArgs = sanitizeAndValidate( arguments ),
                nLenArgs = aArgs.length,
                nTotal;

            nTotal = nValue1 || 0;

            for ( nIndex = 1; nIndex < nLenArgs; nIndex++ ) {
                nTotal = oDecorators[sType]( nTotal, aArgs[nIndex] );
            }
            return nTotal;
        };
    }

    Calculator = {
        add: factory( 'add' ),
        substract: factory( 'substract' ),
        multiply: factory( 'multiply' )
    };

    Namespace.Calculator = Calculator;
}((window.Namespace = window.Namespace || {})));