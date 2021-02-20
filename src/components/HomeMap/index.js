import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { API, graphqlOperation } from 'aws-amplify';
import { listCars } from '../../../Users/stevekriz/Desktop/minimum-02313db8f7dfff138c9a4466e94126e5a53432f7/graphql/queries';
import Aica from '../../assets/images/Aica.webp';
import Darien from '../../assets/images/Darien.webp';
import Denise from '../../assets/images/Denise.webp';
import Jacob from '../../assets/images/Jacob.webp';

const HomeMap = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await API.graphql(
          graphqlOperation(
            listCars,
          ),
        );
        setCars(response.data.listCars.items);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    };

    fetchCars();
  }, []);

  const getImage = (id) => {
    if (id === 'ee7ed2f1-2b8f-47a9-bdcc-4cc37b0bc5fb') {
      return Aica;
    }
    if (id === '3a042d74-eb14-4733-883c-7c2b8415dae4') {
      return Darien;
    }
    if (id === '19178ff4-ca16-42a6-a86a-3269734547b2') {
      return Denise;
    }
    return Jacob;
  };

  return (
    <MapView
      style={{ width: '100%', height: '100%' }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      initialRegion={{
        latitude: 37.7760,
        longitude: -122.4173,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {cars.map((car) => (
        <Marker
          key={car.id}
          coordinate={{ latitude: car.latitude, longitude: car.longitude }}
        >
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              resizeMode: 'contain',
            }}
            source={getImage(car.id)}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default HomeMap;
