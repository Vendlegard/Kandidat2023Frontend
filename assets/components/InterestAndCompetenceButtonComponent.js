import {Text, TouchableOpacity, View, styles} from "react-native";
import React, {useState} from "react";

const InterestAndCompetenceButtonComponent = ({text, addToLookingFor, index}) => {

    const [buttonColor, setButtonColor] = useState('white');

    [interestAdded, setInterestAdded] = useState(false);

    function addInterestToProfile(interestToAdd) {
        if(buttonColor=='white'){
            setButtonColor('#E6E6FA')
        }
        else{
            setButtonColor('white')
        }
        
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
        <View style={{ backgroundColor: buttonColor, activeOpacity: 0.8, underlayColor: '#FFFFFF'}} className="flex-0 w-2/5 h-12 flex-row ml-12
        rounded-3xl border-2 justify-center items-center mt-2">
            <TouchableOpacity  className="mr-4" onPress={() => addInterestToProfile(text)}>
                <Text>
                    {text} {index}
                </Text>
            </TouchableOpacity>
        </View>
        ) : (
        <View style={ {backgroundColor: buttonColor}} className="flex-0 w-2/5 h-12 flex-row-reverse
             rounded-3xl border-2 justify-center items-center mr-52 mt-2">
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