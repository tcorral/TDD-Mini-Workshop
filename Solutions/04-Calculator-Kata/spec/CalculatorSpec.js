(function () {
    'use strict';

    TestCase( 'Calculator', {
        'test check that Namespace.Calculator is an object': function () {
            assertObject( Namespace.Calculator );
        },
        'test check that add is a method of Namespace.Calculator': function () {
            assertFunction( Namespace.Calculator.add );
        },
        'test check that substract is a method of Namespace.Calculator': function () {
            assertFunction( Namespace.Calculator.substract );
        },
        'test check that multiply is a method of Namespace.Calculator': function () {
            assertFunction( Namespace.Calculator.multiply );
        }
    });

    TestCase( 'Add', {
        'test check that Namespace.Calculator.add method throws an error if no arguments have been supplied': function () {
            assertException( function () {
                Namespace.Calculator.add();
            });
        },

        'test check that Namespace.Calculator.add method throws an error if only one argument has been supplied': function () {
            assertException( function () {
                Namespace.Calculator.add( 1 );
            });
        },

        'test check that Namespace.Calculator.add method does not throws any error if two arguments have been supplied': function () {
            assertNoException( function () {
                Namespace.Calculator.add( 1, 2 );
            });
        },

        'test check that Namespace.Calculator.add method throws an error if any of the supplied arguments is a negative value: 1st argument': function () {
            assertException( function () {
                Namespace.Calculator.add( -1, 2 );
            });
        },

        'test check that Namespace.Calculator.add method throws an error if any of the supplied arguments is a negative value: 2n argument': function () {
            assertException( function () {
                Namespace.Calculator.add( 1, -2 );
            });
        },

        'test check that adding 2 to null returns 2': function () {
            var nExpected = 2,
                nValue = Namespace.Calculator.add( null, 2 );

            assertEquals( nValue, nExpected );
        },

        'test check that adding 2 to undefined returns 2': function () {
            var nExpected = 2,
                nValue = Namespace.Calculator.add( undefined, 2 );

            assertEquals( nValue, nExpected );
        },

        'test check that adding 1 and 2 returns 3': function () {
            var nExpected = 3,
                nValue = Namespace.Calculator.add( 1, 2 );

            assertEquals( nValue, nExpected );
        },

        'test check that adding 1 and 2 and 3 returns 6': function () {
            var nExpected = 6,
                nValue = Namespace.Calculator.add( 1, 2, 3 );

            assertEquals( nValue, nExpected );
        }
    });

    TestCase( 'Substract', {
        'test check that Namespace.Calculator.substract method throws an error if no arguments have been supplied': function () {
            assertException( function () {
                Namespace.Calculator.substract();
            });
        },

        'test check that Namespace.Calculator.substract method throws an error if only one argument has been supplied': function () {
            assertException( function () {
                Namespace.Calculator.substract( 1 );
            });
        },

        'test check that Namespace.Calculator.substract method does not throws any error if two arguments have been supplied': function () {
            assertNoException( function () {
                Namespace.Calculator.substract( 1, 2 );
            });
        },

        'test check that Namespace.Calculator.substract method throws an error if any of the supplied arguments is a negative value: 1st argument': function () {
            assertException( function () {
                Namespace.Calculator.substract( -1, 2 );
            });
        },

        'test check that Namespace.Calculator.substract method throws an error if any of the supplied arguments is a negative value: 2n argument': function () {
            assertException( function () {
                Namespace.Calculator.substract( 1, -2 );
            });
        },

        'test check that substract 2 from null returns -2': function () {
            var nExpected = -2,
                nValue = Namespace.Calculator.substract( null, 2 );

            assertEquals( nValue, nExpected );
        },

        'test check that substracting 2 from undefined returns -2': function () {
            var nExpected = 0,
                nValue = Namespace.Calculator.multiply( undefined, 2 );

            assertEquals( nValue, nExpected );
        },

        'test check that substracting 2 from 1 returns -1': function () {
            var nExpected = -1,
                nValue = Namespace.Calculator.substract( 1, 2 );

            assertEquals( nValue, nExpected );
        },

        'test check that substracting 1 and 2 and 3 returns 6': function () {
            var nExpected = -4,
                nValue = Namespace.Calculator.substract( 1, 2, 3 );

            assertEquals( nValue, nExpected );
        }
    });

    TestCase( 'Multiply', {
        'test check that Namespace.Calculator.multiply method throws an error if no arguments have been supplied': function () {
            assertException( function () {
                Namespace.Calculator.multiply();
            });
        },

        'test check that Namespace.Calculator.multiply method throws an error if only one argument has been supplied': function () {
            assertException( function () {
                Namespace.Calculator.multiply( 1 );
            });
        },

        'test check that Namespace.Calculator.multiply method does not throws any error if two arguments have been supplied': function () {
            assertNoException( function () {
                Namespace.Calculator.multiply( 1, 2 );
            });
        },

        'test check that Namespace.Calculator.multiply method throws an error if any of the supplied arguments is a negative value: 1st argument': function () {
            assertException( function () {
                Namespace.Calculator.multiply( -1, 2 );
            });
        },

        'test check that Namespace.Calculator.multiply method throws an error if any of the supplied arguments is a negative value: 2n argument': function () {
            assertException( function () {
                Namespace.Calculator.multiply( 1, -2 );
            });
        },

        'test check that multiplying 2 for null returns 0': function () {
            var nExpected = 0,
                nValue = Namespace.Calculator.multiply( null, 2 );

            assertEquals( nValue, nExpected );
        },

        'test check that multiplying 2 for undefined returns 0': function () {
            var nExpected = 0,
                nValue = Namespace.Calculator.multiply( undefined, 2 );

            assertEquals( nValue, nExpected );
        },

        'test check that multiplying 2 for 1 returns 2': function () {
            var nExpected = 2,
                nValue = Namespace.Calculator.multiply( 1, 2 );

            assertEquals( nValue, nExpected );
        },

        'test check that multiplying 1 for 2 and for 3 returns 6': function () {
            var nExpected = 6,
                nValue = Namespace.Calculator.multiply( 1, 2, 3 );

            assertEquals( nValue, nExpected );
        }
    });
}());