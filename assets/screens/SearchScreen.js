import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, FlatList } from 'react-native';

const jobs = [
  { id: 1, title: 'Software Engineer', description: 'Develop software applications', salary: '20,000 - 30,000' },
  { id: 2, title: 'Product Manager', description: 'Manage product development lifecycle', salary: '25,000 - 30,000' },
  { id: 3, title: 'Data Analyst', description: 'Analyze and interpret complex data sets', salary: '20,000 - 25,000' },
  { id: 4, title: 'Frontend Developer', description: 'Develop and implement frontend code', salary: '25,000 - 30,000' },
];

export default function App() {
  const [query, setQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const handleSearch = text => {
    setQuery(text);

    const filteredData = jobs.filter(job =>
      job.title.toLowerCase().includes(text.toLowerCase()) ||
      job.description.toLowerCase().includes(text.toLowerCase()) ||
      job.salary.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredJobs(filteredData);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        onChangeText={handleSearch}
        value={query}
        placeholder="Search for jobs..."
      />
      <FlatList
        data={filteredJobs}
        renderItem={({ item }) => (
          <View style={styles.jobContainer}>
            <Text style={styles.jobTitle}>{item.title}</Text>
            <Text style={styles.jobDescription}>{item.description}</Text>
            <Text style={styles.jobSalary}>{item.salary}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 10,
  },
  searchBox: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  jobContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
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


