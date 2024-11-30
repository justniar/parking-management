import React from 'react'
import { Layer, Rect, Stage, Text } from 'react-konva';

const parkingSpots = [
    {id: 1, x:50, y:50, accupied: false},
    {id: 2, x:150, y:50, accupied: true},
    {id: 3, x:50, y:150, accupied: false},
    {id: 4, x:150, y:150, accupied: true},
];

function ParkingMap ({selectedParking, setSelectedParking}) {
  return (
    <Stage width={300} height={300}>
        <Layer>
            {parkingSpots.map((spot)=>(
                <React.Fragment key={spot.id}>
                    <Rect
                        x={spot.x}
                        y={spot.y}
                        width={80}
                        height={80}
                        fill={spot.accupied? 'red' : 'green'}
                        stroke="black"
                        strokeWidth={2}
                        onClick={()=>!spot.accupied && setSelectedParking(spot)}
                    />
                    <Text
                        text={`P${spot.id}`}
                        x={spot.x + 25}
                        y={spot.y + 30}
                        fontSize={20}
                        fill="white"
                    />
                </React.Fragment>
            ))}
        </Layer>
    </Stage>
  )
}

export default ParkingMap;