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

    const fetchLikedJobs = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/fetchLikedJobs", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            console.log(data.liked_jobs);
            handleSetJobs(data.liked_jobs)
        } catch (error) {
            console.error(error);
        }
    };


    useState(
        () => {
            console.log("fetchLikedJobs called")
            fetchLikedJobs();
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

            <JobCard
                jobIcon={"https://www.unicus.com/wp-content/uploads/2018/08/seb-logo-3.png"}
                jobTitle={"Frontend Developer"}
                employer={"SEB"}
                location={"Stockholm"}
                date={"2021-05-01"}
                wage={"300kr/h"}
                duration={"3 months"}
                experience={"1 year"} />

            {jobsToLoad.map((job) => (
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

        </ScrollView>
        </View>
    );
};

export default LikeScreen;
