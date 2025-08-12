import { router } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { KeyboardStickyView } from "react-native-keyboard-controller";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

import { useNavigation } from "@react-navigation/core";

export default function Page() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <AnimatedThing />
      <Button
        title="add screen to stack"
        onPress={() => {
          navigation.navigate("page2");
        }}
      />
      <View style={styles.flex} />
      <KeyboardStickyView style={styles.stickyView}>
        <Text>KeyboardStickyView</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Text input with or without autoFocus"
        />
      </KeyboardStickyView>
    </View>
  );
}

const duration = 2000;
const easing = Easing.bezier(0.25, -0.5, 0.25, 1);

function AnimatedThing() {
  const sv = useSharedValue<number>(0);

  React.useEffect(() => {
    // highlight-next-line
    sv.value = withRepeat(withTiming(1, { duration, easing }), -1);
  }, [sv]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${sv.value * 360}deg` }],
  }));

  return <Animated.View style={[styles.box, animatedStyle]} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    paddingTop: 50,
  },
  flex: {
    flex: 1,
  },
  stickyView: {
    borderColor: "black",
    backgroundColor: "lightgreen",
    borderWidth: 1,
    padding: 16,
  },
  textInput: {
    backgroundColor: "#f0f0f0",
    padding: 8,
  },
  box: {
    alignSelf: "center",
    height: 80,
    width: 80,
    backgroundColor: "#b58df1",
    borderRadius: 20,
  },
});
