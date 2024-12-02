import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ParkingMap from './components/ParkingMap';
import './App.css';
import BookingDetail from './components/BookingDetails';
import BookingForm from './components/BookingForm';
import { Container, ParkButton, ParkingGate, Title } from './styled';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  const [parkingSpots, setParkingSpots] = useState(
    Array(10).fill({}).map((_, idx) => ({
      id: idx + 1,
      occupied: false,
      booking: null,
    }))
  );
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [hasParked, setHasParked] = useState(false);

  const handleBooking = (spotId, bookingDetails) => {
    setParkingSpots((prev) =>
      prev.map((spot) =>
        spot.id === spotId
          ? { ...spot, occupied: true, booking: bookingDetails }
          : spot
      )
    );
  };

  const handleParkClick = () => {
    setHasParked(true);
  }

  return (
    <Router>
      {!hasParked? (
          <>
          <ParkingGate>
            <img 
              src="https://res.cloudinary.com/dwynanuof/image/upload/v1733054170/gate_d6lzbj.jpg"
              alt="Parking Gate"
            />
            <ParkButton onClick={handleParkClick}>Parkir</ParkButton>
          </ParkingGate>
          </>
        ):(
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
                      onClose={() => setSelectedSpot(null)} 
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
        )}
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover />
    </Router>
  );
}

export default App;
