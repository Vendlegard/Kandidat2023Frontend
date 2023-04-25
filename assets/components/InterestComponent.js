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
import InterestAndCompetenceButtonComponent from "./InterestAndCompetenceButtonComponent";

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
        writeCompAndInterest("Vickanmejl", answer.userCompenencies, answer.lookingForPreferences);
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
            <View className="flex-0 justify-center items-center">
                <Text className="mt-24" >Kompetenser: {answer.userCompenencies}
                </Text>
                <Text>Letar efter: {answer.lookingForPreferences} </Text>
                <Text className="text-3xl mt-16"> What are you looking for? </Text>
            </View>


            { lookingForFilled ? (
                <View>
                {userCompetencies.map((currElement, index) => (
                        <InterestAndCompetenceButtonComponent
                            text={currElement}
                            index={index}
                            addToLookingFor={userCompetenciesAdd}
                        />
                    ))}
                    <View className="mt-32">
                        <Button title={"Finish"}
                        onPress={() => finishButton()}
                        >
                        </Button>
                    </View>
                </View>
            ) : (
                <View>
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
                <Button title={"previous"}
                onPress={() => previousButton()}
                >
                </Button>
                <Button title={"next"}
                        onPress={() => nextButton()}
                >
                </Button>
            </View>
        </View>
    );

}
export default InterestComponent;