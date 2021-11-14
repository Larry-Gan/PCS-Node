import firebase from 'firebase/app';
import React, { useEffect, useState } from 'react';
import { FirebaseContext } from './FirebaseContext';
import { auth } from './FirebaseConfig';

export const FirebaseProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);

  return (
    <FirebaseContext.Provider value={user}>{children}</FirebaseContext.Provider>
  );
};
