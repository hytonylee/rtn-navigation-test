import React from 'react';
import {View, Text, Button} from 'react-native';

const DetailScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go Back Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go to Detail Again"
        onPress={() => navigation.push('Detail')}
      />
    </View>
  );
};

export default DetailScreen;
