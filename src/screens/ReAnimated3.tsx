import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
export default function ReAnimated3() {
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const rectStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: x.value}, {translateY: y.value}],
    };
  });
  const getPanGestureHandler = useAnimatedGestureHandler({
    onStart(event, context) {
      context.startX = x.value;
      context.startY = y.value;
    },
    onActive(event, context) {
      x.value = event.translationX + context.startX;
      y.value = event.translationY + context.startY;
    },
    onEnd(event, context) {
      x.value = withSpring(0);
      y.value = withSpring(0);
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView>
        <View style={styles.container}>
          <PanGestureHandler onGestureEvent={getPanGestureHandler}>
            <Animated.View style={[styles.rectangle, rectStyle]}>
              <Text style={{color: 'white'}}>Moveable Rectangle</Text>
            </Animated.View>
          </PanGestureHandler>
        </View>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rectangle: {
    width: 100,
    height: 100,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
