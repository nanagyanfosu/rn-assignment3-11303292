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
          <Icon style={styles.searchIcon} name="search" size={21} color="black" backgroundColor="white" />
          <TextInput style={styles.input} placeholder='Search'></TextInput>
        </View>
        <Image source={require('./assets/Group 2.png')} style={{ width: 45, height: 45 }} />

      </View>

      <View style={styles.content}>
        <View>
          <Text style={{ fontSize: 28, paddingTop: 50 }}>Categories</Text>
        </View>

        <View style={styles.generalContent}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            <View style={{ flexDirection: 'row', paddingTop: 15 }}>
              <View style={styles.card} backgroundColor="white">
                <Text style={{ fontSize: 21 }}>Exercise</Text>
                <Text>12 tasks</Text>
                <Image source={require('./assets/young woman working online.png')} style={{ padding: 10, marginHorizontal: 20 }} />
              </View>

              <View style={styles.card} backgroundColor="white">
                <Text style={{ fontSize: 21 }}>Study</Text>
                <Text>12 tasks</Text>
                <Image source={require('./assets/young woman working at desk.png')} style={{ padding: 10, marginHorizontal: 20 }} />
              </View>

              <View style={styles.card} backgroundColor="white">
                <Text style={{ fontSize: 21 }}>Exercise</Text>
                <Text>12 tasks</Text>
                <Image source={require('./assets/young woman working online.png')} style={{ padding: 10, marginHorizontal: 20 }} />
              </View>

              <View style={styles.card} backgroundColor="white">
                <Text style={{ fontSize: 21 }}>Study</Text>
                <Text>12 tasks</Text>
                <Image source={require('./assets/young woman working at desk.png')} style={{ padding: 10, marginHorizontal: 20 }} />
              </View>

            </View>
          </ScrollView>
        </View>

      </View>


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'powderblue',
    flex: 1,
    paddingTop: 50,
    padding: 20,
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
    width: 270,
    padding: 5,
  },

  searchIcon: {
    padding: 5,
  },

  input: {
    width: '100%',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 200,
    width: 200,
    padding: 15,
    marginRight: 20,

  }

});

