import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Display = ({ value }) => {
  return (
    <View style={styles.display}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 48,
  },
});

export default Display;
