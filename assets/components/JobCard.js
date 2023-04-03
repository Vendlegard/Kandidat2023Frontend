import React from 'react';
import { View, Text, Image } from 'react-native';
import SEB from "../images/SEB.jpeg";
import heartNotFilled from "../images/heartNotFilled.png";


const JobCard = () => {
    return (
        <View className="flex-1 flex-row h-28 mb-4 bg-pink-50 shadow ml-4 mr-4">
            <View className=" w-3/12 h-28 justify-center">
            <Image source={SEB} className="w-20 h-16 ml-3"/>
            </View>
            <View className="flex-1 flex-col">
                <View className="flex-1 flex-row justify-between">
                    <Text className="text-xl ml-4">Internship</Text>
                    <View>
                        <Image source={heartNotFilled} className="w-6 h-5 mt-2 mr-2" />
                    </View>
                </View>
                <View className="flex-1 flex-row">
                    <Text className="text-lg ml-4">SEB</Text>
                    <Text className="text-lg ml-4">Stockholm</Text>
                    <Text className="text-lg ml-4">2021-08-01</Text>
                </View>
                <View className="flex-1 flex-row">
                    <Text className="text-lg ml-4">144kr/h</Text>
                    <Text className="text-lg ml-4">8 veckor</Text>
                    <Text className="text-lg ml-4">Erfarenhet krävs</Text>
                </View>
            </View>
        </View>
    );
};


export default JobCard;
