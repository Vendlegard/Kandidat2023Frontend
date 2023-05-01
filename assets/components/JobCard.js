import { AntDesign } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import JobInfo from './JobInfo';

const JobCard = ({ jobIcon, jobTitle, employer, location, date, wage, duration, experience, liked, jobID, userID}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState({
    jobIcon,
    jobTitle,
    employer,
    location,
    date,
    wage,
    duration,
    experience,
    closeModal, // add closeModal function to selectedJob state
  });

  const onPressHandler = () => {
    setSelectedJob({jobIcon, jobTitle, employer, location, date, wage, duration, experience });
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
              "id"   : userIDofUser
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
              "id"   : userIDofUser
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
        if(heartPressed){
          storeDisliked(jobID, userID);
        }
        if(!heartPressed){
            storeLiked(jobID, userID);
        }
    }


    console.log("heart pressed is now : " + heartPressed)
    console.log("liked is now : " + liked)

  

    return (
    <>
      <TouchableOpacity onPress={onPressHandler}>
        <View className="flex-1 flex-row h-2 ml-4 mr-4 mt-3 " style={{ backgroundColor: '#eaf0f8', height: '75%', borderRadius: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.35, shadowRadius: 3, elevation: 2 }} >
          <View className=" w-3/12 h-28 justify-center">
            <Image source={{uri: jobIcon}} className="w-20 h-16 ml-3" />
          </View>

          <View className="flex-1 flex-col">
            <View className="flex-1 flex-row justify-between">
              <Text className="text-lg ml-4 font-bold">{jobTitle}</Text>
              <View className="px-1 pt-1">
                <TouchableOpacity onPress={heartPressHandler}>
                {
                    heartPressed ? <AntDesign name='heart' size={30} /> :
                        <AntDesign name='hearto' size={30} />
                }
                </TouchableOpacity>
              </View>
            </View>
            <View className="flex-1 flex-row">
              <Text className="text-sm ml-4">{employer}</Text>
              <Text className="text-sm ml-4">{location}</Text>
              <Text className="text-sm ml-4">{date}</Text>
            </View>
            <View className="flex-1 flex-row">
              <Text className="text-sm ml-4">{wage}</Text>
              <Text className="text-sm ml-4">{duration}</Text>
              <Text className="text-sm ml-4">{experience}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <Modal visible={showModal} animationType='slide'>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {selectedJob && <JobInfo {...selectedJob} closeModal={closeModal} />}
          <TouchableOpacity onPress={closeModal}>
            
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

export default JobCard;