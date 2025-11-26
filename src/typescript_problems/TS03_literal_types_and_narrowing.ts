        /**
         * Problem 3: Literal Types and Narrowing
         *
         * Description:
         * Define a function setStatus that only accepts one of the strings:
'idle', 'loading', 'success', 'error'.
Use a string literal union type and demonstrate how the compiler prevents invalid values.
         *
         * Sample Input:
         * setStatus('loading'), setStatus('done' - should be error)
         *
         * Sample Output:
         * Valid call for 'loading'. TS error for 'done'.
         */
