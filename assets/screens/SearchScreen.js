import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


const SearchScreen = () => {
    const [serverResponse, setServerResponse] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [university, setUniversity] = useState("");
    const [education, setEducation] = useState(""); // lägga till termin och kanske bild i user table?
    const [emailAdress, setEmailAdress] = useState("");
    const [password, setPassword] = useState("");
    const [emailAdressAuth, setEmailAdressAuth] = useState("");
    const [passwordAuth, setPasswordAuth] = useState("");
    const [token, setToken] = useState("");

    

    const onChangeEmailAdressAuth = (text) => {
        setEmailAdressAuth(text);
    }
    const onChangePasswordAuth = (text) => {
        setPasswordAuth(text);
    }
    const onChangeEmailAdress = (text) => {
        setEmailAdress(text);
    }
    const onChangePassword = (text) => {
        setPassword(text);
    }
    const onChangeFirstName = (text) => {
        setFirstName(text);
    }
    const onChangeLastName = (text) => {
        setLastName(text);
    }
    const onChangeUniversity = (text) => {
        setUniversity(text);
    }
    const onChangeEducation = (text) => {
        setEducation(text);
    }


    const registerUser = async (emailAddressToSend, passwordToSend, firstNameToSend, lastNameToSend, UniversityToSend, EducationToSend) => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/testResponse", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: emailAddressToSend,
                    password: passwordToSend,
                    firstName: firstNameToSend,
                    lastName: lastNameToSend,
                    university: UniversityToSend,
                    education: EducationToSend,
                }),
            });
            const data = await response.json();
            setServerResponse(data.message);
        } catch (error) {
            console.error(error);
        }
    };

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
            setToken(token);
            storeToken(token);
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

    return (
        <View className="flex-1 justify-evenly">

            <View>
            <Text> first name: {firstName}, last name: {lastName}</Text>
            <TextInput
                    style={{ height: 40, borderColor: "blue", borderWidth: 1 }}
                    placeholder="First name"
                    onChangeText={onChangeFirstName}
                    value={firstName}
                >
                </TextInput>
            
                <TextInput
                    style={{ height: 40, borderColor: "blue", borderWidth: 1 }}
                    placeholder="Last name"
                    onChangeText={onChangeLastName}
                    value={lastName}
                >
                </TextInput>

                <TextInput
                    style={{ height: 40, borderColor: "blue", borderWidth: 1 }}
                    placeholder="University"
                    onChangeText={onChangeUniversity}
                    value={university}
                >
                </TextInput>

                <TextInput
                    style={{ height: 40, borderColor: "blue", borderWidth: 1 }}
                    placeholder="Education"
                    onChangeText={onChangeEducation}
                    value={education}
                >
                </TextInput>
                
                <Text> email sent is: {emailAdress}, password sent is: {password}</Text>
                <TextInput
                    style={{ height: 40, borderColor: "blue", borderWidth: 1 }}
                    placeholder="Email adress"
                    onChangeText={onChangeEmailAdress}
                    value={emailAdress}
                />
                <TextInput
                    style={{ height: 40, borderColor: "blue", borderWidth: 1 }}
                    placeholder="Password"
                    onChangeText={onChangePassword}
                    value={password}
                >
                </TextInput>
                
                <TouchableOpacity onPress={() => registerUser(emailAdress, password, firstName, lastName, university, education)}>
                    <Text>Send email and password to the server</Text>
                </TouchableOpacity>
                {serverResponse !== "" && ( // render the server response if it's not an empty string
                    <Text>Server response: {serverResponse}</Text>
                )}
            </View>

            <View>
                <Text> email sent is: {emailAdressAuth}, password sent is: {passwordAuth}</Text>
                <TextInput
                    style={{ height: 40, borderColor: "blue", borderWidth: 1 }}
                    placeholder="Email adress"
                    onChangeText={onChangeEmailAdressAuth}
                    value={emailAdressAuth}
                />
                <TextInput
                    style={{ height: 40, borderColor: "blue", borderWidth: 1 }}
                    placeholder="Password"
                    onChangeText={onChangePasswordAuth}
                    value={passwordAuth}
                >
                </TextInput>

                <TouchableOpacity
                    onPress={() => authenticateUser(emailAdressAuth,passwordAuth)}
                >
                    <Text> Test authentication with stored credentials</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text> Authentication Status: {token} </Text>
                <TouchableOpacity onPress={() => getToken()}>
                    <Text>Get Token</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default SearchScreen;
