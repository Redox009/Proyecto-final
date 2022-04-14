import {useState} from "react"


const Main = (props) => {

    const [contador, setContador] = useState(props.initial)


    const agregar = () => {
      
        ;
        if (contador < props.stock){
            setContador(contador + 1)
        }
    }

    const quitar = () => {

        
        if (contador > 0){
            setContador(contador - 1)
        }
    }

    const resetear = () => {

        setContador(0)
    }

    return (
        <main className="container">
            <h2>Bienvenido {props.nombre}!</h2>
            <p>Cantidad de Libros en Stock: {props.stock}</p>
            <p>Cantidad de Libros: {contador}</p>

            <button onClick={agregar}>Agregar</button>
           
            <button onClick={quitar}>restar</button>

            <button onClick={resetear}>Resetear</button>
        </main>
    );
}

export default Main;