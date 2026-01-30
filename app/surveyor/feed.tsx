import { View, Text, FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useMemo } from "react";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";

import { useReports } from "@/components/ReportContext";
import { feedStyles as styles } from "@/styles/feedStyles";

const WARDS = [
  "All Wards",
  ...Array.from({ length: 20 }, (_, i) => `Ward ${i + 1}`),
];

const TYPES = ["All Types", "Potholes", "Garbage", "Debris", "Drainage"];
const STATUS = ["All Status", "pending", "in-progress", "completed"];

export default function FeedScreen() {
  const { reports } = useReports();

  const [ward, setWard] = useState("All Wards");
  const [type, setType] = useState("All Types");
  const [status, setStatus] = useState("All Status");

  const filteredReports = useMemo(() => {
    return reports.filter((r) => {
      const wardMatch = ward === "All Wards" || r.ward === ward;
      const typeMatch = type === "All Types" || r.type === type;
      const statusMatch =
        status === "All Status" || r.status === status;

      return wardMatch && typeMatch && statusMatch;
    });
  }, [reports, ward, type, status]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Civic Issue Feed</Text>
      </View>

      <View style={styles.filterCard}>
        <View style={styles.filterHeader}>
          <View style={styles.filterTitleWrap}>
            <Ionicons name="filter-outline" size={18} />
            <Text style={styles.filterTitle}>Filters</Text>
          </View>

          <Text
            style={styles.clearText}
            onPress={() => {
              setWard("All Wards");
              setType("All Types");
              setStatus("All Status");
            }}
          >
            Clear
          </Text>
        </View>

        <View style={styles.filterRow}>
          <View style={styles.filterItem}>
            <Text style={styles.filterLabel}>Ward</Text>
            <View style={styles.filterBox}>
              <Picker
                selectedValue={ward}
                onValueChange={setWard}
                style={styles.picker}
              >
                {WARDS.map((w) => (
                  <Picker.Item key={w} label={w} value={w} />
                ))}
              </Picker>
            </View>
          </View>

          <View style={styles.filterItem}>
            <Text style={styles.filterLabel}>Issue Type</Text>
            <View style={styles.filterBox}>
              <Picker
                selectedValue={type}
                onValueChange={setType}
                style={styles.picker}
              >
                {TYPES.map((t) => (
                  <Picker.Item key={t} label={t} value={t} />
                ))}
              </Picker>
            </View>
          </View>

          <View style={styles.filterItem}>
            <Text style={styles.filterLabel}>Status</Text>
            <View style={styles.filterBox}>
              <Picker
                selectedValue={status}
                onValueChange={setStatus}
                style={styles.picker}
              >
                {STATUS.map((s) => (
                  <Picker.Item
                    key={s}
                    label={
                      s === "All Status"
                        ? s
                        : s.charAt(0).toUpperCase() + s.slice(1)
                    }
                    value={s}
                  />
                ))}
              </Picker>
            </View>
          </View>
        </View>
      </View>

      {filteredReports.length === 0 ? (
        <View style={styles.emptyWrap}>
          <Text style={styles.emptyTitle}>No matching issues</Text>
          <Text style={styles.emptySubtitle}>
            Try adjusting the filters
          </Text>
        </View>
      ) : (
        <FlatList
          data={filteredReports}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 16 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.card}>
              {/* ✅ FIXED IMAGE */}
              <View style={styles.imageWrap}>
                <Image
                  source={item.image}
                  style={styles.cardImage}
                />
              </View>

              <View style={styles.cardContent}>
                <View style={styles.cardTopRow}>
                  <Text style={styles.cardTitle}>{item.type}</Text>

                  <View
                    style={[
                      styles.statusBadge,
                      item.status === "completed"
                        ? styles.statusCompleted
                        : item.status === "in-progress"
                        ? styles.statusProgress
                        : styles.statusPending,
                    ]}
                  >
                    <Text style={styles.statusText}>
                      {item.status.toUpperCase()}
                    </Text>
                  </View>
                </View>

                <Text style={styles.cardDesc}>
                  {item.description}
                </Text>

                <Text style={styles.cardMeta}>
                  📍 {item.location}, {item.ward}
                </Text>

                <Text style={styles.aiText}>
                  AI Confidence: {item.aiConfidence}%
                </Text>
              </View>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}
