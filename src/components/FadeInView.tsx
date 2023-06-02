import {Text, Animated, StyleSheet} from 'react-native';
import React, {useRef, useEffect} from 'react';

export default function FadeInView() {
  const fadeInOut = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeInOut, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeInOut]);

  return (
    <Animated.View style={[styles.view, {opacity: fadeInOut}]}>
      <Text>FadeInView</Text>
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  view: {
    width: 200,
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  },
});
