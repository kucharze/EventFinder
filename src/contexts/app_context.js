import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [state, setState] = useState(null);
  const [performer, setPerformer] = useState(false);

  return (
    <AppContext.Provider value={{ state, setState, performer, setPerformer }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
