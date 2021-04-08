import React, { useState } from "react";
import { View, Dimensions, Alert } from "react-native";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { useRoute, useNavigation } from "@react-navigation/native";
import RouteMap from "../../components/RouteMap";
import People from "../../components/People";
import { createOrder } from "../../../Users/stevekriz/Desktop/minimum-02313db8f7dfff138c9a4466e94126e5a53432f7/graphql/mutations";

const SearchResults = () => {
  const typeState = useState(null);

  const route = useRoute();
  const navigation = useNavigation();

  const { originPlace, destinationPlace } = route.params;

  const onSubmit = async () => {
    const [type] = typeState;
    if (!type) return;

    try {
      const userInfo = await Auth.currentAuthenticatedUser();

      const date = new Date();
      const input = {
        createdAt: date.toISOString(),
        type,
        originLatitude: originPlace.details.geometry.location.lat,
        originLongitude: originPlace.details.geometry.location.lng,

        destinationLatitude: destinationPlace.details.geometry.location.lat,
        destinationLongitude: destinationPlace.details.geometry.location.lng,
        userId: userInfo.attributes.sub,
        carId: "1",
      };

      await API.graphql(
        graphqlOperation(createOrder, {
          input,
        })
      );

      Alert.alert(
        "Order Confirmation",
        "Your order has been submitted successfully!",
        [
          {
            text: "Go Home",
            onPress: () => navigation.navigate("Home"),
          },
        ]
      );
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={{ display: "flex", justifyContent: "space-between" }}>
      <View style={{ height: Dimensions.get("window").height - 350 }}>
        <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>
      <View style={{ height: 400 }}>
        <People typeState={typeState} onSubmit={onSubmit} />
      </View>
    </View>
  );
};

export default SearchResults;
