import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

const Page = () =>{
    const { id } = useLocalSearchParams<{id: string}>();
    alert(id)
  return(
    <View>
        <Text>Page</Text>
    </View>
  )
}

export default Page