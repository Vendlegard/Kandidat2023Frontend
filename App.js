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

    const [firstTimeLoggingIn, setFirstTimeLoggingIn] = useState(false);

    const [userInfo, setUserInfo] = useState({
        firstName: "Victoria",
        lastName: "Berinder",
        education: "Civilingenjör i System I teknik och samhälle",
        userEmail: "vickan@mail.com",
        university: "Uppsala Universitet",
        semester: 5,
    });

    const updateFirstTimeLoggingIn = (value) => {
        setFirstTimeLoggingIn(value);
    }

    const updateUserInfo = (value) => {
        setUserInfo(value);
        console.log("updateUserInfo called in app.js with the value", userInfo);
    }

    function finished(){
        console.log("finshed called in app.js");
        setLoggedIn(true);
    }




    return (



        <View className="flex-1 bg-amber-100">
            {loggedIn ? (
                <BottomNavigation userInfo={userInfo}

                />
            ) : registerStatus ? (
                <RegisterScreen
                    updateRegisterState={updateRegisterStatus}
                    firstTimeLoggingIn={updateFirstTimeLoggingIn}
                />
            ) : firstTimeLoggingIn ? (
                <CompetenceScreen
                finishedToApp={finished}
                />
            ) : (
                <LoginScreen
                    updateLoggedInState={updateLoggedInState}
                    updateRegisterState={updateRegisterStatus}
                    updateUserInfo={updateUserInfo}
                />
            )}
        </View>




    );
}
