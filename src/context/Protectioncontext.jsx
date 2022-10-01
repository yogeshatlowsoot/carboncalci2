import { createContext, useContext, useState } from "react";
const Protectionprov = createContext();
export function Protectionprovider({ children }) {
  const clientcodeval = localStorage.getItem("clientcodeval") || null;
  const [codeval, setcodeval] = useState(clientcodeval);
  return (
    <Protectionprov.Provider value={{ codeval, setcodeval }}>
      {children}
    </Protectionprov.Provider>
  );
}
export function useProtectioncontext() {
  return useContext(Protectionprov);
}
