import {Text, TouchableOpacity, View, styles,} from "react-native";
import React, {useState} from "react";

const InterestAndCompetenceButtonComponent = ({text, addToLookingFor, index}) => {

    const [isHovered, setIsHovered] = useState(false);

    const [buttonColor, setButtonColor] = useState('#f6f6f6');

    [interestAdded, setInterestAdded] = useState(false);

    function addInterestToProfile(interestToAdd) {
        if(buttonColor=='#f6f6f6'){
            setButtonColor('#E6E6FA')
        }
        else{
            setButtonColor('#f6f6f6')
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
        <View style={{  borderRadius: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.45, shadowRadius: 2, elevation: 2}}>
        {isEven(index) ? (
            <TouchableOpacity  className="mr-4" onPress={() => addInterestToProfile(text)}>
        <View style={{ backgroundColor: buttonColor, activeOpacity: 0.8, underlayColor: '#FFFFFF', borderWidth:1}} className="flex-0 w-2/5 h-12 flex-row ml-12
        rounded-3xl border-1 justify-center items-center mt-2" >
            
                <Text>
                    {text} {index}
                </Text>
           
            
        </View>
        </TouchableOpacity>
        ) : (
            <TouchableOpacity className="mr-4" onPress={() => addInterestToProfile(text)}>
        <View style={ {backgroundColor: buttonColor, borderWidth:1}} className="flex-0 w-2/5 h-12 flex-row-reverse
             rounded-3xl justify-center items-center mr-52 mt-2">
            
                <Text>
                    {text} {index} 
                </Text>
            
        </View>
        </TouchableOpacity>
        )}
        </View>
        )
}

export default InterestAndCompetenceButtonComponent;