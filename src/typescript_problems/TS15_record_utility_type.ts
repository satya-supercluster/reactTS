        /**
         * Problem 15: Record Utility Type
         *
         * Description:
         * Use Record<string, number> to represent a score board (e.g., userId -> score).
Show how Record is different from an index signature when keys are known finite values.
         *
         * Sample Input:
         * const scores: Record<string, number> = { alice: 10, bob: 20 }
         *
         * Sample Output:
         * Valid, but assigning a string as value should error.
         */
