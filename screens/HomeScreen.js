import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';

const carpenters = [
  { id: 1, name: 'JOHN STONES', stars: 1 },
  { id: 2, name: 'ALEX PETERS', stars: 2 },
  { id: 3, name: 'RAJ PERSAUD', stars: 3 },
  { id: 4, name: 'SHAWNN ADAMS', stars: 4 },
  { id: 5, name: 'BEN ROBERTS', stars: 5 },
  { id: 6, name: 'TYLER SMITH', stars: 3 },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>CARPENTORS</Text>
      <ScrollView>
        {carpenters.map((c) => (
          <View style={styles.carpenter} key={c.id}>
            <Image
              source={require('../assets/blank-dp.png')}
              style={styles.avatar}
            />
            <Text style={styles.name}>{c.name}</Text>
            <Text style={styles.stars}>
              {'★'.repeat(c.stars) + '☆'.repeat(5 - c.stars)}
            </Text>
            <Button title="Book" onPress={() => navigation.navigate('Booking', { handymanId: c.id })} />
          </View>
        ))}
      </ScrollView>
      <View style={styles.bottomNav}>
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Map" onPress={() => navigation.navigate('Map')} />
        <Button title="Booking" onPress={() => navigation.navigate('Booking')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    maxWidth: 400,
    alignSelf: 'center',
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  header: {
    textAlign: 'center',
    padding: 10,
    fontSize: 24,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  carpenter: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ddd',
    marginRight: 10,
  },
  name: {
    flex: 1,
    fontWeight: 'bold',
  },
  stars: {
    color: 'gold',
    fontSize: 16,
    marginRight: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
    backgroundColor: '#eee',
  },
}); 