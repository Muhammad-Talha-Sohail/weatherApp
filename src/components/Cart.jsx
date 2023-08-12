import React, { useState, useEffect } from 'react';
import styles from './Cart.module.css';
import Cloud from '../images/cloud.png';
import Hot from '../images/hotDay.png';
import axios from 'axios';
import { LiaWaterSolid } from 'react-icons/Lia';
import { PiWindThin } from 'react-icons/Pi';

import { AiOutlineSearch } from 'react-icons/Ai';
const Cart = () => {
  const [Data, setData] = useState({
    celcius: 20,
    humidity: 20,
    city: "London",
    speed: 2,
    weather:"Cloud"

  })
  const [City, setCity] = useState("")

  useEffect(() => {

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${City}&lat={lat}&lon={lon}&appid=5eda2c006d03b798bdb2c8c3700add96&units=metric`;
    axios.get(apiUrl)
      .then(res => {
        let imgPath;
        if(res.data.weather[0].main=="Cloud")
        {
       imgPath=Cloud;
        }
        else if(res.data.weather[0].main=="Cloud")
        {
       imgPath=Cloud;
        }





        setData({
          ...Data,
          celcius: res.data.main.temp,
          humidity: res.data.main.humidity,
          city: res.data.name,
          speed: res.data.wind.speed,
          weather:res.data.weather[0].main
        })
      })
      .catch(res => console.log(err)
           
      
      );

  }, [])





  const handleCity = () => {
    if(City!=="")
    {    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${City}&lat={lat}&lon={lon}&appid=5eda2c006d03b798bdb2c8c3700add96&units=metric`;
    axios.get(apiUrl)
      .then(res => {
        setData({
          ...Data,
          celcius: res.data.main.temp,
          humidity: res.data.main.humidity,
          city: res.data.name,
          speed: res.data.wind.speed,
          weather:res.data.weather[0].main
        })
      })

      .catch(res => console.log(err));
    }

  }

    



  return (
    <div className={styles.container} >

      <div className={styles.weather}>
        <div className={styles.search}>
          <input
            type="text"
            placeholder='Enter city Name'
            value={City}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={handleCity} >  <AiOutlineSearch style={{ width: "30px",height:"30px" ,color:"rgb(160, 255, 255)"}} />
  </button>
        </div>



        <div className={styles.winfo}>
          <img src={Cloud} alt="Weather" />
          <h2>{Data.celcius} <sup>o</sup>C</h2>
          <h2 id={styles.h2}>{Data.city}</h2>
          <p>It's a {Data.weather} day </p>
        </div>

        <div className={styles.detail}>
          <div className={styles.col}>
         <div> <LiaWaterSolid style={{width:"70px",height:"100%",paddingRight:"10px"}}/></div>
            <div><p>{Data.humidity} %</p>
            <p>Humidity</p>
            </div>
          </div>

          <div className={styles.col}>
          <div> <PiWindThin style={{width:"70px",height:"100%",paddingRight:"5px"}}/></div>


            <div>
              <p>{Data.speed} kw/h</p>
              <p> Wind</p>

            </div>
          </div>
        </div>

      </div>

<div>

</div>


    </div >
  )
}

export default Cart