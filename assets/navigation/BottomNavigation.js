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




const Navigator = ({userInfo, isLoggedOut}) => {


    const [loggedIn, setLoggedIn] = useState(false);
    const updateLoggedInState = (value) => {
        console.log("updateLoggedInState called in BottomNavigation.js with the value", value);
        isLoggedOut(value);
    };




    return (
        <NavigationContainer className = 'b'>
            <Tab.Navigator>
                <Tab.Screen name = 'Swipe'


                            children = {() => <SwipeScreen userInfo={userInfo}/>}

                            options={{
                    tabBarIcon: ({color, size, name}) => (
                        <MaterialIcons name = 'work' size = {30} color={'#6b7280'}/>
                    )
                }} />
                <Tab.Screen name="Liked"
                            children = {() => <LikeScreen userInfo={userInfo}/>}
                            options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name = 'heart' size = {30} color={'#6b7280'}/>
                    )
                }} />
                <Tab.Screen name="Profile"

                            children = {() => <ProfileScreen
                                isLoggedOut={updateLoggedInState}
                                userInfo={userInfo}/>}


                            options={{
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