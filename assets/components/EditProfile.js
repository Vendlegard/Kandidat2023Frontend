import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import schoolPic from '../images/schoolPic.png'
import jobPic from '../images/jobPic.png'
import coursePic from '../images/coursePic.png'
import emptyHeart from '../images/emptyHeart.png'
import terminPic from '../images/terminPic.png'
import profile from '../images/profile.png'

const EditProfile = ({ closeModal, userInfo, interests, competencies}) => {
    return (

<LinearGradient colors={['#d0e6f7','#e0effa', '#FFFFFF']}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        >
        <View className="h-full w-full flex-1 mt-12">


            <View className="mt-20">
                <View className="justify-center items-center mt-10 m-3">
                    <Image source={profile} style={{ width: 100, height: 100 }} ></Image>
                </View>

                <View className="justify-center items-center">
                    <Text className="font-bold text-lg">Victoria Berinder</Text>
                </View>



                <View className="mt-10 px-5">


                    <View className="flex-row m-5 ">
                        <Image className="w-8 h-8 ml-3" source={schoolPic}></Image>
                        <Text>
                            {userInfo.university}
                        </Text>
                    </View>
                    <View className="ml-7">
                        <View className="h-px bg-gray border-0 dark:bg-gray w-11/12">
                        </View>
                    </View>
                    <View className="flex-row m-5">
                        <Image className="w-8 h-8 ml-3" source={coursePic}></Image>
                        <View>
                            <Text>
                                {userInfo.education}
                            </Text>
                        </View>
                    </View>
                    <View className="ml-7">
                        <View className="h-px bg-gray border-0 dark:bg-gray w-11/12">
                        </View>
                    </View>

                    <View className="flex-row m-5">
                        <Image className="w-8 h-8 ml-3" source={terminPic}></Image>
                        <Text>
                            Vårterminen 2025
                        </Text>
                    </View>

                    <View className="ml-7">
                        <View className="h-px bg-gray border-0 dark:bg-gray w-11/12">
                        </View>
                    </View>

                    <View className="flex-row m-5">
                        <Image className="w-8 h-8 ml-3" source={jobPic}></Image>
                        <View className="flex-0 flex-row">
                            {interests.map((interest) => (
                                <Text className="ml-1">{interest}, </Text>
                            ))}
                        </View>
                    </View>

                    <View className="ml-7">
                        <View className="h-px bg-gray border-0 dark:bg-gray w-11/12">
                        </View>
                    </View>

                    <View className="flex-row m-5">
                        <Image className="w-8 h-8 ml-3" source={emptyHeart}></Image>
                        <View>
                            {competencies.map((competency) => (
                                <Text className="ml-3">{competency}, </Text>
                            ))}
                        </View>
                    </View>

                </View>

            </View>

            <View className="flex items-center">
                <TouchableOpacity className=" bg-black w-20 h-8 flex justify-center items-center rounded mt-20" onPress={closeModal}>
                    <Text className="text-white text-sm">Spara</Text>
                </TouchableOpacity>
            </View>

        </View>

        </LinearGradient>

    );
};

export default EditProfile





