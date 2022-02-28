import { NavigationContainer } from "@react-navigation/native";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import {
  setLoggin,
  setLoggout,
} from "./src/redux/features/authSlice";
import AppStack from "./src/screens/app/AppStack";
import AuthStack from "./src/screens/auth/AuthStack";

export default function Landing() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setLoggin({ email: user.email, uid: user.uid }));
        setLoading(false);
      } else {
        dispatch(setLoggout());
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={50} color="#2196F3" />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
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
