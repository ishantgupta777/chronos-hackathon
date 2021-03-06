import React from "react";
import { View, Picker, StyleSheet } from "react-native";

 const DropDown = (props) => {
  const options = props.options || [];
  const placeholder = props.placeholder || 'Choose Option'
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={props.value}
        style={styles.picker}
        mode='dropdown'
        onValueChange={itemValue => props.setValue(itemValue)}
      >
        <Picker.Item label={placeholder} value={null} />
        {options.map(option => <Picker.Item key={option} label={option} value={option} />)}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
		flexDirection: 'row'
  },
  picker: {
    width: '80%',
    backgroundColor: 'white',
    height: 35,
    borderRadius: 6,
    marginTop: 20
  }
});

export default DropDown;