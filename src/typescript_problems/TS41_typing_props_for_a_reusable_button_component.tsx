        /**
         * Problem 41: Typing Props for a Reusable Button Component
         *
         * Description:
         * Create a <Button> component that:
- Accepts all native button props via React.ButtonHTMLAttributes<HTMLButtonElement>
- Adds a custom variant prop: 'primary' | 'secondary'
Use intersection types to combine native and custom props.
         *
         * Sample Input:
         * <Button variant="primary" disabled>Save</Button>
         *
         * Sample Output:
         * Props are fully typed; invalid variant values cause TS error.
         */
