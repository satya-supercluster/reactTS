        /**
         * Problem 18: Discriminated Union for API Responses
         *
         * Description:
         * Define a discriminated union ApiResponse for a fetch call:
{ status: 'loading' } | { status: 'success'; data: T } | { status: 'error'; error: string }.
Write a function logApiResponse that handles all cases using a switch on status.
         *
         * Sample Input:
         * logApiResponse({ status: 'error', error: 'Network' })
         *
         * Sample Output:
         * Logs a user-friendly message based on the status.
         */
