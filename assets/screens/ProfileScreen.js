import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput, Image, Animated } from "react-native";
import Svg, { Path } from 'react-native-svg';
import profilePicture from '../images/profilePicture.png'
import schoolPic from '../images/schoolPic.png'
import jobPic from '../images/jobPic.png'
import coursePic from '../images/coursePic.png'
import emptyHeart from '../images/emptyHeart.png'
import terminPic from '../images/terminPic.png'
import profilePic from '../images/profilePic.png'


const ProfileScreen = () => {
    const [isProfileEdited, setIsProfileEdited] = useState(false);
    const [bubblesAnimation] = useState(new Animated.Value(0));


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
    useEffect(() => {
        // Define an animation sequence for the bubbles
        const sequence = Animated.sequence([
            Animated.timing(bubblesAnimation, { toValue: -10, duration: 6000, useNativeDriver: true }),
            Animated.timing(bubblesAnimation, { toValue: 0, duration: 6000, useNativeDriver: true }),
            Animated.timing(bubblesAnimation, { toValue: 10, duration: 6000, useNativeDriver: true }),
            Animated.timing(bubblesAnimation, { toValue: 0, duration: 6000, useNativeDriver: true })
        ]);

        // Start the animation loop
        Animated.loop(sequence).start();
    }, []);

    const bubbleStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'rgb(20, 52, 164)',
        transform: [
            { translateY: bubblesAnimation },
            { translateX: bubblesAnimation }
        ]
    };



    return (
        <View className="flex-1 bg-white">


            {isProfileEdited ? (
                // RedigeraView - följande dolt nås med knapp "Redigera profil"

                <View className="flex-1">


                    <View className="flex-row justify-center items-center">
                        {/* Profile Picture and Name */}
                        <View className="flex-col justify-center items-center mt-14">
                            <Image source={profilePic} className="w-20 h-16"></Image>
                            <Text className="font-railway text-lg font-bold m-4">Victoria Berinder</Text>
                        </View>

                        {/* Profile Bubbles */}
                        <View className="absolute top-0 left-0">
                            {/* ProfileScreen Bubble */}
                            <Animated.View style={[bubbleStyle, { backgroundColor: 'rgb(137, 207, 240)' }]} />
                            {/* Pink Bubble */}
                            <Animated.View style={[bubbleStyle, { opacity: 0.8, top: 30, left: 30, backgroundColor: 'rgb(20, 52, 164)' }]} />
                            {/* Gray Bubble */}
                            <Animated.View style={[bubbleStyle, { opacity: 0.5, top: -20, left: 50, width: 70, height: 70, borderRadius: 35, backgroundColor: 'rgb(100, 149, 237)' }]} />
                        </View>

                    </View>



                    {/* Information om användaren med redigeringsmöjlighet */}
                    <View className="flex-1 flex-col justify-evenly mt-7">

                        {/* Lärosäte */}
                        <View className="flex-row m-3">
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
                    <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
                        <View className="w-24 h-24 bg-profileScreen rounded-full"></View>
                        <View className="w-14 h-14 bg-purple rounded-full" style={{ position: 'absolute', top: -25, left: 40 }}></View>
                    </View>

                    {/* Knapp för att spara redigerad profil */}
                    <View className="flex justify-center items-center">
                        <TouchableOpacity className="bg-black w-16 h-8 flex justify-center items-center rounded m-4 mb-4" onPress={handleSaveProfile}>
                            <Text className="text-white text-sm">Spara</Text>
                        </TouchableOpacity>
                    </View>

                </View>


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
                                >
                                    <Path
                                        fill="#6699CC"
                                        d="M0,64L60,96C120,128,240,192,360,202.7C480,213,600,171,720,138.7C840,107,960,85,1080,112C1200,139,1320,213,1380,250.7L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                                    />
                                </Svg>

                            </View>

                        </View>
                        <View style={styles.bottom}></View>
                    </View>

                    {/* Namn, bild och universitetsprogram main ProfileScreen */}
                    <View className="justify-center items-center ">
                        <Image source={profilePic} className="w-20 h-16 ml-3 rounded"></Image>
                        <Text className="font-railway text-lg font-bold m-2">Victoria Berinder</Text>
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
                        <View className="h-px bg-gray border-0 dark:bg-gray w-60">
                        </View>
                    </View>

                    {/* Input min kompetenser */}
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

                    {/* Input vad jag söker för jobb */}
                    <View className="flex-2 m-7 flex-row items-center justify-center">
                        <View className="items-center justify-center">
                            <Text className="text-x1 font-bold">Jag söker</Text>
                            <Text className="text-x1">Sommarjobb Trainee</Text>
                        </View>
                    </View>

                    {/* Redigera profil och logga ut - knappar main profileScreen */}
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


// Styling för "våg" toppen av sidan

const styles = StyleSheet.create({
    container: {
        fles: 1
    },
    top: {},
    bottom: {},



});

export default ProfileScreen;





