import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "@/styles/engineerStyles";
import { router } from "expo-router";

const issues = [
  {
    id: "1",
    type: "Pothole",
    area: "Sayajigunj",
    ward: "Ward 5",
    priority: "High",
    status: "Assigned",
  },
  {
    id: "2",
    type: "Garbage",
    area: "Alkapuri",
    ward: "Ward 8",
    priority: "Medium",
    status: "In Progress",
  },
  {
    id: "3",
    type: "Drainage",
    area: "Fatehgunj",
    ward: "Ward 3",
    priority: "Low",
    status: "Resolved",
  },
];

export default function EngineerDashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Engineer Dashboard</Text>
        <Text style={styles.subtitle}>
          Assigned Civic Issues
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>Total</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statValue}>1</Text>
            <Text style={styles.statLabel}>Assigned</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statValue}>1</Text>
            <Text style={styles.statLabel}>In Progress</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Your Issues</Text>

        {issues.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.issueCard}
            activeOpacity={0.85}
            onPress={() =>
              router.push({
                pathname: "/engineer/issue-details",
                params: { id: item.id },
              })
            }
          >
            <View>
              <Text style={styles.issueType}>{item.type}</Text>
              <Text style={styles.issueSub}>
                {item.area}, {item.ward}
              </Text>
              <Text style={styles.issuePriority}>
                Priority: {item.priority}
              </Text>
            </View>

            <View
              style={[
                styles.statusPill,
                item.status === "Assigned"
                  ? styles.assigned
                  : item.status === "In Progress"
                  ? styles.inProgress
                  : styles.resolved,
              ]}
            >
              <Text style={styles.statusText}>
                {item.status}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
