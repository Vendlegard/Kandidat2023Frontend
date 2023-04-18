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
        stackSize = {3} /* Amount of cards (companies) in the deck*/
        cardIndex = {0}        /*Start from card 0 in the deck*/
        animateCardOpacity
        verticalSwipe = {false}
        onSwipedLeft={()=>{
            console.log('Swiped NOPE')
        }}
        onSwipedRight={() => {
            console.log('Swiped LIKE')
        }}
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
           
            <View style = {{backgroundColor: 'rgb(244 244 245)', height: '75%', borderRadius: 15, shadowColor: '#000', shadowOffset: {width:0, height: 2}, shadowOpacity: 0.25, shadoRadius: 3, elevation: 2}} key = {card.id}>
                <Image style={{flex: 1, justifyContent: 'center', height: '30%', margin: '5%', borderRadius: 5}} source={{uri: card.photoURL}}/>
                <Text className = 'font-bold text-4xl mt-5 text-center'>{card.jobTitle}</Text>
                <Text className = 'text-xl mt-5 text-center'>{card.jobDesc}</Text>

                {/*
                <View className = 'flex-1 flex-row'>
                    <Text style={{fontSize: 20, margin: 5, paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#e0f2fe', height: 35, borderRadius: 15, borderWidth: 1, borderColor: '#bae6fd', overflow: "hidden"}}>Heltid</Text>
                    <Text style={{fontSize: 20, margin: 5, paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#e0f2fe', height: 35, borderRadius: 15, borderWidth: 1, borderColor: '#bae6fd', overflow: "hidden"}}>Finans</Text>
                </View>
        */}
                <View className ="flex-1 flex-row">
                     <View className = "flex-1 items-end mt-5 pt-5">
                        <Entypo name='location-pin' size={54}/>
                    </View>
                    <View className = "flex-1 items-center mt-5 pt-5 mr-10 pr-10"> 
                        <Text className=" flex-1 text-xl">{card.jobLocation}</Text>
                    </View>
                </View>
            </View>
         )} 
        />
    </View>

        <View className = 'flex flex-row justify-evenly bg-white pb-3'>
            <TouchableOpacity 
            onPress={() =>swipeRef.current.swipeLeft()}
            style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 50, width: 75, height: 75, backgroundColor: 'rgb(254 202 202)' 
            }}
            >
                <Entypo name='cross' size={35}/>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={() =>swipeRef.current.swipeRight()}
            style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 50, width: 75, height: 75, backgroundColor: 'rgb(187 247 208)' }}>
                <AntDesign name='heart' size={30}/>
            </TouchableOpacity>
        </View>
    
    </SafeAreaView> 
    );
};

export default SwipeScreen;