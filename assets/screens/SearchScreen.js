import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, TextInput, View, FlatList, ScrollView } from 'react-native';
import JobCard from "../components/JobCard";
import { useTranslation} from "react-i18next";



export default function App({userInfo}) {
  const [query, setQuery] = useState('');
  const [allJobs, setALLJobs] = useState([]); // [1
  const [likedJobs, setLikedJobs] = useState([]);
  const { t, i18n } = useTranslation();

  const handleSearch = text => {
    setQuery(text);
    };

  const fetchALLJobs = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/fetchALLJobs", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setALLJobs(data.all_jobs);
      console.log(data.all_jobs);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchLikedJobs = async () => {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/fetchLikedJobs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: userInfo.userID,
            }
            )
        });
        const data = await response.json();
        setLikedJobs(data.liked_jobs)
    } catch (error) {
        console.error(error);
    }
};

  useState(() => {
    console.log("fetch Jobs called");
    fetchALLJobs();
  }, []);

  useState(
    () => {
        fetchLikedJobs();
    });


  const [jobTitles, setJobTitles] = useState([]);
    allJobs.map((job) => {
      const isJobLiked = likedJobs.some(likedJob => likedJob.jobID === job.jobID);
      if (isJobLiked){
          job.liked=true
      }
    });

    const [filtered, setFiltered] = useState(allJobs);

    const jobTitlesArray = allJobs.map((job) => job.jobName);

    const [arrayToFilter, setArrayToFilter] = useState(jobTitlesArray);

    const [jobsToShow, setJobsToShow] = useState(allJobs);

    const filteredJobs = (query) => {
      const filtered = jobTitlesArray.filter((job) => job.toLowerCase().includes(query.toLowerCase()));
      setArrayToFilter(filtered);
      for(let i = 0; i < filtered.length; i++){
        for(let j = 0; j < allJobs.length; j++){
          if(filtered[i] === allJobs[j].jobName){
            setJobsToShow([...jobsToShow, allJobs[j]]);
          }
        }
      }
      return console.log(jobsToShow);
  }

    useEffect(() => {
      filteredJobs(query);
    }, [query]);



  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        onChangeText={handleSearch}
        value={query}
        placeholder={t('searchJobs')}
      />
      <ScrollView>

        {allJobs.filter(job => job.jobName.includes(query)).map(job => (
          <JobCard
              jobIcon={job.employerImage}
              userID={userInfo.userID}
              jobID={job.jobID}
              jobTitle={job.jobName}
              location={job.location}
              date={"2021-05-01"}
              wage={"300kr/h"}
              duration={"3 months"}
              experience={"1 year"}
              liked={job.liked}
            />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  searchBox: {
    backgroundColor: '#f6f6f6',
    padding: 10,
    marginBottom: 15,
    marginTop: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  jobContainer: {
    backgroundColor: '#f6f6f6',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  jobTitle: {
    fontWeight: 'bold',
  },
  jobDescription: {
    marginBottom: 5,
  },
  jobSalary: {
    color: 'green',
  },
});


