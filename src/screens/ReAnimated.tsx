import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

export default function ReAnimated1() {
  const animatedValue = useSharedValue(1);
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
          setClicked(!clicked);
          animatedValue.value = withTiming(100, {
            duration: 5000,
          });
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
