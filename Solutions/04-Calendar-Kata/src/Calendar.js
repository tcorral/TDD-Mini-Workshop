(function (Namespace) {
    'use strict';
    var Calendar;

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

    Calendar = {
        add: function ( nValue1, nValue2 ) {
            var nIndex,
                aArgs = sanitizeAndValidate( arguments ),
                nLenArgs = aArgs.length,
                nTotal;

            nTotal = nValue1 || 0;

            for ( nIndex = 1; nIndex < nLenArgs; nIndex++ ) {
                nTotal += aArgs[nIndex];
            }
            return nTotal;
        },
        substract: function ( nValue1, nValue2 ) {
            var nIndex,
                aArgs = sanitizeAndValidate( arguments ),
                nLenArgs = aArgs.length,
                nTotal;

            nTotal = nValue1 || 0;

            for ( nIndex = 1; nIndex < nLenArgs; nIndex++ ) {
                nTotal -= aArgs[nIndex];
            }
            return nTotal;
        },
        multiply: function ( nValue1, nValue2 ) {
            var nIndex,
                aArgs = sanitizeAndValidate( arguments ),
                nLenArgs = aArgs.length,
                nTotal;

            nTotal = nValue1 || 0;

            for ( nIndex = 1; nIndex < nLenArgs; nIndex++ ) {
                nTotal *=  aArgs[nIndex];
            }
            return nTotal;
        }
    };

    Namespace.Calendar = Calendar;
}((window.Namespace = window.Namespace || {})));