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
import {View, Text, TextInput, Button, TouchableOpacity, ScrollView}  from "react-native";
import InterestComponent from "../components/InterestComponent";


//create a basic component
const CompetenceScreen = ({finishedToApp, userInfo}) => {


    useState(() => {
        console.log("userInfo in competenceScreen", userInfo);
        }
    )

    function finishedRecevied(){
        console.log("vi tog emot finished från interestcomponent");
        finishedToApp();
    }


    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <ScrollView>
            <InterestComponent
            finishedEmit={finishedRecevied}
            userInfo={userInfo}
            />
            </ScrollView>
        </View>
    );

}
export default CompetenceScreen;