import React, {useState} from "react";
import {View, TextInput, Button} from "react-native";

const LoginScreen = ({ updateLoggedInState }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin() {
        console.log("handleLogin was pressed")
        if (username === "Admin" && password === "Password") {
            updateLoggedInState(true);
        }
    }

    return (
        <View className="flex-1 justify-center">
            <TextInput
                className="w-1/2 h-28 text-4xl mb-3 border-2 ml-24"
                placeholder="Username"
                onChangeText={setUsername}
            />
            <TextInput className="w-1/2 h-28 text-4xl border-2 ml-24"
                       placeholder="Password"
                       onChangeText={setPassword}
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
}

export default LoginScreen;
