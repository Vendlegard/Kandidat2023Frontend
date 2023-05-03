import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import JobInfo from './JobInfo';

const JobCard = ({ jobs }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState({
    jobs,
    // jobIcon,
    // jobTitle,
    // employer,
    // location,
    // date,
    // wage,
    // duration,
    // experience,
    closeModal, // add closeModal function to selectedJob state
  });

  const onPressHandler = () => {
    setSelectedJob({ jobs });
    setShowModal(true);
    
  };

  const closeModal = () => {
    setShowModal(false);
  };

  

    return (
    <>
    <View>
    

      
      {jobs.map((job) => (
        <TouchableOpacity onPress={onPressHandler}>
        <View className="flex-1 flex-row h-2 ml-4 mr-4 mt-5 " style={{ backgroundColor: '#eaf0f8', height: '75%', borderRadius: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.35, shadowRadius: 3, elevation: 2 }} >
          <View className=" w-3/12 h-28 justify-center">
            <Image source={{uri: job.photoURL}} className="w-18 h-16 ml-3" />
          </View>

          <View className="flex-1 flex-col">
          
        <View className="" key={job.id}>

          <View >
              <Text className="text-lg ml-4 font-bold mt-2">{job.title}</Text>
            </View>
          <View className="px-1 pt-1 -mt-4 justify-end items-end">
                <AntDesign name='hearto' size={30} />
              </View>
              <View className="flex-1 flex-row">
              <Text className="text-sm ml-4">{job.location}</Text>
            </View>
            <View className="flex-1 flex-row">
            </View>
        </View>
        </View>
        </View>
        </TouchableOpacity>
      ))}
            
           
            
          
      

      <Modal visible={showModal} animationType='slide'>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {selectedJob && <JobInfo {...selectedJob} closeModal={closeModal} />}
          <TouchableOpacity onPress={closeModal}>
            
          </TouchableOpacity>
        </View>
      </Modal>
      </View>
    </>
  );
};

export default JobCard;