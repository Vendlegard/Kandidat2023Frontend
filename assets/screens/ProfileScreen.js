import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput, Image, Animated, Modal } from "react-native";
import profile from '../images/profile.png'
import { useFocusEffect } from "@react-navigation/native";
import { AntDesign, Ionicons, Entypo, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import CompetenceScreen from "./CompetenceScreen";
import LoginScreen from "./LoginScreen";
import EditProfile from '../components/EditProfile';
import { useTranslation} from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";



const ProfileScreen = ({ userInfo, isLoggedOut, emitToBottomNav }) => {
    const { t, i18n } = useTranslation();
    const [isProfileEdited, setIsProfileEdited] = useState(false);
    const [showModal, setShowModal] = useState(false);
    // const bubble1Position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    // const bubble2Position = useRef(new Animated.ValueXY({ x: 10, y: 30 })).current;
    // const bubble3Position = useRef(new Animated.ValueXY({ x: 50, y: -20 })).current;

    const [userComp, setUserComp] = useState([]);
    const [chunkedUserComp, setChunkedUserComp] = useState([]);
    const [showAllComps, setShowAllComps] = useState(false);

    const [userInterest, setUserInterest] = useState([]);

    const [editComp, setEditComp] = useState(false);

    const onEditComp = () => {
        setEditComp(!editComp);
        console.log("editComp", editComp);
        emitToBottomNav(editComp);
    }

    const handleEditProfile = () => {
        setIsProfileEdited(true);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleSaveProfile = () => {
        setIsProfileEdited(false);
        // Add logic here to save the edited profile data and update the UI accordingly
    };

    const handleLogout = () => {
        console.log("Logout button pressed");
        isLoggedOut(false);
        // Add navigation logic here to navigate to the logout screen or perform logout action
    };

    function chunk(arr) {
        const chunks = [];
        let i = 0;
        while (i < arr.length) {
            const chunkSize = Math.floor(Math.random() * 2) + 2; // choose random size between 3 and 5
            chunks.push(arr.slice(i, i + chunkSize));
            i += chunkSize;
        }
        return chunks;
    }

    const getUserComp = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/getComp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: userInfo.userID,
                }
                )
            });
            const data = await response.json();
            setUserComp(data.comp_list);
            console.log("userComp", data.comp_list);
            console.log("the chunked array of data.comp_list", chunk(data.comp_list));
            setChunkedUserComp(chunk(data.comp_list));
        } catch (error) {
            console.error(error);
        }
    };

    const getUserInterest = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/getInterest", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: userInfo.userID,
                }
                )
            });
            const data = await response.json();
            setUserInterest(data.interest_list);
        } catch (error) {
            console.error(error);
        }
    };

    useState(
        () => {
            getUserComp();
        }
    )

    useState(
        () => {
            getUserInterest();
        }
    )

    useFocusEffect(
        React.useCallback(() => {
            getUserComp();
            getUserInterest();
        }, [])
    );





    return (
        <View className="flex-1 bg-white">


            <View style={{ marginBottom: 10 }} className="flex-1">


                {/* Namn, bild och universitetsprogram main ProfileScreen */}


                <TouchableOpacity style={{ marginLeft: 380, marginBottom: 60 }} onPress={handleEditProfile}>
                    <MaterialCommunityIcons name="cog" size={35} color="gray" />
                </TouchableOpacity>


                <Modal visible={showModal} animationType='slide'>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        {isProfileEdited && <EditProfile {...isProfileEdited} closeModal={closeModal} />}
                        <TouchableOpacity onPress={closeModal}>

                        </TouchableOpacity>
                    </View>
                </Modal>


                <View className="justify-center items-center">
                    <Image source={profile} style={{ width: 100, height: 100 }} className="-mt-10"></Image>
                    <Text className="font-railway text-lg font-bold m-2"> {userInfo.firstName} {userInfo.lastName}</Text>
                    <Text className="font-railway text-sm">{userInfo.education}</Text>
                </View>

                {/* Input Lärosäte  */}
                <View className="flex-2 m-3 flex-col">
                    <View className="flex flex-row items-center">
                        <View className="m-8 items-center justify-center">
                            <Text className="text-x1 font-bold">{t('welcomeMessage')}</Text>
                            <Text className="text-x1">{userInfo.university}</Text>
                        </View>
                        <View className="m-5 flex-col-reverse items-center justify-center bg-green-200">
                            <View className="h-20 border-l border-gray dark:border-gray">
                            </View>
                        </View>


                        {/* Input Termin */}
                        <View className="items-center justify-center m-8">
                            <Text className="text-x1 font-bold">Termin</Text>
                            <Text className="text-x1">6/10</Text>
                        </View>
                    </View>
                </View>
                <View className="items-center justify-center">
                    <View className="h-px bg-gray border-0 dark:bg-gray w-80">
                    </View>
                </View>

                {/* Input min kompetenser */}
                <View className="flex-2 m-7 flex-row items-center justify-center">
                    <View className="items-center justify-center">
                        <Text className="text-x1 font-bold">Mina kompetenser </Text>
                        <View>
                            {chunkedUserComp.map((chunk, index) =>
                                index < 1 || showAllComps ? (
                                    <View style={styles.containers}>
                                        {chunk.map((comp) => (
                                            <View style={styles.codeBlock}>
                                                <Text style={styles.codeText}>{comp}</Text>
                                            </View>
                                        ))}
                                    </View>
                                ) : null
                            )}
                        </View>
                        <TouchableOpacity onPress={() => setShowAllComps(!showAllComps)}>
                            <Text style={styles.toggleButton}>
                                <AntDesign name={showAllComps ? 'up' : 'down'} size={16} />{'Visa mer '}
                            </Text>
                        </TouchableOpacity>
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
                            {userInterest.map((interest) => (
                                <View style={styles.codeBlock}>
                                    <Text style={styles.codeText}>{interest}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>

                {/* Redigera profil och logga ut - knappar main profileScreen */}


            </View>

            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 40 }}>
                <TouchableOpacity style={{ backgroundColor: '#ececec', width: 150, height: 40, borderRadius: 8, justifyContent: 'center', alignItems:'center' }} onPress={handleLogout}>
                    <Text style={{ color: 'black', fontSize:15 }}>Log out</Text>
                </TouchableOpacity>
            </View>

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
        marginTop: 10,
        alignItems: 'center',
    },
    codeBlock: {
        borderWidth: 1,
        borderColor: '#95caff',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginHorizontal: 2,
        alignItems: 'center',
        paddingVertical: 5,
        backgroundColor: '#e3f1ff'
    },
    codeText: {
        fontSize: 10,
    },
});


export default ProfileScreen;





