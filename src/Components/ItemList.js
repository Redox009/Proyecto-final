import React from "react";
import Item from "../Components/Item"


const ListItem = ({productos}) => {
        return (
            <ul>
                {productos.map((produ) => {
                    return <Item key={produ.id} producto={produ}/>
                })}
            </ul>
        )
    }
    
    export default ListItem