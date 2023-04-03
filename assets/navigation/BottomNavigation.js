import React, {useState} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer} from "@react-navigation/native";
import SwipeScreen from "../screens/SwipeScreen";
import LikeScreen from "../screens/LikeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import LoginScreen from "../screens/LoginScreen";

const Tab = createBottomTabNavigator();




const Navigator = () => {


    const [loggedIn, setLoggedIn] = useState(false);
    const updateLoggedInState = (value) => {
        setLoggedIn(value);
    };


    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Swipe" component={SwipeScreen} />
                <Tab.Screen name="Like" component={LikeScreen} />
                {loggedIn && <Tab.Screen name="Profile" component={ProfileScreen} />}
                {!loggedIn && <Tab.Screen name="Login" component={() => <LoginScreen updateLoggedInState={updateLoggedInState} />} />}
                <Tab.Screen name="Search" component={SearchScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default Navigator;