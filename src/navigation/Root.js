/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PropTypes from 'prop-types';

import HomeNavigator from './Home';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const DummyScreen = (props) => {
  const { name } = props;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{name}</Text>
    </View>
  );
};

const RootNavigator = () => (
  <NavigationContainer>
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={HomeNavigator} />

      <Drawer.Screen name="Your Trips">
        {() => <DummyScreen name="Your Trips" />}
      </Drawer.Screen>

      <Drawer.Screen name="Help">
        {() => <DummyScreen name="Help" />}
      </Drawer.Screen>

      <Drawer.Screen name="Wallet">
        {() => <DummyScreen name="Wallet" />}
      </Drawer.Screen>

      <Drawer.Screen name="Settings">
        {() => <DummyScreen name="Settings" />}
      </Drawer.Screen>

    </Drawer.Navigator>
  </NavigationContainer>
);

export default RootNavigator;

DummyScreen.propTypes = {
  name: PropTypes.string.isRequired,
};
