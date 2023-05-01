import React, {useEffect, useState} from "react";
import {View, TextInput, Text, ScrollView, TouchableOpacity, Button} from "react-native";
import JobCard from "../components/JobCard";
import SEB from "../images/SEB.jpeg";
import { AntDesign, Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons'
import vattenfallPic from '../images/vattenfallPic.png'
import AFRY from '../images/AFRY.png'
import consid from '../images/consid.png'
import { useFocusEffect } from '@react-navigation/native';




const LikeScreen = ({userInfo}) => {


    const [searchText, setSearchText] = useState("");

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







    return (
        <View className="flex-1 bg-white" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(214,234,255,1) 2%, rgba(6,109,182,1) 100%)'}}>
            <View className= "flex-1 justify-center items-center mt-2">
                    <TextInput
                        style={{ backgroundColor: '#eaf0f8', width: "75%", height: "35%", borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.35, shadoRadius: 3, elevation: 2, padding: 10}} 
                        placeholder="Search jobs"
                        onChangeText={handleSearchTextChange}
                        value={searchText}
                    />
         </View>
            <View className="mt-8 flex-0 w-full h-12 ml-4
            items-center flex-row ">
                <TouchableOpacity onPress={handleShowLikedJobs}>
                <View className=" h-10 justify-center items-center w-24 rounded-3xl border-2">
                    {showLikedJobs ?


                        <View className="bg-pink">
                        <Text>Gillad</Text>
                        </View>
                        :
                        <View>
                        <Text>Gillad</Text>
                        </View>
                    }
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleShowLikedJobs}>
                <View className=" h-10 justify-center items-center w-24 rounded-3xl border-2 ml-2">
                    {showLikedJobs ?
                        <View>
                        <Text>Ej gillad</Text>
                        </View>
                        :
                        <View className="bg-pink">
                        <Text> Ej gillad</Text>
                        </View>
                    }
                </View>
                </TouchableOpacity>
            </View>
        <ScrollView className="">


            { showLikedJobs ?
                <View>
                    {likedJobs.map((job) => (
                        <JobCard
                            jobIcon={job.employerImage}
                            jobTitle={job.jobName}
                            location={job.location}
                            date={"2021-05-01"}
                            wage={"300kr/h"}
                            duration={"3 months"}
                            experience={"1 year"}
                        ></JobCard>
                    ))}
                </View>


                : <View>
                     {dislikedJobs.map((job) => (
                                <JobCard
                                    jobIcon={job.employerImage}
                                    jobTitle={job.jobName}
                                    location={job.location}
                                    date={"2021-05-01"}
                                    wage={"300kr/h"}
                                    duration={"3 months"}
                                    experience={"1 year"}
                                ></JobCard>
                            ))}
                </View>
            }



        </ScrollView>
        </View>
    );
};

export default LikeScreen;
