import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';

export default function ReAnimated2() {
  const offset = useSharedValue(1);
  const [clicked, setClicked] = useState(false);
  const animatedStyle = useAnimatedStyle(() => {
    const width = interpolate(offset.value, [0, 1], [100, 200]);
    const borderRadius = interpolate(offset.value, [0, 1], [0, 100]);
    const backgroundColor = interpolateColor(
      offset.value,
      [0, 1],
      ['red', 'blue'],
    );
    return {
      width: width,
      height: width,
      borderRadius: borderRadius,
      backgroundColor: backgroundColor,
    };
  });
  return (
    <View style={styles.container}>
      <View style={styles.animatedContainer}>
        <Animated.View style={[animatedStyle, styles.animateSquare]} />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          offset.value = clicked
            ? withTiming(0, {
                duration: 1000,
              })
            : withTiming(1, {
                duration: 1000,
              });
          setClicked(!clicked);
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
  animateSquare: {
    backgroundColor: 'pink',
    width: 100,
    height: 100,
    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'center',
    marginVertical: 100,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 100,
    backgroundColor: 'cyan',
    padding: 25,
  },
  animatedContainer: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginVertical: 20,
  },
});
