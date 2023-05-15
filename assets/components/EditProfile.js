import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import schoolPic from '../images/schoolPic.png'
import jobPic from '../images/jobPic.png'
import coursePic from '../images/coursePic.png'
import emptyHeart from '../images/emptyHeart.png'
import terminPic from '../images/terminPic.png'
import profile from '../images/profile.png'
import { useTranslation } from "react-i18next";
import { AntDesign } from '@expo/vector-icons'

const EditProfile = ({ closeModal, interests, competencies, userInfo }) => {

    const { t, i18n } = useTranslation();
    const [showAll, setShowAll] = useState(false);
    const displayedCompetencies = showAll ? competencies : competencies.slice(0, 2);
    const hiddenCompetencies = showAll ? [] : competencies.slice(2);

    return (


        <View className="h-full w-full flex-1 mt-12">


            <View className="mt-20">
                <View className="justify-center items-center mt-10 m-3">
                    <Image source={profile} style={{ width: 100, height: 100 }} ></Image>
                </View>

                <View className="justify-center items-center">
                    <Text className="font-bold text-lg">{userInfo.firstName} {userInfo.lastName}</Text>
                </View>



                <View className="mt-10 px-5">


                    <View className="flex-row m-5 ">
                        <Image className="w-8 h-8 ml-3" source={schoolPic}></Image>
                        <Text style={{ fontSize: 15, marginTop: 9, marginLeft: 7 }}>{userInfo.university}</Text>
                    </View>
                    <View className="ml-7">
                        <View className="h-px bg-gray border-0 dark:bg-gray w-11/12">
                        </View>
                    </View>
                    <View className="flex-row m-5">
                        <Image className="w-8 h-8 ml-2" source={coursePic}></Image>
                        <Text style={{ fontSize: 15, marginTop: 9, marginLeft: 7 }}>
                            {userInfo.education}
                        </Text>
                    </View>
                    <View className="ml-7">
                        <View className="h-px bg-gray border-0 dark:bg-gray w-11/12">
                        </View>
                    </View>

                    <View className="flex-row m-5">
                        <Image className="w-7 h-7 ml-3" source={terminPic}></Image>
                        <TextInput
                            style={{ fontSize: 15, marginLeft: 7 }}
                            placeholder="2025"
                            placeholderTextColor={'black'}
                        />
                    </View>

                    <View className="ml-7">
                        <View className="h-px bg-gray border-0 dark:bg-gray w-11/12">
                        </View>
                    </View>

                    <View style = {{ flexDirection: 'row', marginTop: 16, marginLeft: 5 }}>
                        <Image  style={{ width: 27, height: 27, marginLeft: 24 }} source={jobPic}></Image>
                        {interests.map((chunk, index) =>
                        
                            <View style={styles.containers}>
                                <View style={styles.codeBlock}>
                                    <Text style={styles.codeText}>{chunk}</Text>
                                </View>
                            </View>   
                        )}

                    </View>

                    <View className="ml-7">
                        <View className="h-px bg-gray border-0 dark:bg-gray w-11/12">
                        </View>
                    </View>

                    < View style = {{ flexDirection: 'row', marginTop: 16, marginLeft: 5 }}>
                        <Image style={{ width: 27, height: 27, marginLeft: 24 }} source={emptyHeart} />
                        <View style={{ flexDirection: 'column', marginTop: -1, marginLeft: 4, marginHorizontal:25 }}>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                {displayedCompetencies.map((chunk, index) => (
                                    <View style={styles.container} key={index}>
                                        <View style={styles.codeBlock}>
                                            <Text style={styles.codeText}>{chunk}</Text>
                                        </View>
                                    </View>
                                ))}
                            </View>
                            {competencies.length > 2 && (
                                <View style={{  marginTop: 8 }}>
                                    <TouchableOpacity onPress={() => setShowAll(!showAll)}>
                                        <Text style={styles.toggleButton}>
                                            <AntDesign name={showAll ? 'up' : 'down'} size={16} />
                                            {t('showmore')}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                            {showAll && hiddenCompetencies.length > 0 && (
                                <View style={{ marginTop: 8 }}>
                                    {hiddenCompetencies.map((chunk, index) => (
                                        <View style={styles.container} key={index}>
                                            <View style={styles.codeBlock}>
                                                <Text style={styles.codeText}>{chunk}</Text>
                                            </View>
                                        </View>
                                    ))}
                                </View>
                            )}
                        </View>
                    </View>

                </View>

            </View>

            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 50 }}>
                <TouchableOpacity style={{ backgroundColor: '#e3f1ff', width: 150, height: 40, borderRadius: 8, justifyContent: 'center', alignItems: 'center' }} onPress={closeModal}>
                    <Text style={{ color: 'black', fontSize: 15 }}>{t('save')}</Text>
                </TouchableOpacity>
            </View>



        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        fles: 1
    },
    top: {},
    bottom: {},

    containers: {
        flexDirection: 'row',
        marginTop: 1,
        alignItems: 'center',
        marginBottom: 20
    },
    codeBlock: {
        borderWidth: 1,
        borderColor: '#95caff',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginHorizontal: 2,
        alignItems: 'center',
        paddingVertical: 5,
        backgroundColor: '#e3f1ff',
        marginTop: 5
    },
    codeText: {
        fontSize: 10,
    },
});

export default EditProfile

    





