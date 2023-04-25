import { StatusBar } from 'expo-status-bar';
import { View} from 'react-native';
import React, {useState} from "react";
import BottomNavigation from "./assets/navigation/BottomNavigation";
import LoginScreen from "./assets/screens/LoginScreen";
import { NavigationContainer } from '@react-navigation/native';
import CompetenceScreen from "./assets/screens/CompetenceScreen";
import RegisterScreen from "./assets/screens/RegisterScreen";




export default function App() {

    const [loggedIn, setLoggedIn] = useState(true);
    const updateLoggedInState = (value) => {
        setLoggedIn(value);
    };

    const [registerStatus, setRegisterStatus] = useState(false);
    const updateRegisterStatus = (value) => {
        setRegisterStatus(value);
    };



    return (



        <View className="flex-1 bg-amber-100">
            {loggedIn ? (
                <BottomNavigation/>
            ) : registerStatus ? (
                <RegisterScreen
                updateRegisterState={updateRegisterStatus}/>
            ) : (
                <LoginScreen
                    updateLoggedInState={updateLoggedInState}
                    updateRegisterState={updateRegisterStatus}
                />
            )}
        </View>



        
    );
}
