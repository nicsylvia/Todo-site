import React, {createContext, PropsWithChildren, useState} from 'react';

interface signInProps{
  name: string,
  email: string
}

interface usersProps {
  usersDetails: signInProps,
  setUsersDetails: React.Dispatch<React.SetStateAction<signInProps>>,
}

export const allowAccessEverywhere = createContext<usersProps | null>(null)

const Global: React.FC<PropsWithChildren> = ({children}) => {

  const [usersDetails, setUsersDetails] = useState({} as signInProps)
  return (
    <allowAccessEverywhere.Provider value={{
      usersDetails,
      setUsersDetails
    }}>
      {children}
    </allowAccessEverywhere.Provider>
  )
}

export default Global