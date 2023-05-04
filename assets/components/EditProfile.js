import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput, StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import schoolPic from '../images/schoolPic.png'
import jobPic from '../images/jobPic.png'
import coursePic from '../images/coursePic.png'
import emptyHeart from '../images/emptyHeart.png'
import terminPic from '../images/terminPic.png'
import profile from '../images/profile.png'

const EditProfile = ({ closeModal, interests, competencies, userInfo }) => {
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
                        <Text>{userInfo.university}</Text>
                    </View>
                    <View className="ml-7">
                        <View className="h-px bg-gray border-0 dark:bg-gray w-11/12">
                        </View>
                    </View>
                    <View className="flex-row m-5">
                        <Image className="w-8 h-8 ml-3" source={coursePic}></Image>
                        <Text>
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
                            style={{ borderWidth: 0, fontSize: 17, color: 'black' }}
                            placeholder="Termin 6/10"
                            placeholderTextColor="black"
                        />
                    </View>

                    <View className="ml-7">
                        <View className="h-px bg-gray border-0 dark:bg-gray w-11/12">
                        </View>
                    </View>

                    <View className="flex-row m-5">
                        <Image className="w-7 h-7 ml-2" source={jobPic}></Image>
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

                    <View className="flex-row m-5">
                        <Image className="w-7 h-7 ml-3" source={emptyHeart}></Image>
                        {competencies.map((chunk, index) =>
                                <View style={styles.containers}>
                                        <View style={styles.codeBlock}>
                                            <Text style={styles.codeText}>{chunk}</Text>
                                        </View>
                                </View>
                        )}
                    </View>

                </View>

            </View>

            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 50 }}>
                <TouchableOpacity style={{ backgroundColor: '#ececec', width: 150, height: 40, borderRadius: 8, justifyContent: 'center', alignItems:'center' }} onPress={closeModal}>
                    <Text style={{ color: 'black', fontSize:15 }}>Save</Text>
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

export default EditProfile





