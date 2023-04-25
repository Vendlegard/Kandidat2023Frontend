/*[
    {
        questionIndex: 0,
        studyLocation: "Uppsala",
        studyProgram: "Computer Science",
        studyPeriod: "2018-2022"
    },
    {
        questionIndex: 1,
        lookingForPreferences: ["Internship", "Part-time job"],
    },
    {
        questionIndex: 2,
        competencies: ["C#", "Java", "Python"]
    }
] */

import React, {useState} from "react";
import {View, Text, TextInput, Button, TouchableOpacity, Image}  from "react-native";
import leftArrow from '../images/leftArrow.png';

//create a basic component
const RegisterScreen = ({updateRegisterState, firstTimeLoggingIn}) => {

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
        if(emailAddressToSend === "" || passwordToSend === "" || firstNameToSend === "" || lastNameToSend === "" || UniversityToSend === "" || EducationToSend === "") {
            alert("Please fill in all fields");
            return;
        }
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
            firstTimeLoggingIn(true);
            updateRegisterState(false);
        } catch (error) {
            console.error(error);
        }
    };

    function goBackToLogin() {
        updateRegisterState(false);
    }

    return (
        
        <View className="flex-1 justify-center items-center">

            <TouchableOpacity className="flex-1 absolute top-0 left-0 mt-20 ml-5" onPress={goBackToLogin}>
                <View style={{ position: 'relative' }}>
                    <Image source={leftArrow} className="w-11 h-8"></Image>
                </View>
            </TouchableOpacity>

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

           
            
            <Text className = 'text-4xl m-4'>Create account</Text>

            <TextInput
                style = {{fontSize: 20, width: "75%", height: "4%", margin: "3%", borderRadius: 12,  backgroundColor: "#E6E6FA", 
                shadowOffset: {width:0, height: 2}, shadowColor: '#000', shadowOpacity: 0.25, shadowRadius: 3}}
                placeholder="First name"
                onChangeText={onChangeFirstName}
                value={firstName}
            >
            </TextInput>

            <TextInput
                style = {{fontSize: 20, width: "75%", height: "4%", margin: "3%", borderRadius: 12,  backgroundColor: "#E6E6FA", 
                shadowOffset: {width:0, height: 2}, shadowColor: '#000', shadowOpacity: 0.25, shadowRadius: 3}}
                placeholder="Last name"
                onChangeText={onChangeLastName}
                value={lastName}
            >
            </TextInput>

            <TextInput
                style = {{fontSize: 20, width: "75%", height: "4%", margin: "3%", borderRadius: 12,  backgroundColor: "#E6E6FA", 
                shadowOffset: {width:0, height: 2}, shadowColor: '#000', shadowOpacity: 0.25, shadowRadius: 3}}
                placeholder="University"
                onChangeText={onChangeUniversity}
                value={university}
            >
            </TextInput>

            <TextInput
                style = {{fontSize: 20, width: "75%", height: "4%", margin: "3%", borderRadius: 12,  backgroundColor: "#E6E6FA", 
                shadowOffset: {width:0, height: 2}, shadowColor: '#000', shadowOpacity: 0.25, shadowRadius: 3}}
                placeholder="Education"
                onChangeText={onChangeEducation}
                value={education}
            >
            </TextInput>

            <TextInput
                style = {{fontSize: 20, width: "75%", height: "4%", margin: "3%", borderRadius: 12,  backgroundColor: "#E6E6FA", 
                shadowOffset: {width:0, height: 2}, shadowColor: '#000', shadowOpacity: 0.25, shadowRadius: 3}}
                placeholder="Email adress"
                onChangeText={onChangeEmailAdress}
                value={emailAdress}
            />
            <TextInput
                style = {{fontSize: 20, width: "75%", height: "4%", margin: "3%", borderRadius: 12,  backgroundColor: "#E6E6FA", 
                shadowOffset: {width:0, height: 2}, shadowColor: '#000', shadowOpacity: 0.25, shadowRadius: 3}}
                placeholder="Password"
                onChangeText={onChangePassword}
                value={password}
            >
            </TextInput>
            <TouchableOpacity className="bg-black w-20 h-9 justify-center items-center rounded-xl mt-8 mb-10" onPress={() => registerUser(emailAdress, password, firstName, lastName, university, education)}>
                <Text className="text-white text-sm">SIGNUP</Text>
            </TouchableOpacity>
            {serverResponse !== "" && ( // render the server response if it's not an empty string
                <Text>Server response: {serverResponse}</Text>
            )}

        </View>

    );

}
export default RegisterScreen;