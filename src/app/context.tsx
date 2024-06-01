"use client"
import { createContext, useReducer, ReactNode } from "react";

interface State {
  darkMode: boolean;
}

type Action = {
  type: "TOGGLE";
};

const INITIAL_STATE: State = { darkMode: false };

const themeReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "TOGGLE":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: INITIAL_STATE,
  dispatch: () => null
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
