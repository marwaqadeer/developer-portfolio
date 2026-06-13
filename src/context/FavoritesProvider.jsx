import { useState, useEffect } from "react";
import FavoritesContext from "./FavoritesContext";

function FavoritesProvider({ children }) {

    const [favorites, setFavorites] = useState(() => {
        const saved = 
           localStorage.getItem("favorites");

        return saved
           ? JSON.parse(saved)
           : [];
    });

    useEffect(() => {
        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        );
    }, [favorites]);

    return (
        <FavoritesContext.Provider
          value={{
            favorites, 
            setFavorites,
          }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesProvider;