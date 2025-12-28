"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  useScanStore,
  type ScanState,
  type ScanResult,
} from "@/stores/scanStore";
import { X, Image as ImageIcon, Camera as CameraIcon } from "lucide-react";

export default function ScanPage() {
  const router = useRouter();
  const setCurrentScan = useScanStore(
    (state: ScanState) => state.setCurrentScan
  );
  const addToHistory = useScanStore((state: ScanState) => state.addToHistory);
  const [isCameraActive] = useState(true);

  const handleCapture = () => {
    const isAuthentic = Math.random() > 0.5;
    const newScan: ScanResult = {
      id: Date.now().toString(),
      image: "https://placehold.co/600x400",
      partName: "Kampas Rem Belakang",
      isAuthentic,
      confidence: Math.floor(Math.random() * 20) + 80,
      date: new Date().toISOString().split("T")[0],
      analysis: isAuthentic
        ? [
            "Material berkualitas tinggi",
            "Hologram asli terdeteksi",
            "Nomor seri valid",
          ]
        : [
            "Material tidak sesuai standar",
            "Hologram palsu",
            "Nomor seri tidak valid",
          ],
      risks: isAuthentic
        ? undefined
        : ["Kerusakan mesin", "Performa menurun", "Garansi tidak berlaku"],
    };

    setCurrentScan(newScan);
    addToHistory(newScan);
    router.push("/loading");
  };

  return (
    <div className="fixed inset-0 bg-gray-900 flex flex-col">
      <div className="absolute top-6 left-6 z-10">
        <Button
          onClick={() => router.push("/dashboard")}
          className="bg-gray-800/80 text-neutral-foreground hover:bg-gray-700/80 rounded-full w-12 h-12 p-0"
          aria-label="Close"
        >
          <X className="w-6 h-6" strokeWidth={1.5} />
        </Button>
      </div>

      <div className="flex-1 relative flex items-center justify-center">
        {isCameraActive ? (
          <div className="relative w-full h-full bg-gray-800 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 border-4 border-primary/50 rounded-lg"></div>
            </div>
            <div className="text-center">
              <CameraIcon
                className="w-24 h-24 text-gray-600 mx-auto mb-4"
                strokeWidth={1}
              />
              <p className="text-neutral-foreground text-lg">Camera Preview</p>
            </div>
          </div>
        ) : (
          <div className="text-center text-neutral-foreground">
            <p>Camera not available</p>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-gray-900 to-transparent p-8">
          <p className="text-center text-neutral-foreground mb-8 text-lg">
            Arahkan kamera ke sparepart
          </p>
        </div>
      </div>

      <div className="bg-gray-900 p-8 flex items-center justify-center gap-8">
        <Button
          onClick={() => {}}
          className="bg-gray-800 text-neutral-foreground hover:bg-gray-700 rounded-full w-16 h-16 p-0"
          aria-label="Gallery"
        >
          <ImageIcon className="w-8 h-8" strokeWidth={1.5} />
        </Button>

        <Button
          onClick={handleCapture}
          className="bg-primary text-primary-foreground hover:bg-secondary rounded-full w-20 h-20 p-0"
          aria-label="Capture"
        >
          <div className="w-16 h-16 rounded-full border-4 border-primary-foreground"></div>
        </Button>

        <div className="w-16"></div>
      </div>
    </div>
  );
}
