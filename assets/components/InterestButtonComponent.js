import {Text, TouchableOpacity, View, styles} from "react-native";
import React, {useState, useEffect} from "react";

const InterestButtonComponent = ({compOrInterestName, addToLookingFor, index, isAdded }) => {


    const [buttonColor, setButtonColor] = useState('white');
    const [borderColor, setBorderColor] = useState('#bcbcbc')

    const [interestAdded, setInterestAdded] = useState(false);

    function addInterestToProfile(interestToAdd) {
        if(buttonColor=='white'){
            setButtonColor('#e3f1ff')
            setBorderColor('#95caff')

        }
        else{
            setButtonColor('white')
            setBorderColor('#bcbcbc')
        }

        if(interestAdded){
            console.log(interestToAdd + " already added to profile");
            return;
        }
        console.log(interestToAdd + " added to profile");
        addToLookingFor(interestToAdd);
    }

    function isEven(n) {
        return n % 2 == 0;
    }

    useEffect(() => {
        if(isAdded){
            setButtonColor('#e3f1ff')
            setBorderColor('#95caff')
        }
    })




    return(
        <View className="">
        {isEven(index) ? (
        
            <TouchableOpacity  className="mr-4 " onPress={() => addInterestToProfile(compOrInterestName)}>
                <View style={ {backgroundColor: buttonColor, borderWidth: 1, borderColor: borderColor}}  className="flex-0 w-2/5 h-12 flex-row ml-10
                        rounded-3xl border-2 justify-center items-center mt-2">
                <Text style={{fontSize: 20}}>
                    {compOrInterestName}
                </Text>
                </View>
            </TouchableOpacity>
        
        ) : (
       
            <TouchableOpacity className="mr-4" onPress={() => addInterestToProfile(compOrInterestName)}>
                 <View style={ {backgroundColor: buttonColor, borderWidth: 1, borderColor: borderColor}} className="flex-0 w-2/5 h-12 flex-row-reverse
                        rounded-3xl border-2 justify-center items-center mr-52 mt-2">
                <Text style={{fontSize: 20}}>
                    {compOrInterestName} 
                </Text>
                </View>
            </TouchableOpacity>

        )}
        </View>
        )
}

export default InterestButtonComponent;