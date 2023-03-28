import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
      <View className="flex-1 items-center justify-evenly bg-green-300">
        <Text>Första texten</Text>
        <Text>Andra</Text>
        <Text>Tredje och jag hopppas detta fungerar för alla</Text>
        <StatusBar style="auto" />
      </View>
  );
}