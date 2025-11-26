        /**
         * Problem 20: Deep Partial Type (Nested Partial)
         *
         * Description:
         * Create a generic DeepPartial<T> type that makes all nested properties optional.
Use it on a nested Settings interface to allow partial updates.
         *
         * Sample Input:
         * DeepPartial<Settings> with only settings.theme.dark = true
         *
         * Sample Output:
         * Type-checks even if other nested properties are omitted.
         */
