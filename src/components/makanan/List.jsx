import React, {useEffect, useState} from "react"
import axios from "axios"
import {    NavLink } from "react-router-dom"
import Swal from "sweetalert2"


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
    
    const handleDelete = (id, name) => {
        Swal.fire({
            title: 'Are You Sure?',
            text: `you Won't be Able to Revert This! Makanan: ${name}`,
            icon: "warning",
            showCancelButton: true, confirmButtonColor: `#00ffee`, cancelButtonColor: "#d33",
            confirmButtonText: "Yes! Delete it!",
        }).then((result) => {
            if(result.isConfirmed){
                axios.delete(`http://127.0.0.1:8000/api/foods/${id}`)
                .then((response) => {
                    setMakanan(makanan.filter((f)=> f.id !==id));
                    Swal.fire("Deleted!", "Your Data Has Been Deleted", "Success");
                })
                .catch((error)=>{
                    console.error("Error deleting data:", Error);
                    Swal.fire(
                        "Error",
                        "There was An issue Deleting The Data",
                        "error"
                    );
                });
            }
        });
    }

    return(
        <>
            <h2>List Makanan</h2>

            {/*Tombol Tambah Fakultas */}
            <NavLink to="/makanan/create" className="btn btn-primary my-4">
                Create
            </NavLink>

            <ul className="list-group">
                {makanan.map((f) =>(
                        <li key={f.id} className="list-group-item d-flex justify-content-between align-item-center">
                            <span>{f.name}</span>{/* Menampilkan nama Fakultas */}
                            <div className="btn-group" role="group" aria-label="Action button">
                            <NavLink to={`/makanan/edit/${f.id}`} className="btn btn-warning">
                                Edit
                            </NavLink>
                            <button onClick={() => handleDelete(f.id, f.nama)} className="btn btn-danger">
                                Delete
                            </button>
                            </div>
                        </li>
                ))}
            </ul>
        </>
    )
}