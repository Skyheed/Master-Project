import React, { createContext, useState, useContext } from "react";

// Create a context to store the user's favourites
const FavouritesContext = createContext();

// Create a provider to wrap the app and provide the context
export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (favourite) => {
    setFavourites((prev) => [...prev, favourite]);
  }

  const removeFavourite = (id) => {
    setFavourites((prev) => prev.filter((fav) => fav.id !== id));
  }

  return (
    <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};

// Create a custom hook for using the favourites context
export const useFavourites = () => {
    const context = useContext(FavouritesContext);
    if (!context) {
        throw new Error("useFavourites must be used within a FavouritesProvider");
    }
    return context;
};