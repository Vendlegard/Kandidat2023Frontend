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
import InterestAndCompetenceButtonComponent from "./InterestAndCompetenceButtonComponent";
import leftArrow from '../images/leftArrow.png';

//create a basic component
const InterestComponent = ({finishedEmit}) => {

    [lookingFor, setLookingFor] = useState(["Sommarjobb", "Deltid", "Trainee", "Internship", "Exjobb", "Timanställning"]);
    [userLookingFor, setUserLookingFor] = useState([]);
    [userCompetencies, setUserCompetencies] = useState(["C#", "Java", "Python"]);
    [dontRun, setdontRun] = useState(false);


    [answer, setanswer] = useState({
        lookingForPreferences: [],
        userCompenencies: [],
    });

    [index, setIndex] = useState(0); //låter denna ligga kvar med tanke att man ska ladda från list
    //toLoadFrom men den spårar i react. Nånting med att man måste rendra rätt.
    [listToLoadFrom, setListToLoadFrom] = useState([lookingFor, userCompetencies]);


    [lookingForFilled, setlookingForFilled] = useState(false);

    [finished, setfinished] = useState(false);




    function userLookingForAdd(lookingForToAdd){
        if(answer.lookingForPreferences.includes(lookingForToAdd)){
            return;
        }
        setanswer({...answer, lookingForPreferences: [...answer.lookingForPreferences, lookingForToAdd]});
        console.log(answer);
    }

    function userCompetenciesAdd(competenciesToAdd){
        if(answer.userCompenencies.includes(competenciesToAdd)){
            return;
        }
        setanswer({...answer, userCompenencies: [...answer.userCompenencies, competenciesToAdd]});
    }

    function previousButton(){
        if(index > 0){
            setIndex(index - 1);
        }
        setlookingForFilled(false);
        console.log(index);
    }

    function nextButton(){
        console.log(index);
        setlookingForFilled(true);
    }

    function finishButton(){
        if(dontRun){
            return;
        }
        console.log("här går en sql Call iväg och när responsen ok går vi tillbaka till appens första sida");
       setfinished(true);
       finishedEmit();
        writeCompAndInterest(userInfo.userEmail, answer.userCompenencies, answer.lookingForPreferences);
    }

    const writeCompAndInterest = async (emailAddressToSend, competenciesToSend, interestsToSend) => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/writeCompAndInt", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: emailAddressToSend,
                    competencies: competenciesToSend,
                    interests: interestsToSend,
                }),
            });
            const data = await response.json();
        } catch (error) {
            console.error(error);
        }
    };






    return (
        <View className="flex-1 w-full  flex-col">
            <TouchableOpacity className="relative top-0 left-0 mt-20 ml-5" onPress={() => previousButton()}>
                <View style={{ position: 'relative' }}>
                    <Image source={leftArrow} className="w-11 h-8"></Image>
                </View>
            </TouchableOpacity>

            <View className="justify-center items-center">
                <Text className="" >Kompetenser: {answer.userCompenencies}
                </Text>
                <Text>Letar efter: {answer.lookingForPreferences} </Text>
                
            </View>


            { lookingForFilled ? (
                <View>
                    <View className ="justify-center items-center">
                    <Text className="text-3xl mt-16 mb-5"> What are your competencies? </Text>
                </View>
                {userCompetencies.map((currElement, index) => (
                        <InterestAndCompetenceButtonComponent
                            text={currElement}
                            index={index}
                            addToLookingFor={userCompetenciesAdd}
                        />
                    ))}
                    <View className="mt-32">
                        <TouchableOpacity title={"Finish"}
                        onPress={() => finishButton()}
                        >
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <View>
                    <View className ="justify-center items-center">
                    <Text className="text-3xl mt-16 mb-5"> What are you looking for? </Text>
                    </View>
                    {lookingFor.map((currElement, index) => (
                        <InterestAndCompetenceButtonComponent
                            text={currElement}
                            index={index}
                            addToLookingFor={userLookingForAdd}
                        />
                    ))}
                </View>
            )}

            <View className="flex-0 flex-row justify-center mt-16">
                <TouchableOpacity style={{width:150, height:40}} className=" bg-black flex justify-center items-center rounded mt-10 m-2"
                        onPress={() => nextButton()}
                >
                    <Text className="text-white text-sm">Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}

// const style = StyleSheet.create({

//     button: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingVertical: '12',
//         paddingHorizontal: '32',
//         borderRadius: '4',
//         elevation:'3',
//         backgroundColor: 'black'
//     },

//     text: {
//         fontSize: '15',
//         lineHeight: '21',
//         fontWeight: 'bold',
//         letterSpacing: '0,5',
//         color: 'white',
//     }

// })
export default InterestComponent;