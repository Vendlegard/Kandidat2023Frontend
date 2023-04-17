import React, {useState} from "react";
import {View, TextInput, Text, ScrollView} from "react-native";
import JobCard from "../components/JobCard";
import SEB from "../images/SEB.jpeg";
import sweco from "../images/sweco.png";
import vattenfall from "../images/vattenfall.jpeg";


const LikeScreen = () => {
    const [searchText, setSearchText] = useState("");

    const handleSearchTextChange = (text) => {
        setSearchText(text);
    };

    return (
        <ScrollView>
            <View className="flex-1">
                <View className="mb-3">
                    <TextInput
                        className="h-10 border border-gray-30 rounded px-3"
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
