        /**
         * Problem 35: Typing useReducer State and Actions
         *
         * Description:
         * Implement a counter using useReducer with typed state and actions.
Actions: { type: 'increment' } | { type: 'decrement' } | { type: 'set'; value: number }.
Type the reducer so invalid actions are caught by the compiler.
         *
         * Sample Input:
         * dispatch({ type: 'set', value: 10 })
         *
         * Sample Output:
         * State transitions are type-safe; invalid action shapes cause TS errors.
         */
