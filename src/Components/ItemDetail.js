import { useState, useEffect } from "react"
import ItemCount from "../Components/ItemCount"



const ItemDetail = ({productosM}) => {

  const [seleccionado, setSeleccionado] = useState(false)


  const onAdd = (unidadSeleccionada) => {
    console.log("On Add desde el ItemDetailContainer")
    if(unidadSeleccionada != undefined){
      setSeleccionado(unidadSeleccionada)
    }
  }
  

  return (
    <div>
        
        
        <p>Precio : ${productosM.precio}</p>
        <ItemCount initial={1} stock={productosM.stock} onAdd={onAdd}/>
        <p>{seleccionado?"ya se selecciono algo!":"No se eligion ninguna cantidad"}</p>
    </div>
  )
}
  
  export default ItemDetail