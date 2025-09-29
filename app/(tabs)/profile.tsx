import { Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-purple-500">
      <Text className="text-xl font-bold text-white">
        Profile
      </Text>
      <Text className="text-sm text-white mt-2">
        Your account settings
      </Text>
    </View>
  );
}
