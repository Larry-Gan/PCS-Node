import React from 'react';
import firebase from 'firebase/app';

export const FirebaseContext = React.createContext<firebase.User | null>(null);
