import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { CameraView } from "expo-camera";
import styles from "@/styles/cameraStyles";

interface Props {
  visible: boolean;
  onClose: () => void;
  onRecorded: (uri: string, durationMs: number) => void;
}

export default function CameraRecorder({
  visible,
  onClose,
  onRecorded,
}: Props) {
  const cameraRef = useRef<any>(null);
  const startTime = useRef<number>(0);
  const [recording, setRecording] = useState(false);

  const startRecording = async () => {
    try {
      startTime.current = Date.now();
      setRecording(true);

      const video = await cameraRef.current.recordAsync({
        maxDuration: 60,
      });

      const durationMs = Date.now() - startTime.current;
      setRecording(false);
      onRecorded(video.uri, durationMs);
    } catch (e) {
      console.log(e);
    }
  };

  const stopRecording = async () => {
    try {
      await cameraRef.current.stopRecording();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.fullCamera}>
        <CameraView
          ref={cameraRef}
          style={StyleSheet.absoluteFill}
          mode="video"
        />

        {recording && (
          <View style={styles.recordingBadge}>
            <Text style={styles.recordingText}>RECORDING</Text>
          </View>
        )}

        <View style={styles.bottomControls}>
          {!recording ? (
            <TouchableOpacity
              style={styles.recordBtn}
              onPress={startRecording}
            />
          ) : (
            <TouchableOpacity
              style={styles.stopBtn}
              onPress={stopRecording}
            >
              <Text style={styles.stopText}>Stop</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
}
