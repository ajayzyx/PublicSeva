import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
  },

  topBar: {
    backgroundColor: "#2563EB",
    paddingVertical: 22,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  appTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },
  appSubtitle: {
    color: "#E0E7FF",
    marginTop: 4,
    fontSize: 14,
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
    color: "#111827",
  },

  uploadBox: {
    height: 220,
    borderRadius: 16,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#CBD5E1",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
  },
  cameraIcon: {
    fontSize: 40,
    marginBottom: 8,
  },
  uploadText: {
    color: "#6B7280",
    fontSize: 14,
  },

  fullCamera: {
    flex: 1,
    backgroundColor: "#000",
  },

  recordingBadge: {
    position: "absolute",
    top: 60,
    right: 20,
    backgroundColor: "#EF4444",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  recordingText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 12,
  },

  bottomControls: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    alignItems: "center",
  },

  recordBtn: {
    width: 74,
    height: 74,
    borderRadius: 37,
    backgroundColor: "#EF4444",
    borderWidth: 6,
    borderColor: "#fff",
  },

  stopBtn: {
    backgroundColor: "#2563EB",
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 30,
  },
  stopText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  frameContainer: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  frameTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
    color: "#111827",
  },
  frameImage: {
    width: width * 0.3 - 18,
    height: 100,
    borderRadius: 12,
    marginRight: 10,
  },


  uploadBtn: {
    marginHorizontal: 16,
    backgroundColor: "#2563EB",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 30,
  },
  uploadBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

});