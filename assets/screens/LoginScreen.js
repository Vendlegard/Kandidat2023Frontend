import React, {useState} from "react";
import {View, Text, TextInput, Button, TouchableOpacity}  from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';



const LoginScreen = ({ updateLoggedInState, updateRegisterState }) => {
    const [serverResponse, setServerResponse] = useState("");
    const [emailAdressAuth, setEmailAdressAuth] = useState("");
    const [passwordAuth, setPasswordAuth] = useState("");
    const [token, setToken] = useState("");

    const onChangeEmailAdressAuth = (text) => {
        setEmailAdressAuth(text);
    }
    const onChangePasswordAuth = (text) => {
        setPasswordAuth(text);
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
            const token = data.message; 
            /* om vi får tillbaka något, betyder det alltså att användaren finns och är autentiserad? */
            setToken(token);
            storeToken(token);
            /*det nedan ska göras om användaren är autentiserad, annars säg typ "fel användarnamen eller 
            lösenord och föreslå glömt lösenord eller registrera konto" */
            updateLoggedInState(true)
        } catch (error) {
            console.error(error);
        }
    };

    const storeToken = async (value) => {
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

    return (

        <View className="flex-1 justify-center items-center">

             {/* Profile Bubbles */}
                <View className="absolute top-0 right-0">
            {/* ProfileScreen Bubble */}
                    <View className="w-28 h-28 bg-profileScreen opacity-70 rounded-full mt-12 mr-8"></View>

            {/* Pink Bubble */}
                    

            {/* Gray Bubble */}
                </View>
                <View className="absolute bottom-0 left-0">
                    <View className="w-20 h-20 bg-profileScreen opacity-70 rounded-full -mb-5 ml-2"></View>
                    <View className="w-14 h-14 bg-purple opacity-90 rounded-full mb-20 ml-12"></View>
                    </View>
            <Text className = 'text-4xl m-4'> Please sign in</Text>

            
            <TextInput
                style = {{fontSize: 22, width: "75%", height: "5%", margin: "5%", borderRadius: 12,  backgroundColor: "#E6E6FA", 
                shadowColor: '#000', shadowOpacity: 0.25, shadowRadius: 3}}
                placeholder="Email"
                onChangeText={onChangeEmailAdressAuth}
                value={emailAdressAuth}
            />
            <TextInput 
                style = {{fontSize: 22 ,width: "75%", height: "5%", margin: "5%", borderRadius: 12,  backgroundColor: "#E6E6FA", 
                shadowColor: '#000', shadowOpacity: 0.25, shadowRadius: 3}}
                placeholder="Password"
                onChangeText={onChangePasswordAuth}
                value={passwordAuth}
                secureTextEntry={true}
            />

            {/* */}
            <View>
                <TouchableOpacity className= "m-4" onPress={() => forgotPassword()}>
                    <Text style={{fontSize: 20, color: '#A9A9A9'}} > Forgot password?</Text>
                </TouchableOpacity>
            </View>

            <View >
                    <TouchableOpacity className="bg-black w-20 h-9 justify-center items-center rounded-xl mt-5 mb-10" onPress={() => authenticateUser(emailAdressAuth,passwordAuth)}>
                        <Text className="text-white text-sm">LOGIN</Text>
                    </TouchableOpacity>
            </View>

            <View className="items-center -mb-10">
                <Text style={{fontSize: 20, color: '#A9A9A9', margin: '5%'}} > Don't have an account yet? </Text>
                <TouchableOpacity className="bg-black w-20 h-9 justify-center items-center rounded-xl mt-2"onPress={() => handleRegister()}>
                    <Text className="text-white text-sm">SIGNUP</Text>
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