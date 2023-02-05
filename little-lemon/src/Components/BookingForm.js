import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router";


export default function BookingForm() {
 
  const fetchData = window.fetchAPI;
  const [date,setDate] = useState(new Date())
  const [ availableTimes,setAvailableTimes] = useState(['17:00','18:00','19:00','20:00','21:00','22:00'])
  const [guestNumber,setGuestNumber]=useState(1)
  const [selectedTime,setSelectedTime] = useState(availableTimes[0])
  const navigate = useNavigate();

  const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

  const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(new Date(date).getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

const submitAPI = function(formData) {
  return true;
};

const handleSubmit = (e) => {
  e.preventDefault();
  if(submitAPI({date,selectedTime,guestNumber})){
    navigate("/bookingconfirmed")
  }
  else{
    console.log('error')
  }
}

  const  updateTimes = (e)=>{
    setDate(e.target.value)
    setAvailableTimes(fetchAPI(date))
  }
  return (
    <>

      <form className='booking-form' onSubmit={(e)=>handleSubmit(e)}>
      <div className='card-head'>
      <h2>Little Lemon</h2>
      <div className='title' >Book your place now !</div>
      </div>
      <div className='form-content'>
      
    <label htmlFor="res-date">Choose date</label>
    <input className='input-wrap' type="date" id="res-date" onChange={(e)=>updateTimes(e)} value={date}/>
    <label  htmlFor="res-time">Choose time</label>
    <select className='input-wrap' id="res-time " onChange={(e)=>setSelectedTime(e.target.value)}>
        {availableTimes.map((item,index)=>{
            return <option key={index}>{item}</option>
        })}

    </select>
    <label  htmlFor="guests">Number of guests</label>
    <input className='input-wrap' type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e)=>setGuestNumber(e.target.value)} value={guestNumber}/>
    <label  htmlFor="occasion">Occasion</label>
    <select className='input-wrap' id="occasion">
       <option>Birthday</option>
       <option>Anniversary</option>
    </select>
    <input className='reserve-table-btn' type="submit" value="Make Your reservation"/>
      </div>
 
 </form>

    </>
   
  )
}
