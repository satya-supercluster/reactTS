        /**
         * Problem 25: Refining API Response Types
         *
         * Description:
         * Suppose the backend may send extra fields you don't care about.
Create a type-safe function mapUserApiResponse(raw: unknown): User
that picks only safe, known fields and ignores the rest.
         *
         * Sample Input:
         * mapUserApiResponse({ id:1, name:'Alice', extra:'ignore me' })
         *
         * Sample Output:
         * Returns a User with id and name only.
         */
