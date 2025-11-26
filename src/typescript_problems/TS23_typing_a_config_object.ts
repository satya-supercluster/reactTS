        /**
         * Problem 23: Typing a Config Object
         *
         * Description:
         * Define a Config interface for an app (apiBaseUrl, retryCount, featureFlags etc.).
Create a function validateConfig(config: unknown): config is Config
that acts as a type predicate and validates structure at runtime.
         *
         * Sample Input:
         * validateConfig(loadedJson)
         *
         * Sample Output:
         * Returns true/false; caller gets narrowed type when true.
         */
