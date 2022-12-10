import { createContext, ReactElement } from 'react';

type UserContextType = {
    token: string | null,
    setToken:  React.Dispatch<React.SetStateAction<string | null>>,
    nome: string | null,
    setNome: React.Dispatch<React.SetStateAction<string | null>>
}

const iUserContextState = {
   token: null,
   setToken: () => {},
   nome: null,
   setNome: () => {}
}

const UserContext = createContext <UserContextType>(iUserContextState);

export default UserContext;