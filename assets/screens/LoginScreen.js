import React, {useState, useEffect} from "react";
import {View, Text, TextInput, TouchableOpacity}  from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation} from "react-i18next";


/*
email: "",
        firstName: "",
        lastName: "",
        education: "",
        university: "",
        semester: 1,
        competence: [],
        interests: []
 */


const LoginScreen = ({ updateLoggedInState, updateRegisterState, updateUserInfo }) => {
    const [serverResponse, setServerResponse] = useState("");
    const [emailAdressAuth, setEmailAdressAuth] = useState("");
    const [passwordAuth, setPasswordAuth] = useState("");
    const [token, setToken] = useState("");
    const { t, i18n } = useTranslation();

    const [userData, setuserData] = useState( {});

    const [loginCount, setLoginCount] = useState(0);



    const onChangeEmailAdressAuth = (text) => {
        setEmailAdressAuth(text);
    }
    const onChangePasswordAuth = (text) => {
        setPasswordAuth(text);
    }

    const onChangeUserData = (data) => {
        setuserData(data);
    }

    function isObjectEmpty(obj) {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    }


    const authenticateUser = async (emailAddressToSend,passwordToSend) => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/authenticate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: emailAddressToSend,
                    password: passwordToSend,
                }),
            });
            const data = await response.json();
            const token = data.token;
            setToken(token);
            storeToken(token);
            let userDataTemp = await data.userInfo;
            onChangeUserData(userDataTemp);
        } catch (error) {
            console.error(error);
        }
    };

    const storeToken = async (value) => {
        //console.log("storeToken called in LoginScreen.js with the value", value);
        try {
            await AsyncStorage.setItem('@token', value)
        } catch (e) {
            // saving error
        }
    }

    const getToken = async () => {
        try {
            const value = await AsyncStorage.getItem('@token')
            if(value !== null) {
                console.log(value)
            }
        } catch(e) {
            console.log(e);

        }
    }
    function forgotPassword(){
        console.log("forgot password was pressed")
    }

    function handleRegister() {
        console.log("handleRegister was pressed")
        updateRegisterState(true);
    }


    function handleLogin(emailAddressToSend, passwordToSend)  {
        authenticateUser(emailAddressToSend, passwordToSend);
        setIsMounted(true);
    }


    const [isMounted, setIsMounted] = useState(false);

    useEffect( () =>{
        if(isMounted){
           // console.log("userData was updated to from the useEffect: ", userData);
        }
        if(!isObjectEmpty(userData)){
           // console.log("object was not empty as userData : ", userData);
            updateUserInfo(userData);
        }
        }, [userData, isMounted]
    )



    return (

        <View className="flex-1 justify-center items-center">

            
            <Text className = 'text-4xl m-4'> {t('signIn')} {userData.firstName}</Text>

            
            <TextInput
                style = {{fontSize: 22, width: "75%", height: "5%", margin: "5%", borderRadius: 10,  backgroundColor: "#e3f1ff", paddingHorizontal: 6,
                shadowOffset: {width:0, height: 1}, shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 3, elevation: 2}}
                placeholder="Email"
                onChangeText={onChangeEmailAdressAuth}
                value={emailAdressAuth}
            />
            <TextInput 
                style = {{fontSize: 22 ,width: "75%", height: "5%", margin: "5%", borderRadius: 10,  backgroundColor: "#e3f1ff", paddingHorizontal: 6,
                shadowOffset: {width:0, height: 1}, shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 3, elevation: 2}}
                placeholder={t('password')}
                onChangeText={onChangePasswordAuth}
                value={passwordAuth}
                secureTextEntry={true}
            />

            <View className="mt-10" >
                    <TouchableOpacity style={{backgroundColor: 'black', width: 130, height:40, borderWidth:1, borderColor:'808080'}} className="justify-center items-center rounded-xl" onPress={() => handleLogin(emailAdressAuth,passwordAuth)}>
                        <Text style={{color: 'white'}}>{t('login')}</Text>
                    </TouchableOpacity>
            </View>

            <View className="items-center -mb-10">
                <Text style={{fontSize: 20, color: '#A9A9A9', marginTop:40, marginBottom:5}} > {t('noAccount')} </Text>
                <TouchableOpacity style={{backgroundColor: 'black', width: 130, height:40, borderWidth:1, borderColor:'808080'}} className="justify-center items-center rounded-xl mt-2"onPress={() => handleRegister()}>
                    <Text style={{color: 'white'}}>{t('signup')}</Text>
                </TouchableOpacity>
            </View>

            {/*<View>
                <Text> Authentication Status: {token} </Text>
                <TouchableOpacity onPress={() => getToken()}>
                    <Text>Get Token</Text>
                </TouchableOpacity>
    </View>*/}

          


        </View>


        
    );
}

export default LoginScreen;