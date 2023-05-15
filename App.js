import { StatusBar } from 'expo-status-bar';
import { View} from 'react-native';
import React, {useEffect, useState} from "react";
import BottomNavigation from "./assets/navigation/BottomNavigation";
import LoginScreen from "./assets/screens/LoginScreen";
import { NavigationContainer } from '@react-navigation/native';
import CompetenceScreen from "./assets/screens/CompetenceScreen";
import RegisterScreen from "./assets/screens/RegisterScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import StartScreen from './assets/screens/StartScreen';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import sv from './sv.json';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: en,
        },
        sv: {
            translation: sv,
        },
    },
    lng: 'sv', // set the default language to English
    fallbackLng: 'en', // fallback to English if a translation is missing
    interpolation: {
        escapeValue: false,
    },
});





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
    const activateLoggedInScreen = (value) => {
        setStartScreen(value);
        if(value === false ){
            setFirstTimeLoggingIn(false);
            AsyncStorage.removeItem("@token");
        }
        setFirstTimeLoggingIn(false);
    }

    const [registerStatus, setRegisterStatus] = useState(false);
    const updateRegisterStatus = (value) => {
        setRegisterStatus(value);
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
    }

    const goToCompetenceScreen = (value) => {
        setLoggedIn(false);
        setFirstTimeLoggingIn(true);
        setRegisterStatus(false);
    }


    const [comesFromLogin, setComesFromLogin] = useState(false);

    const updateUserInfo = (value) => {
        setUserInfo(value);
        setComesFromLogin(true);
    }

    const updateUserInfoFromRegister = (value) => {
        setUserInfo(value);
        setComesFromLogin(false);
    }

    const comesFromRegister = (value) => {
        setComesFromLogin(value);
    }


    function finished(){
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
        authWithToken();
    }, []);

    const clearToken = async () => {
        try {
            await AsyncStorage.removeItem('@token');
            if(value !== null) {
            }
            sendingToken(value);
        } catch(e) {
            console.log(e);
        }
    }

    useEffect( () =>{
            if(comesFromLogin === true){
                setLoggedIn(true);
            }
        }, [userInfo]
    )

    const [startScreen, setStartScreen] = useState(true);



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
                    userInfoStore={updateUserInfoFromRegister}
                    comesFromLogin={comesFromRegister}
                />
            ) : firstTimeLoggingIn ? (
                <CompetenceScreen
                finishedToApp={finished}
                userInfo={userInfo}
                />
            ) : startScreen ? (
                <StartScreen
                goToLogin ={activateLoggedInScreen}
                goToCreate={updateRegisterStatus}
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
