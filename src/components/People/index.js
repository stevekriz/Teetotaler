import React from "react";
import { View, Text, Pressable } from "react-native";
import PropTypes from "prop-types";

import PersonRow from "../PersonRow";
import peopleData from "../../assets/data/people";

import styles from "./styles";

const People = ({ typeState, onSubmit }) => {
  const [selectedType, setSelectedType] = typeState;
  return (
    <View>
      {peopleData.map((person) => (
        <PersonRow
          key={person.id}
          person={person}
          type={person.type}
          isSelected={person.type === selectedType}
          onPress={() => setSelectedType(person.type)}
        />
      ))}
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text style={styles.text}>Confirm Driver</Text>
      </Pressable>
    </View>
  );
};

export default People;

People.defaultProps = {
  typeState: null,
};

People.propTypes = {
  typeState: PropTypes.arrayOf(PropTypes.any.isRequired),
  onSubmit: PropTypes.func.isRequired,
};
