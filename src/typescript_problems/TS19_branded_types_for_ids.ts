        /**
         * Problem 19: Branded Types for IDs
         *
         * Description:
         * Simulate the concept of 'branded types' to distinguish different kinds of IDs
(e.g., UserId vs OrderId) even though both are strings.
Show how this prevents mixing them accidentally.
         *
         * Sample Input:
         * function getUserById(id: UserId), getOrderById(id: OrderId)
         *
         * Sample Output:
         * Passing an OrderId to getUserById should cause a TS error.
         */
