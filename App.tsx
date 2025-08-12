import { StyleSheet } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "./app/index";
import Page2Screen from "./app/page2";
import { createStaticNavigation } from "@react-navigation/native";
import { KeyboardProvider } from "react-native-keyboard-controller";

export default function App() {
  return (
    <KeyboardProvider>
      <Navigation />
    </KeyboardProvider>
  );
}

const RootStack = createNativeStackNavigator({
  screens: {
    index: IndexScreen,
    page2: Page2Screen,
  },
});

const Navigation = createStaticNavigation(RootStack);
