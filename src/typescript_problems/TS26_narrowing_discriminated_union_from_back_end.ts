        /**
         * Problem 26: Narrowing Discriminated Union from Back-end
         *
         * Description:
         * Given a union type representing server events, narrow it correctly using the 'type' field.
Demonstrate how using 'in' or switch helps avoid unsafe property access.
         *
         * Sample Input:
         * { type: 'message', text: 'Hello' } vs { type: 'join', user:'Bob' }
         *
         * Sample Output:
         * Correctly handles each case with type safety.
         */
