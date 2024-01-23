import { GestureHandlerRootView } from "react-native-gesture-handler";
import 'react-native-reanimated'

// enableLatestRenderer();
import { View, Text, LogBox, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import store from "./src/redux/store";
import RootNavigator from "./src/routes";

LogBox.ignoreLogs(["VirtualizedLists", "Warning:..."]);
LogBox.ignoreAllLogs();
const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        {/* <BottomSheetModalProvider> */}
          <RootNavigator />
        {/* </BottomSheetModalProvider> */}
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
