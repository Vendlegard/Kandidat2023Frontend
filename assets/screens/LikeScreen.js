import React, {useState} from "react";
import {View, TextInput, Text, ScrollView, TouchableOpacity, Button} from "react-native";
import JobCard from "../components/JobCard";
import SEB from "../images/SEB.jpeg";
import { AntDesign, Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons'
import vattenfallPic from '../images/vattenfallPic.png'
import AFRY from '../images/AFRY.png'
import consid from '../images/consid.png'



const LikeScreen = () => {


    const [searchText, setSearchText] = useState("");

    const handleSearchTextChange = (text) => {
        setSearchText(text);
    };

    const [jobsToLoad, setJobsToLoad] = useState([]);

    const handleSetJobs = (object) => {
        setJobsToLoad(object);
    }
    const [jobs, setJobs] = useState([]);



    const [serverResponse, setServerResponse] = useState("");

    const fetchJobs = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/fetchJobs", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            console.log(data.jobs[0]);
            setJobs(data.jobs);
        } catch (error) {
            console.error(error);
        }
    };


    useState(
        () => {
            console.log("fetch Jobs called")
            fetchJobs();
        }
    )










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
        <ScrollView className="">
            <Button title={"test"} onPress={console.log("hej")}></Button>
            <View className="m-2">
                {jobs.map((job, index) => {
                    if (index === 1 || index === 3) { // only render second and fifth jobs
                        return (
                            <JobCard
                                key={index}
                                jobIcon={job.employerImage}
                                jobTitle={job.jobType}
                                employer="SEB"
                                location={job.location}
                                date="2023-08-12"
                                wage="170kr/h"
                                duration="8 veckor"
                                experience="Erfarenhet krävs"
                            />
                        );
                    }
                    return null; // don't render other jobs
                })}
                
            </View>
        </ScrollView>
        </View>
    );
};

export default LikeScreen;
