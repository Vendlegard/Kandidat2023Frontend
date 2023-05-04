import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Button, StyleSheet, Animated} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import peaceSign from '../images/peaceSign.png'


const StartScreen = ({goToLogin, goToCreate}) => {


const INITIAL_OPACITY = 0;
  const fadeAnim1 = React.useRef(new Animated.Value(INITIAL_OPACITY)).current;
  const fadeAnim2 = React.useRef(new Animated.Value(INITIAL_OPACITY)).current;

  React.useEffect(() => {
    // Animate the opacity of the first text from 0 to 1 over 1000 milliseconds
    Animated.timing(fadeAnim1, {
      toValue: 1,
      duration: 350,
      useNativeDriver: true,
    }).start(() => {
      // After the first animation is complete, start the second animation
      Animated.timing(fadeAnim2, {
        toValue: 1,
        duration: 350,
        useNativeDriver: true,
      }).start();
    });
  }, []);


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
            <Animated.Text style={[styles.LogoText, { opacity: fadeAnim1 }]}>Swipe</Animated.Text>
            <Image source={peaceSign} className="w-11 h-16 items-center m-2"></Image>
            <Animated.Text style={[styles.LogoText, { opacity: fadeAnim2 }]}>Work</Animated.Text>
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
      backgroundColor: '#e3f1ff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 230
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingTop: 60,
        marginBottom: 20
      },
      button: {
        backgroundColor: '#f4f4f4',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        width: 260,
        height: 50,
        borderColor: '#808080',
        borderWidth: '1',

      },
      buttonText: {
        color: '#808080',
        fontSize: 20,
        alignItems: 'center',
        textAlign: 'center',
      },
      bubbleTop:{
        justifyContent: "flex-start",
        alignItems: 'left',
      },
      LogoText: {
        fontFamily: 'Serif',
        fontSize: '55',
        fontWeight: '500',

      }
})

export default StartScreen;