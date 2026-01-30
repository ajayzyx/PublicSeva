import { ReportProvider } from "@/components/ReportContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
     <ReportProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </ReportProvider>
  );
}
