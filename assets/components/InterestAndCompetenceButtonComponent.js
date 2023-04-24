import {Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";

const InterestAndCompetenceButtonComponent = ({text, addToLookingFor, index}) => {

    [interestAdded, setInterestAdded] = useState(false);

    function addInterestToProfile(interestToAdd) {
        if(interestAdded){
            console.log(interestToAdd + " already added to profile");
            return;
        }
        console.log(interestToAdd + " added to profile");
        addToLookingFor(interestToAdd);
        //setInterestAdded(true);
    }

    function isEven(n) {
        return n % 2 == 0;
    }

    return(
        <View className="">
        {isEven(index) ? (
        <View className="flex-0 bg-pink w-2/5 h-12 flex-row ml-12
        rounded-3xl border justify-center items-center mt-2">
            <TouchableOpacity className="mr-4" onPress={() => addInterestToProfile(text)}>
                <Text>
                    {text} {index}
                </Text>
            </TouchableOpacity>
        </View>
        ) : (
        <View className="flex-0 bg-lightgreen w-2/5 h-12 flex-row-reverse mr-12
             rounded-3xl border justify-center items-center mr-52 mt-2">
            <TouchableOpacity className="mr-4" onPress={() => addInterestToProfile(text)}>
                <Text>
                    {text} {index} 
                </Text>
            </TouchableOpacity>
        </View>
        )}
        </View>
        )
}

export default InterestAndCompetenceButtonComponent;