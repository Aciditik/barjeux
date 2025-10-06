import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import { darkMapStyle } from "../../assets/mapStyles";
import { markers } from "../../assets/markers";

export default function HomeScreen() {
  const [showList, setShowList] = useState(false);

  const toggleView = () => {
    setShowList(!showList);
  };

  const region = {
    latitude: 45.755645, // Center between both markers
    longitude: 4.847578,
    latitudeDelta: 1,
    longitudeDelta: 1,
  }

  return (
    <View className="flex-1 bg-red-500">
      {/* Header */}
      <View className="flex-row justify-between items-center p-4 pt-12">
        <Text className="text-xl font-bold text-white">
          Welcome to Barjeux !
        </Text>
        <TouchableOpacity
          onPress={toggleView}
          className="bg-white/20 p-3 rounded-full"
        >
          <Ionicons 
            name={showList ? "list" : "location"} 
            size={24} 
            color="white" 
          />
        </TouchableOpacity>
      </View>

      {/* Content area */}
      <View className="flex-1">
        {showList ? (
          <View style={{ flex: 1 }}>
            <MapView
              style={StyleSheet.absoluteFill}
              initialRegion={region}
              showsMyLocationButton={true}
              showsUserLocation={true}
              mapType="standard"
              customMapStyle={darkMapStyle}
            >
              {markers.map((marker, index) => (
                <Marker key={index} coordinate={marker}>
                  <Callout>
                    <View>
                      <Text>{marker.name}</Text>
                    </View>
                  </Callout>
                </Marker>
              ))}
            </MapView>
          </View>
        ) : (
          <View className="flex-1 items-center justify-center">
            <Text className="text-lg text-white text-center">
              Click the pin button to see the map!
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}
