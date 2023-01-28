import React, {createContext, PropsWithChildren, useState} from 'react';

interface usersInfo{
  name: string,
  email: string,
}

interface usersDetails{
  usersData: usersInfo,
  setUsersData: React.Dispatch<React.SetStateAction<usersInfo>>,
}

export const allowAccessEverywhere = createContext<usersDetails | null>(null);

export const Global: React.FC<PropsWithChildren> = ({children}) => {

  const [usersData, setUsersData] = useState({} as usersInfo)

  return (
    <allowAccessEverywhere.Provider value={{
      usersData,
      setUsersData
    }}>
      {children}
    </allowAccessEverywhere.Provider>
  )
}

