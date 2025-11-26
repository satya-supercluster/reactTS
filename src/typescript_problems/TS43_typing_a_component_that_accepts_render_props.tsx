        /**
         * Problem 43: Typing a Component that Accepts Render Props
         *
         * Description:
         * Create a <Toggle> component that uses a render prop:
children: (on: boolean, toggle: () => void) => React.ReactNode.
Type children correctly and demonstrate using <Toggle> in JSX.
         *
         * Sample Input:
         * <Toggle>{(on, toggle) => <button onClick={toggle}>{on ? 'On' : 'Off'}</button>}</Toggle>
         *
         * Sample Output:
         * Render prop receives correctly typed arguments.
         */
