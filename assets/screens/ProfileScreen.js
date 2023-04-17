import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput, Image } from "react-native";
import Svg, { Path } from 'react-native-svg';
import profilePicture from '../images/profilePicture.png'
import schoolPic from '../images/schoolPic.png'
import jobPic from '../images/jobPic.png'
import coursePic from '../images/coursePic.png'
import heartNotFilled from '../images/heartNotFilled.png'
import termPic from '../images/termPic.png'


const ProfileScreen = () => {
    const [isProfileEdited, setIsProfileEdited] = useState(false);

    const handleEditProfile = () => {
        setIsProfileEdited(true);
    };

    const handleSaveProfile = () => {
        setIsProfileEdited(false);
        // Add logic here to save the edited profile data and update the UI accordingly
    };

    const handleLogout = () => {
        setIsProfileEdited(false);
        // Add navigation logic here to navigate to the logout screen or perform logout action
    };



    return (
        <View className="flex-1">
            {isProfileEdited ? (
                <View className="flex-1">
                    <View className="flex flex-row">
                        <View className="align-text-top">
                            <View className="w-24 h-24 bg-profileScreen rounded-full">
                            </View>
                            <View className="w-12 h-12 bg-pink-200 rounded-full"></View>
                        </View>
                        <View className="items-center justify-center mt-12">
                            <Image source={profilePicture} className="w-20 h-16 ml-3"></Image>
                            <Text className="font-railway text-lg font-bold m-4">Victoria Berinder</Text>
                        </View>
                    </View>
                    <View className="flex-1 mt-7">
                        <View className="flex-row m-3">
                            <Image className="w-10 h-10 ml-4" source={schoolPic}></Image>
                            <TextInput
                                className="h-10 border border-gray-30 rounded px-3 ml-2"
                                placeholder="Uppsala Universitet"/>
                        </View>
                        <View className="items-center justify-center">
                            <View className="h-px bg-gray-400 border-0 dark:bg-gray-700 w-10/12">
                            </View>
                        </View>

                        <View className="flex-row m-3 mt-4">
                            <Image className="w-12 h-12 ml-3" source={coursePic}></Image>
                            <TextInput
                                className="h-10 border border-gray-30 rounded px-3 ml-1 mt-1"
                                placeholder="Civilingenjör i system i teknik och samhälle"/>
                        </View>
                        <View className="items-center justify-center">
                            <View className="h-px bg-gray-400 border-0 dark:bg-gray-700 w-10/12">
                            </View>
                        </View>


                        <View className="flex-row m-3 mt-5">
                            <Image className="w-8 h-8 ml-5" source={termPic}></Image>
                            <TextInput
                                className="h-10 border border-gray-30 rounded px-3 ml-3"
                                placeholder="Termin 6/10"/>
                        </View>
                        <View className="items-center justify-center mt-2">
                            <View className="h-px bg-gray-400 border-0 dark:bg-gray-700 w-10/12">
                            </View>
                        </View>

                        <View className="flex-row m-3 mt-5">
                            <Image className="w-11 h-11 ml-3" source={jobPic}></Image>
                            <TextInput
                                className="h-10 border border-gray-30 rounded px-3 ml-1"
                                placeholder="Sommarjobb, Trainee"/>
                        </View>
                        <View className="items-center justify-center">
                            <View className="h-px bg-gray-400 border-0 dark:bg-gray-700 w-10/12">
                            </View>
                        </View>

                        <View className="flex-row m-3 mt-5">
                            <Image className="w-6 h-6 ml-5 mt-2" source={heartNotFilled}></Image>
                            <TextInput
                                className="h-10 border border-gray-30 rounded px-3 ml-4"
                                placeholder="SQL, React, Javascript"/>
                        </View>
                    </View>
                    <View className="w-12 h-12 bg-pink-200 rounded-full"></View>




                    <TouchableOpacity className="bg-black w-15 h-8 flex justify-center items-center rounded m-4" onPress={handleSaveProfile}>
                        <Text className="text-white text-sm">Spara</Text>
                    </TouchableOpacity>
                </View>
            ) : (

                <View className="flex-1">
                    <View style={styles.container}>
                        <View style={styles.top}>
                            <View style={styles.box}>
                                <Svg
                                    height={100}
                                    witdh={Dimensions.get('screen').width}
                                    viewBox="0 0 1440 320"
                                    style={styles.topWavy}
                                >
                                    <Path
                                        fill="#B3EADF"
                                        d="M0,64L60,96C120,128,240,192,360,202.7C480,213,600,171,720,138.7C840,107,960,85,1080,112C1200,139,1320,213,1380,250.7L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                                    />
                                </Svg>

                            </View>

                        </View>
                        <View style={styles.bottom}></View>
                    </View>

                    <View className="justify-center items-center ">
                        <Image source={profilePicture} className="w-20 h-16 ml-3 rounded"></Image>
                        <Text className="font-railway text-lg font-bold m-2">Victoria Berinder</Text>
                        <Text className="font-railway text-sm">Civilingenjör i system i teknik och samhälle</Text>
                    </View>
                    {/* <View className=" bg-blue-200 h-3/6 flex-1"> */}
                    <View className="flex-2 m-3 flex-row items-center justify-space">
                        <View className="items-center justify-center m-8">
                            <Text className="text-x1 font-bold">Lärosäte</Text>
                            <Text className="text-x1">Uppsala Universitet</Text>
                        </View>
                        <View className="m-5 flex-col-reverse items-center bg-green-200">
                            <View className="h-20 border-l border-gray dark:border-gray">
                            </View>
                        </View>

                        <View className="items-center justify-center m-8">
                            <Text className="text-x1 font-bold">Temin</Text>
                            <Text className="text-x1">6/10</Text>
                        </View>
                    </View>
                    <View className="items-center justify-center">
                        <View className="h-px bg-gray border-0 dark:bg-gray w-60">
                        </View>
                    </View>
                    <View className="flex-2 m-7 flex-row items-center justify-center">
                        <View className="items-center justify-center">
                            <Text className="text-x1 font-bold">Mina kompetenser</Text>
                            <Text className="text-x1">SQL Javascript React </Text>
                        </View>
                    </View>
                    <View className="items-center justify-center">
                        <View className="h-px bg-gray border-0 dark:bg-gray w-60">
                        </View>
                    </View>
                    <View className="flex-2 m-7 flex-row items-center justify-center">
                        <View className="items-center justify-center">
                            <Text className="text-x1 font-bold">Jag söker</Text>
                            <Text className="text-x1">Sommarjobb Trainee</Text>
                        </View>
                    </View>





                    {/* <View className=" items-center bg-green-200 h-1/6"> */}
                    <View className="m-12 mt-17">
                        <TouchableOpacity className="bg-black w-17 h-8 flex justify-center items-center rounded m-4" onPress={handleEditProfile}>
                            <Text className="text-white text-sm">Redigera profil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="bg-black w-17 h-8 flex justify-center items-center rounded m-4" onPress={handleLogout}>
                            <Text className="text-white text-sm">Logga ut</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            )}
        </View>
    );
};




const styles = StyleSheet.create({
    container: {
        fles: 1
    },
    top: {},
    bottom: {},


});

export default ProfileScreen;





const EditableText = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [text, setText] = useState('This text is editable');

  const toggleEditable = () => {
    setIsEditable(!isEditable);
  };

  const onChangeText = (newText) => {
    setText(newText);
  };

  return (
    <View style={styles.container}>
      {isEditable ? (
        <TouchableOpacity onPress={toggleEditable} style={tailwind('w-full')}>
          <Text style={tailwind('bg-gray-100 p-2 rounded-lg')}>{text}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableWithoutFeedback onPress={toggleEditable}>
          <Text style={tailwind('bg-transparent p-2 rounded-lg')}>{text}</Text>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};



