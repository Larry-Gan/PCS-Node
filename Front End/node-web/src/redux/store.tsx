import React, { useMemo } from 'react';
import { createStore, combineReducers, Store } from 'redux';
import { Provider } from 'react-redux';

import * as reducers from './reducers';
import { TodoAction } from './actions';

export interface RootState {
  todos: string[];
}

type ReduxStore = Store<RootState, TodoAction>;

export const initialState: RootState = {
  todos: [],
};

const combinedReducers = combineReducers({ ...reducers });

export const initStore = (preloadedState = initialState): ReduxStore => {
  return createStore(combinedReducers, preloadedState); //all we need is the reducers to create the store
};

export const useStore = (state: RootState): ReduxStore => {
  return useMemo(() => initStore(state), [state]);
};

export const wrapWithProvider = (
  element: JSX.Element,
  preloadedState?: RootState
): JSX.Element => {
  const store = useStore(preloadedState || initialState);
  return <Provider store={store}>{element}</Provider>;
};
