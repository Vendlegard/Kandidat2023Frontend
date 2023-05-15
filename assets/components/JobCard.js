import { AntDesign } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, Linking} from 'react-native';
import JobInfo from './JobInfo';

const JobCard = ({ jobIcon, jobTitle, employer, location, date, wage, duration, experience, liked, jobID, userID, description}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState({
    jobIcon,
    jobTitle,
    employer,
    description,
    location,
    date,
    wage,
    duration,
    experience,
    closeModal, // add closeModal function to selectedJob state
    goToWebsite
  });

  const goToWebsite = () => {
    Linking.openURL('https://www.stssektionen.com/');
  };

  const onPressHandler = () => {
    setSelectedJob({ jobIcon, jobTitle, employer, location, date, wage, duration, experience, description });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const [heartPressed, setHeartPressed] = useState(liked);

  useEffect(() => {
    setHeartPressed(liked);
  }, [liked]);

  const storeLiked = async (likesToSend, userIDofUser) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/likedJob", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            "liked": likesToSend,
            "id": userIDofUser
          }
        )
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const storeDisliked = async (likesToSend, userIDofUser) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/dislikedJob", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            "disliked": likesToSend,
            "id": userIDofUser
          }
        )
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };




  const heartPressHandler = () => {
    setHeartPressed(!heartPressed);
    if (heartPressed) {
      storeDisliked(jobID, userID);
    }
    if (!heartPressed) {
      storeLiked(jobID, userID);
    }
  }



  return (
    <>
      <TouchableOpacity onPress={onPressHandler}>
        <View className="flex-1 flex-row h-2 ml-4 mr-4 mt-4" style={{ backgroundColor: '#f6f6f6', height: '%', borderRadius: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.25, shadowRadius: 3, elevation: 2, position: 'relative' }}>
          <View className=" w-3/12 h-28 justify-center">
            <Image source={{ uri: jobIcon }} className="w-20 h-16 ml-3" />
          </View>

          <View className="flex-1 flex-col" style={{ flexWrap: 'wrap' }}>
            <View className="flex-1 flex-row justify-between">
              <Text className="text-lg ml-4 font-bold mt-3" style={{ maxWidth: '70%' }}>{jobTitle}</Text>
              <TouchableOpacity onPress={heartPressHandler} style={{ position:'', top: 5, right: 5 }}>
            {
              heartPressed ? <AntDesign name='heart' size={28} color='#fd9090'/> :
                <AntDesign name='hearto' size={28} color='#fd9090' />
            }
          </TouchableOpacity>
            </View>
            <View className="flex-1 flex-row justify-start">
              
              <Text className="text-sm ml-4">{location}</Text>
              <Text className="text-sm ml-4">{date}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <Modal visible={showModal} animationType='slide'>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {selectedJob && <JobInfo {...selectedJob} closeModal={closeModal} goToWebsite={goToWebsite} />}
          <TouchableOpacity onPress={closeModal}>

          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

export default JobCard;