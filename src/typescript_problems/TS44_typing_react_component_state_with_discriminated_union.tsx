        /**
         * Problem 44: Typing React Component State with Discriminated Union
         *
         * Description:
         * Model a component's state as a discriminated union:
{ status:'idle' } | { status:'loading' } | { status:'success'; data: T } | { status:'error'; error:string }.
Use this to render different UI states with exhaustive checks.
         *
         * Sample Input:
         * State transitions from idle -> loading -> success.
         *
         * Sample Output:
         * Component renders correct UI for each state with type safety.
         */
