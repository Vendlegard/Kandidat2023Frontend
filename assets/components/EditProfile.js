import React from 'react';
import { View, Text, Button, TextInput, Dimensions} from 'react-native';

const EditProfile = ({larosate, termin, kompetenser, soker}) => {
    return (
        <View>
            <View>
                <Text className="text-lg bg-red-200">{larosate}</Text>
            </View>
            <View>
                <Text className="text-lg bg-green-200">{termin}</Text>
            </View>

        </View>

    )
}

export default EditProfile

