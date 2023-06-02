import {View, Text, Animated, TouchableOpacity, StyleSheet} from 'react-native';
import {useRef} from 'react';
import React from 'react';
import FadeInView from '../components/FadeInView';

export default function Timing() {
  const fadeInOut = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeInOut, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeInOut, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedView, {opacity: fadeInOut}]}>
        <Text style={styles.animatedText}>
          Saurabh Started learning RN Animation
        </Text>
      </Animated.View>
      <TouchableOpacity onPress={fadeIn} style={styles.buttonFadeIn}>
        <Text style={styles.buttonText}>Fade In </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={fadeOut} style={styles.buttonFadeOut}>
        <Text style={styles.buttonText}>Fade Out </Text>
      </TouchableOpacity>
      <FadeInView />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, marginVertical: 150},
  animatedView: {padding: 20, backgroundColor: 'cyan'},
  animatedText: {textAlign: 'center', fontSize: 18, fontWeight: 'bold'},
  buttonFadeIn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    padding: 10,
    backgroundColor: 'green',
    alignSelf: 'center',
    marginVertical: 20,
  },
  buttonFadeOut: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    padding: 10,
    backgroundColor: 'red',
    alignSelf: 'center',
  },
  buttonText: {fontSize: 25, color: 'white'},
});
