import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Text, TextInput, View, TouchableOpacity } from "react-native"; // Import components from react-native

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const ADMIN_EMAIL = "admin@example.com";
  const ADMIN_PASSWORD = "UniqueSecurePassword123";

  const handleLogin = (e) => {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setError("");
      alert("Login successful!");
      router.push("/admin-portal"); // Navigate with Expo Router
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <View style={{ padding: 20, maxWidth: 400, alignSelf: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Admin Login
      </Text>
      <View style={{ flexDirection: "column", marginBottom: 20 }}>
        <TextInput
          placeholder="Admin Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          required
          style={{
            padding: 10,
            margin: 10,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#ccc",
          }}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          required
          style={{
            padding: 10,
            margin: 10,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#ccc",
          }}
        />
        <TouchableOpacity
          onPress={handleLogin}
          style={{
            padding: 10,
            borderRadius: 5,
            backgroundColor: "#007BFF",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Login</Text>
        </TouchableOpacity>
        {error && (
          <Text style={{ color: "red", marginTop: 10, fontWeight: "bold" }}>
            {error}
          </Text>
        )}
      </View>
    </View>
  );
}
