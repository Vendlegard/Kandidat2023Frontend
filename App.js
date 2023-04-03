import { StatusBar } from 'expo-status-bar';
import { View} from 'react-native';
import React from "react";
import BottomNavigation from "./assets/navigation/BottomNavigation";


export default function App() {
    return (
        <View className="flex-1 bg-amber-100">
            <StatusBar style="auto" />
            <BottomNavigation />
        </View>
    );
}
