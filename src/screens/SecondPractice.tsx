import {View, Animated, StyleSheet, Image} from 'react-native';
import React, {useRef, useEffect} from 'react';
import twitter from '../assets/twitter.webp';
// import twitterLogo from '../assets/twitter-logo.svg';

export default function SecondPractice() {
  const animateRef = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // setTimeout(animation, 500);
    animation();
  }, []);

  const animation = () => {
    Animated.timing(animateRef, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.imageContainer,
          {
            transform: [
              {
                scale: animateRef.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 15],
                }),
              },
            ],
          },
        ]}>
        <Image source={twitter} style={styles.image} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1DA1F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    tintColor: 'white',
  },
});
