import { useContext } from "react";
import { Link } from "react-router-dom";
import {useCartContext} from './CartContext'

function Item({info}){

    return(
        <>
            <Link to={`/detalle/${info.id}`} className='producto'>
                <img src={info.img} width='400px' height= '390px' alt='imgitem'/>
            </Link>
            <p>{info.title}</p>
        </>
    )

}

export default Item