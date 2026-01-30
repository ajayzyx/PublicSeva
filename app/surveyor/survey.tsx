import React, { useState } from "react";
import { View, Text, Alert, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCameraPermissions, Camera } from "expo-camera";
import * as VideoThumbnails from "expo-video-thumbnails";
import axios from "axios";

import CameraRecorder from "@/components/CameraRecorder";
import FrameGallery from "@/components/FrameGallery";
import UploadButton from "@/components/UploadButton";
import styles from "@/styles/cameraStyles";
import { router } from "expo-router";

export default function SurveyorSurvey() {
  const [permission, requestPermission] = useCameraPermissions();

  const [openCamera, setOpenCamera] = useState(false);
  const [videoUri, setVideoUri] = useState<string | null>(null);
  const [frames, setFrames] = useState<string[]>([]);

  const extractFrames = async (uri: string, durationMs: number) => {
    try {
      const images: string[] = [];

      for (let time = 0; time < durationMs; time += 3000) {
        const { uri: frame } =
          await VideoThumbnails.getThumbnailAsync(uri, { time });
        images.push(frame);
      }

      setFrames(images);
    } catch (e) {
      console.log("Frame extraction error", e);
    }
  };

  const openCameraHandler = async () => {
    if (!permission?.granted) {
      const cam = await requestPermission();
      if (!cam.granted) {
        return Alert.alert("Camera permission required");
      }
    }

    const mic = await Camera.requestMicrophonePermissionsAsync();
    if (!mic.granted) {
      return Alert.alert("Microphone permission required");
    }

    setFrames([]);
    setVideoUri(null);
    setOpenCamera(true);
  };

  const onRecordingComplete = async (
    uri: string,
    durationMs: number
  ) => {
    setOpenCamera(false);
    setVideoUri(uri);
    await extractFrames(uri, durationMs);
  };

  const uploadData = async () => {
  if (frames.length === 0) return;

  try {
    const formData = new FormData();

    frames.forEach((img, index) => {
      formData.append("images", {
        uri: img,
        name: `frame_${index}.jpg`,
        type: "image/jpeg",
      } as any);
    });

    await axios.post(
      "https://your-api/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    Alert.alert("Success", "Report submitted successfully");

    setFrames([]);
    setVideoUri(null);

    router.replace("/surveyor/feed");

  } catch (error) {
    console.log(error);
    Alert.alert("Upload Failed", "Please try again");
  }
};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topBar}>
          <Text style={styles.appTitle}>VMC Civic Monitor</Text>
          <Text style={styles.appSubtitle}>
            AI Powered Survey Reporting
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Report New Issue</Text>

          <TouchableOpacity
            style={styles.uploadBox}
            onPress={openCameraHandler}
          >
            <Text style={styles.cameraIcon}>🎥</Text>
            <Text style={styles.uploadText}>
              Tap to record site condition
            </Text>
          </TouchableOpacity>
        </View>

        <FrameGallery frames={frames} />

        {videoUri && frames.length > 0 && (
          <UploadButton onPress={uploadData} />
        )}
      </ScrollView>

      <CameraRecorder
        visible={openCamera}
        onClose={() => setOpenCamera(false)}
        onRecorded={onRecordingComplete}
      />
    </SafeAreaView>
  );
}
