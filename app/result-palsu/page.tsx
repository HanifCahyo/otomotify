// "use client";

// import { useRouter } from "next/navigation";
// import { useScanStore, type ScanState } from "@/stores/scanStore";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { AlertTriangle, Search, Flag } from "lucide-react";
// import Image from "next/image";

// export default function ResultPalsuPage() {
//   const router = useRouter();
//   const currentScan = useScanStore((state: ScanState) => state.currentScan);

//   if (!currentScan) {
//     router.push("/dashboard");
//     return null;
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <header className="bg-warning text-warning-foreground px-6 py-8">
//         <div className="max-w-3xl mx-auto text-center space-y-4">
//           <AlertTriangle className="w-20 h-20 mx-auto" strokeWidth={1.5} />
//           <h1 className="text-3xl font-bold font-heading">SPAREPART PALSU</h1>
//           <div className="text-2xl font-semibold">
//             Tingkat Kepercayaan: {currentScan.confidence}%
//           </div>
//         </div>
//       </header>

//       <div className="max-w-3xl mx-auto px-6 py-8 space-y-8">
//         <Card className="overflow-hidden bg-neutral border border-border">
//           <Image
//             src={currentScan.image}
//             alt={currentScan.partName}
//             width={1024}
//             height={512}
//             className="w-full h-64 object-cover"
//           />
//           <div className="p-6">
//             <h2 className="text-xl font-bold text-foreground font-heading mb-4">
//               {currentScan.partName}
//             </h2>
//             <div className="space-y-3">
//               <h3 className="font-semibold text-foreground">
//                 Indikasi Pemalsuan:
//               </h3>
//               <ul className="space-y-2">
//                 {currentScan.analysis.map((item: string, index: number) => (
//                   <li
//                     key={index}
//                     className="flex items-start gap-3 text-gray-700"
//                   >
//                     <AlertTriangle
//                       className="w-5 h-5 text-warning shrink-0 mt-0.5"
//                       strokeWidth={1.5}
//                     />
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </Card>

//         <Card className="bg-warning/10 border-warning/20 p-6">
//           <h3 className="font-semibold text-foreground mb-4">
//             Risiko Penggunaan:
//           </h3>
//           <ul className="space-y-2">
//             {currentScan.risks?.map((risk: string, index: number) => (
//               <li key={index} className="flex items-start gap-3 text-gray-700">
//                 <span className="text-warning font-bold">•</span>
//                 <span>{risk}</span>
//               </li>
//             ))}
//           </ul>
//         </Card>

//         <Card className="p-6 bg-neutral border border-border">
//           <h3 className="font-semibold text-foreground mb-4">Rekomendasi</h3>
//           <p className="text-gray-700 mb-4">
//             Kami sangat menyarankan untuk membeli sparepart asli dari toko resmi
//             terverifikasi untuk keamanan dan performa optimal kendaraan Anda.
//           </p>
//           <Button
//             onClick={() => router.push("/toko")}
//             className="w-full bg-primary text-primary-foreground hover:bg-secondary font-normal"
//           >
//             <Search className="w-5 h-5 mr-2" strokeWidth={1.5} />
//             Cari Toko Resmi
//           </Button>
//         </Card>

//         <div className="grid grid-cols-2 gap-4">
//           <Button
//             onClick={() => router.push("/toko")}
//             className="bg-primary text-primary-foreground hover:bg-secondary font-normal"
//           >
//             <Search className="w-5 h-5 mr-2" strokeWidth={1.5} />
//             Cari Part Asli
//           </Button>
//           <Button
//             onClick={() => {}}
//             className="bg-warning text-warning-foreground hover:bg-warning/90 font-normal"
//           >
//             <Flag className="w-5 h-5 mr-2" strokeWidth={1.5} />
//             Lapor
//           </Button>
//         </div>

//         <Button
//           onClick={() => router.push("/dashboard")}
//           className="w-full bg-gray-200 text-foreground hover:bg-gray-300 font-normal"
//         >
//           Kembali ke Dashboard
//         </Button>
//       </div>
//     </div>
//   );
// }

"use client";

import { useRouter } from "next/navigation";
import { useScanStore, type ScanState } from "@/stores/scanStore";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertTriangle, Search, Flag } from "lucide-react";
import Image from "next/image";

export default function ResultPalsuPage() {
  const router = useRouter();
  const currentScan = useScanStore((state: ScanState) => state.currentScan);

  if (!currentScan) {
    router.push("/dashboard");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-warning text-warning-foreground px-6 py-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <AlertTriangle className="w-20 h-20 mx-auto" strokeWidth={1.5} />
          <h1 className="text-3xl font-bold font-heading">SPAREPART PALSU</h1>
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
              <h3 className="font-semibold text-foreground">
                Indikasi Pemalsuan:
              </h3>
              <ul className="space-y-2">
                {currentScan.analysis.map((item: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <AlertTriangle
                      className="w-5 h-5 text-warning shrink-0 mt-0.5"
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
              <div className="relative">
                <Image
                  src={currentScan.image}
                  alt="Sparepart yang Anda scan"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg border-2 border-warning"
                />
                <div className="absolute top-2 right-2 bg-warning text-warning-foreground text-xs font-semibold px-2 py-1 rounded">
                  Scan Anda
                </div>
              </div>
              <p className="text-center text-sm font-medium text-warning">
                ⚠ Terindikasi Palsu
              </p>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <Image
                  src="/images/HGP.webp"
                  alt="Contoh Sparepart Asli"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg border-2 border-success"
                />
                <div className="absolute top-2 right-2 bg-success text-success-foreground text-xs font-semibold px-2 py-1 rounded">
                  Referensi
                </div>
              </div>
              <p className="text-center text-sm font-medium text-success">
                ✓ Contoh Asli
              </p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-warning/10 rounded-lg border border-warning/20">
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-warning">Peringatan:</span>{" "}
              Sistem mendeteksi beberapa karakteristik yang tidak sesuai dengan
              sparepart asli. Kami sarankan untuk memverifikasi lebih lanjut.
            </p>
          </div>
        </Card>

        <Card className="bg-warning/10 border-warning/20 p-6">
          <h3 className="font-semibold text-foreground mb-4">
            Risiko Penggunaan:
          </h3>
          <ul className="space-y-2">
            {currentScan.risks?.map((risk: string, index: number) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <span className="text-warning font-bold">•</span>
                <span>{risk}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6 bg-neutral border border-border">
          <h3 className="font-semibold text-foreground mb-4">Rekomendasi</h3>
          <p className="text-gray-700 mb-4">
            Kami sangat menyarankan untuk membeli sparepart asli dari toko resmi
            terverifikasi untuk keamanan dan performa optimal kendaraan Anda.
          </p>
          <Button
            onClick={() => router.push("/toko")}
            className="w-full bg-primary text-primary-foreground hover:bg-secondary font-normal"
          >
            <Search className="w-5 h-5 mr-2" strokeWidth={1.5} />
            Cari Toko Resmi
          </Button>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          <Button
            onClick={() => router.push("/toko")}
            className="bg-primary text-primary-foreground hover:bg-secondary font-normal"
          >
            <Search className="w-5 h-5 mr-2" strokeWidth={1.5} />
            Cari Part Asli
          </Button>
          <Button
            onClick={() => {}}
            className="bg-warning text-warning-foreground hover:bg-warning/90 font-normal"
          >
            <Flag className="w-5 h-5 mr-2" strokeWidth={1.5} />
            Lapor
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
