import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

export default function List() {
  const [pesan, setPesan] = useState([]); // Pastikan ini array

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/contacts")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data fetched:", data); // Log respons API
        setPesan(data.result); // Pastikan 'result' sesuai struktur respons
      })
      .catch((error) => {
        console.error("Fetch error:", error); // Tangkap kesalahan
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are You Sure?",
      text: `You won't be able to revert this!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#00ffee",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes! Delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://127.0.0.1:8000/api/contacts/${id}`) // Pastikan id ditambahkan
          .then(() => {
            setPesan(pesan.filter((f) => f.id !== id)); // Update state
            Swal.fire("Deleted!", "Your data has been deleted.", "success");
          })
          .catch((error) => {
            console.error("Error deleting data:", error);
            Swal.fire(
              "Error",
              "There was an issue deleting the data.",
              "error"
            );
          });
      }
    });
  };

  return (
    <>
      <h2>Hubungi Kami</h2>

      {/* Tombol Tambah Data */}
      <NavLink to="/makanan/create" className="btn btn-primary my-4">
        Create
      </NavLink>

      <ul className="list-group">
        {pesan.map((f) => {
          console.log("Mapping item:", f); // Log setiap item
          return (
            <li
              key={f.id}
              className="list-group-item d-flex justify-content-between align-item-center"
            >
              <span>{f.nama}</span>
              <div
                className="btn-group"
                role="group"
                aria-label="Action button"
              >
                <button
                  onClick={() => handleDelete(f.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
