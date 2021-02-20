import React from 'react';
import {
  View, Image, Text, Pressable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

import Denise from '../../assets/images/Denise.webp';
import Jacob from '../../assets/images/Jacob.webp';
import Aica from '../../assets/images/Aica.webp';
import styles from './styles';

const PersonRow = (props) => {
  const {
    person, onPress, isSelected,
  } = props;

  const getImage = () => {
    if (person.name === 'Denise') {
      return Denise;
    }
    if (person.name === 'Jacob') {
      return Jacob;
    }
    return Aica;
  };

  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, {
        backgroundColor: isSelected ? '#efefef' : 'white',
      }]}
    >
      <Image
        style={styles.image}
        source={getImage()}
      />
      <View style={styles.middleContainer}>
        <Text style={styles.type}>{person.name}</Text>
        <Text style={styles.time}>4:05pm drop off</Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name="pricetag" size={18} color="#42d742" />
        <Text style={styles.price}>
          est. $
          {person.price}
        </Text>
      </View>
    </Pressable>
  );
};

export default PersonRow;

PersonRow.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};
