import React from 'react';
import { View, Text, TouchableOpacity, Image, ant } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import cross from '../images/cross.png'
import { AntDesign } from '@expo/vector-icons';
import leftArrow from '../images/leftArrow.png'
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from "react-i18next";

const JobInfo = ({ jobIcon, jobTitle, employer, location, date, closeModal }) => {
  const { t, i18n } = useTranslation();



  return (
    <LinearGradient
      colors={['#e3e3e3', '#ededed', '#ffffff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.3, y: 0.3 }}
      style={{ flex: 1 }}
    >

        <View>
        <View className=" mt-20 w-full">
        <TouchableOpacity onPress={closeModal}>
          <View style={{ position: 'relative' }}>
            <Image source={leftArrow} className="w-11 h-8"></Image>
            {/* Other content here */}
          </View>
        </TouchableOpacity>

        <View>
        
          <View className="justify-center items-center">
          <Image source={{uri: jobIcon}} className="w-20 h-20" />
        </View>
        <View className="justify-center items-center mt-5">
          <Text className="text-lg font-bold"> {t('welcomeToJob')} </Text>
          <Text>{employer}</Text>
        </View>
        <View className="mt-5 px-5">
          <View className="flex flex-row mb-1">
            <AntDesign name='clockcircleo' size={16} />
            <Text className="ml-2">{jobTitle}</Text>
          </View>
          <View className="flex flex-row mb-1">
            <AntDesign name='questioncircleo' size={16} />
            <Text className="ml-2">{location}</Text>
          </View>
          <View className="flex flex-row mb-1">
            <AntDesign name='hearto' size={16} />
            <Text className="ml-2">{date}</Text>
          </View>
         

        </View>
        
        </View>
    
        
    <View className="mt-4">
      <View className="h-px bg-gray border-0 dark:bg-gray w-full">
      </View>
    </View>

    <View className="justify-center items-center mt-5 mb-3">
      <Text className="text-lg font-bold">{t('jobDescription')}</Text>
    </View>

    <View className="mt-3 px-5 h-80">
      <ScrollView>
        <View className="">
          <Text>
            Detta är bara för att se hur stylingen ska se ut och inte vår beskrivning av jobbet
        
          </Text>

        </View>
      </ScrollView>

    </View>




    <View className="flex items-center">
      <TouchableOpacity style={{width: 150, height: 40, borderRadius: 8}} className=" bg-appBlue flex justify-center items-center rounded mt-10">
        <Text style={{ color: 'black', fontSize: 15 }}>{t('apply')}</Text>
      </TouchableOpacity>
    </View>


  </View>
  </View>
      
   
    </LinearGradient>
  );
};


export default JobInfo;



