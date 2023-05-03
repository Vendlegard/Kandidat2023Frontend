import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, FlatList, ScrollView } from 'react-native';
import JobCard from "../components/JobCard";



export default function App() {
  const [query, setQuery] = useState('');
  const [allJobs, setALLJobs] = useState([]); // [1

  const handleSearch = text => {
    setQuery(text);

    const filteredData = jobs.filter(job =>
      job.title.toLowerCase().includes(text.toLowerCase()) ||
      job.description.toLowerCase().includes(text.toLowerCase()) ||
      job.salary.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredJobs(filteredData);
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
    } catch (error) {
      console.error(error);
    }
  };

  useState(() => {
    console.log("fetch Jobs called");
    fetchALLJobs();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        onChangeText={handleSearch}
        value={query}
        placeholder="Search for jobs..."
      />
      <ScrollView>

        {allJobs.map(job => (
          <JobCard
              jobIcon={job.employerImage}
              jobID={job.jobID}
              jobTitle={job.jobName}
              location={job.location}
              date={"2021-05-01"}
              wage={"300kr/h"}
              duration={"3 months"}
              experience={"1 year"}
              liked={false}
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


