import React, { useState } from "react";
import {View, TextInput, StyleSheet, Text, ScrollView} from "react-native";
import JobCard from "../components/JobCard";


const LikeScreen = () => {
    const [searchText, setSearchText] = useState("");

    const handleSearchTextChange = (text) => {
        setSearchText(text);
    };

    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search jobs"
                    onChangeText={handleSearchTextChange}
                    value={searchText}
                />
            </View>
            <JobCard />
            <JobCard />
            <JobCard />
            <Text className="bg-amber-400"> Testing nativewind</Text>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    searchContainer: {
        marginBottom: 16,
    },
    searchInput: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        paddingHorizontal: 8,
    },
});

export default LikeScreen;
