import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { PermissionsAndroid, Platform } from "react-native";
import Geolocation from "@react-native-community/geolocation";
import { withAuthenticator } from "aws-amplify-react-native";

import Amplify from "aws-amplify";
import Router from "./src/navigation/Root";

import config from "./aws-exports";

navigator.geolocation = require("@react-native-community/geolocation");

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const App = () => {
  const androidPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "MVP Location Permission",
          message:
            "MVP needs access to your location " +
            "so you can take awesome rides.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED)
        console.log("You can use the location");
      else console.log("Location permission denied");
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    if (Platform.OS === "android") androidPermissions();
    else Geolocation.requestAuthorization();
  }, []);

  return (
    <>
      <StatusBar style="dark-content" />
      <Router />
    </>
  );
};

export default withAuthenticator(App);
