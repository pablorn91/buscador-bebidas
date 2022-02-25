import { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";

const Formulario = () => {

    const [ busqueda, setBusqueda ] = useState({
        nombre: '',
        categoria: ''
    })

    const { categorias } = useContext(CategoriasContext)

    //funcion para leer los contenidos
    const handleOnChange = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    return ( 
        <form
            className="col-12"
        >
            <fieldset className="text-center">
                <legend>Busca Bebidas por Categoría o Ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        type="text"
                        name="nombre"
                        className="form-control"
                        placeholder="Buscar por Ingrediente"
                        onChange={handleOnChange}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={handleOnChange}
                    >
                        <option value="">-- Selecciona Categoría --</option>
                        { categorias.map( categoria => (
                            <option 
                                key={categoria.strCategory}
                                value={categoria.strCategory}
                            >{categoria.strCategory}</option>
                        )) }
                    </select>
                </div>

                <div className="col-md-4">
                    <input 
                        type="submit" 
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;