import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import MapView from "react-native-maps";

export default function HomeScreen() {
  const [showList, setShowList] = useState(false);

  const toggleView = () => {
    setShowList(!showList);
  };

  return (
    <View className="flex-1 bg-red-500">
      {/* Header with button */}
      <View className="flex-row justify-between items-center p-4 pt-12">
        <Text className="text-xl font-bold text-white">
          Welcome to Barjeux!
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
          <MapView 
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 45.750000, // Lyon, France
              longitude: 4.850000,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            zoomControlEnabled={true}
            showsUserLocation={true}
            showsMyLocationButton={true}
          />
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
