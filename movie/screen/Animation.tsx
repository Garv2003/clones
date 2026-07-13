import React from 'react';
import {View, SafeAreaView, Image} from 'react-native';

const Animation = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-black">
      <View className="w-full">
        <Image
          source={require('../../assets/splash.png')}
          className="w-[90%] h-20 mx-auto"
        />
      </View>
    </SafeAreaView>
  );
};

export default Animation;
