import { Slot } from "expo-router";
import React from "react";
import { KeyboardProvider } from "react-native-keyboard-controller";

export default function App() {
  return (
    <KeyboardProvider>
      <Slot />
    </KeyboardProvider>
  );
}
