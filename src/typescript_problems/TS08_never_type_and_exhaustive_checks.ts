        /**
         * Problem 8: Never Type and Exhaustive Checks
         *
         * Description:
         * Create a discriminated union Result type:
{ type: 'success'; data: string } | { type: 'error'; error: string }
Write a function handleResult that uses a switch on type and has an exhaustive check
with a 'never' branch to ensure all cases are handled.
         *
         * Sample Input:
         * handleResult({ type: 'success', data: 'OK' })
         *
         * Sample Output:
         * Logs data for success, logs error for error; compile-time safety for new cases.
         */
