"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Simpan flag onboarding (opsional)
      try {
        localStorage.setItem("onboardingSeen", "true");
      } catch {}
      router.push("/onboarding");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-1 flex flex-col items-center justify-center px-8">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 font-heading">
          Otomotify
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 font-medium">
          Verifikasi Sparepart, Berkendara Aman
        </p>
      </div>
    </div>
  );
}
