"use client";

import { useState, useRef, useEffect } from "react";
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
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let mounted = true;

    const startCamera = async () => {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setCameraError("Browser Anda tidak mendukung akses kamera.");
        return;
      }

      try {
        console.log("Requesting camera access...");

        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "environment",
            width: { ideal: 1920 },
            height: { ideal: 1080 },
          },
        });

        console.log("Camera access granted!");

        if (!mounted) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }

        streamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;

          // Langsung set active setelah stream di-assign
          console.log("Setting camera active");
          setIsCameraActive(true);
        }
      } catch (error) {
        console.error("Error accessing camera:", error);

        if (!mounted) return;

        if (error instanceof Error) {
          if (
            error.name === "NotAllowedError" ||
            error.name === "PermissionDeniedError"
          ) {
            setCameraError(
              "Izin kamera ditolak. Silakan izinkan akses kamera di pengaturan browser."
            );
          } else if (
            error.name === "NotFoundError" ||
            error.name === "DevicesNotFoundError"
          ) {
            setCameraError("Kamera tidak ditemukan pada perangkat Anda.");
          } else if (
            error.name === "NotReadableError" ||
            error.name === "TrackStartError"
          ) {
            setCameraError("Kamera sedang digunakan oleh aplikasi lain.");
          } else if (error.name === "OverconstrainedError") {
            setCameraError("Kamera tidak memenuhi persyaratan yang diminta.");
          } else if (error.name === "TypeError") {
            setCameraError(
              "Browser tidak mendukung akses kamera atau tidak menggunakan HTTPS."
            );
          } else {
            setCameraError(`Tidak dapat mengakses kamera: ${error.message}`);
          }
        } else {
          setCameraError(
            "Terjadi kesalahan tidak dikenal saat mengakses kamera."
          );
        }
      }
    };

    startCamera();

    return () => {
      mounted = false;
      if (streamRef.current) {
        console.log("Stopping camera stream");
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const handleGalleryClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      alert("Mohon pilih file gambar");
      return;
    }

    // Read the file and create scan result
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageData = e.target?.result as string;

      const isAuthentic = Math.random() > 0.5;

      const newScan: ScanResult = {
        id: Date.now().toString(),
        image: imageData,
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

    reader.readAsDataURL(file);
  };

  const handleCapture = () => {
    const isAuthentic = Math.random() > 0.5;

    let capturedImage = "https://placehold.co/600x400";

    if (videoRef.current && isCameraActive) {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0);
        capturedImage = canvas.toDataURL("image/jpeg", 0.8);
      }
    }

    const newScan: ScanResult = {
      id: Date.now().toString(),
      image: capturedImage,
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
          className="bg-gray-800/80 text-white hover:bg-gray-700/80 rounded-full w-12 h-12 p-0"
          aria-label="Close"
        >
          <X className="w-6 h-6" strokeWidth={1.5} />
        </Button>
      </div>

      <div className="flex-1 relative flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full bg-gray-800">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className={`w-full h-full object-cover ${
              isCameraActive ? "opacity-100" : "opacity-0"
            }`}
          />

          {isCameraActive && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-80 h-80 border-4 border-primary/50 rounded-lg"></div>
            </div>
          )}

          {!isCameraActive && (
            <div className="absolute inset-0 flex items-center justify-center text-white p-8">
              {cameraError ? (
                <>
                  <div className="text-center">
                    <CameraIcon
                      className="w-24 h-24 text-gray-400 mx-auto mb-4"
                      strokeWidth={1}
                    />
                    <p className="text-lg mb-2 font-semibold">
                      Kamera Tidak Tersedia
                    </p>
                    <p className="text-sm text-gray-300 max-w-md mx-auto">
                      {cameraError}
                    </p>
                    <Button
                      onClick={() => window.location.reload()}
                      className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Coba Lagi
                    </Button>
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <CameraIcon
                    className="w-24 h-24 text-gray-400 mx-auto mb-4 animate-pulse"
                    strokeWidth={1}
                  />
                  <p className="text-lg font-semibold">Memuat kamera...</p>
                  <p className="text-sm text-gray-300 mt-2">
                    Mohon izinkan akses kamera
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-8 pointer-events-none">
          <p className="text-center text-white mb-8 text-lg">
            Arahkan kamera ke sparepart
          </p>
        </div>
      </div>

      <div className="bg-gray-900 p-8 flex items-center justify-center gap-8">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
        <Button
          onClick={handleGalleryClick}
          className="bg-gray-800 text-white hover:bg-gray-700 rounded-full w-16 h-16 p-0"
          aria-label="Gallery"
        >
          <ImageIcon className="w-8 h-8" strokeWidth={1.5} />
        </Button>

        <Button
          onClick={handleCapture}
          disabled={!isCameraActive}
          className="bg-primary text-primary-foreground hover:bg-secondary rounded-full w-20 h-20 p-0 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Capture"
        >
          <div className="w-16 h-16 rounded-full border-4 border-primary-foreground"></div>
        </Button>

        <div className="w-16"></div>
      </div>
    </div>
  );
}
