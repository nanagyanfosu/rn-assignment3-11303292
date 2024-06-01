import React from 'react';
import { StyleSheet, View, ScrollView, Text, SafeAreaView, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <View style={{ flexDirection: 'column' }}>
          <Text style={{ fontSize: 36 }}>Hello, Devs</Text>
          <Text>14 tasks today</Text>
        </View>
        <Image source={require('./assets/person.png')} style={{ width: 40, height: 40, backgroundColor: 'black', borderRadius: 100 }} />
      </View>

      <View style={styles.searchRow}>
        <View style={styles.searchSection}>
          <Icon style={styles.searchIcon} name="search" size={23} color="black" backgroundColor="white" />
          <TextInput style={styles.input} placeholder='Search'></TextInput>
        </View>
        <Image source={require('./assets/Group 2.png')} style={{ width: 45, height: 45 }} />

      </View>


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'powderblue',
    flex: 1,
    paddingTop: 50,
    padding: 30,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 30,
  },

  searchSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 45,
    width: 240,
    padding: 5,
  },

  searchIcon: {
    padding: 5,
  },

});

