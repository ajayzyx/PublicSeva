import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
// import { useRouter } from "expo-router";
// import { loginWithVmcCredentials } from "@/utils/auth";
import { loginMock } from "@/utils/auth";
import { useRouter } from "expo-router";


export default function UserLogin() {
  const router = useRouter();

  const [vmcId, setVmcId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // const submitHandler = async () => {
  //   if (!vmcId || !password) {
  //     setError("Enter VMC ID and password");
  //     return;
  //   }

  //   setError("");

  //   try {
  //     setLoading(true);
  //     const role = await loginWithVmcCredentials(vmcId, password);

  //     // 🔀 ROLE-BASED ROUTING
  //     if (role === "SURVEYOR") {
  //       router.replace("/surveyor");
  //     } else {
  //       router.replace("/ward");
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     setError("Invalid VMC ID or password");
  //   } finally {
  //     setLoading(false);
  //   }
  // };


  const submitHandler = async () => {
  if (!vmcId || !password) {
    setError("Enter VMC ID and password");
    return;
  }

  setError("");
  setLoading(true);

  try {
    const role = await loginMock(vmcId, password);

    if (role === "SURVEYOR") {
      router.replace("/surveyor");
    } else {
      router.replace("/engineer");
    }
  } catch (err) {
    setError("Invalid VMC ID or password");
  } finally {
    setLoading(false);
  }
};


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />

        <Text style={styles.title}>Access Your Account</Text>

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <Text style={styles.label}>VMC ID</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter VMC ID"
          autoCapitalize="characters"
          value={vmcId}
          onChangeText={setVmcId}
        />

        <Text style={[styles.label, { marginTop: 12 }]}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={[styles.button, loading && { opacity: 0.7 }]}
          onPress={submitHandler}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? "Logging in..." : "Login"}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 28,
    justifyContent: "center",
  },
  logo: {
    width: 70,
    height: 70,
    alignSelf: "center",
    marginBottom: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  error: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#eee",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    backgroundColor: "#2563eb",
    marginTop: 18,
    paddingVertical: 12,
    borderRadius: 6,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
