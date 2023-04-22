import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import ItemList from "./ItemList";

function ItemListContainer() {

    const[data,setData] = useState([]);
    const{category} = useParams();

    useEffect(() => {
        const queryDb = getFirestore();
        const queryCollection = collection(queryDb, 'Productos');
        if(category){
            const queryFilter = query(queryCollection, where('categoryId' , '==', category))
            getDocs(queryFilter)
            .then(res=>setData(res.docs.map(p=>({id: p.id, ...p.data()}))))
        }else{
            getDocs(queryCollection)
            .then(res=>setData(res.docs.map(p=>({id: p.id, ...p.data()}))))
        }

    }, [category])


    return(
        <div>
            <ItemList data = {data} />
        </div>
    )
}

export default ItemListContainer;