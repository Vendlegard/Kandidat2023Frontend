import React, {useState} from "react";
import {View, TextInput, Text, ScrollView, TouchableOpacity} from "react-native";
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



    const [serverResponse, setServerResponse] = useState("");

    const fetchJobs = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/fetchJobs");
            const data = await response.json();
            setServerResponse(data.message); // set the server response as state
            var listOfJobs = data.message;
            setJobsToLoad([]);
            for ( let i = 0; i<listOfJobs.length; i++){
                let objectToPush = { 
                    employer : "",
                    jobName: ""
                }
                objectToPush.jobName = listOfJobs[i][0];
                objectToPush.employer = listOfJobs[i][1];
                setJobsToLoad(previousJobs => [...previousJobs, objectToPush]);
            }
            console.log(jobsToLoad.length);
        } catch (error) {
            console.error(error);
        }
    };


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
            <View className="m-2">
                <TouchableOpacity onPress={fetchJobs}>
                    <Text>{serverResponse}</Text>
                    <Text> Get jobs</Text>
                </TouchableOpacity>

                <JobCard
                    jobIcon={SEB}
                    jobTitle="Extrajobb"
                    employer="SEB"
                    location="Stockholm"
                    date="2023-02-11"
                    wage="144 kr/h"
                    duration="8 veckor"
                    experience="Erfarenhet krävs"
                />
                <JobCard
                    jobIcon={AFRY}
                    jobTitle="Deltid"
                    employer="AFRY"
                    location="Uppsala"
                    date="2023-02-11"
                    wage="150 kr/h"
                    duration="8 veckor"
                    experience="Erfarenhet krävs"
                />
                <JobCard
                    jobIcon={vattenfallPic}
                    jobTitle="Sommarjobb"
                    employer="Vattenfall"
                    location="Stockholm"
                    date="2023-02-11"
                    wage="140 kr/h"
                    duration="6 veckor"
                    experience="Erfarenhet krävs"
                />
                <JobCard
                    jobIcon={consid}
                    jobTitle="Traineeprogram"
                    employer="Consid"
                    location="Uppsala"
                    date="2023-02-11"
                    wage="170 kr/h"
                    duration="30 veckor"
                    experience="Erfarenhet krävs"
                />
                
                
            </View>
        </ScrollView>
        </View>
    );
};

export default LikeScreen;
