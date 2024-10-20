import { createContext } from "react";
import all_product from "../assets/all_product";

export const ShopContextProvider = createContext(null);
// eslint-disable-next-line react/prop-types
const ShopContext = ({ children }) => {

  const contextValue = {all_product};

  return (
      <ShopContextProvider.Provider value={contextValue}>
        {children}
      </ShopContextProvider.Provider>
  );
};

export default ShopContext;
