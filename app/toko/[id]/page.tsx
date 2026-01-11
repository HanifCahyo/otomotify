// "use client";

// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { MapPin, Phone, Navigation, Store } from "lucide-react";
// import Image from "next/image";

// export default function TokoDetailPage({ params }: { params: { id: string } }) {
//   const router = useRouter();
//   const idStr = params?.id ?? "";

//   const stores = [
//     {
//       id: 1,
//       name: "Toko Sparepart Jaya",
//       image: "https://placehold.co/800x400",
//       rating: 4.8,
//       reviews: 124,
//       distance: "1.2 km",
//       address: "Jl. Sudirman No. 123",
//       status: "Buka",
//       verified: true,
//       phone: "+62 812-0000-1234",
//     },
//     {
//       id: 2,
//       name: "Motor Parts Center",
//       image: "https://placehold.co/800x400",
//       rating: 4.6,
//       reviews: 89,
//       distance: "2.5 km",
//       address: "Jl. Gatot Subroto No. 45",
//       status: "Buka",
//       verified: true,
//       phone: "+62 812-0000-5678",
//     },
//     {
//       id: 3,
//       name: "Bengkel Resmi Honda",
//       image: "https://placehold.co/800x400",
//       rating: 4.9,
//       reviews: 256,
//       distance: "3.1 km",
//       address: "Jl. Ahmad Yani No. 78",
//       status: "Buka",
//       verified: true,
//       phone: "+62 812-0000-9012",
//     },
//   ];

//   const store = stores.find((s) => String(s.id) === idStr);

//   if (!store) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
//         <Card className="max-w-md w-full p-6 bg-neutral border border-border text-center space-y-4">
//           <Store className="w-10 h-10 mx-auto text-warning" strokeWidth={1.5} />
//           <h2 className="text-xl font-bold text-foreground font-heading">
//             Toko tidak ditemukan
//           </h2>
//           <Button
//             onClick={() => router.push("/toko")}
//             className="bg-primary text-primary-foreground hover:bg-secondary font-normal w-full"
//           >
//             Kembali ke daftar toko
//           </Button>
//         </Card>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <header className="bg-neutral border-b border-border">
//         <div className="max-w-3xl mx-auto">
//           <Image
//             src={store.image}
//             alt={store.name}
//             width={800}
//             height={400}
//             className="w-full h-64 object-cover"
//           />
//         </div>
//       </header>

//       <div className="max-w-3xl mx-auto px-6 py-8 space-y-6">
//         <div className="flex items-start justify-between">
//           <div>
//             <div className="flex items-center gap-2 mb-1">
//               <h1 className="text-2xl font-bold text-foreground font-heading">
//                 {store.name}
//               </h1>
//               {store.verified && (
//                 <span className="bg-success/10 text-success text-xs px-2 py-1 rounded font-medium">
//                   Verified
//                 </span>
//               )}
//             </div>
//             <div className="flex items-center gap-4 text-sm text-gray-600">
//               <span>
//                 ⭐ {store.rating} ({store.reviews} ulasan)
//               </span>
//               <span className="text-success font-medium">{store.status}</span>
//             </div>
//           </div>
//           <Button
//             onClick={() => router.push("/toko")}
//             className="bg-accent text-accent-foreground hover:bg-gray-200 font-normal"
//           >
//             Kembali
//           </Button>
//         </div>

//         <Card className="p-6 bg-neutral border border-border space-y-4">
//           <div className="flex items-start gap-2 text-gray-700">
//             <MapPin
//               className="w-5 h-5 text-primary shrink-0 mt-0.5"
//               strokeWidth={1.5}
//             />
//             <div>
//               <p>{store.address}</p>
//               <p className="text-sm text-gray-600">{store.distance}</p>
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-3 pt-2">
//             <Button
//               onClick={() => {}}
//               className="bg-primary text-primary-foreground hover:bg-secondary font-normal"
//             >
//               <Phone className="w-5 h-5 mr-2" strokeWidth={1.5} />
//               Hubungi
//             </Button>
//             <Button
//               onClick={() => {}}
//               className="bg-accent text-accent-foreground hover:bg-gray-200 font-normal"
//             >
//               <Navigation className="w-5 h-5 mr-2" strokeWidth={1.5} />
//               Arahkan
//             </Button>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// }

"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Navigation, Store, ChevronLeft } from "lucide-react";
import Image from "next/image";

