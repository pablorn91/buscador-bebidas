import { createContext, useState, useEffect } from "react";
import axios from "axios";

//crear el context
export const CategoriasContext = createContext()
 
//Provider es donde se cuentran las funciones y state
const CategoriasProvider = (props) => {

    //Crear el state del context
    const [categorias, setCategorias ] = useState([])

    //ejecutar llamado a la API
    useEffect(() =>{
        const obtenerCategorias = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
            const categorias = await axios(url)

            setCategorias(categorias.data.drinks)
        }
        obtenerCategorias()
    },[])

    return (
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;