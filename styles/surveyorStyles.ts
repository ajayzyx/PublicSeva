import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f8fb",
  },

  header: {
    padding: 20,
    backgroundColor: "#2563eb",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },
  headerSubtitle: {
    color: "#dbeafe",
    marginTop: 4,
  },

  statsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 12,
    justifyContent: "space-between",
  },
  statCard: {
    width: "48%",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
  },
  statValue: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "700",
  },
  statLabel: {
    color: "#fff",
    marginTop: 4,
  },

  blueCard: { backgroundColor: "#3b82f6" },
  yellowCard: { backgroundColor: "#eab308" },
  purpleCard: { backgroundColor: "#a855f7" },
  greenCard: { backgroundColor: "#22c55e" },

  card: {
    backgroundColor: "#fff",
    margin: 12,
    padding: 14,
    borderRadius: 14,
    elevation: 2,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },

  mapBox: {
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
  },

  issueRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderColor: "#e5e7eb",
  },
  issueTitle: {
    fontSize: 15,
    fontWeight: "600",
  },
  issueSub: {
    color: "#6b7280",
    marginTop: 2,
  },

  statusPill: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    fontSize: 12,
    textTransform: "capitalize",
  },
  pending: {
    backgroundColor: "#fef3c7",
    color: "#92400e",
  },
  inProgress: {
    backgroundColor: "#dbeafe",
    color: "#1d4ed8",
  },
  resolved: {
    backgroundColor: "#dcfce7",
    color: "#166534",
  },
});
