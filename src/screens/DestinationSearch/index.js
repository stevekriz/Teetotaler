import React, { useState, useEffect } from "react";
import { View, SafeAreaView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import PlaceRow from "./PlaceRow";

const homePlace = {
  description: "Home",
  geometry: { location: { lat: 37.7760447, lng: -122.4173375 } },
};
const workPlace = {
  description: "Work",
  geometry: { location: { lat: 37.8079996, lng: -122.4177434 } },
};

const DestinationSearch = () => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  const navigation = useNavigation();

  const checkNavigation = () => {
    if (originPlace && destinationPlace) {
      navigation.navigate("SearchResults", {
        originPlace,
        destinationPlace,
      });
    }
  };

  useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="From"
          onPress={(data, details = null) => {
            setOriginPlace({ data, details });
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          currentLocation
          currentLocationLabel="Current location"
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: "",
            language: "en",
          }}
          renderRow={(GooglePlaceData) => <PlaceRow data={GooglePlaceData} />}
          renderDescription={(GooglePlaceData) =>
            GooglePlaceData.description || GooglePlaceData.vicinity
          }
          predefinedPlaces={[homePlace, workPlace]}
        />
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) =>
            setDestinationPlace({ data, details })
          }
          enablePoweredByContainer={false}
          suppressDefaultStyles
          currentLocation
          currentLocationLabel="Current location"
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autocompleteContainer,
              top: 55,
            },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: "",
            language: "en",
          }}
          renderRow={(GooglePlaceData) => <PlaceRow data={GooglePlaceData} />}
          renderDescription={(GooglePlaceData) =>
            GooglePlaceData.description || GooglePlaceData.vicinity
          }
          predefinedPlaces={[homePlace, workPlace]}
        />

        <View style={styles.circle} />
        <View style={styles.line} />
        <View style={styles.square} />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
