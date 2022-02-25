import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ModalContext = createContext();

const ModalProvider = (props) => {

    // Initial Provider State
    const [ idreceta, setIdreceta ] = useState(null)
    const [ info, setInfo ] = useState({})

    //Una vez que tengamos una receta llamamos la API
    useEffect(()=> {
            if (!idreceta) return;

            const obtenerRecetaAPI = async () => {
                const url= `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
                const resultado = await axios(url);
                setInfo(resultado.data.drinks[0])
            }
            obtenerRecetaAPI()
        
    },[idreceta])

    return (
        <ModalContext.Provider 
            value={{
                info,
                setIdreceta,
                setInfo
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;