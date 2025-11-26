        /**
         * Problem 28: Typed Local Storage Helper
         *
         * Description:
         * Create helper functions setItem<T>(key: string, value: T) and getItem<T>(key: string): T | null
for localStorage that automatically JSON stringify/parse values.
Demonstrate usage and limitations of using generics here.
         *
         * Sample Input:
         * setItem<User>('currentUser', user); getItem<User>('currentUser')
         *
         * Sample Output:
         * Returns a User or null; type is preserved by generics.
         */
