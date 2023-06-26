import React, {useState, useEffect} from 'react';
import MapView, {Marker, Circle, Callout} from 'react-native-maps';
import { StyleSheet, View, Text, Image} from 'react-native';
/*import * as Location from 'expo-location';*/

export default function App() {
  /* markers for each neighbourhood/area in vancouver*/
  this.state = {
    markers: [
      {
        title: 'Arbutus Ridge',
        color: 'green',
        rgba: 'rgba(0, 255, 0, 0.2)',
        coordinates:{
          latitude: 49.2536,
          longitude: -123.1604,
          index: 2
        },
      },
      {
        title: 'Central Business District',
        color: 'red',
        rgba: 'rgba(255, 0, 0, 0.2)',
        coordinates:{
          latitude: 49.28417,
          longitude: -123.12111,
          index: 3
        },
      },
      {
        title: 'Dunbar-Southlands',
        color: 'green',
        rgba: 'rgba(0, 255, 0, 0.2)',
        coordinates:{
          latitude: 49.2500,
          longitude: -123.1852,
          index: 4
        },
      },
      {
        title: 'Fairview', 
        color: 'red',
        rgba: 'rgba(255, 0, 0, 0.2)',
        coordinates:{
          latitude: 49.2635,
          longitude: -123.1313,
          index: 5
        },
      },
      {
        title: 'Grandview-Woodland', 
        color: 'red',
        rgba: 'rgba(255, 0, 0, 0.2)',
        coordinates:{
          latitude: 49.2767,
          longitude: -123.0695,
          index: 6
        },
      },
      {
        title: 'Hastings-Sunrise', 
        color: 'orange',
        rgba: 'rgba(255, 165, 0, 0.3)',
        coordinates:{
          latitude: 49.2808,
          longitude: -123.0438,
          index: 7
        },
      },
      {
        title: 'Kensington-Cedar Cottage', 
        color: 'orange',
        rgba: 'rgba(255, 165, 0, 0.3)',
        coordinates:{
          latitude: 49.25000,
          longitude: -123.07583,
          index: 8
        },
      },
      {
        title: 'Kerrisdale', 
        color: 'green',
        rgba: 'rgba(0, 255, 0, 0.2)',
        coordinates:{
          latitude: 49.2341,
          longitude: -123.1554,
          index: 9
        },
      },
      {
        title: 'Killarney', 
        color: 'orange',
        rgba: 'rgba(255, 165, 0, 0.3)',
        coordinates:{
          latitude: 49.2202,
          longitude: -123.0413,
          index: 10
        },
      },
      {
        title: 'Kitsilano',
        color: 'orange',
        rgba: 'rgba(255, 165, 0, 0.3)',
        coordinates:{
          latitude: 49.2684,
          longitude: -123.1683,
          index: 11
        },
      },
      {
        title: 'Marpole',
        color: 'orange',
        rgba: 'rgba(255, 165, 0, 0.3)',
        coordinates:{
          latitude: 49.2107,
          longitude: -123.1302,
          index: 12
        },
      },
      {
        title: 'Mount Pleasant', 
        color: 'red',
        rgba: 'rgba(255, 0, 0, 0.2)',
        coordinates:{
          latitude: 49.2628,
          longitude: -123.0995,
          index: 13
        },
      },
      {
        title: 'Musqueam', 
        color: 'green',
        rgba: 'rgba(0, 255, 0, 0.2)',
        coordinates:{
          latitude: 49.2311,
          longitude: -123.2029,
          index: 14
        },
      },
      {
        title: 'Oakridge', 
        color: 'orange',
        rgba: 'rgba(255, 165, 0, 0.3)',
        coordinates:{
          latitude: 49.2261,
          longitude: -123.1166,
          index: 15
        },
      },
      {
        title: 'Renfrew-Collingwood', 
        color: 'orange',
        rgba: 'rgba(255, 165, 0, 0.3)',
        coordinates:{
          latitude: 49.2445,
          longitude: -123.0422,
          index: 16
        },
      },
      {
        title: 'Riley Park', 
        color: 'green',
        rgba: 'rgba(0, 255, 0, 0.2)',
        coordinates:{
          latitude: 49.2405,
          longitude: -123.1015,
          index: 17
        },
      },
      {
        title: 'Shaughnessy', 
        color: 'green',
        rgba: 'rgba(0, 255, 0, 0.2)',
        coordinates:{
          latitude: 49.2453,
          longitude: -123.1413,
          index: 18
        },
      },
      {
        title: 'South Cambie', 
        color: 'green',
        rgba: 'rgba(0, 255, 0, 0.2)',
        coordinates:{
          latitude: 49.2452,
          longitude: -123.1208,
          index: 19
        },
      },
      {
        title: 'Stanley Park', 
        color: 'green',
        rgba: 'rgba(0, 255, 0, 0.2)',
        coordinates:{
          latitude: 49.3043,
          longitude: -123.1443,
          index: 20
        },
      },
      {
        title: 'Strathcona', 
        color: 'red',
        rgba: 'rgba(255, 0, 0, 0.2)',
        coordinates:{
          latitude: 49.2765,
          longitude: -123.0874,
          index: 21
        },
      },
      {
        title: 'Sunset', 
        color: 'green',
        rgba: 'rgba(0, 255, 0, 0.2)',
        coordinates:{
          latitude: 49.2183,
          longitude: -123.0910,
          index: 22
        },
      },
      {
        title: 'Victoria-Fraserview', 
        color: 'orange',
        rgba: 'rgba(255, 165, 0, 0.3)',
        coordinates:{
          latitude: 49.2203,
          longitude: -123.0659,
          index: 23
        },
      },
      {
        title: 'West End', 
        color: 'red',
        rgba: 'rgba(255, 0, 0, 0.2)',
        coordinates:{
          latitude: 49.2901,
          longitude: -123.1376,
          index: 24
        },
      },
      {
        title: 'West Point Grey', 
        color: 'green',
        rgba: 'rgba(0, 255, 0, 0.2)',
        coordinates:{
          latitude: 49.2610,
          longitude: -123.2001,
          index: 25
        },
      },
    ]
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Sergeant Dog <Image style={styles.logo} source={require("./assets/appicon2.png")}/></Text>
      <MapView
        style={styles.map}
        showsMyLocationButton={true}
        showsCompass={true}
        zoomEnabled={true}
        rotateEnabled={true}
        initialRegion={{
          latitude: 49.246292,
          longitude: -123.116226,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2
        }}
        showsUserLocation={true}
        followsUserLocation={false}
        mapPadding={{
          left: 25,
          right: 25,
          top: 50, 
          bottom: 0
        }}
        >
        {this.state.markers.map((marker, index) => (
         <Marker
              key = {index}
              coordinate={marker.coordinates}
              pinColor = {marker.color}
              >
              <Callout><Text>
                {marker.title + '\n'}
                Crime statistics in this area:
              </Text></Callout>
          </Marker>
          )
        )}
        {this.state.markers.map((marker, index) => (
          <Circle
          key = {index}
          center={marker.coordinates}
          fillColor={marker.rgba}
          strokeColor={marker.color}
          radius={1500}/>
        )
        )}
        </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(0, 73, 126)'
  },
  map: {
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 30,
    height: 30
  },
  logoText: {
    color: 'white',
    fontSize: 25,
    paddingBottom: 15,
  }
});
