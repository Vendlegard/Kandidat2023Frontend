import { StatusBar } from 'expo-status-bar';
import { View} from 'react-native';
import React, {useState} from "react";
import BottomNavigation from "./assets/navigation/BottomNavigation";
import LoginScreen from "./assets/screens/LoginScreen";
import { NavigationContainer } from '@react-navigation/native';




export default function App() {

    const [loggedIn, setLoggedIn] = useState(false);
    const updateLoggedInState = (value) => {
        setLoggedIn(value);
    };



    return (
        <View className="flex-1 bg-amber-100">
            <StatusBar style="auto" />
            <BottomNavigation />
        </View>
        
    );
}
