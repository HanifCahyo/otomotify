"use client";

import { useRouter } from "next/navigation";
import { useScanStore, type ScanState } from "@/stores/scanStore";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Share2, Save, Store } from "lucide-react";
import Image from "next/image";

export default function ResultAsliPage() {
  const router = useRouter();
  const currentScan = useScanStore((state: ScanState) => state.currentScan);

  if (!currentScan) {
    router.push("/dashboard");
    return null;
  }

  const stores = [
    {
      id: 1,
      name: "Toko Sparepart Jaya",
      rating: 4.8,
      distance: "1.2 km",
      verified: true,
    },
    {
      id: 2,
      name: "Motor Parts Center",
      rating: 4.6,
      distance: "2.5 km",
      verified: true,
    },
    {
      id: 3,
      name: "Bengkel Resmi Honda",
      rating: 4.9,
      distance: "3.1 km",
      verified: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-success text-success-foreground px-6 py-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <CheckCircle className="w-20 h-20 mx-auto" strokeWidth={1.5} />
          <h1 className="text-3xl font-bold font-heading">SPAREPART ASLI</h1>
          <div className="text-2xl font-semibold">
            Tingkat Kepercayaan: {currentScan.confidence}%
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-8 space-y-8">
        <Card className="overflow-hidden bg-neutral border border-border">
          <Image
            src={currentScan.image}
            alt={currentScan.partName}
            width={1024}
            height={512}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-foreground font-heading mb-4">
              {currentScan.partName}
            </h2>
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Hasil Analisis:</h3>
              <ul className="space-y-2">
                {currentScan.analysis.map((item: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <CheckCircle
                      className="w-5 h-5 text-success shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-neutral border border-border">
          <h3 className="font-semibold text-foreground mb-4">
            Perbandingan Visual
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Image
                src="https://placehold.co/300x200"
                alt="Sparepart Asli"
                width={300}
                height={200}
                className="w-full rounded-lg"
              />
              <p className="text-center text-sm font-medium text-success">
                Asli
              </p>
            </div>
            <div className="space-y-2">
              <Image
                src="https://placehold.co/300x200"
                alt="Sparepart Palsu"
                width={300}
                height={200}
                className="w-full rounded-lg"
              />
              <p className="text-center text-sm font-medium text-warning">
                Palsu
              </p>
            </div>
          </div>
        </Card>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground font-heading">
            Toko Terdekat
          </h3>
          <div className="space-y-4">
            {stores.map((store) => (
              <Card
                key={store.id}
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors bg-neutral border border-border"
                onClick={() => router.push(`/toko/${store.id}`)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-foreground">
                        {store.name}
                      </h4>
                      {store.verified && (
                        <span className="bg-success/10 text-success text-xs px-2 py-1 rounded">
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>⭐ {store.rating}</span>
                      <span>{store.distance}</span>
                    </div>
                  </div>
                  <Store className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Button
            onClick={() => {}}
            className="bg-accent text-accent-foreground hover:bg-gray-200 font-normal"
          >
            <Save className="w-5 h-5 mr-2" strokeWidth={1.5} />
            Simpan
          </Button>
          <Button
            onClick={() => router.push("/toko")}
            className="bg-primary text-primary-foreground hover:bg-secondary font-normal"
          >
            <Store className="w-5 h-5 mr-2" strokeWidth={1.5} />
            Cari Toko
          </Button>
          <Button
            onClick={() => {}}
            className="bg-accent text-accent-foreground hover:bg-gray-200 font-normal"
          >
            <Share2 className="w-5 h-5 mr-2" strokeWidth={1.5} />
            Bagikan
          </Button>
        </div>

        <Button
          onClick={() => router.push("/dashboard")}
          className="w-full bg-gray-200 text-foreground hover:bg-gray-300 font-normal"
        >
          Kembali ke Dashboard
        </Button>
      </div>
    </div>
  );
}
