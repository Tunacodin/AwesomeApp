import React from 'react';
import {Button, Text, View} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={{backgroundColor:"blue"}}>
      <Text>Profile</Text>
      <Button
        title="Profile git"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
