import React, {createContext, PropsWithChildren, useState} from 'react';

interface contextProps{
  userData: null,
  setUserData: React.Dispatch<React.SetStateAction<null>>
}

export const SylviaContext = createContext<contextProps | null>(null);


export const GlobalContext: React.FC<PropsWithChildren> = ({children}) => {


  const [userData, setUserData] = useState(null)


  return (
    <SylviaContext.Provider value={
      {
        userData, 
        setUserData
      }
    }>
      {children}
    </SylviaContext.Provider>
  )
}

