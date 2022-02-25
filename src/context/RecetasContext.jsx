import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    // Initial Provider State
    const [ recetas, setRecetas ] = useState([])
    const [ consulta , setConsulta ] = useState({
        nombre: '',
        categoria: ''
    })
    const [ consultar, setConsultar] = useState(false)
    
    const { nombre, categoria } = consulta;

     useEffect(()=> { 
         

            if (consultar) {
                const consultaAPI = async () => {
                    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoria}&i=${nombre}`;
                    const resultado = await axios(url)
                    setRecetas(resultado.data.drinks)
                } 
                consultaAPI()
            }

          
            
     },[consulta])   

    return (
        <RecetasContext.Provider 
            value={{
                recetas,
                setConsulta,
                setConsultar
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    );
}

export default RecetasProvider;

