        /**
         * Problem 49: Typing a Component that Uses React Query (Conceptual)
         *
         * Description:
         * Assume you are using React Query's useQuery hook.
Type a query that fetches a list of posts.
Ensure the returned data is typed as Post[] | undefined and is used safely in JSX.
         *
         * Sample Input:
         * const { data } = useQuery<Post[]>(['posts'], fetchPosts);
         *
         * Sample Output:
         * Accessing data[i].title is type-safe after null/undefined checks.
         */
