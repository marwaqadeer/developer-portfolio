import { useState } from "react";
import FavoritesContext from "./FavoritesContext";

function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

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