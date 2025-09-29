import { Text, View } from "react-native";

export default function MessageScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-green-500">
      <Text className="text-xl font-bold text-white">
        Messages
      </Text>
      <Text className="text-sm text-white mt-2">
        Your conversations
      </Text>
    </View>
  );
}
