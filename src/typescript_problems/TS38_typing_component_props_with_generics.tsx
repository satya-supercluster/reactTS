        /**
         * Problem 38: Typing Component Props with Generics
         *
         * Description:
         * Create a generic <List> component that accepts:
- items: T[]
- renderItem: (item: T) => React.ReactNode
Ensure TypeScript infers T based on items.
Demonstrate usage with string[] and custom objects.
         *
         * Sample Input:
         * <List items={['a','b']} renderItem={(item) => <li>{item}</li>} />
         *
         * Sample Output:
         * renderItem receives strongly typed item; no any.
         */
