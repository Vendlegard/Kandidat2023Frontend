import React from 'react';
import { View, Text, Image } from 'react-native';
import SEB from "../images/SEB.jpeg";
import sweco from "../images/sweco.png";
import vattenfall from "../images/vattenfall.jpeg";
import heartNotFilled from "../images/heartNotFilled.png";


const JobCard = ({jobIcon, jobTitle, employer}) => {
    return (
        <View className="flex-1 flex-row h-28 mb-4 ml-4 mr-4 border border-indigo-600 font-railway">
            <View className=" w-3/12 h-28 justify-center">
            <Image source={jobIcon} className="w-20 h-16 ml-3"/>
            </View>
            <View className="flex-1 flex-col">
                <View className="flex-1 flex-row justify-between">
                    <Text className="text-xl ml-4">{jobTitle}</Text>
                    <View>
                        <Image source={heartNotFilled} className="w-6 h-5 mt-2 mr-2" />
                    </View>
                </View>
                <View className="flex-1 flex-row">
                    <Text className="text-sm ml-4">{employer}</Text>
                    <Text className="text-sm ml-4">Stockholm</Text>
                    <Text className="text-sm ml-4">2021-08-02</Text>
                </View>
                <View className="flex-1 flex-row">
                    <Text className="text-sm ml-4">144kr/h</Text>
                    <Text className="text-sm ml-4">8 veckor</Text>
                    <Text className="text-sm ml-4">Erfarenhet krävs</Text>
                </View>
            </View>
        </View>
    );
};

export default JobCard;
