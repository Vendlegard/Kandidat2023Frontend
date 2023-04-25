import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput, Image, Animated } from "react-native";
import Svg, { Path } from 'react-native-svg';
import profilePicture from '../images/profilePicture.png'
import schoolPic from '../images/schoolPic.png'
import jobPic from '../images/jobPic.png'
import coursePic from '../images/coursePic.png'
import emptyHeart from '../images/emptyHeart.png'
import terminPic from '../images/terminPic.png'
import profile from '../images/profile.png'
import { LinearGradient } from 'expo-linear-gradient';


const ProfileScreen = ({userInfo}) => {
    const [isProfileEdited, setIsProfileEdited] = useState(false);
    // const bubble1Position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    // const bubble2Position = useRef(new Animated.ValueXY({ x: 10, y: 30 })).current;
    // const bubble3Position = useRef(new Animated.ValueXY({ x: 50, y: -20 })).current;



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
    // useEffect(() => {
    //     Animated.loop(
    //         Animated.sequence([
    //             Animated.timing(bubble1Position, {
    //                 toValue: { x: 30, y: 10 },
    //                 duration: 10000,
    //                 useNativeDriver: false,
    //             }),
    //             Animated.timing(bubble1Position, {
    //                 toValue: { x: 0, y: 0 },
    //                 duration: 10000,
    //                 useNativeDriver: false,
    //             }),
    //         ])
    //     ).start();
    //     Animated.loop(
    //         Animated.sequence([
    //             Animated.timing(bubble2Position, {
    //                 toValue: { x: 20, y: 40 },
    //                 duration: 10000,
    //                 useNativeDriver: false,
    //             }),
    //             Animated.timing(bubble2Position, {
    //                 toValue: { x: 30, y: 30 },
    //                 duration: 10000,
    //                 useNativeDriver: false,
    //             }),
    //         ])
    //     ).start();
    //     Animated.loop(
    //         Animated.sequence([
    //             Animated.timing(bubble3Position, {
    //                 toValue: { x: 10, y: 80 },
    //                 duration: 10000,
    //                 useNativeDriver: false,
    //             }),
    //             Animated.timing(bubble3Position, {
    //                 toValue: { x: 50, y: -20 },
    //                 duration: 10000,
    //                 useNativeDriver: false,
    //             }),
    //         ])
    //     ).start();
    // }, []);



    return (
        <View className="flex-1 bg-white">


            {isProfileEdited ? (
                // RedigeraView - följande dolt nås med knapp "Redigera profil"
                <LinearGradient
                    colors={['#e3f1ff', '#ecf1f6', '#ffffff']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.5, y: 0.5 }}
                    style={{ flex: 1 }}
                >
                    <View className="flex-1" >


                        <View className="flex-row justify-center items-center">
                            {/* Profile Picture and Name */}
                            <View className="flex-col justify-center items-center mt-12">
                                <Image source={profile} style={{ width: 100, height: 100 }}></Image>
                                <Text className="font-railway text-lg font-bold m-4">Victoria Berinder</Text>
                            </View>

                            {/* Profile Bubbles */}
                            <View className="absolute top-0 left-0">
                                <View className="w-14 h-14 bg-purple rounded-full" style={{ width: 90, height: 90, borderRadius: 25, backgroundColor: '#cfe7ff', position: 'absolute', top: 1, left: 1, opacity: 0.8 }}></View>
                                <View className="w-14 h-14 bg-purple rounded-full" style={{ width: 70, height: 70, borderRadius: 25, backgroundColor: '#c0ddfa', position: 'absolute', top: 80, left: 40, opacity: 0.7 }}></View>
                                <View className="w-14 h-14 bg-purple rounded-full" style={{ width: 55, height: 55, borderRadius: 25, backgroundColor: '#e3f1ff', position: 'absolute', top: 40, left: 80, opacity: 1 }}></View>
                            </View>

                        </View>



                        {/* Information om användaren med redigeringsmöjlighet */}
                        <View className="flex-1 flex-col justify-evenly mt-5">

                            {/* Lärosäte */}
                            <View className="flex-row m-3 ">
                                <Image className="w-8 h-8 ml-3" source={schoolPic}></Image>
                                <TextInput
                                    style={{ borderWidth: 0, fontSize: 16, color: 'black' }}
                                    placeholder="Uppsala Universitet"
                                    placeholderTextColor="black"
                                />
                            </View>
                            <View className="ml-7">
                                <View className="h-px bg-gray border-0 dark:bg-gray w-10/12">
                                </View>
                            </View>

                            {/* Program på Universitet */}
                            <View className="flex-row m-3">
                                <Image className="w-8 h-8 ml-3" source={coursePic}></Image>
                                <TextInput
                                    style={{ borderWidth: 0, fontSize: 16, color: 'black' }}
                                    placeholder="Civilingenjör i system i teknik och samhälle"
                                    placeholderTextColor="black"
                                />
                            </View>
                            <View className="ml-7">
                                <View className="h-px bg-gray border-0 dark:bg-gray w-10/12">
                                </View>
                            </View>

                            {/* Termin som tas */}
                            <View className="flex-row m-3">
                                <Image className="w-8 h-8 ml-3" source={terminPic}></Image>
                                <TextInput
                                    style={{ borderWidth: 0, fontSize: 16, color: 'black' }}
                                    placeholder="Termin 6/10"
                                    placeholderTextColor="black"
                                />
                            </View>

                            <View className="ml-7">
                                <View className="h-px bg-gray border-0 dark:bg-gray w-10/12">
                                </View>
                            </View>

                            {/* Typ av jobb som sökes */}
                            <View className="flex-row m-3">
                                <Image className="w-8 h-8 ml-3" source={jobPic}></Image>
                                <TextInput
                                    style={{ borderWidth: 0, fontSize: 16, color: 'black' }}
                                    placeholder="Sommarjobb, Trainee"
                                    placeholderTextColor="black"
                                />
                            </View>

                            <View className="ml-7">
                                <View className="h-px bg-gray border-0 dark:bg-gray w-10/12">
                                </View>
                            </View>

                            {/* Kompetenser för användare */}
                            <View className="flex-row m-3">
                                <Image className="w-8 h-8 ml-3" source={emptyHeart}></Image>
                                <TextInput
                                    style={{ borderWidth: 0, fontSize: 16, color: 'black' }}
                                    placeholder="SQL, React, Javascript"
                                    placeholderTextColor="black"
                                />
                            </View>
                        </View>
                        <View >
                            <View className="w-14 h-14 bg-purple rounded-full" style={{ width: 75, height: 75, borderRadius: 25, backgroundColor: '#cfe7ff', position: 'absolute', top: -15, right: 8, opacity: 0.6 }}></View>
                            <View className="w-14 h-14 bg-purple rounded-full" style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#c0ddfa', position: 'absolute', top: -50, right: 5, opacity: 0.7 }}></View>
                        </View>

                        {/* Knapp för att spara redigerad profil */}
                        <View className="flex justify-center items-center">
                            <TouchableOpacity className="bg-black w-16 h-8 flex justify-center items-center rounded m-4 mb-10" onPress={handleSaveProfile}>
                                <Text className="text-white text-sm">Spara</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                 </LinearGradient>


                // Slut dold redigeringsview

            ) : (

                // Styling av "våg" toppen av sidan
                <View className="flex-1">
                    <View style={styles.container}>
                        <View style={styles.top}>
                            <View style={styles.box}>
                                <Svg
                                    height={100}
                                    witdh={Dimensions.get('screen').width}
                                    viewBox="0 0 1440 320"
                                    style={styles.topWavy}
                                    opacity="0.7"
                                >
                                    <Path
                                        fill="#e3f1ff"
                                        d="M0,64L60,96C120,128,240,192,360,202.7C480,213,600,171,720,138.7C840,107,960,85,1080,112C1200,139,1320,213,1380,250.7L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                                    />
                                </Svg>

                            </View>

                        </View>
                        <View style={styles.bottom}></View>
                    </View>

                    {/* Namn, bild och universitetsprogram main ProfileScreen */}
                    <View className="justify-center items-center ">
                        <Image source={profile} style={{ width: 100, height: 100 }} className="-mt-10"></Image>
                        <Text className="font-railway text-lg font-bold m-2"> {userInfo.firstName} {userInfo.lastName}</Text>
                        <Text className="font-railway text-sm">Civilingenjör i system i teknik och samhälle</Text>
                    </View>

                    {/* Input Lärosäte  */}
                    <View className="flex-2 m-3 flex-row items-center justify-space">
                        <View className="items-center justify-center m-8">
                            <Text className="text-x1 font-bold">Lärosäte</Text>
                            <Text className="text-x1">Uppsala Universitet</Text>
                        </View>
                        <View className="m-5 flex-col-reverse items-center bg-green-200">
                            <View className="h-20 border-l border-gray dark:border-gray">
                            </View>
                        </View>

                        {/* Input Termin */}
                        <View className="items-center justify-center m-8">
                            <Text className="text-x1 font-bold">Temin</Text>
                            <Text className="text-x1">6/10</Text>
                        </View>
                    </View>
                    <View className="items-center justify-center">
                        <View className="h-px bg-gray border-0 dark:bg-gray w-80">
                        </View>
                    </View>

                    {/* Input min kompetenser */}
                    <View className="flex-2 m-7 flex-row items-center justify-center">
                        <View className="items-center justify-center">
                            <Text className="text-x1 font-bold">Mina kompetenser</Text>
                            <View style={styles.containers}>
                                <View style={styles.codeBlock}>
                                    <Text style={styles.codeText}>SQL</Text>
                                </View>
                                <View style={styles.codeBlock}>
                                    <Text style={styles.codeText}>Javascript</Text>
                                </View>
                                <View style={styles.codeBlock}>
                                    <Text style={styles.codeText}>React</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className="items-center justify-center">
                        <View className="h-px bg-gray border-0 dark:bg-gray w-80">
                        </View>
                    </View>

                    {/* Input vad jag söker för jobb */}
                    <View className="flex-2 m-7 flex-row items-center justify-center">
                        <View className="items-center justify-center">
                            <Text className="text-x1 font-bold">Jag söker</Text>
                            <View style={styles.containers}>
                                <View style={styles.codeBlock}>
                                    <Text style={styles.codeText}>Sommarjobb</Text>
                                </View>
                                <View style={styles.codeBlock}>
                                    <Text style={styles.codeText}>Trainee</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Redigera profil och logga ut - knappar main profileScreen */}
                    <View className="m-12 mt-10">
                        <TouchableOpacity className="bg-black w-17 h-8 flex justify-center items-center rounded m-2" onPress={handleEditProfile}>
                            <Text className="text-white text-sm">Redigera profil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="bg-black w-17 h-8 flex justify-center items-center rounded m-2" onPress={handleLogout}>
                            <Text className="text-white text-sm">Logga ut</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            )}
        </View>
    );
};


// Styling för "våg" toppen av sidan

const styles = StyleSheet.create({
    container: {
        fles: 1
    },
    top: {},
    bottom: {},

    containers: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        
    },
    codeBlock: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginHorizontal: 2,
        alignItems: 'center',
        paddingVertical: 5,
      },
      codeText: {
        fontSize: 10,
      },
});


export default ProfileScreen;





