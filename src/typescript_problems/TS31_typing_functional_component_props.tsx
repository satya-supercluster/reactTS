        /**
         * Problem 31: Typing Functional Component Props
         *
         * Description:
         * Create a React component <UserCard> that accepts props:
{ name: string; age?: number }.
Type the props with an interface or type alias and ensure age is optional.
Demonstrate correct usage and a misuse that should fail at compile time.
         *
         * Sample Input:
         * <UserCard name="Alice" age={25} />; <UserCard /> (error)
         *
         * Sample Output:
         * First usage is valid; second is a TS error due to missing name.
         */
