import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import SwipeScreen from "../screens/SwipeScreen";
import LikeScreen from "../screens/LikeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import LoginScreen from "../screens/LoginScreen";
import { AntDesign, Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

const Navigator = ({ userInfo, isLoggedOut, emitToAppJs }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const updateLoggedInState = (value) => {
    console.log("updateLoggedInState called in BottomNavigation.js with the value", value);
    isLoggedOut(value);
  };

  const compScreen = (value) => {
    console.log("compScreen called in BottomNavigation.js with the value", value);
    emitToAppJs(value);
  }

  return (
    <NavigationContainer className='b' >
      <Tab.Navigator style={{ marginBottom: 10 }}>
        <Tab.Screen name='Swipe'
          children={() => <SwipeScreen userInfo={userInfo} />}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialIcons name='work' size={focused ? 35 : 30} color={focused ? 'black' : '#6b7280'} />
            )
          }}
        />
        <Tab.Screen name="Liked"
          children={() => <LikeScreen userInfo={userInfo} />}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons name='heart' size={focused ? 35 : 30} color={focused ? 'black' : '#6b7280'} />
            )
          }}
        />
        <Tab.Screen name="Profile"
          children={() => <ProfileScreen
            isLoggedOut={updateLoggedInState}
            userInfo={userInfo}
            emitToBottomNav={compScreen}
          />}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons name='person' size={focused ? 35 : 30} color={focused ? 'black' : '#6b7280'} />
            )
          }}
        />
        <Tab.Screen name="Search"
          children={() => <SearchScreen userInfo={userInfo} />}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons name='search' size={focused ? 35 : 30} color={focused ? 'black' : '#6b7280'} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
