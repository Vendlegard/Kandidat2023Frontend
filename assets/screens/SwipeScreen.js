import React, {useState, useRef} from "react";
import {View, Text, SafeAreaView, Image} from "react-native";
import SEB from "../images/SEB.jpeg";
import vattenfall from "../images/vattenfall.jpeg";
import sweco from "../images/sweco.png"
import Swiper from "react-native-deck-swiper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign, Entypo } from '@expo/vector-icons'





let testCards = [
    {
        title: "Internship",
        desc: "Vi söker dig som studerar ekonomi för att delta i vårt traineeprogram",
        location: "Solna kommun, Stockholms län",
        photoURL: "https://sebgroup.com/ImageVault/publishedmedia/nkuwms2up8mjzxmomo6p/SEB_Logotypes.jpg",
        idJobs: 123,
    },
    {
        title: "Sommarjobb",
        desc: "Ingenjörsstudent sökes till sommarjobb",
        location: "Uppsala, Uppsala län",
        photoURL: "https://cached-images.bonnier.news/gcs/di-bilder-prod/media/44de0244a8cd1b93ed81ce44af590011.jpg",
        idJobs: 456,
    },
    {
        title: "Sommarjobb",
        desc: "Prova på att vara konsult för sommaren",
        location: "Västerås, Västerås län",
        photoURL: "https://www.swecogroup.com/wp-content/uploads/sites/2/2021/03/sweco_black.png",
        idJobs: 789,
    }
];


const SwipeScreen = () => {
    const swipeRef = useRef(null);
    const [jobs, setJobs] = useState([]);


    const fetchJobs = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/fetchJobs", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            setJobs(data)
        } catch (error) {
            console.error(error);
        }
    };

    useState(() => {
        fetchJobs();
    }, []);




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
        renderCard={(card) => card ? (
           
            <View style = {{backgroundColor: 'rgb(244 244 245)', height: '75%', borderRadius: 15, shadowColor: '#000', shadowOffset: {width:0, height: 2}, shadowOpacity: 0.25, shadoRadius: 3, elevation: 2}} key = {card.id}>
                <Image style={{flex: 1, justifyContent: 'center', height: '30%', margin: '5%', borderRadius: 5}} source={{uri: card.photoURL}}/>
                <Text className = 'font-bold text-4xl mt-5 text-center'>{card.title}</Text>
                <Text className = 'text-xl mt-5 text-center'>{card.desc}</Text>
                
                <View className ="flex-1 flex-row">
                     <View className = "flex-1 items-end mt-5 pt-12">
                        <Entypo name='location-pin' size={54}/>
                    </View>
                    <View className = "flex-1 items-center mt-5 pt-12 mr-10 pr-10"> 
                        <Text className=" flex-1 text-xl">{card.location}</Text>
                    </View>
                </View>
            </View>
         ): (
             <View>
                    <Text>NO MORE CARDS</Text>
                </View>
        )
        }
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