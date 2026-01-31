import React from "react";
import { Text, FlatList, Image, View } from "react-native";
import styles from "@/styles/cameraStyles";

interface Props {
  frames: string[];
}

export default function FrameGallery({ frames }: Props) {
  if (frames.length === 0) return null;

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>
        Extracted Frames ({frames.length})
      </Text>

      <FlatList
        data={frames}
        numColumns={3}
        scrollEnabled={false}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.frameImage} />
        )}
      />
    </View>
  );
}
