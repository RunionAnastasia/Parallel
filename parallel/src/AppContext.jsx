import React, { createContext, useState } from "react";

// Create the context
export const AppContext = createContext();

// Context Provider
export const AppProvider = ({ children }) => {
  const [likedProfiles, setLikedProfiles] = useState([]); // Store liked profiles
  const [viewedProfiles, setViewedProfiles] = useState([]); // Track viewed profiles

  return (
    <AppContext.Provider
      value={{
        likedProfiles,
        setLikedProfiles,
        viewedProfiles,
        setViewedProfiles,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
