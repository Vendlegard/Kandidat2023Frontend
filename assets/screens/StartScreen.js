import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Button} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import peaceSign from '../images/peaceSign.png'


const StartScreen = ({goToLogin, goToCreate}) => {


    const passGoToLoginToApp = (value) => {
        console.log("we ran passGOTo login wth the value, ", value);
        goToLogin(value);
    }

    const passGoToCreateToApp = (value) => {
        console.log("pass to createto app ran with value, ", value)
        goToCreate(value);
    }


    return (
        <View className="flex-1 bg-white">

        <View className="absolute top-0 left-0">
                            {/* ProfileScreen Bubble */}
                            <View className="w-28 h-28 bg-profileScreen rounded-full -mt-3 -ml-2"></View>

                            {/* Pink Bubble */}
                            <View className="w-20 h-20 bg-purple rounded-full -mt-8 ml-8"></View>

                            {/* Gray Bubble */}
                            <View className="absolute top-0 left-full mt-8 ml-2">
                                <View className="w-14 h-14 bg-lightgray rounded-full -ml-10"></View>
                            </View>
                        </View>

        <View className= "flex-1 flex-row justify-center mt-12">
            
        <Text className="font-railway text-4xl font-bold mr-2 mt-7">Swipe</Text>
        <Image source={peaceSign} className="w-11 h-16 mt-4"></Image>
        <Text className="font-railway text-4xl font-bold ml-2 mt-7">Work</Text>                  
        </View>


        <View className="flex-1 flex-col justify-center items-center mb-20">
                        <TouchableOpacity className="bg-black w-20 h-9 flex justify-center
                         items-center rounded m-10" 
                         onPress={() => passGoToLoginToApp(false)}
                         >
                            <Text className="text-white text-sm">Logga in</Text>
                        </TouchableOpacity>
                       


                    <TouchableOpacity className="bg-black w-20 h-9 flex 
                    justify-center items-center rounded"
                    onPress={() => passGoToCreateToApp(true) }
                    >
                            <Text className="text-white text-sm">Skapa konto</Text>
                        </TouchableOpacity>


                        </View>

        <View className="absolute bottom-10 right-2">
                            {/* ProfileScreen Bubble */}
                            <View className="w-28 h-28 bg-profileScreen rounded-full -mt-3 -ml-2"></View>

                            {/* Pink Bubble */}
                            <View className="w-20 h-20 bg-purple rounded-full -mt-8 ml-8"></View>

                            {/* Gray Bubble */}
                            <View className="absolute top-0 left-full mt-8 ml-2">
                                <View className="w-14 h-14 bg-lightgray rounded-full -ml-10"></View>
                            </View>
                        </View>
 

    </View>

    );
};

export default StartScreen;