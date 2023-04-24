import {Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";

const InterestAndCompetenceButtonComponent = ({text, addToLookingFor}) => {

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

    return(
        <View className="bg-pink w-full h-24">
            <TouchableOpacity onPress={() => addInterestToProfile(text)}>
                <Text>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
        )
}

export default InterestAndCompetenceButtonComponent;