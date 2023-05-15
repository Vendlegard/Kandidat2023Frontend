import React, {useEffect, useState} from "react";
import {View, TextInput, Text, ScrollView, TouchableOpacity, Button} from "react-native";
import JobCard from "../components/JobCard";
import SEB from "../images/SEB.jpeg";
import { AntDesign, Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons'
import vattenfallPic from '../images/vattenfallPic.png'
import AFRY from '../images/AFRY.png'
import consid from '../images/consid.png'
import { useFocusEffect } from '@react-navigation/native';
import { useTranslation} from "react-i18next";




const LikeScreen = ({userInfo}) => {


    const [searchText, setSearchText] = useState("");
    const { t, i18n } = useTranslation();

    const handleSearchTextChange = (text) => {
        setSearchText(text);
    };

    const [likedJobs, setLikedJobs] = useState([]);
    const [dislikedJobs, setDislikedJobs] = useState([]);

    const handleLikedJobs = (object) => {
        setLikedJobs(object);
    }
    const handleDislikedJobs = (object) => {
        setDislikedJobs(object);
    }

    const [showLikedJobs, setShowLikedJobs] = useState(true);

    const handleShowLikedJobs = () => {
        setShowLikedJobs(showLikedJobs => !showLikedJobs);
    }


    const fetchLikedJobs = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/fetchLikedJobs", {
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
            handleLikedJobs(data.liked_jobs)
        } catch (error) {
            console.error(error);
        }
    };

    const fetchDislikedJobs = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/fetchDislikedJobs", {
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
            handleDislikedJobs(data.disliked_jobs);
        } catch (error) {
            console.error(error);
        }
    };


    useState(
        () => {
            fetchLikedJobs();
        }
    )

    useState(
        () => {
            fetchDislikedJobs();
        }
    )

    useFocusEffect(
        React.useCallback(() => {
            fetchLikedJobs();
            fetchDislikedJobs();
            setShowLikedJobs(true);
        }, [])
    );

    const likedJobsWithLikedProp = likedJobs.map((job) => ({
        ...job,
        liked: true
    }));

    const dislikedJobsWithLikedProp = dislikedJobs.map((job) => ({
        ...job,
        liked: false
    }));







    return (
        <View className="flex-1 bg-white" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(214,234,255,1) 2%, rgba(6,109,182,1) 100%)'}}>
            <View className="mt-8 flex-0 w-full h-12 justify-center
            flex-row " style={{  borderRadius: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.25, shadowRadius: 2, elevation: 2}}>
                <TouchableOpacity onPress={handleShowLikedJobs}>
                <View className="">
                    {showLikedJobs ?


                        <View className="h-10 w-24 rounded-xl bg-lightgreen
                         flex-0 justify-center items-center">
                        
                        <Text className="text-x1 font-bold">{t('liked')}</Text>
                        </View>
                        :
                        <View className="h-10 w-24 rounded-xl
                         flex-0 justify-center items-center">
                        <Text className="font-bold">{t('liked')}</Text>
                        </View>
                    }
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleShowLikedJobs}>
                <View className="justify-center w-24">
                    {showLikedJobs ?
                        <View className="h-10 w-24 rounded-xl ml-3
                         flex-0 justify-center items-center">
                            <Text className="font-bold">{t('disliked')}</Text>
                        </View>
                        :
                        <View className="h-10 w-24 rounded-xl bg-lightred ml-3
                         flex-0 justify-center items-center">
                            <Text className="font-bold">{t('disliked')}</Text>
                        </View>
                    }
                </View>
                </TouchableOpacity>
            </View>
        <ScrollView className="">


            { showLikedJobs ?
                <View>
                    {likedJobsWithLikedProp.map((job) => (
                        <JobCard
                            jobIcon={job.employerImage}
                            url= {job.link}
                            userID={userInfo.userID}
                            jobID={job.jobID}
                            jobTitle={job.jobName}
                            location={job.location}
                            employer={job.employerName}
                            date={"2021-05-01"}
                            wage={"300kr/h"}
                            duration={"3 months"}
                            experience={"1 year"}
                            liked={job.liked}
                        ></JobCard>
                    ))}
                </View>


                : <View>
                     {dislikedJobsWithLikedProp.map((job) =>
                         (
                                <JobCard
                                    jobID={job.jobID}
                                    url= {job.link}
                                    userID={userInfo.userID}
                                    jobIcon={job.employerImage}
                                    jobTitle={job.jobName}
                                    location={job.location}
                                    employer={job.employerName}
                                    date={"2021-05-01"}
                                    wage={"300kr/h"}
                                    duration={"3 months"}
                                    experience={"1 year"}
                                    liked={job.liked}
                                ></JobCard>
                            ))}
                </View>
            }



        </ScrollView>
        </View>
    );
};

export default LikeScreen;
