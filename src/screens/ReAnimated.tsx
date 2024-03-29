import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  // withSpring,
  withTiming,
} from 'react-native-reanimated';

export default function ReAnimated1() {
  const animatedValue = useSharedValue(0);
  const [clicked, setClicked] = useState(false);
  const styleAni = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animatedValue.value}],
    };
  });

  return (
    <View style={styles.container}>
      <Text>ReAnimation</Text>
      <Animated.View style={[styles.rectangle, styleAni]} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (clicked) {
            animatedValue.value = withTiming(-20, {
              duration: 1000,
            });
            setClicked(!clicked);
          } else {
            animatedValue.value = withTiming(50, {
              duration: 1000,
            });
            setClicked(!clicked);
          }
        }}>
        <Text>Click</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    borderColor: 'black',
    width: 100,
    height: 50,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 200,
  },
  rectangle: {
    height: 100,
    width: 150,
    alignSelf: 'center',
    backgroundColor: 'yellow',
  },
});
