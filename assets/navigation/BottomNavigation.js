import React, {useState} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer} from "@react-navigation/native";
import SwipeScreen from "../screens/SwipeScreen";
import LikeScreen from "../screens/LikeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import LoginScreen from "../screens/LoginScreen";
import { AntDesign, Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();




const Navigator = () => {


    const [loggedIn, setLoggedIn] = useState(false);
    const updateLoggedInState = (value) => {
        setLoggedIn(value);
    };


    return (
        <NavigationContainer className = 'b'>
            <Tab.Navigator>
                <Tab.Screen name = 'Swipe' component={SwipeScreen} options={{
                    tabBarIcon: ({color, size, name}) => (
                        <MaterialIcons name = 'work' size = {30} color={'#6b7280'}/>
                    )
                }} />
                <Tab.Screen name="Liked" component={LikeScreen} options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name = 'heart' size = {30} color={'#6b7280'}/>
                    )
                }} />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name = 'person-circle-sharp' size = {30} color={'#6b7280'}/>
                    )
                }} /> 
                <Tab.Screen name="Search" component={SearchScreen} options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name = 'search' size = {30} color={'#6b7280'}/>
                    )
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default Navigator;