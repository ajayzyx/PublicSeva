import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, router } from "expo-router";
import styles from "@/styles/engineerIssueStyles";

export default function EngineerIssueDetails() {
  const { id } = useLocalSearchParams();
  const [status, setStatus] = useState("Assigned");

  const updateStatus = (newStatus: string) => {
    setStatus(newStatus);
    Alert.alert("Status Updated", `Marked as ${newStatus}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.title}>Pothole Issue</Text>
          <Text style={styles.sub}>
            Sayajigunj • Ward 5
          </Text>

          <View style={styles.statusRow}>
            <Text style={styles.statusLabel}>Current Status:</Text>
            <Text style={styles.statusValue}>{status}</Text>
          </View>

          <Text style={styles.section}>Captured Evidence</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3].map((i) => (
              <Image
                key={i}
                source={{ uri: "https://via.placeholder.com/140" }}
                style={styles.image}
              />
            ))}
          </ScrollView>

          <Text style={styles.section}>Update Status</Text>

          {status !== "In Progress" && (
            <TouchableOpacity
              style={styles.primaryBtn}
              onPress={() => updateStatus("In Progress")}
            >
              <Text style={styles.btnText}>Mark In Progress</Text>
            </TouchableOpacity>
          )}

          {status !== "Resolved" && (
            <TouchableOpacity
              style={styles.successBtn}
              onPress={() => updateStatus("Resolved")}
            >
              <Text style={styles.btnText}>Mark Resolved</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => router.back()}
          >
            <Text style={styles.backText}>← Back to Dashboard</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
