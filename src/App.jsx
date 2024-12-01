import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

  const handleBooking = (spotId, bookingDetails) => {
    setParkingSpots((prev) =>
      prev.map((spot) =>
        spot.id === spotId
          ? { ...spot, occupied: true, booking: bookingDetails }
          : spot
      )
    );
  };

  return (
    <Router>
      <Container>
        <Title>Sistem Pengelolaan Parkiran Mobil</Title>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ParkingMap
                  parkingSpots={parkingSpots}
                  onSpotClick={(spot) => {
                    if (!spot.occupied) {
                      setSelectedSpot(spot);
                    }
                  }}
                />
                {selectedSpot && (
                  <BookingForm
                    spot={selectedSpot}
                    onBooking={handleBooking}
                  />
                )}
              </>
            }
          />
          <Route
            path="/confirmation"
            element={<BookingDetail parkingSpots={parkingSpots} />}
          />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
