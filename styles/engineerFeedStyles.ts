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
    fontSize: 13,
    marginTop: 4,
  },

  scrollContent: {
    padding: 16,
  },

  feedCard: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    flexDirection: "row",
    elevation: 3,
  },

  statusDot: {
    width: 8,
    borderRadius: 4,
    marginRight: 12,
  },

  feedContent: {
    flex: 1,
  },

  issueType: {
    fontSize: 16,
    fontWeight: "700",
  },
  issueLocation: {
    fontSize: 13,
    color: "#64748b",
    marginTop: 2,
  },
  timeText: {
    fontSize: 12,
    color: "#94a3b8",
    marginTop: 6,
  },

  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },

  statusText: {
    fontSize: 12,
    fontWeight: "600",
  },

  viewBtn: {
    backgroundColor: "#2457e6",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  viewBtnText: {
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

  assignedText: {
    color: "#f59e0b",
  },
  inProgressText: {
    color: "#3b82f6",
  },
  resolvedText: {
    color: "#22c55e",
  },
});
