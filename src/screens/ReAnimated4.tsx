import {
  View,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  TapGestureHandler,
} from 'react-native-gesture-handler';

const ImageComp = Animated.createAnimatedComponent(Image);
export default function ReAnimated4() {
  const scaleAniRef = useSharedValue(0);

  const doubleTap = useCallback(() => {
    scaleAniRef.value = withSpring(1, undefined, isFinished => {
      console.log('double tap called');
      if (isFinished) {
        scaleAniRef.value = withDelay(100, withSpring(0));
        console.log('finished', scaleAniRef.value);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: Math.max(scaleAniRef.value, 0)}],
    };
  });
  console.log('Component rendering');
  return (
    <SafeAreaView style={{flex: 1}}>
      <GestureHandlerRootView style={{flex: 1}}>
        <View style={styles.container}>
          <TapGestureHandler
            onActivated={doubleTap}
            numberOfTaps={2}
            maxDelayMs={250}>
            <Animated.View>
              <ImageBackground
                source={require('../assets/background.jpg')}
                style={styles.bgStyle}>
                <ImageComp
                  source={require('../assets/likes.png')}
                  style={[styles.likes, animatedStyle]}
                />
              </ImageBackground>
            </Animated.View>
          </TapGestureHandler>
        </View>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  bgStyle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
  },
  likes: {
    height: 180,
    width: 180,
    tintColor: 'white',
  },
});
