import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

const SearchScreen = () => {
    const [serverResponse, setServerResponse] = useState("");

    const testServerResponse = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/testResponse");
            const data = await response.json();
            setServerResponse(data.message); // set the server response as state
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View>
            <Text>Fill in username</Text>
            <TextInput
                style={{ height: 40, borderColor: "blue", borderWidth: 1 }}
                placeholder="Search for a user"
            />
            <TouchableOpacity onPress={() => console.log("send info")}>
                <Text>Send info to SQL</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={testServerResponse}>
                <Text>Test communication with the server</Text>
                <Text>Check the console for the response</Text>
            </TouchableOpacity>
            {serverResponse !== "" && ( // render the server response if it's not an empty string
                <Text>Server response: {serverResponse}</Text>
            )}
        </View>
    );
};

export default SearchScreen;
