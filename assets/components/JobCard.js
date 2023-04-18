import React from 'react';
import { View, Text, Image } from 'react-native';
import SEB from "../images/SEB.jpeg";
import sweco from "../images/sweco.png";
import vattenfall from "../images/vattenfall.jpeg";
import heartNotFilled from "../images/heartNotFilled.png";
import { AntDesign, Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons'


const JobCard = ({ jobIcon, jobTitle, employer }) => {
    return (
        <View className="flex-1 flex-row h-28 mb-4 bg-pink-50 shadow ml-4 mr-4">
            <View className="w-20 h-16 flex justify-center items-center mt-6 ml-2">
                <Image source={jobIcon} className="w-11/12 h-full object-contain" />
            </View>



            <View className="flex-1 flex-col">
                <View className="flex-1 flex-row justify-between">
                    <Text className="text-xl ml-4">{jobTitle}</Text>
                    <View>
                        <AntDesign name='hearto' size={30} />
                    </View>
                </View>
                <View className="flex-1 flex-row">
                    <Text className="text-lg ml-4">{employer}</Text>
                    <Text className="text-lg ml-4">Stockholm</Text>
                    <Text className="text-lg ml-4">2021-08-02</Text>
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
