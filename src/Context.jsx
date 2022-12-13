import React from "react";

export const ContextCart = React.createContext();

const Context = ({ children }) => {
  const [cart, setCart] = React.useState([]);

  return (
    <>
      <ContextCart.Provider value={{ cart, setCart }}>
        {children}
      </ContextCart.Provider>
    </>
  );
};
export default Context;
