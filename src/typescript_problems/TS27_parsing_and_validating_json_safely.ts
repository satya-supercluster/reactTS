        /**
         * Problem 27: Parsing and Validating JSON Safely
         *
         * Description:
         * Write a function safeJsonParse<T>(json: string): T | null that:
- Tries JSON.parse
- Catches errors and returns null
Explain that the generic T is still 'trust-based' and why runtime validation is needed.
         *
         * Sample Input:
         * safeJsonParse<User>('valid json'), safeJsonParse<User>('invalid json')
         *
         * Sample Output:
         * Returns a value or null; no thrown error from JSON.parse.
         */
