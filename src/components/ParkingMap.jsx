import React from 'react';
import { Stage, Layer, Rect, Text, Image } from 'react-konva';
import useImage from 'use-image';

const ParkingMap = ({ parkingSpots, onSpotClick }) => {
  const [carImage] = useImage('https://cdn0.iconfinder.com/data/icons/isometric-city-basic-transport/480/car-front-02-256.png');

  return (
    <Stage width={400} height={400}>
      <Layer>
        {parkingSpots.map((spot, index) => (
          <React.Fragment key={spot.id}>
            <Rect
              x={(index % 5) * 80 + 10}
              y={Math.floor(index / 5) * 100 + 10}
              width={60}
              height={80}
              fill={spot.occupied ? '#f28b82' : '#ccff90'}
              stroke="black"
              strokeWidth={2}
              onClick={() => onSpotClick(spot)}
            />
            {spot.occupied && (
              <Image
                image={carImage}
                x={(index % 5) * 80 + 20}
                y={Math.floor(index / 5) * 100 + 15}
                width={40}
                height={40}
              />
            )}
            <Text
              text={`P${spot.id}`}
              x={(index % 5) * 80 + 25}
              y={Math.floor(index / 5) * 100 + 65}
              fontSize={15}
              fill="black"
            />
          </React.Fragment>
        ))}
      </Layer>
    </Stage>
  );
};

export default ParkingMap;
