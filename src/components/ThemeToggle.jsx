import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function ThemeToggle() {

    const { theme, setTheme } =
       useContext(ThemeContext);
       
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