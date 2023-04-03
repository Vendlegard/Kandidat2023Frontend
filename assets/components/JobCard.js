import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const JobCard = () => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>Software Engineer</Text>
            <Text style={styles.company}>Google</Text>
            <Text style={styles.location}>Mountain View, CA</Text>
            <Text className="bg-amber-600"> testing</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        flexDirection: 'row',
        elevation: 5,
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 8,
    },
    company: {
        color: '#999',
        fontSize: 14,
        marginBottom: 8,
    },
    location: {
        color: '#999',
        fontSize: 14,
        marginBottom: 8,
    },
    description: {
        color: '#666',
        fontSize: 14,
    },
});

export default JobCard;
