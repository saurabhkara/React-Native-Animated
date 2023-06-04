import {View, Animated, TouchableOpacity, StyleSheet, Text} from 'react-native';
import React, {useRef, useState} from 'react';

export default function AnimatedButtons() {
  const aniRef = useRef(new Animated.Value(0)).current;
  const [clicked, setClicked] = useState(false);

  const animation = () => {
    Animated.timing(aniRef, {
      toValue: clicked ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={styles.buttonContainer}>
        <Animated.View
          style={[
            styles.redButton,
            {
              transform: [
                {
                  translateY: aniRef.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -50],
                  }),
                },
                {
                  translateX: aniRef.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -50],
                  }),
                },
                // {
                //   rotate: aniRef.interpolate({
                //     inputRange: [0, 1],
                //     outputRange: ['0deg', '360deg'],
                //   }),
                // },
                {
                  scale: aniRef.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 1.5],
                  }),
                },
              ],
            },
          ]}
        />
        <Animated.View
          style={[
            styles.blackButton,
            {
              transform: [
                {
                  translateY: aniRef.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -80],
                  }),
                },
                {
                  translateX: aniRef.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0],
                  }),
                },
                // {
                //   rotate: aniRef.interpolate({
                //     inputRange: [0, 1],
                //     outputRange: ['0deg', '360deg'],
                //   }),
                // },
                {
                  scale: aniRef.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 1.5],
                  }),
                },
              ],
            },
          ]}
        />
        <Animated.View
          style={[
            styles.orangeButton,
            {
              transform: [
                {
                  translateY: aniRef.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -50],
                  }),
                },
                {
                  translateX: aniRef.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 50],
                  }),
                },
                // {
                //   rotate: aniRef.interpolate({
                //     inputRange: [0, 1],
                //     outputRange: ['0deg', '360deg'],
                //   }),
                // },
                {
                  scale: aniRef.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 1.5],
                  }),
                },
              ],
            },
          ]}
        />
        <TouchableOpacity
          style={styles.mainButton}
          onPress={() => {
            setClicked(!clicked), animation();
          }}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  mainButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'blue',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    color: 'white',
  },
  redButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 5,
  },
  blackButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 5,
  },
  orangeButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'orange',
    position: 'absolute',
    bottom: 5,
  },
});
