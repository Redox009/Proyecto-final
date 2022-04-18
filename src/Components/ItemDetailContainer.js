import ItemDetail from "../Components/ItemDetail"

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


const ItemDetailContainer = () => {
        
        const [producto, setProducto] = useState([])
        const [loading, setLoading] = useState(true)
        const {id} = useParams()
        
        
        useEffect(() => {
      
            const promesa = new Promise((res, rej) => {
                setTimeout(() => {
                    console.log(id)
                   res(productosMacetas)
                    
                 
                }, 2000)
            })
      
            promesa
            .then((respuestaDeLaApi) => {
                setProducto(productosMacetas)
            })
            .catch((errorDeLaApi) => {
                console.log("Error al cargar el producto")
            })
            .finally(() => {
                setLoading(false)
            })
    
        },[id])

       
    
        return (
            <>
            <ItemDetail productosM={producto}/>
            
            </>
        )
    }
    
    export default ItemDetailContainer

