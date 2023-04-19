import React, {useState} from "react";
import {View, Text, TextInput, Button, TouchableOpacity}  from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = ({ updateLoggedInState }) => {
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

    function handleLogin() {
        console.log("handleLogin was pressed")
        if (emailAdressAuth === "Admin" && passwordAuth === "Password") {
            updateLoggedInState(true);
        }
    }

    return (

        <View className="flex-1 justify-center items-center">
            <Text className = 'font-raleway text-5xl m-4'> Sign in</Text>

            
            <TextInput
                className="font-railway w-3/4 text-xl mb-5 border-2 mt-5 rounded bg-purple"
                placeholder="exempel.adress@swipe2work.com"
                onChangeText={onChangeEmailAdressAuth}
                value={emailAdressAuth}
            />
            <TextInput className="font-railway w-3/4 text-xl mt-5 border-2 rounded bg-purple"
                       placeholder="************"
                       onChangeText={onChangePasswordAuth}
                       value={passwordAuth}
                       secureTextEntry={true}
            />

            {/* */}
            <Button title="Login" onPress={() => authenticateUser(emailAdressAuth,passwordAuth)}/>
        
            <View>
                <Text> Authentication Status: {token} </Text>
                <TouchableOpacity onPress={() => getToken()}>
                    <Text>Get Token</Text>
                </TouchableOpacity>
            </View>

        </View>


        
    );
}

export default LoginScreen;
