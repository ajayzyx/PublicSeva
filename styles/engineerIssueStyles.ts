import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },

  card: {
    backgroundColor: "#FFFFFF",
    margin: 16,
    padding: 18,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1F2937",
  },

  sub: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
    marginBottom: 14,
  },

  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  statusLabel: {
    fontSize: 14,
    color: "#374151",
    marginRight: 8,
    fontWeight: "600",
  },

  statusValue: {
    fontSize: 14,
    fontWeight: "700",
    color: "#2563EB",
  },

  section: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    marginTop: 18,
    marginBottom: 10,
  },

  image: {
    width: 140,
    height: 100,
    borderRadius: 12,
    marginRight: 12,
    backgroundColor: "#E5E7EB",
  },

  primaryBtn: {
    backgroundColor: "#2563EB",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 12,
  },

  successBtn: {
    backgroundColor: "#16A34A",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 12,
  },

  btnText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 15,
  },

  backBtn: {
    marginTop: 22,
    alignItems: "center",
  },

  backText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2563EB",
  },
});
