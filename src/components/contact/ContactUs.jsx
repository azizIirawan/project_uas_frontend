import React from 'react';

const ContactUs = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(to bottom, #003366, #0066cc)',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Card Container */}
      <div
        style={{
          backgroundColor: '#ffeb3b',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
          padding: '20px',
          width: '400px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ marginBottom: '20px' }}>Contact Us</h1>
        <p>Silahkan Tinggalkan Pesan Anda, Pada Kolom Yang Tersedia</p>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Name"
            style={{
              width: '100%',
              padding: '10px',
              margin: '10px 0',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
            
          />
          <input
            type="email"
            placeholder="Email"
            style={{
              width: '100%',
              padding: '10px',
              margin: '10px 0',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
          <textarea
            placeholder="Message"
            rows="5"
            style={{
              width: '100%',
              padding: '10px',
              margin: '10px 0',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          ></textarea>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <input type="checkbox" id="privacy-policy" style={{ marginRight: '10px' }} />
            <label htmlFor="privacy-policy">
              Dengan memilih opsi ini, Anda menerima Kebijakan Privasi Kami
            </label>
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: 'blue',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;