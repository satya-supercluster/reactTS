        /**
         * Problem 13: Keyof and Indexed Access Types
         *
         * Description:
         * Given an interface User { id: number; name: string; email: string }:
- Write a function getProp(user, key) that only accepts valid keys of User using keyof.
- Return the correct type using indexed access User[typeof key].
         *
         * Sample Input:
         * getProp(user, 'email'), getProp(user, 'age' - should be TS error)
         *
         * Sample Output:
         * Returns a string for 'email'; error when using invalid key.
         */
