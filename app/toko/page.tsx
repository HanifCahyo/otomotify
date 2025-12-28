"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Navigation } from "lucide-react";
import Image from "next/image";

export default function TokoRecommendationPage() {
  const router = useRouter();

  const stores = [
    {
      id: 1,
      name: "Toko Sparepart Jaya",
      image: "https://placehold.co/400x250",
      rating: 4.8,
      reviews: 124,
      distance: "1.2 km",
      address: "Jl. Sudirman No. 123",
      status: "Buka",
      verified: true,
    },
    {
      id: 2,
      name: "Motor Parts Center",
      image: "https://placehold.co/400x250",
      rating: 4.6,
      reviews: 89,
      distance: "2.5 km",
      address: "Jl. Gatot Subroto No. 45",
      status: "Buka",
      verified: true,
    },
    {
      id: 3,
      name: "Bengkel Resmi Honda",
      image: "https://placehold.co/400x250",
      rating: 4.9,
      reviews: 256,
      distance: "3.1 km",
      address: "Jl. Ahmad Yani No. 78",
      status: "Buka",
      verified: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-neutral border-b border-border px-6 py-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-foreground font-heading">
            Toko Terdekat
          </h1>
          <p className="text-gray-600 mt-1">
            Toko resmi terverifikasi di sekitar Anda
          </p>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-8 space-y-6">
        {stores.map((store) => (
          <Card
            key={store.id}
            className="overflow-hidden cursor-pointer hover:bg-gray-50 transition-colors bg-neutral border border-border"
            onClick={() => router.push(`/toko/${store.id}`)}
          >
            <Image
              src={store.image}
              alt={store.name}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-foreground font-heading">
                    {store.name}
                  </h3>
                  {store.verified && (
                    <span className="bg-success/10 text-success text-xs px-2 py-1 rounded font-medium">
                      Verified
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>
                    ⭐ {store.rating} ({store.reviews} ulasan)
                  </span>
                  <span className="text-success font-medium">
                    {store.status}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-gray-700">
                <MapPin
                  className="w-5 h-5 text-primary shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <div>
                  <p>{store.address}</p>
                  <p className="text-sm text-gray-600">{store.distance}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/toko/${store.id}`);
                  }}
                  className="bg-primary text-primary-foreground hover:bg-secondary font-normal"
                >
                  Lihat Detail
                </Button>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="bg-accent text-accent-foreground hover:bg-gray-200 font-normal"
                >
                  <Navigation className="w-5 h-5 mr-2" strokeWidth={1.5} />
                  Arahkan
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
