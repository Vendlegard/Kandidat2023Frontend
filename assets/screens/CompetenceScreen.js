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
import {View, Text, TextInput, Button, TouchableOpacity}  from "react-native";
import InterestComponent from "../components/InterestComponent";


//create a basic component
const CompetenceScreen = ({finishedToApp}) => {

    function finishedRecevied(){
        console.log("vi tog emot finished från interestcomponent");
        finishedToApp();
    }


    return (
        <View className="flex-1 items-center justify-center">
            <InterestComponent
            finishedEmit={finishedRecevied}
            />
        </View>
    );

}
export default CompetenceScreen;