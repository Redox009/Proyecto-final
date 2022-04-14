import React from "react";
import Item from "../Components/Item"


const ListItem = ({productosM}) => {
        return (
            <ul>
                {productosM.map((produ) => {
                    return <Item key={produ.id} producto={produ}/>
                })}
            </ul>
        )
    }
    
    export default ListItem