import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';

function ItemListContainer() {

    const[data,setData] = useState([]);
    const{categoryId} = useParams();

    useEffect(() => {
        const queryDb = getFirestore();
        const queryCollection = collection(queryDb, 'Productos');
        if(categoryId){
            const queryFilter = query(queryCollection, where('categoryId' , '==', 'categoryId'))
            getDocs(queryFilter)
            .then(res=>setData(res.docs.map(p=>({id: p.id, ...p.data()}))))
        }else{
            getDocs(queryCollection)
            .then(res=>setData(res.docs.map(p=>({id: p.id, ...p.data()}))))
        }

    }, [categoryId])


    return(
        <div>
            <ItemList data = {data} />
        </div>
    )
}

export default ItemListContainer;