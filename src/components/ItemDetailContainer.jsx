import { useState, useEffect } from "react";
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

function ItemDetailContainer(){
    
    const[data,setData] = useState('');
    const {id} = useParams();

    useEffect(()=> {
        const queryDb = getFirestore();
        const queryDoc = doc(queryDb, 'Productos' , id);
        getDoc(queryDoc)
        .then(res=>setData({id: res.id, ...res.data()}))
    }, [id])

    return(
        <div>
            <ItemDetail data = {data} />
        </div>
    )
}

export default ItemDetailContainer