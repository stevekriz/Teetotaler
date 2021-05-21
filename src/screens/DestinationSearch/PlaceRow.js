import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';

const PlaceRow = ({ data }) => (
  <View style={styles.row}>
    <View style={styles.iconContainer}>
      {data.description === 'Home' ? (
        <Entypo name='home' size={20} color='white' />
      ) : (
        <Entypo name='location-pin' size={20} color='white' />
      )}
    </View>
    <Text style={styles.locationText}>{data.description || data.vicinity}</Text>
  </View>
);

export default PlaceRow;

PlaceRow.defaultProps = {
  data: null,
};

PlaceRow.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
    vicinity: PropTypes.string,
  }),
};
