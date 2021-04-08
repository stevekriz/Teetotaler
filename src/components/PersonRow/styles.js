import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  middleContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  type: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  time: {
    color: "#5d5d5d",
  },
  rightContainer: {
    width: 100,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  price: {
    fontWeight: "600",
    fontSize: 18,
    marginLeft: 5,
  },
});

export default styles;
