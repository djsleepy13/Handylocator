import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function BookingScreen({ route, navigation }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [details, setDetails] = useState('');
  const handymanId = route?.params?.handymanId;

  const handleSubmit = () => {
    // For now, just show an alert
    Alert.alert('Booking Submitted', `Name: ${name}\nDate: ${date}\nDetails: ${details}\nHandyman ID: ${handymanId || 'N/A'}`);
    setName('');
    setDate('');
    setDetails('');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Book a Handyman</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Date (e.g. 2024-06-01)"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Details"
        value={details}
        onChangeText={setDetails}
        multiline
      />
      <Button title="Submit Booking" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
}); 