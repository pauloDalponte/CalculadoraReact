import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

export default function App() {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['.', '0', '=', '+'],
    ['C'],
  ];
  
  const handlePress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(display).toString());
      } catch (error) {
        setResult('Error');
      }
      setDisplay('');
    } else if (value === 'C') {
      setDisplay('');
      setResult('');
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{display}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.buttonRow}>
            {row.map((button, buttonIndex) => (
              <Button
                key={buttonIndex}
                style={styles.button}
                mode="contained"
                onPress={() => handlePress(button)}
              >
                {button}
              </Button>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  displayContainer: {
    alignItems: 'flex-end',
    padding: 20,
  },
  displayText: {
    fontSize: 40,
  },
  resultText: {
    fontSize: 24,
    color: 'gray',
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  button: {
    marginHorizontal: 5,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
