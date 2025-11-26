        /**
         * Problem 30: Typing a Simple Redux-like Store
         *
         * Description:
         * Define a typed Store<State, Action> with:
- getState()
- dispatch(action)
- subscribe(listener)
Use generics and discriminated union Actions for safety.
         *
         * Sample Input:
         * dispatch({ type:'increment' }), dispatch({ type:'set', value: 10 })
         *
         * Sample Output:
         * State updates are type-safe; invalid actions cause TS error.
         */
