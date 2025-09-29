import { Text, View } from "react-native";

export default function SearchScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-500">
      <Text className="text-xl font-bold text-white">
        Search Screen
      </Text>
      <Text className="text-sm text-white mt-2">
        Find what you're looking for
      </Text>
    </View>
  );
}
