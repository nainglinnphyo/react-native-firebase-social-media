import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableHighlight,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigation } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "react-native-vector-icons";

const SignInScreen = () => {
  const navigation = useNavigation();
  const [hidePass, setHidePass] = useState(true);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const Sigin = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError("Invalid Credential!");
        setLoading(false);
      });
  };
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.loginContainer}>
        <Text style={styles.header}>Sign In with existing account!</Text>
        <TextInput
          placeholder="Email"
          style={!error ? styles.input : styles.inputError}
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <View style={!error ? styles.input : styles.inputError}>
          <TextInput
            style={{width:'80%'}}
            value={password}
            placeholder="Password"
            onChangeText={(value) => setPassword(value)}
            secureTextEntry={hidePass ? true : false}
          ></TextInput>
          <Ionicons
            name={hidePass ? "ios-eye-off-outline" : "ios-eye-outline"}
            size={20}
            color="grey"
            onPress={() => setHidePass(!hidePass)}
          />
        </View>
        <View style={styles.buttonContiner}>
        <TouchableWithoutFeedback  onPress={Sigin}>
          <View style={styles.buttonText}>
            {loading ? (
              <ActivityIndicator size={30} color="white" />
            ) : (
              <Text style={styles.loginText}>Sign In</Text>
            )}
          </View>
        </TouchableWithoutFeedback>
        </View>
        {error && <Text style={styles.error}>{error}</Text>}
      </SafeAreaView>
      <View style={styles.bottomContainer}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.bottomText}>
            Don't have an account?{" "}
            <Text style={styles.signupText}>Sign Up</Text>
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  loginContainer: {
    paddingTop: 100,
    padding: 20,
  },
  header: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
  },
  input: {
    width: "100%",
    padding: 8,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "#e3e4e8",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputError: {
    width: "100%",
    padding: 8,
    marginVertical: 5,
    borderRadius: 10,
    borderColor: "red",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: "#e3e4e8",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContiner: {
    marginVertical: 5,
    backgroundColor: "#3796F3",
    height: 45,
    borderRadius: 10,
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
  loginText: {
    fontSize: 14,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  error: { textAlign: "center", color: "red" },
  bottomContainer: {
    height: 50,
    justifyContent: "center",
  },
  bottomText: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 14,
  },
  signupText: {
    color: "red",
  },
});

export default SignInScreen;
