import React, { PropsWithChildren } from 'react';
import { createContext, useState } from 'react';

interface userProps {
  userData: null,
  setUserData: React.Dispatch<React.SetStateAction<null>>
}

export const sylviaContext = createContext<userProps | null>(null);

export const Global: React.FC<PropsWithChildren> = ({children}) => {

  const [userData, setUserData] = useState(null)
  return (
    <sylviaContext.Provider value={{userData, setUserData}}>
      {children}
    </sylviaContext.Provider>

  )
}

