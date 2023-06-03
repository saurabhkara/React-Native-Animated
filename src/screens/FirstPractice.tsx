import {View, Text, Animated, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';

export default function FirstPractice() {
  const aniRef = useRef(new Animated.Value(0)).current;
  const [moved, setMoved] = useState(false);

  const animateBall = () => {
    console.log('Working');
    Animated.timing(aniRef, {
      toValue: moved ? 0 : 1,
      // duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text>FirstPractice</Text>
      <Animated.View
        style={[
          styles.ball,
          {
            transform: [
              {
                translateY: aniRef.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 100],
                }),
              },
              //   {
              //     translateX: aniRef.interpolate({
              //       inputRange: [0, 1],
              //       outputRange: [0, -50],
              //     }),
              //   },
              {
                rotate: aniRef.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '360deg'],
                }),
              },
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
        style={styles.button}
        onPress={() => {
          setMoved(!moved);
          animateBall();
        }}>
        <Text style={{color: 'white'}}>Move Ball</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 50,
    alignItems: 'center',
  },
  ball: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: 'green',
    marginVertical: 20,
  },
  button: {
    backgroundColor: 'blue',
    width: 70,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 100,
  },
});
