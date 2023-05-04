import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Button, StyleSheet} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import peaceSign from '../images/peaceSign.png'


const StartScreen = ({goToLogin, goToCreate}) => {


    const passGoToLoginToApp = (value) => {
        console.log("we ran passGOTo login wth the value, ", value);
        goToLogin(value);
    }

    const passGoToCreateToApp = (value) => {
        console.log("pass to createto app ran with value, ", value)
        goToCreate(value);
    }


    return (
    <View style = {styles.container}>
        <View style = {styles.logoContainer}>
            <Text className="font-railway text-5xl font-bold mr-2">Swipe</Text>
            <Image source={peaceSign} className="w-11 h-16 items-center"></Image>
            <Text className="font-railway text-5xl font-bold ml-2">Work</Text>
        </View>  

        <View style = {styles.buttonContainer}>
            <TouchableOpacity style = {styles.button}
                onPress={() => passGoToLoginToApp(false)}
                >
                <Text style = {styles.buttonText}>Logga in</Text>
            </TouchableOpacity>        

            <TouchableOpacity style = {styles.button}
            onPress={() => passGoToCreateToApp(true) }
            >
                    <Text style = {styles.buttonText}>Skapa konto</Text>
            </TouchableOpacity>


        </View>
 

    </View>

    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E6E6FA',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 250
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingTop: 60,
        marginBottom: 20
      },
      button: {
        backgroundColor: 'black',
        borderRadius: 5,
        padding: 10,
        margin: 10,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
      },
      bubbleTop:{
        justifyContent: "flex-start",
        alignItems: 'left',
      }
})

export default StartScreen;