import React, { useReducer } from 'react';
import { PayloadAction } from './PayloadAction';
import { reducer } from './reducer';
import { State } from './InitialState';

const initialState: State = {
  catalogPhones: [],
  total: 0,
  favouritePhones: [],
  phonesToBuy: [],
};

interface ContextProps {
  state: State;
  dispatch: React.Dispatch<PayloadAction>;
}

export const StateContext = React.createContext<ContextProps>({
  state: initialState,
  dispatch: () => null,
});

interface Props {
  children: React.ReactNode;
}

export const StateProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer<React.Reducer<State, PayloadAction>>(
    reducer,
    initialState,
  );

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};
