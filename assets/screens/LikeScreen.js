import React, {useState} from "react";
import {View, TextInput, Text, ScrollView, TouchableOpacity} from "react-native";
import JobCard from "../components/JobCard";
import SEB from "../images/SEB.jpeg";
import { AntDesign, Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import vattenfallPic from '../images/vattenfallPic.png'
import AFRY from '../images/AFRY.png'
import consid from '../images/consid.png'



const LikeScreen = () => {


    const [searchText, setSearchText] = useState("");

    const handleSearchTextChange = (text) => {
        setSearchText(text);
    };

    const [jobsToLoad, setJobsToLoad] = useState([]);

    const handleSetJobs = (object) => {
        setJobsToLoad(object);
    }

    



    const [serverResponse, setServerResponse] = useState("");

    const fetchJobs = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/fetchJobs");
            const data = await response.json();
            setServerResponse(data.message); // set the server response as state
            var listOfJobs = data.message;
            setJobsToLoad([]);
            for ( let i = 0; i<listOfJobs.length; i++){
                let objectToPush = { 
                    employer : "",
                    jobName: ""
                }
                objectToPush.jobName = listOfJobs[i][0];
                objectToPush.employer = listOfJobs[i][1];
                setJobsToLoad(previousJobs => [...previousJobs, objectToPush]);
            }
            console.log(jobsToLoad.length);
        } catch (error) {
            console.error(error);
        }
    };

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
        },
        {idJobs: 9, title: 'Credit Analyst', location: 'Stockholm', desc: 'Analysera risk med oss i sommar', photoURL: 'https://sebgroup.com/siteassets/sebgroup.com/press-and-news/seb_k_45mm150dpi.jpg'}, 
        {idJobs: 10, title: 'Telekommunikation i Marocko', location: 'Distans', desc: 'Vi söker dig som är duktig tekniskt och vill analysera 5G nät i Marocko parallelt med studierna ', photoURL: 'https://cdn.everythingrf.com/live/984_ericsson_200.jpg'}, 
        {idJobs: 11, title: 'Telekommunikation i Santiago', location: 'Distans', desc: 'Vi söker dig som är duktig tekniskt och vill analysera 5G nät i Santiago parallelt med studierna ', photoURL: 'https://cdn.everythingrf.com/live/984_ericsson_200.jpg'}, 
        {idJobs: 12, title: 'Riskanalytiker inom industri', location: 'Luleå',  desc: 'Jobba som riskanalyiker inom industrin i sommar, välbetalt sommarjobb', photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/SANDVIK.svg/1200px-SANDVIK.svg.png'}
    ];

    

    const getJobs = async () => {
        try {
            console.log("for loopen borde kört")
            for(let i=0; i<testCards.length; i++) {
                let id = testCards[i].idJobs;
                let idToGet = id.toString();
                let printThis = await AsyncStorage.getItem(idToGet);
                console.log(printThis);
              }
            //const jobDesc = await AsyncStorage.getItem("appData")
           // console.log({jobDesc})
           AsyncStorage.clear();
        }
        catch (error){
            console.log(error)
            console.log('gick ej att hämta desc')
        }
    }
    useState(() => {
            getJobs();
        }, []);


    return (
        <View className="flex-1 bg-white" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(214,234,255,1) 2%, rgba(6,109,182,1) 100%)'}}>
            <View className= "flex-1 justify-center items-center mt-2">
                    <TextInput
                        style={{ backgroundColor: '#eaf0f8', width: "75%", height: "35%", borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.35, shadoRadius: 3, elevation: 2, padding: 10}} 
                        placeholder="Search jobs"
                        onChangeText={handleSearchTextChange}
                        value={searchText}
                    />
         </View>
        <ScrollView className="">
            <View className="m-2">
                <TouchableOpacity onPress={fetchJobs}>
                    <Text>{serverResponse}</Text>
                    <Text> Get jobs</Text>
                </TouchableOpacity>

                <JobCard
                    jobIcon={SEB}
                    jobTitle="Extrajobb"
                    employer="SEB"
                    location="Stockholm"
                    date="2023-02-11"
                    wage="144 kr/h"
                    duration="8 veckor"
                    experience="Erfarenhet krävs"
                />
                <JobCard
                    //jobIcon={AFRY}
                    jobTitle="Deltid"
                    employer="AFRY"
                    location="Uppsala"
                    date="2023-02-11"
                    wage="150 kr/h"
                    duration="8 veckor"
                    experience="Erfarenhet krävs"
                />
                <JobCard
                    jobIcon={vattenfallPic}
                    jobTitle="Sommarjobb"
                    employer="Vattenfall"
                    location="Stockholm"
                    date="2023-02-11"
                    wage="140 kr/h"
                    duration="6 veckor"
                    experience="Erfarenhet krävs"
                />
                <JobCard
                    //jobIcon={consid}
                    jobIcon={consid}
                    jobTitle="Traineeprogram"
                    employer="Consid"
                    location="Uppsala"
                    date="2023-02-11"
                    wage="170 kr/h"
                    duration="30 veckor"
                    experience="Erfarenhet krävs"
                />
                
                
            </View>
        </ScrollView>
        </View>
    );
};

export default LikeScreen;
