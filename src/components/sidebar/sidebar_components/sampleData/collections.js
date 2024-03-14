// CollectionContext.js
import React, { createContext } from 'react';

// Define a context
const CollectionContext = createContext();

// Define the initial value of the context (your collection object)
const collection = {
  name: 'Filler',
  image: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228',
  artists: 'Playlist - You'
};

// Create a provider component for the context
export const CollectionProvider = ({ children }) => {
  return (
    <CollectionContext.Provider value={collection}>
      {children}
    </CollectionContext.Provider>
  );
};

export default CollectionContext;