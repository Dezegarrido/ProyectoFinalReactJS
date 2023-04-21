import React from "react";
import Item from './Item.jsx';

function ItemList({data=[]}) {

    return(
        data.map(p=> <Item key={p.id} info={p} />)
    )

}

export default ItemList