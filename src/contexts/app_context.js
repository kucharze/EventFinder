import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [state, setState] = useState(null);
  const [performer, setPerformer] = useState(false);
  const [city, setCity] = useState(true);

  return (
    <AppContext.Provider
      value={{ state, setState, performer, setPerformer, city, setCity }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
