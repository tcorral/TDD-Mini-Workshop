(function () {
    'use strict';

    TestCase( 'Calendar', {
        'test check that Namespace.Calendar is an object': function () {
            assertObject( Namespace.Calendar );
        },
        'test check that add is a method of Namespace.Calendar': function () {
            assertFunction( Namespace.Calendar.add );
        },
        'test check that substract is a method of Namespace.Calendar': function () {
            assertFunction( Namespace.Calendar.substract );
        },
        'test check that multiply is a method of Namespace.Calendar': function () {
            assertFunction( Namespace.Calendar.multiply );
        }
    });

    TestCase( 'Add', {
        'test check that Namespace.Calendar.add method throws an error if no arguments have been supplied': function () {
            assertException( function () {
                Namespace.Calendar.add();
            });
        },

        'test check that Namespace.Calendar.add method throws an error if only one argument has been supplied': function () {
            assertException( function () {
                Namespace.Calendar.add( 1 );
            });
        },

        'test check that Namespace.Calendar.add method does not throws any error if two arguments have been supplied': function () {
            assertNoException( function () {
                Namespace.Calendar.add( 1, 2 );
            });
        },

        'test check that Namespace.Calendar.add method throws an error if any of the supplied arguments is a negative value: 1st argument': function () {
            assertException( function () {
                Namespace.Calendar.add( -1, 2 );
            });
        },

        'test check that Namespace.Calendar.add method throws an error if any of the supplied arguments is a negative value: 2n argument': function () {
            assertException( function () {
                Namespace.Calendar.add( 1, -2 );
            });
        },

        'test check that adding 2 to null returns 2': function () {
            var nExpected = 2,
                nValue = Namespace.Calendar.add( null, 2 );

            assertEquals( nValue, nExpected );
        },

        'test check that adding 2 to undefined returns 2': function () {
            var nExpected = 2,
                nValue = Namespace.Calendar.add( undefined, 2 );

            assertEquals( nValue, nExpected );
        },

        'test check that adding 1 and 2 returns 3': function () {
            var nExpected = 3,
                nValue = Namespace.Calendar.add( 1, 2 );

            assertEquals( nValue, nExpected );
        },

        'test check that adding 1 and 2 and 3 returns 6': function () {
            var nExpected = 6,
                nValue = Namespace.Calendar.add( 1, 2, 3 );

            assertEquals( nValue, nExpected );
        }
    });

    TestCase( 'Substract', {
        'test check that Namespace.Calendar.substract method throws an error if no arguments have been supplied': function () {
            assertException( function () {
                Namespace.Calendar.substract();
            });
        },

        'test check that Namespace.Calendar.substract method throws an error if only one argument has been supplied': function () {
            assertException( function () {
                Namespace.Calendar.substract( 1 );
            });
        },

        'test check that Namespace.Calendar.substract method does not throws any error if two arguments have been supplied': function () {
            assertNoException( function () {
                Namespace.Calendar.substract( 1, 2 );
            });
        },

        'test check that Namespace.Calendar.substract method throws an error if any of the supplied arguments is a negative value: 1st argument': function () {
            assertException( function () {
                Namespace.Calendar.substract( -1, 2 );
            });
        },

        'test check that Namespace.Calendar.substract method throws an error if any of the supplied arguments is a negative value: 2n argument': function () {
            assertException( function () {
                Namespace.Calendar.substract( 1, -2 );
            });
        },

        'test check that substract 2 from null returns -2': function () {
            var nExpected = -2,
                nValue = Namespace.Calendar.substract( null, 2 );

            assertEquals( nValue, nExpected );
        },

        'test check that substracting 2 from undefined returns -2': function () {
            var nExpected = 0,
                nValue = Namespace.Calendar.multiply( undefined, 2 );

            assertEquals( nValue, nExpected );
        },

        'test check that substracting 2 from 1 returns -1': function () {
            var nExpected = -1,
                nValue = Namespace.Calendar.substract( 1, 2 );

            assertEquals( nValue, nExpected );
        },

        'test check that substracting 1 and 2 and 3 returns 6': function () {
            var nExpected = -4,
                nValue = Namespace.Calendar.substract( 1, 2, 3 );

            assertEquals( nValue, nExpected );
        }
    });

    TestCase( 'Multiply', {
        'test check that Namespace.Calendar.multiply method throws an error if no arguments have been supplied': function () {
            assertException( function () {
                Namespace.Calendar.multiply();
            });
        },

        'test check that Namespace.Calendar.multiply method throws an error if only one argument has been supplied': function () {
            assertException( function () {
                Namespace.Calendar.multiply( 1 );
            });
        },

        'test check that Namespace.Calendar.multiply method does not throws any error if two arguments have been supplied': function () {
            assertNoException( function () {
                Namespace.Calendar.multiply( 1, 2 );
            });
        },

        'test check that Namespace.Calendar.multiply method throws an error if any of the supplied arguments is a negative value: 1st argument': function () {
            assertException( function () {
                Namespace.Calendar.multiply( -1, 2 );
            });
        },

        'test check that Namespace.Calendar.multiply method throws an error if any of the supplied arguments is a negative value: 2n argument': function () {
            assertException( function () {
                Namespace.Calendar.multiply( 1, -2 );
            });
        },

        'test check that multiplying 2 for null returns 0': function () {
            var nExpected = 0,
                nValue = Namespace.Calendar.multiply( null, 2 );

            assertEquals( nValue, nExpected );
        },

        'test check that multiplying 2 for undefined returns 0': function () {
            var nExpected = 0,
                nValue = Namespace.Calendar.multiply( undefined, 2 );

            assertEquals( nValue, nExpected );
        },

        'test check that multiplying 2 for 1 returns 2': function () {
            var nExpected = 2,
                nValue = Namespace.Calendar.multiply( 1, 2 );

            assertEquals( nValue, nExpected );
        },

        'test check that multiplying 1 for 2 and for 3 returns 6': function () {
            var nExpected = 6,
                nValue = Namespace.Calendar.multiply( 1, 2, 3 );

            assertEquals( nValue, nExpected );
        }
    });
}());