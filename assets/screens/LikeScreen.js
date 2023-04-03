import React, { useState } from "react";
import {View, TextInput, Text, ScrollView} from "react-native";
import JobCard from "../components/JobCard";


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
                    className="h-10 border border-gray-300 rounded px-3"
                    placeholder="Search jobs"
                    onChangeText={handleSearchTextChange}
                    value={searchText}
                />
            </View>
            <JobCard />
            <JobCard />
            <JobCard />
        </View>
        </ScrollView>
    );
};

export default LikeScreen;
