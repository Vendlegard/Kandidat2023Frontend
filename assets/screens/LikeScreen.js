import React, {useState} from "react";
import {View, TextInput, Text, ScrollView, TouchableOpacity} from "react-native";
import JobCard from "../components/JobCard";
import SEB from "../images/SEB.jpeg";
import sweco from "../images/sweco.png";
import vattenfall from "../images/vattenfall.jpeg";


const LikeScreen = () => {
    const [searchText, setSearchText] = useState("");

    const handleSearchTextChange = (text) => {
        setSearchText(text);
    };

    const [serverResponse, setServerResponse] = useState("");

    const fetchJobs = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/fetchJobs");
            const data = await response.json();
            console.log(data);
            list = data.message
            console.log(typeof(list))
            setServerResponse(data.message); // set the server response as state
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <ScrollView>
            <View className="flex-1">
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
                    jobTitle="Internship"
                    employer="SEB"
                />
                <JobCard
                    jobIcon={sweco}
                    jobTitle="Deltid"
                    employer="Sweco"
                />
                <JobCard
                    jobIcon={vattenfall}
                    jobTitle="Dankat sommarjobb"
                    employer="Vattenfall"
                />
            </View>
        </ScrollView>
    );
};

export default LikeScreen;