export default function TokoDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const { id } = use(params);

  const stores = [
    {
      id: 1,
      name: "Toko Sparepart Jaya",
      image: "/images/toko-1.webp",
      rating: 4.8,
      reviews: 124,
      distance: "1.2 km",
      address: "Jl. Sudirman No. 123",
      status: "Buka",
      verified: true,
      phone: "+62 812-0000-1234",
    },
    {
      id: 2,
      name: "Motor Parts Center",
      image: "/images/toko-2.jpg",
      rating: 4.6,
      reviews: 89,
      distance: "2.5 km",
      address: "Jl. Gatot Subroto No. 45",
      status: "Buka",
      verified: true,
      phone: "+62 812-0000-5678",
    },
    {
      id: 3,
      name: "Bengkel Resmi Honda",
      image: "/images/toko-3.jpeg",
      rating: 4.9,
      reviews: 256,
      distance: "3.1 km",
      address: "Jl. Ahmad Yani No. 78",
      status: "Buka",
      verified: true,
      phone: "+62 812-0000-9012",
    },
  ];

  const store = stores.find((s) => String(s.id) === id);

  if (!store) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <Card className="max-w-md w-full p-6 bg-neutral border border-border text-center space-y-4">
          <Store className="w-10 h-10 mx-auto text-warning" strokeWidth={1.5} />
          <h2 className="text-xl font-bold text-foreground font-heading">
            Toko tidak ditemukan
          </h2>
          <Button
            onClick={() => router.push("/toko")}
            className="bg-primary text-primary-foreground hover:bg-secondary font-normal w-full"
          >
            Kembali ke daftar toko
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-neutral border-b border-border">
        <div className="max-w-3xl mx-auto relative">
          <Button
            onClick={() => router.back()}
            className="absolute top-4 left-4 z-10 bg-white/90 hover:bg-white text-foreground rounded-full w-10 h-10 p-0"
          >
            <ChevronLeft className="w-6 h-6" strokeWidth={1.5} />
          </Button>
          <Image
            src={store.image}
            alt={store.name}
            width={800}
            height={400}
            className="w-full h-64 object-cover"
          />
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-8 space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-2xl font-bold text-foreground font-heading">
                {store.name}
              </h1>
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
              <span className="text-success font-medium">{store.status}</span>
            </div>
          </div>
        </div>

        <Card className="p-6 bg-neutral border border-border space-y-4">
          <div className="flex items-start gap-3">
            <MapPin
              className="w-5 h-5 text-primary shrink-0 mt-0.5"
              strokeWidth={1.5}
            />
            <div>
              <p className="font-medium text-foreground">Alamat</p>
              <p className="text-gray-700">{store.address}</p>
              <p className="text-sm text-gray-600 mt-1">{store.distance}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone
              className="w-5 h-5 text-primary shrink-0 mt-0.5"
              strokeWidth={1.5}
            />
            <div>
              <p className="font-medium text-foreground">Telepon</p>
              <a
                href={`tel:${store.phone}`}
                className="text-primary hover:underline"
              >
                {store.phone}
              </a>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          <Button
            onClick={() => {
              window.open(`tel:${store.phone}`);
            }}
            className="bg-primary text-primary-foreground hover:bg-secondary font-normal"
          >
            <Phone className="w-5 h-5 mr-2" strokeWidth={1.5} />
            Hubungi
          </Button>
          <Button
            onClick={() => {
              // Implementasi navigasi ke Google Maps
            }}
            className="bg-accent text-accent-foreground hover:bg-gray-200 font-normal"
          >
            <Navigation className="w-5 h-5 mr-2" strokeWidth={1.5} />
            Arahkan
          </Button>
        </div>

        <Card className="p-6 bg-neutral border border-border">
          <h2 className="text-lg font-bold text-foreground font-heading mb-4">
            Tentang Toko
          </h2>
          <p className="text-gray-700">
            {store.name} adalah toko sparepart motor terpercaya dengan berbagai
            pilihan produk berkualitas. Kami melayani dengan profesional dan
            menjamin keaslian setiap produk yang dijual.
          </p>
        </Card>

        <Card className="p-6 bg-neutral border border-border">
          <h2 className="text-lg font-bold text-foreground font-heading mb-4">
            Jam Operasional
          </h2>
          <div className="space-y-2 text-gray-700">
            <div className="flex justify-between">
              <span>Senin - Jumat</span>
              <span className="font-medium">08:00 - 17:00</span>
            </div>
            <div className="flex justify-between">
              <span>Sabtu</span>
              <span className="font-medium">08:00 - 15:00</span>
            </div>
            <div className="flex justify-between">
              <span>Minggu</span>
              <span className="font-medium text-error">Tutup</span>
            </div>
          </div>
        </Card>

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
