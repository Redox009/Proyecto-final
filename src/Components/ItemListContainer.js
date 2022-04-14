import ListItem from "../Components/ItemList"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

let productosMacetas = [
    {
      id: 1,
      nombre: "Maceta Chica",
      imagen: "../img/producto4.png",
      precio: 153,
      categoria : "chicas",
      stock: 5
  },
  {
      id: 2,
      nombre: "Maceta Mediana",
      imagen: "../img/producto4.png",
      precio: 200,
      categoria : "medianas",
      stock: 10
  },
  {
      id: 3,
      nombre: "Maceta Grande",
      imagen: "../img/producto4.png",
      precio: 300,
      categoria : "grandes",
      stock: 2
  }
]

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {tipos} = useParams()


    
    useEffect(() => {
        
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                console.log(tipos)
                if (!tipos) {
                     productosMacetas.filter((productosMacetas) => productosMacetas.categoria === tipos);
                     return res(productosMacetas) 
                }
                else {
                    return res(productosMacetas) 
                }
              }
            
        , 2000)
    })
    

        promesa
        .then((respuestaDeLaApi) => {
        
         setProductos(productosMacetas) 
        })
        .catch((errorDeLaApi) => {
            console.log("Error al cargar los productos")
        })
        .finally(() => {
            setLoading(false)
        })


    },[tipos])

    return (
        <>
            <p>{loading ? "Cargando..." : "Productos a la Venta:"}</p>
            <ListItem productosM={productos}/>
        </>
    )
}
    
    export default ItemListContainer