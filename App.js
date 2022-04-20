import React ,  {useState} from "react";
import {StyleSheet, Text , View} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions";
import {GOOGLE_MAP_KEY} from './googleMapsKey';
const App = () => {
  const [State , setState] = useState({
    pickupCords:{
      latitude:28.7041,
      longitude:77.1025,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },

    droplocationCords:{
      latitude:19.0760,
      longitude: 72.8777,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }
     

  })

  const {pickupCords , droplocationCords} = State





  return(
    <View style={styles.container}>
       <MapView
       style={StyleSheet.absoluteFill}
       initialRegion={pickupCords}
      />
        <MapViewDirections
        origin={pickupCords}
        destination={droplocationCords}
        apikey={"AIzaSyD_lMXvGFGsiO2qhvX7Vs49r-sdICRtrAQ"}
        
        />
    </View>
  );
};

const styles= StyleSheet.create({
  container:{
    flex:1,
  },

});

export default App; 