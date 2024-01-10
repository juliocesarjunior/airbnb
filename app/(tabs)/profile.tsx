import React from 'react';
import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';


const Page = () => {
  return (
    <View>
      <Button title="Sair" />
      <Link href={'/(modals)/login'}>
        <Text>Login</Text>
      </Link>
    </View>
  )
}

export default Page