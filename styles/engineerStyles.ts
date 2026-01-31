import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fb",
  },

  header: {
    backgroundColor: "#2457e6",
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
  subtitle: {
    color: "#dbe4ff",
    marginTop: 4,
    fontSize: 13,
  },

  scrollContent: {
    padding: 16,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: "#fff",
    width: "30%",
    borderRadius: 14,
    padding: 14,
    alignItems: "center",
    elevation: 3,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2457e6",
  },
  statLabel: {
    fontSize: 12,
    marginTop: 4,
    color: "#64748b",
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 12,
  },

  issueCard: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 3,
  },
  issueType: {
    fontSize: 16,
    fontWeight: "700",
  },
  issueSub: {
    fontSize: 13,
    color: "#64748b",
    marginTop: 2,
  },
  issuePriority: {
    fontSize: 12,
    marginTop: 6,
    color: "#1e293b",
  },

  statusPill: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: "center",
  },
  statusText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },

  assigned: {
    backgroundColor: "#f59e0b",
  },
  inProgress: {
    backgroundColor: "#3b82f6",
  },
  resolved: {
    backgroundColor: "#22c55e",
  },
});
