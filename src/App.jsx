import React, { useState } from 'react';
import ParkingMap from './components/ParkingMap';
import './App.css';
import BookingDetail from './components/BookingDetails';
import BookingForm from './components/BookingForm';
import { Container, Title } from './styled';

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
    <Container>
      <Title>Sistem Pengelolaan Parkiran Mobil</Title>
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
    </Container>
  );
}

export default App;
