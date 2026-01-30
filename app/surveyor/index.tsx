import React from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";
import styles from "@/styles/surveyorStyles";

const issues = [
  {
    id: "1",
    type: "Pothole",
    area: "Sayajigunj",
    ward: "Ward 5",
    status: "pending",
    lat: 22.3072,
    lng: 73.1812,
  },
  {
    id: "2",
    type: "Garbage",
    area: "Alkapuri",
    ward: "Ward 8",
    status: "in-progress",
    lat: 22.309,
    lng: 73.18,
  },
  {
    id: "3",
    type: "Debris",
    area: "Fatehgunj",
    ward: "Ward 3",
    status: "resolved",
    lat: 22.308,
    lng: 73.179,
  },
];

export default function SurveyorDashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nagar Seva</Text>
        <Text style={styles.headerSubtitle}>
          AI-Powered Issue Tracking
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.statsRow}>
          <View style={[styles.statCard, styles.blueCard]}>
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>Total Issues</Text>
          </View>

          <View style={[styles.statCard, styles.yellowCard]}>
            <Text style={styles.statValue}>1</Text>
            <Text style={styles.statLabel}>Pending</Text>
          </View>

          <View style={[styles.statCard, styles.purpleCard]}>
            <Text style={styles.statValue}>1</Text>
            <Text style={styles.statLabel}>In Progress</Text>
          </View>

          <View style={[styles.statCard, styles.greenCard]}>
            <Text style={styles.statValue}>1</Text>
            <Text style={styles.statLabel}>Resolved</Text>
          </View>
        </View>

        {/* MAP CARD */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>📍 Issues Map View</Text>

          <View style={styles.mapBox}>
            <MapView
              style={{ flex: 1 }}
              initialRegion={{
                latitude: 22.3072,
                longitude: 73.1812,
                latitudeDelta: 0.02,
                longitudeDelta: 0.02,
              }}
            >
              {issues.map((issue) => (
                <Marker
                  key={issue.id}
                  coordinate={{
                    latitude: issue.lat,
                    longitude: issue.lng,
                  }}
                  title={issue.type}
                  description={`${issue.area}, ${issue.ward}`}
                />
              ))}
            </MapView>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Recent Issues</Text>

          {issues.map((item) => (
            <View key={item.id} style={styles.issueRow}>
              <View>
                <Text style={styles.issueTitle}>{item.type}</Text>
                <Text style={styles.issueSub}>
                  {item.area}, {item.ward}
                </Text>
              </View>

              <Text
                style={[
                  styles.statusPill,
                  item.status === "pending"
                    ? styles.pending
                    : item.status === "in-progress"
                    ? styles.inProgress
                    : styles.resolved,
                ]}
              >
                {item.status}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
