import img from "../images/Rendang.jpeg";

export default function Home() {
    return(
        <>
         <div
      className="App"
      style={{
        backgroundImage: `url(${img})`, // Use imported image
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', // Ensure the image covers the entire background
        backgroundPosition: 'center',
        height: '100vh', // Take up the full viewport height
        margin: 0, // Remove default margin
        color: 'white', // Set text color to white
      }}
    >
        <br/>
        <center><h1>Selamat Datang Di Website The Hunger</h1>
        <br/>
            <h4>Kalian Tidak Tau apa Yang Kalian Makan, Cari disini Saja!!</h4>
        </center>
        </div>
        </>
    )
}