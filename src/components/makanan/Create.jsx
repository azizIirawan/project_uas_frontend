import React, {useState} from "react";
import axios from "axios";

export default function CreateMakanan() {
    //inisialisasi state untuk menyimpan nama fakultas
    const [namaMakanan, setNamaMakanan] = useState(" ");
    //inisialisasi state untuk menyimpan pesan error
    const [error, setError] = useState("");
    //iisialisasi state untuk menyimpan pesan sukses
    const [success, setSuccess] = useState("");

    //fungsi yang akan dijalankan saat form di submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        //validasi input jia namaFakultas kosong set pesan error
        if(namaMakanan.trim() == "") {
            setError("Nama Makanan is Required") //setpesan error jika input kososng
            return;
        }
        try{
            const response = await axios.post(
                "https://project-pw-2-vbnt.vercel.app/api/api/fakultas/",
                {
                    nama: namaMakanan  
                }
            );

            console.log(response.status);
            

            //lika response HTTP status 210 (Created), berarti berhasil
            if(response.status === 201){
                //tampilkan pesan sukses jika fakultas berhasil dibuat
                setSuccess("berhasil menambah Makanan");
                setNamaMakanan("")
            }else{
                //jika tidak berhasil, tampilkan error
                setError("gagal menambah Makanan")
            }
        } catch (error){
            //jika terjadi error (misal masalah jarigan), ta,mpilkan persan eror
            setError("An error occured wjile creating Makanan")
        }
    }

    return (
        <>
            <div className="container mt-5">
                <h2 className="mb-4">Create Makanan</h2>
                {/*jika ada pesan error tampilkan dalam alret bootrstrap*/}
                {error && <div className="alert alert-danger">{error}</div>}
                {/* Jika ada persan success, tampilkan dalam tampilan alert bootstrap*/}
                {success && <div className="alert alert-success">{success}</div>}

                {/*Form Untuk Mengisi nama Fakultas */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="namaMakanan" className="form-lable">
                            Nama Makanan
                        </label>

                        {/* Input untuk nama fakultas dengan class bootstrap */}
                        <input
                            type="text"
                            className="form-control"
                            id="namaMakanan"
                            value={namaMakanan} // nilai input disimpan di state Nama Fakultas
                            onChange={(e) => setNamaMakanan(e.target.value)}
                            placeholder="Masukan Nama Makanan" //placeholder Text untuk input
                            />
                    </div>
                    {/* Tombol submit dengan class bootstrap */}
                    <button type="submit" className="btn btn-primary">
                        Create
                    </button>
                </form>
            </div>
        </>
    )
}