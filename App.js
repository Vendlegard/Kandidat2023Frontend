import { StatusBar } from 'expo-status-bar';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import React from "react";
import BottomNavigation from "./assets/navigation/BottomNavigation";


export default function App() {
    return (
        <View style={{flex: 1}}>
            <StatusBar style="auto" />
            <BottomNavigation />
        </View>
    );
}
