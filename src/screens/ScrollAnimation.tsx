import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';

export default function ScrollAnimation() {
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>ScrollAnimation</Text>
        <PanGestureHandler>
          <View style={styles.square} />
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
  },
});
