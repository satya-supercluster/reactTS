        /**
         * Problem 36: Typing a Custom Hook for Fetching Data
         *
         * Description:
         * Create a generic hook useFetch<T>(url: string) that returns { data, error, loading }.
Type it so that data is of type T | null.
Demonstrate using it with a Post type in a component.
         *
         * Sample Input:
         * const { data } = useFetch<Post>('/api/posts/1');
         *
         * Sample Output:
         * data is strongly typed as Post | null in JSX.
         */
