import React, {useEffect, useState} from "react"
import axios from "axios"
import {    NavLink } from "react-router-dom"


export default function List(){
    const [makanan, setMakanan] = useState([])

    useEffect(() => {
        axios
        .get('http://127.0.0.1:8000/api/foods')
        .then ((response) =>{
            setMakanan(response.data)
        })
        .catch((error)=> {
            console.log('Error ',error);
        });
    }, []);
    
    return(
        <>
            <h2>List Makanan</h2>
             <br></br>
            <ul className="list-group">
                {makanan.map((f) =>(
                        <li key={f.id} className="list-group-item d-flex justify-content-between align-item-center">
                            <span>{f.name}</span>{/* Menampilkan nama Makanan */}
                        </li>
                ))}
            </ul>
        </>
    )
}