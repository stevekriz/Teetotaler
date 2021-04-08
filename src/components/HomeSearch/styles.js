import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: "#e7e7e7",
    margin: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputText: {
    fontSize: 19,
    fontWeight: "500",
    color: "black",
  },
  timeContainer: {
    flexDirection: "row",
    width: 100,
    padding: 10,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#dbdbdb",
  },
  iconContainer: {
    backgroundColor: "#b3b3b3",
    padding: 10,
    borderRadius: 25,
  },
  destinationText: {
    marginLeft: 10,
    fontWeight: "500",
    fontSize: 16,
  },
});

export default styles;
