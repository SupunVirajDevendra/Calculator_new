import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../components/Button';
import Display from '../components/Display';

const CalculatorScreen = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('0');

  const handleNumberPress = (number) => {
    setDisplayValue((prevValue) =>
      prevValue === '0' ? String(number) : prevValue + number
    );
  };

  const handleOperatorPress = (nextOperator) => {
    const value = parseFloat(displayValue);
    setOperator(nextOperator);
    setFirstValue(String(value));
    setDisplayValue('0');
  };

  const handleEqualPress = () => {
    const value = parseFloat(displayValue);
    const first = parseFloat(firstValue);
    let result = 0;

    switch (operator) {
      case '+':
        result = first + value;
        break;
      case '-':
        result = first - value;
        break;
      case '*':
        result = first * value;
        break;
      case '/':
        result = first / value;
        break;
      default:
        result = value;
    }

    setDisplayValue(String(result));
    setOperator(null);
    setFirstValue('0');
  };

  const handleClearPress = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('0');
  };

  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <View style={styles.row}>
          <Button title="7" onPress={() => handleNumberPress(7)} />
          <Button title="8" onPress={() => handleNumberPress(8)} />
          <Button title="9" onPress={() => handleNumberPress(9)} />
          <Button title="/" onPress={() => handleOperatorPress('/')} style={styles.operator} />
        </View>
        <View style={styles.row}>
          <Button title="4" onPress={() => handleNumberPress(4)} />
          <Button title="5" onPress={() => handleNumberPress(5)} />
          <Button title="6" onPress={() => handleNumberPress(6)} />
          <Button title="*" onPress={() => handleOperatorPress('*')} style={styles.operator} />
        </View>
        <View style={styles.row}>
          <Button title="1" onPress={() => handleNumberPress(1)} />
          <Button title="2" onPress={() => handleNumberPress(2)} />
          <Button title="3" onPress={() => handleNumberPress(3)} />
          <Button title="-" onPress={() => handleOperatorPress('-')} style={styles.operator} />
        </View>
        <View style={styles.row}>
          <Button title="0" onPress={() => handleNumberPress(0)} />
          <Button title="C" onPress={handleClearPress} style={styles.operator} />
          <Button title="=" onPress={handleEqualPress} style={styles.operator} />
          <Button title="+" onPress={() => handleOperatorPress('+')} style={styles.operator} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flex: 3,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  operator: {
    backgroundColor: '#f0ad4e',
  },
});

export default CalculatorScreen;
