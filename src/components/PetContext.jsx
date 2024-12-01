import { createContext, useState, useContext } from "react";

const PetDataContext = createContext()

    export const PetProviders = ({children}) => {
        const[pets, setPets] = useState([])
        const[error,setError] = useState("")
        const[update,setUpdate] = useState(0)
        return (
            <PetDataContext.Provider value={{pets,setPets,error,setError,update,setUpdate}}>
                {children}
            </PetDataContext.Provider>
        )
    }

    export const usePets = () => useContext(PetDataContext)
