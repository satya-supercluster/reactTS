        /**
         * Problem 14: Mapped Types: Partial, Readonly, Pick
         *
         * Description:
         * Using a base interface User, create:
- a PartialUser using Partial<User>
- a ReadonlyUser using Readonly<User>
- a PublicUser using Pick<User, 'id' | 'name'>
Demonstrate when each variation is useful.
         *
         * Sample Input:
         * Assign partially filled user, changed readonly user should error.
         *
         * Sample Output:
         * PartialUser allows missing props; ReadonlyUser prevents reassignment.
         */
