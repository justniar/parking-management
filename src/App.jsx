import React, { useState } from 'react';
import ParkingMap from './components/ParkingMap';
import './App.css';
import BookingDetail from './components/BookingDetails';
import BookingForm from './components/BookingForm';

function App() {
  const [parkingSpots, setParkingSpots] = useState(
    Array(10).fill({}).map((_, idx) => ({
      id: idx + 1,
      occupied: false,
      booking: null,
    }))
  );
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleBooking = (spotId, bookingDetails) => {
    setParkingSpots((prev) =>
      prev.map((spot) =>
        spot.id === spotId
          ? { ...spot, occupied: true, booking: bookingDetails }
          : spot
      )
    );
    setShowModal(false);
  };

  return (
    <div className="App">
      <h1>Sistem Pengelolaan Parkiran Mobil</h1>
      <ParkingMap
        parkingSpots={parkingSpots}
        onSpotClick={(spot) => {
          if (!spot.occupied) {
            setSelectedSpot(spot);
            setShowModal(true);
          }
        }}
      />
      {showModal && (
        <BookingForm
          spot={selectedSpot}
          onClose={() => setShowModal(false)}
          onBooking={handleBooking}
        />
      )}
      <BookingDetail parkingSpots={parkingSpots} />
    </div>
  );
}

export default App;
