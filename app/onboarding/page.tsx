"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-2 flex flex-col items-center justify-center px-8 py-16">
      <div className="max-w-md w-full text-center space-y-12">
        <div className="space-y-8">
          <img
            src="https://c.animaapp.com/mibr3f9xKqQ9CU/img/ai_1.png"
            alt="Onboarding scan illustration"
            width={800}
            height={600}
            className="w-full max-w-sm mx-auto"
            loading="eager"
          />

          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground font-heading">
              Verifikasi Keaslian Sparepart dengan AI
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Scan, verifikasi, dan temukan toko resmi dalam 3 detik
            </p>
          </div>
        </div>

        <Button
          onClick={() => router.push("/login")}
          className="w-full bg-neutral text-neutral-foreground hover:bg-gray-100 py-6 text-lg font-normal"
          size="lg"
        >
          Mulai
        </Button>
      </div>
    </div>
  );
}
