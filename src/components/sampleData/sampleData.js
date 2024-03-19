// CollectionContext.js
import React, { createContext } from 'react';

// Define a context
const CollectionContext = createContext();

// Define the initial value of the context (your collection object)
const collection = {
  name: 'Lorem ipsum',
  image: require('./playlistFiller.png'),
  artists: 'Lorem ipsum dolor sit amet'
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