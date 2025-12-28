"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useScanStore } from "@/stores/scanStore";

export default function LoadingPage() {
  const router = useRouter();
  const currentScan = useScanStore((state) => state.currentScan);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentScan?.isAuthentic) {
        router.push("/result-asli");
      } else {
        router.push("/result-palsu");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [router, currentScan]);

  return (
    <div className="min-h-screen bg-gradient-1 flex flex-col items-center justify-center px-8">
      <div className="text-center space-y-8">
        <div className="relative w-32 h-32 mx-auto">
          <div className="absolute inset-0 border-4 border-primary-foreground/30 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-foreground font-heading">
            Menganalisis sparepart...
          </h2>
          <p className="text-primary-foreground/90">
            AI sedang memverifikasi keaslian produk
          </p>
        </div>
      </div>
    </div>
  );
}
