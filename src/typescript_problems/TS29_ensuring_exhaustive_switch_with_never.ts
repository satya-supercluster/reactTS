        /**
         * Problem 29: Ensuring Exhaustive Switch with Never
         *
         * Description:
         * Create a union of ThemeMode = 'light' | 'dark' | 'system'.
Write a switch(theme) and add a 'default' case that assigns to a variable of type never
to ensure all modes are handled.
         *
         * Sample Input:
         * handleTheme('light'), handleTheme('system')
         *
         * Sample Output:
         * Each mode logs an appropriate message; compiler warns on missing case.
         */
