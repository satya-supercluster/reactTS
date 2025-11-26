        /**
         * Problem 50: Typing a Component Tree with Context + Custom Hooks
         *
         * Description:
         * Create a ThemeContext with values { mode: 'light'|'dark'; toggle: () => void }.
Write a custom hook useTheme() that wraps useContext(ThemeContext).
Type everything so that components using useTheme get full type safety.
         *
         * Sample Input:
         * const { mode, toggle } = useTheme();
         *
         * Sample Output:
         * mode is strongly typed as 'light' | 'dark'; toggle is a () => void.
         */
