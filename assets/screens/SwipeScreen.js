import React, {useState, useRef} from "react";
import {View, Text, SafeAreaView, Image} from "react-native";
{/* import CardComp from "../components/CardComp"; */}
import SEB from "../images/SEB.jpeg";
import vattenfall from "../images/vattenfall.jpeg";
import sweco from "../images/sweco.png"
import Swiper from "react-native-deck-swiper";
import location from "../images/location.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign, Ionicons, Entypo } from '@expo/vector-icons'





const testCards = [
    {jobIcon: {SEB},
    jobTitle: "Internship",
    jobDesc: "Vi söker dig som studerar ekonomi för att delta i vårt traineeprogram",
    jobLocation: "Solna kommun, Stockholms län",
    photoURL: "https://sebgroup.com/ImageVault/publishedmedia/nkuwms2up8mjzxmomo6p/SEB_Logotypes.jpg",
    id: 123,
    },
    {jobIcon: {vattenfall},
    jobTitle: "Sommarjobb",
    jobDesc: "Ingenjörsstudent sökes till sommarjobb",
    jobLocation: "Uppsala, Uppsala län",
    photoURL: "https://cached-images.bonnier.news/gcs/di-bilder-prod/media/44de0244a8cd1b93ed81ce44af590011.jpg",
    id: 456,
    },
    {jobIcon: {sweco},
    jobTitle: "Sommarjobb",
    jobDesc: "Prova på att vara konsult för sommaren",
    jobLocation: "Västerås, Västerås län",
    photoURL: "https://www.swecogroup.com/wp-content/uploads/sites/2/2021/03/sweco_black.png",
    id: 789,
    }
];


const SwipeScreen = () => {
    const swipeRef = useRef(null);

    return (
    <SafeAreaView className = 'flex-1 -mt-8'>
    <View className = 'flex-1'>
        <Swiper 
        ref = {swipeRef}
        containerStyle={{backgroundColor: '#FFFFFF'}}
        cards = {testCards}
               /*stackSize = {3}... Amount of cards (companies) in the deck*/
        cardIndex = {0}        /*Start from card 0 in the deck*/
        animateCardOpacity
        verticalSwipe = {false}
        onSwipedLeft={()=>{
            console.log('Swiped NOPE')
        }}
        onSwipedRight={() => {
            console.log('Swiped LIKE')
        }}
        backgroundColor={'#FF0000'} /*verkar ej funka*/
        overlayLabels={{        /*LIKE and NOPE signs*/
            left: {
                title: 'NOPE',
                style: {
                    label: {
                        textAlign: 'right',
                        color: 'red'
                    },
                },
            },
            right: {
                title: 'LIKE',
                style: {
                    label: {
                        textAlign: 'left',
                        color: '#4DED30'
                    },
                },
            },
        }}
        renderCard={(card) => (
           
            <View style = {{backgroundColor: 'rgb(244 244 245)', height: '100%', borderRadius: 15}} key = {card.id}>
                <Image style={{flex: 1, justifyContent: 'center', height: '30%', margin: '5%', borderRadius: 5}} source={{uri: card.photoURL}}/>
                <Text className = 'font-bold text-4xl mt-5 text-center'>{card.jobTitle}</Text>
                <Text className = 'text-xl mt-5 text-center'>{card.jobDesc}</Text>
                
                <View className ="flex-1 flex-row">
                    <View className =  "flex-1 flex-row-reverse items-center mt-7">
                        <Image source={location} className =  "w-10 h-10"/>
                    </View>
                    <View className = "flex-1 items-center mt-10 pt-12 mr-10 pr-10">
                        <Text className=" flex-1 text-xl">{card.jobLocation}</Text>
                    </View>
                </View>
            </View>
         )} 
        />
    </View>

    <View className = 'flex flex-row justify-evenly'>
        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 50, width: 70, height: 70, backgroundColor: 'rgb(254 202 202)' }}>
            <Entypo name='cross' size={24}/>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 50, width: 70, height: 70, backgroundColor: 'rgb(187 247 208)' }}>
            <AntDesign name='heart' size={24}/>
        </TouchableOpacity>
    </View>
    
    </SafeAreaView> 
    );
};

export default SwipeScreen;