import React, {useState} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer} from "@react-navigation/native";
import SwipeScreen from "../screens/SwipeScreen";
import LikeScreen from "../screens/LikeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import EditProfile  from "../screens/EditProfile";

import { AntDesign, Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();




const HomeTabs = () => {


    const [loggedIn, setLoggedIn] = useState(false);
    const updateLoggedInState = (value) => {
        setLoggedIn(value);
    };


    return (
        <Tab.Navigator>
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Swipe" component={SwipeScreen} />
            <Tab.Screen name="Like"component={LikeScreen} />
        </Tab.Navigator>

    );
}

