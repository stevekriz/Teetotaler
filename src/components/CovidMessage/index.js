import React from 'react';
import { View, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const CovidMessage = () => (
  <View style={styles.container}>
    <View
      style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}
    >
      <MaterialIcons name='shield' color='white' size={18} />
      <Text style={styles.title}>Travel only if necessary</Text>
    </View>
    <Text style={styles.text}>
      Help flatten the curve. If you must travel, please exercise caution for
      your safety and the safety of our community.
    </Text>
    <Text style={styles.learnMore}>Learn more</Text>
  </View>
);

export default CovidMessage;
