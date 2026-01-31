import React, { createContext, useContext, useState } from "react";
import { ImageSourcePropType } from "react-native";

import garbageImg from "@/assets/garbage.png";
import debrisImg from "@/assets/debris.png";
import potholesImg from "@/assets/potholes.jpg";

export type Report = {
  id: string;
  title: string;
  description: string;
  ward: string;
  type: string;
  location: string;
  aiConfidence: number;
  status: "pending" | "in-progress" | "completed";
  image: ImageSourcePropType;
  createdAt: string;
};

type ReportContextType = {
  reports: Report[];
  addReport: (report: Report) => void;
};

const ReportContext = createContext<ReportContextType | null>(null);

const initialReports: Report[] = [
  {
    id: "1",
    title: "Garbage Dump",
    description: "Garbage piling up near residential area.",
    ward: "Ward 2",
    type: "Garbage",
    location: "Sector 12",
    aiConfidence: 91,
    status: "pending",
    image: garbageImg,
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Construction Debris",
    description: "Debris blocking half of the road.",
    ward: "Ward 8",
    type: "Debris",
    location: "Station Road",
    aiConfidence: 88,
    status: "in-progress",
    image: debrisImg,
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Road Potholes",
    description: "Deep potholes causing accidents.",
    ward: "Ward 14",
    type: "Potholes",
    location: "Outer Ring Road",
    aiConfidence: 94,
    status: "completed",
    image: potholesImg,
    createdAt: new Date().toISOString(),
  },
];

export function ReportProvider({ children }: { children: React.ReactNode }) {
  const [reports, setReports] = useState<Report[]>(initialReports);

  const addReport = (report: Report) => {
    setReports(prev => [report, ...prev]);
  };

  return (
    <ReportContext.Provider value={{ reports, addReport }}>
      {children}
    </ReportContext.Provider>
  );
}

export function useReports() {
  const ctx = useContext(ReportContext);
  if (!ctx) throw new Error("useReports must be used inside ReportProvider");
  return ctx;
}
