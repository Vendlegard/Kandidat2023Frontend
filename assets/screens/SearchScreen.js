import React from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";

const SearchScreen = () => {
    return (
        <View>
            <Text>Fill in username</Text>
            <TextInput  style={{height: 40, borderColor: 'blue', borderWidth: 1}}
                        placeholder="Search for a user"
            />
            <TouchableOpacity onPress={console.log("send info")}>
                <Text>Send info to SQL</Text>
            </TouchableOpacity>
        </View>

    );
}

export default SearchScreen;