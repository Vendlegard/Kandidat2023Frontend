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

import React, {useEffect, useState} from "react";
import {View, Text, TextInput, Button, TouchableOpacity, Image}  from "react-native";
import leftArrow from '../images/leftArrow.png';
import { useTranslation} from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

//create a basic component
const RegisterScreen = ({updateRegisterState, firstTimeLoggingIn, userInfoStore, comesFromLogin}) => {
    const { t, i18n } = useTranslation();
    const [possibleExamDates, setPossibleExamDates] = useState(["VT2023", "HT2023", "VT2024", "HT2024", "VT2025", "HT2025", "VT2026", "HT2027"]);

    useState(
        () => {
            comesFromLogin(false);
        }
    )



    const [serverResponse, setServerResponse] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [university, setUniversity] = useState("");
    const [education, setEducation] = useState(""); // lägga till termin och kanske bild i user table?
    const [examDate, setExamDate] = useState("");
    const [emailAdress, setEmailAdress] = useState("");
    const [password, setPassword] = useState("");
    const [emailAdressAuth, setEmailAdressAuth] = useState("");
    const [passwordAuth, setPasswordAuth] = useState("");
    const [token, setToken] = useState("");
    const [userData, setuserData] = useState( {});


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
    const onChangeExamDate = (text) => {
        setExamDate(text);
    }
    const onChangeUserData = (data) => {
        setuserData(data);
    }
    function isObjectEmpty(obj) {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    }
    const storeToken = async (value) => {
        //console.log("storeToken called in LoginScreen.js with the value", value);
        try {
            await AsyncStorage.setItem('@token', value)
        } catch (e) {
            // saving error
        }
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
            storeToken(token);
            let userDataTemp = await data.userInfo;
            onChangeUserData(userDataTemp);
            userInfoStore(userDataTemp);
            console.log("authenticate user was called from registerUser and userDataTemp is: ", userDataTemp);
        } catch (error) {
            console.error(error);
        }
    };


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
            authenticateUser(emailAddressToSend, passwordToSend);
            setIsMounted(true);
        } catch (error) {
            console.error(error);
        }
    };


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

           
            
            <Text className = 'text-4xl m-4'>{t('createAccount')}</Text>

            <TextInput
                style = {{fontSize: 20, width: "75%", height: "4%", margin: "3%", borderRadius: 12,  backgroundColor: "#e3f1ff", paddingHorizontal:6,
                shadowOffset: {width:0, height: 1}, shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 3}}
                placeholder={t('firstName')}
                onChangeText={onChangeFirstName}
                value={firstName}
            >
            </TextInput>

            <TextInput
                style = {{fontSize: 20, width: "75%", height: "4%", margin: "3%", borderRadius: 12,  backgroundColor: "#e3f1ff", paddingHorizontal:6,
                shadowOffset: {width:0, height: 1}, shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 3}}
                placeholder={t('lastName')}
                onChangeText={onChangeLastName}
                value={lastName}
            >
            </TextInput>

            <TextInput
                style = {{fontSize: 20, width: "75%", height: "4%", margin: "3%", borderRadius: 12,  backgroundColor: "#e3f1ff", paddingHorizontal:6,
                shadowOffset: {width:0, height: 1}, shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 3}}
                placeholder={t('university')}
                onChangeText={onChangeUniversity}
                value={university}
            >
            </TextInput>

            <TextInput
                style = {{fontSize: 20, width: "75%", height: "4%", margin: "3%", borderRadius: 12,  backgroundColor: "#e3f1ff", paddingHorizontal:6,
                shadowOffset: {width:0, height: 1}, shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 3}}
                placeholder={t('education')}
                onChangeText={onChangeEducation}
                value={education}
            >
            </TextInput>

            <TextInput
                style = {{fontSize: 20, width: "75%", height: "4%", margin: "3%", borderRadius: 12,  backgroundColor: "#e3f1ff", paddingHorizontal:6,
                    shadowOffset: {width:0, height: 1}, shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 3}}
                placeholder={t('graduation')}
                onChangeText={onChangeExamDate}
                value={examDate}
            >
            </TextInput>

            <TextInput
                style = {{fontSize: 20, width: "75%", height: "4%", margin: "3%", borderRadius: 12,  backgroundColor: "#e3f1ff", paddingHorizontal:6,
                shadowOffset: {width:0, height: 1}, shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 3}}
                placeholder="Email"
                onChangeText={onChangeEmailAdress}
                value={emailAdress}
            />
            <TextInput
                style = {{fontSize: 20, width: "75%", height: "4%", margin: "3%", borderRadius: 12,  backgroundColor: "#e3f1ff", paddingHorizontal:6,
                shadowOffset: {width:0, height: 1}, shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 3}}
                placeholder={t('password')}
                onChangeText={onChangePassword}
                value={password}
            >
            </TextInput>
            <TouchableOpacity className="bg-black w-22 h-9 justify-center items-center rounded-xl mt-12" onPress={() => registerUser(emailAdress, password, firstName, lastName, university, education)}>
                <Text className="text-white text-sm">{t('signup')}</Text>
            </TouchableOpacity>
            {serverResponse !== "" && ( // render the server response if it's not an empty string
                <Text>Server response: {serverResponse}</Text>
            )}

        </View>

    );

}
export default RegisterScreen;