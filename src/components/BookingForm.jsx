import React, { useState } from 'react'

function BookingForm({parkingSpot, onBooking}){
    const [name, setName] = useState('');
    const [vehicleNumber, setVehicleNumber] = useState('');
    const [duration, setDuration] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onBooking({name, vehicleNumber, duration, parkingSpot});
        setName('');
        setVehicleNumber('');
        setDuration('');
        alert('Pemesanan Berhasil!');
    }

  return (
    <form onSubmit={handleSubmit}>
        <h3>Pemesanan Tempat Parkir - Spot {parkingSpot.id}</h3>
        <label>
            nama:
            <input 
                type='text'
                value={name} 
                onChange={(e)=>setName(e.target.value)} 
                required
            />
        </label>
        <label>
            Nomor Kendaraan:
            <input
                type='text'
                value={vehicleNumber}
                onChange={(e)=>setVehicleNumber(e.target.value)}
                required
            />
        </label>
        <label>
            Durasi:
            <input
                type='number'
                value={duration}
                onChange={(e)=>setDuration(e.target.value)}
                required
            />
        </label>
        <button type='submit'>Pesan</button>
    </form>
  )
}

export default BookingForm