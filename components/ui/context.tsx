import React from 'react';

export interface State {
  displayModal: boolean;
}

export interface StateWithActions extends State {
  openModal: () => void;
  closeModal: () => void;
}

const initialState: State = {
  displayModal: false,
};

const initialStateWithActions: StateWithActions = {
  ...initialState,
  openModal: () => {},
  closeModal: () => {},
};

type Action =
  | {
      type: 'OPEN_MODAL';
    }
  | {
      type: 'CLOSE_MODAL';
    };

export const UIContext = React.createContext<StateWithActions>(
  initialStateWithActions,
);

const uiReducer: (state: State, action: Action) => State = (state, action) => {
  switch (action.type) {
    case 'OPEN_MODAL': {
      return {
        ...state,
        displayModal: true,
      };
    }
    case 'CLOSE_MODAL': {
      return {
        ...state,
        displayModal: false,
      };
    }
  }
};

export const UIProvider: React.FC = ({ ...props }) => {
  const [state, dispatch] = React.useReducer(uiReducer, initialState);
  const openModal = () => dispatch({ type: 'OPEN_MODAL' });
  const closeModal = () => dispatch({ type: 'CLOSE_MODAL' });

  const value: StateWithActions = React.useMemo(
    () => ({
      ...state,
      openModal,
      closeModal,
    }),
    [state],
  );

  return <UIContext.Provider value={value} {...props} />;
};

export const useUI = () => {
  const context = React.useContext(UIContext);
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
};

export const ManagedUIContext: React.FC = ({ children }) => (
  <UIProvider>{children}</UIProvider>
);

export default ManagedUIContext;
