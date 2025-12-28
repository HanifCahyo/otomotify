"use client";

import { create } from "zustand";

export type ScanResult = {
  id: string;
  image: string;
  partName: string;
  isAuthentic: boolean;
  confidence: number;
  date: string;
  analysis: string[];
  risks?: string[];
};

export type ScanState = {
  currentScan: ScanResult | null;
  history: ScanResult[];
  setCurrentScan: (scan: ScanResult) => void;
  addToHistory: (scan: ScanResult) => void;
  clearCurrent: () => void;
};

export const useScanStore = create<ScanState>((set) => ({
  currentScan: null,
  history: [],
  setCurrentScan: (scan) => set({ currentScan: scan }),
  addToHistory: (scan) => set((s) => ({ history: [scan, ...s.history] })),
  clearCurrent: () => set({ currentScan: null }),
}));
