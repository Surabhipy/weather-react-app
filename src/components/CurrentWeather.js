import React from 'react';
import { Card } from 'react-bootstrap';
import { WiCloud, WiDaySunny, WiRain, WiSnow } from 'react-icons/wi'; // Import icons from React Icons

const CurrentWeather = ({ city, temperature, description }) => {
  let weatherIcon;

  // Determine which icon to display based on weather description
  switch (description) {
    case 'Clouds':
      weatherIcon = <WiCloud className='weather-svg'/>;
      break;
    case 'clear sky':
      weatherIcon = <WiDaySunny className='weather-svg' />;
      break;
    case 'Rain':
      weatherIcon = <WiRain className='weather-svg' />;
      break;
    case 'Snow':
      weatherIcon = <WiSnow className='weather-svg'/>;
      break;
    default:
      weatherIcon = null;
      break;
  }

  return (
    <div>
      <h2 className='h2'>Current Weather</h2>
      <Card> 
        <Card.Body className="card-background">
          <Card.Title className='cardCity-Title'>{city}</Card.Title>
          <Card.Text className='card-temperature'>{temperature}°F</Card.Text>
          <Card.Text className='weather-icon'>
            {weatherIcon && (
              <span style={{ marginLeft: '5px' }}>{weatherIcon}</span>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CurrentWeather;