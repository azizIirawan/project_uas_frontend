import React from 'react';
import Team from './model';
import img from '../../images/model';

export default function List(nama, counter, OnClick){
    
    return(
        <>
            <br></br>

            <center><h2>Member Team The Hunger</h2></center>
            <br></br>
            <div className='container'>
                <div className='row at-5'>
                    <Team image= {<img src={img.img1}/>} nama="Rafky Hidayatullah" npm="2226250125" tugas="frontend"/>
                    <Team image= {<img src={img.img2}/>} nama="Aziz Irawan" npm="2226250114" tugas="frontend"/>
                    <Team image= {<img src={img.img3}/>} nama="Choirul Nizam" npm="2226250128" tugas="backhand"/>
                    <Team image= {<img src={img.img4}/>} nama="Masagus Abdurahman" npm="2327250012" tugas="backhand"/>
                </div>
            </div>
        </>
    )
}
        