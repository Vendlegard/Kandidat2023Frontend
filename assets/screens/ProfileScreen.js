import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput, Image, Animated, Modal } from "react-native";
import profile from '../images/profile.png'
import { useFocusEffect } from "@react-navigation/native";
import { AntDesign, Ionicons, Entypo, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import EditProfile from '../components/EditProfile';
import { useTranslation } from "react-i18next";
import SvCircle from '../images/SvCircle.png';
import UkCircle from '../images/UkCircle.png';



const ProfileScreen = ({ userInfo, isLoggedOut, emitToBottomNav }) => {
    const { t, i18n } = useTranslation();
    const [isProfileEdited, setIsProfileEdited] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showSwedishFlag, setShowSwedishFlag] = useState(false);
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

    const handleLanguageSelect = () => {
        if (i18n.language === 'en') {
            i18n.changeLanguage('sv');
            setShowSwedishFlag(false);
        } else {
            i18n.changeLanguage('en');
            setShowSwedishFlag(true);
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


            <View className="flex-1">

                <View>
                    <TouchableOpacity style={{ marginLeft: 380, marginBottom: 60 }} onPress={handleLanguageSelect}>
                        {showSwedishFlag ? <Image source={SvCircle} style={{ width: 30, height: 30 }} /> : <Image source={UkCircle} style={{ width: 30, height: 30 }} />}
                    </TouchableOpacity>

                </View>

                {/* Namn, bild och universitetsprogram main ProfileScreen */}


                <View className="justify-center items-center">
                    <Image source={profile} style={{ width: 100, height: 100 }} className="-mt-10"></Image>
                    <Text className="font-railway text-lg font-bold m-2"> {userInfo.firstName} {userInfo.lastName}</Text>
                    <Text className="font-railway text-sm">{userInfo.education}</Text>
                </View>

                {/* Input Lärosäte  */}
                <View className=" ">
                    <View className="flex-row flex items-center m-3 justify-evenly mb-6 mt-6">
                        <View className=" items-center justify-center">
                            <Text className="text-x1 font-bold">{t('university')}</Text>
                            <Text className="text-x1">{userInfo.university}</Text>
                        </View>
                        <View className="flex-col-reverse items-center justify-center bg-green-200">
                            <View className="h-20 border-l border-gray dark:border-gray">
                            </View>
                        </View>


                        {/* Input Termin */}
                        <View className="items-center justify-center m-4">
                            <Text className="text-x1 font-bold">{t('graduation')}</Text>
                            <Text className="text-x1">2025</Text>
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
                        <Text className="text-x1 font-bold">{t('competences')}</Text>
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
                                <AntDesign name={showAllComps ? 'up' : 'down'} size={16} />{t('showmore')}
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
                        <Text className="text-x1 font-bold">{t('employment')}</Text>
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

            <View style={{ justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 30 }}>

                <TouchableOpacity style={{ backgroundColor: '#e3f1ff', width: 150, height: 40, borderRadius: 8, justifyContent: 'center', alignItems: 'center', margin: 15 }} onPress={handleEditProfile}>
                    <Text style={{ color: 'black', fontSize: 15 }}>Redigera profil</Text>
                </TouchableOpacity>




                <Modal visible={showModal} animationType='slide'>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        {isProfileEdited && <EditProfile
                            competencies={userComp}
                            interests={userInterest}
                            userInfo={userInfo}
                            {...isProfileEdited} closeModal={closeModal} />}
                        <TouchableOpacity onPress={closeModal}>

                        </TouchableOpacity>
                    </View>
                </Modal>


                <TouchableOpacity style={{ backgroundColor: '#ececec', width: 150, height: 40, borderRadius: 8, justifyContent: 'center', alignItems: 'center' }} onPress={handleLogout}>
                    <Text style={{ color: 'black', fontSize: 15 }}>{t('logout')}</Text>
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





