import React from 'react';
import ParkingMap from './components/ParkingMap';
import BookingForm from './components/BookingForm';
import BookingDetails from './components/BookingDetails';
import './App.css';

function App() {
  const [selectedParking, setSelectedParking] = React.useState(null);
  const [bookings, setBookings] = React.useState([]);

  const handleBooking = (booking) => {
    setBookings([...bookings, booking]);
    setSelectedParking(null);
  };

  return (
    <div className="App">
      <h1>Sistem Pengelolaan Parkiran Mobil</h1>
      <ParkingMap selectedParking={selectedParking} setSelectedParking={setSelectedParking} />
      {selectedParking && (
        <BookingForm parkingSpot={selectedParking} onBooking={handleBooking} />
      )}
      <BookingDetails bookings={bookings} />
    </div>
  );
}

export default App;
