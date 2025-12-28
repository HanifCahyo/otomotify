"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Camera, Bell, AlertCircle, BookOpen } from "lucide-react";
import Image from "next/image";

type DemoAuth = {
  email?: string;
  provider?: string;
  isSignUp?: boolean;
  at?: number;
};

export default function DashboardPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [auth, setAuth] = useState<DemoAuth | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("demo-auth");
      if (raw) {
        const parsed: DemoAuth = JSON.parse(raw);
        setAuth(parsed);
        toast({
          title: "Selamat datang",
          description: parsed.email ?? parsed.provider ?? "Pengguna",
        });
      } else {
        toast({
          title: "Belum login",
          description: "Mengalihkan ke halaman login",
        });
        router.replace("/login");
      }
    } catch {
      router.replace("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const articles = [
    {
      id: 1,
      title: "Cara Membedakan Sparepart Asli dan Palsu",
      image: "https://placehold.co/400x250",
    },
    {
      id: 2,
      title: "Tips Merawat Motor Agar Tetap Prima",
      image: "https://placehold.co/400x250",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-neutral border-b border-border px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground font-heading">
              Halo, {auth?.email || "User"}
            </h1>
            <p className="text-gray-600 text-sm mt-1">Selamat datang kembali</p>
          </div>
          <button
            className="p-3 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Notifications"
            onClick={() =>
              toast({
                title: "Notifikasi",
                description: "Belum ada notifikasi",
              })
            }
          >
            <Bell className="w-6 h-6 text-foreground" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <Card
          className="bg-gradient-1 p-8 cursor-pointer hover:opacity-90 transition-opacity border-0"
          onClick={() => router.push("/scan")}
        >
          <div className="flex items-center gap-6">
            <div className="bg-neutral/20 p-4 rounded-full">
              <Camera
                className="w-10 h-10 text-primary-foreground"
                strokeWidth={1.5}
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-primary-foreground font-heading mb-2">
                Scan Sparepart Sekarang
              </h2>
              <p className="text-primary-foreground/90">
                Verifikasi keaslian dalam 3 detik
              </p>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-3 gap-4">
          <Card className="p-6 text-center bg-neutral border border-border">
            <div className="text-3xl font-bold text-primary font-heading">
              12
            </div>
            <div className="text-sm text-gray-600 mt-2">Total Scan</div>
          </Card>
          <Card className="p-6 text-center bg-neutral border border-border">
            <div className="text-3xl font-bold text-success font-heading">
              10
            </div>
            <div className="text-sm text-gray-600 mt-2">Asli</div>
          </Card>
          <Card className="p-6 text-center bg-neutral border border-border">
            <div className="text-3xl font-bold text-warning font-heading">
              2
            </div>
            <div className="text-sm text-gray-600 mt-2">Palsu</div>
          </Card>
        </div>

        <Card className="bg-warning/10 border-warning/20 p-6">
          <div className="flex items-start gap-4">
            <AlertCircle
              className="w-6 h-6 text-warning shrink-0 mt-1"
              strokeWidth={1.5}
            />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Peringatan</h3>
              <p className="text-gray-700">
                Kampas rem perlu dicek. Sudah 6 bulan sejak penggantian
                terakhir.
              </p>
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-primary" strokeWidth={1.5} />
            <h2 className="text-xl font-bold text-foreground font-heading">
              Artikel Edukasi
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <Card
                key={article.id}
                className="overflow-hidden cursor-pointer hover:bg-gray-50 transition-colors bg-neutral border border-border"
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-foreground">
                    {article.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
