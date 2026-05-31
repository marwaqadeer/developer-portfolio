function ThemeToggle({ theme, setTheme }) {
    return (
        <div className="theme-toggle">
            <button
              onClick={() =>
                setTheme(
                    theme === "light"
                    ? "dark"
                    : "light"
                )
              }
            >
                {theme === "light"
                ? "🌙 Dark Mode"
                : "☀️ Light Mode"}
            </button>
        </div>
    );
}

export default ThemeToggle;