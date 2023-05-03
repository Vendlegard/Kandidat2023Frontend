import { StatusBar } from 'expo-status-bar';
import { View} from 'react-native';
import React, {useEffect, useState} from "react";
import BottomNavigation from "./assets/navigation/BottomNavigation";
import LoginScreen from "./assets/screens/LoginScreen";
import { NavigationContainer } from '@react-navigation/native';
import CompetenceScreen from "./assets/screens/CompetenceScreen";
import RegisterScreen from "./assets/screens/RegisterScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";




export default function App() {

    const [loggedIn, setLoggedIn] = useState(true);
    const updateLoggedInState = (value) => {
        setLoggedIn(value);
        if(value === false ){
            setFirstTimeLoggingIn(false);
            AsyncStorage.removeItem("@token");
        }
    };
    const loggedOut = (value) => {
        setLoggedIn(value);
    }

    const [registerStatus, setRegisterStatus] = useState(false);
    const updateRegisterStatus = (value) => {
        setRegisterStatus(value);
        console.log("in register status, value is: ", value);
    };

    const [firstTimeLoggingIn, setFirstTimeLoggingIn] = useState(true);

    const [userInfo, setUserInfo] = useState({
        userID: 1,
        firstName: "Victoria",
        lastName: "Berinder",
        education: "Civilingenjör i System I teknik och samhälle",
        userEmail: "vickan@mail.com",
        university: "Uppsala Universitet",
        semester: 5,
    });

    const onChangeUserData = (data) => {
        setUserInfo(data);
    }

    const updateFirstTimeLoggingIn = (value) => {
        setFirstTimeLoggingIn(value);
        console.log("in updateFirsttimeloggingin status, value is: ", value);
    }

    const goToCompetenceScreen = (value) => {
        console.log("denna borde blivit kallad från Profile.js i App.js med value", value);
        setLoggedIn(false);
        setFirstTimeLoggingIn(true);
        setRegisterStatus(false);
    }

    const updateUserInfo = (value) => {
        setUserInfo(value);
        console.log("updateUserInfo called in app.js with the value", userInfo);
    }


    function finished(){
        console.log("finshed called in app.js");
        setLoggedIn(true);
    }


    const sendingToken = async (token) => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/authWithToken", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    token: token
                }),
            });
            const data = await response.json();
            let userDataTemp = await data.userInfo;
            onChangeUserData(userDataTemp);
            updateUserInfo(userDataTemp);
            console.log("authenticateUser called in App.js with the value", userDataTemp);
            updateLoggedInState(true);
        } catch (error) {
            console.error(error);
        }
    };


    const authWithToken = async () => {
        try {
            const value = await AsyncStorage.getItem('@token')
            if(value !== null) {
                console.log(value)
            }
            sendingToken(value);
        } catch(e) {
            console.log(e);

        }
    }

    useState(() => {
        console.log("fetch Jobs called")
        authWithToken();
    }, []);

    const clearToken = async () => {
        try {
            await AsyncStorage.removeItem('@token');
            if(value !== null) {
                console.log(value)
            }
            sendingToken(value);
        } catch(e) {
            console.log(e);

        }
    }

    useEffect( () =>{
            console.log("userInfo was changed in App.js to : ", userInfo)
            setLoggedIn(true);
        }, [userInfo]
    )



    return (



        <View className="flex-1 bg-amber-100">
            {loggedIn ? (
                <BottomNavigation userInfo={userInfo}
                                  isLoggedOut={updateLoggedInState}
                                  emitToAppJs={goToCompetenceScreen}

                />
            ) : registerStatus ? (
                <RegisterScreen
                    updateRegisterState={updateRegisterStatus}
                    firstTimeLoggingIn={updateFirstTimeLoggingIn}
                    userInfoStore={updateUserInfo}
                />
            ) : firstTimeLoggingIn ? (
                <CompetenceScreen
                finishedToApp={finished}
                userInfo={userInfo}
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
