import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import Landing from "./Landing";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Landing />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
