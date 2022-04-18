import {useState} from "react"


const ItemCount = ({initial,stock,onAdd}) => {

    const [contador, setContador] = useState(initial)


    const agregar = () => {
      
        ;
        if (contador < stock){
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

    const confirmar = (e) => {
        console.log(e)
        onAdd(contador)
    }

    return (
        <main className="container">
            
            <p>Cantidad Disponible: {stock}</p>
            <p>Cantidad de Macetas: {contador}</p>

            <button onClick={agregar}>Agregar</button>
           
            <button onClick={quitar}>Restar</button>

            <button onClick={resetear}>Resetear</button>
            <br></br>
            <br></br>
            <button onClick={confirmar}>Confirmar</button>
        </main>
    );
}

export default ItemCount;