import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "@/styles/engineerFeedStyles";
import { router } from "expo-router";

const feedData = [
  {
    id: "1",
    type: "Pothole",
    location: "Sayajigunj, Ward 5",
    time: "2 hrs ago",
    status: "Assigned",
  },
  {
    id: "2",
    type: "Garbage Overflow",
    location: "Alkapuri, Ward 8",
    time: "5 hrs ago",
    status: "In Progress",
  },
  {
    id: "3",
    type: "Drainage Block",
    location: "Fatehgunj, Ward 3",
    time: "1 day ago",
    status: "Resolved",
  },
];

export default function EngineerFeed() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Engineer Feed</Text>
        <Text style={styles.subtitle}>
          Live updates from assigned issues
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {feedData.map((item) => (
          <View key={item.id} style={styles.feedCard}>
            <View
              style={[
                styles.statusDot,
                item.status === "Assigned"
                  ? styles.assigned
                  : item.status === "In Progress"
                  ? styles.inProgress
                  : styles.resolved,
              ]}
            />

            <View style={styles.feedContent}>
              <Text style={styles.issueType}>{item.type}</Text>
              <Text style={styles.issueLocation}>
                {item.location}
              </Text>
              <Text style={styles.timeText}>{item.time}</Text>

              <View style={styles.footerRow}>
                <Text
                  style={[
                    styles.statusText,
                    item.status === "Assigned"
                      ? styles.assignedText
                      : item.status === "In Progress"
                      ? styles.inProgressText
                      : styles.resolvedText,
                  ]}
                >
                  {item.status}
                </Text>

                <TouchableOpacity
                  style={styles.viewBtn}
                  onPress={() =>
                    router.push({
                      pathname: "/engineer/issue-details",
                      params: { id: item.id },
                    })
                  }
                >
                  <Text style={styles.viewBtnText}>View</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
