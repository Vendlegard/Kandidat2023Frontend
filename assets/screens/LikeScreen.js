import React, {useState} from "react";
import {View, TextInput, Text, ScrollView, TouchableOpacity} from "react-native";
import JobCard from "../components/JobCard";
import SEB from "../images/SEB.jpeg";
import sweco from "../images/sweco.png";
import vattenfall from "../images/vattenfall.jpeg";
import { AntDesign, Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons'


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
        <ScrollView>
            <View className="flex-1">
                <Text> {jobsToLoad.employer}</Text>
                <Text> {jobsToLoad.jobName}</Text>
                <TouchableOpacity onPress={fetchJobs}>
                    <Text>{serverResponse}</Text>
                    <Text> Get jobs</Text>
                </TouchableOpacity>
                <View className="mb-3">
                    <TextInput
                        className="h-10 border border-gray-300 rounded px-3"
                        placeholder="Search jobs"
                        onChangeText={handleSearchTextChange}
                        value={searchText}
                    />
                </View>
                <JobCard
                    jobIcon={SEB}
                    jobTitle="Jobs"
                    employer="SEB"
                />
                {jobsToLoad.map(job => (
                    <JobCard
                    jobIcon={SEB}
                    jobTitle = {job.jobName} 
                    employer = {job.employer}/>
                ))}
            </View>
        </ScrollView>
    );
};

export default LikeScreen;
