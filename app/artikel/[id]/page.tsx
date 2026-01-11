"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, Calendar, Clock, BookOpen } from "lucide-react";
import Image from "next/image";

export default function ArtikelDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const { id } = use(params);

  const articles = [
    {
      id: 1,
      title: "Cara Membedakan Sparepart Asli dan Palsu",
      image: "/images/HGP.webp",
      date: "10 Januari 2026",
      readTime: "5 menit",
      author: "Tim PartCheck",
      content: [
        {
          type: "paragraph",
          text: "Membeli sparepart motor yang asli adalah investasi penting untuk keamanan dan performa kendaraan Anda. Sayangnya, pasar dipenuhi dengan produk palsu yang sulit dibedakan dari yang asli. Berikut adalah panduan lengkap untuk membantu Anda membedakan sparepart asli dan palsu.",
        },
        {
          type: "heading",
          text: "1. Periksa Kemasan dan Label",
        },
        {
          type: "paragraph",
          text: "Sparepart asli biasanya memiliki kemasan yang rapi dengan cetakan berkualitas tinggi. Perhatikan detail seperti logo, hologram keamanan, dan barcode. Kemasan palsu sering kali memiliki warna yang pudar atau cetakan yang tidak tajam.",
        },
        {
          type: "heading",
          text: "2. Cek Kualitas Material",
        },
        {
          type: "paragraph",
          text: "Material sparepart asli terasa lebih solid dan memiliki finishing yang sempurna. Sparepart palsu cenderung terasa lebih ringan, kasar, atau memiliki cacat produksi yang terlihat seperti baret atau gelembung pada permukaan.",
        },
        {
          type: "heading",
          text: "3. Perhatikan Harga",
        },
        {
          type: "paragraph",
          text: "Jika harga terlalu murah dibandingkan pasaran, waspadalah. Sparepart asli memiliki standar harga tertentu. Diskon yang terlalu besar bisa menjadi indikasi produk palsu atau bekas yang dijual sebagai baru.",
        },
        {
          type: "heading",
          text: "4. Beli dari Toko Resmi",
        },
        {
          type: "paragraph",
          text: "Cara paling aman adalah membeli dari dealer resmi atau toko yang terverifikasi. Mereka memiliki sertifikat keaslian dan garansi produk. Gunakan aplikasi PartCheck untuk menemukan toko terverifikasi terdekat.",
        },
        {
          type: "heading",
          text: "5. Gunakan Teknologi AI Scanner",
        },
        {
          type: "paragraph",
          text: "Aplikasi PartCheck menggunakan teknologi AI untuk memverifikasi keaslian sparepart hanya dengan memindai gambar. Tingkat akurasi mencapai 95% dan hasilnya muncul dalam hitungan detik.",
        },
      ],
    },
    {
      id: 2,
      title: "Tips Merawat Motor Agar Tetap Prima",
      image: "/images/service.jpg",
      date: "8 Januari 2026",
      readTime: "7 menit",
      author: "Tim PartCheck",
      content: [
        {
          type: "paragraph",
          text: "Motor yang terawat dengan baik tidak hanya lebih awet, tetapi juga lebih aman dan nyaman untuk dikendarai. Berikut adalah tips perawatan rutin yang bisa Anda lakukan untuk menjaga motor tetap dalam kondisi prima.",
        },
        {
          type: "heading",
          text: "1. Ganti Oli Secara Teratur",
        },
        {
          type: "paragraph",
          text: "Oli mesin adalah jantung motor Anda. Ganti oli setiap 2000-3000 km atau sesuai rekomendasi pabrikan. Gunakan oli berkualitas dan pastikan keasliannya menggunakan aplikasi PartCheck.",
        },
        {
          type: "heading",
          text: "2. Periksa Tekanan Ban",
        },
        {
          type: "paragraph",
          text: "Ban dengan tekanan yang tepat meningkatkan efisiensi bahan bakar dan keamanan berkendara. Periksa tekanan ban minimal seminggu sekali, terutama sebelum perjalanan jauh.",
        },
        {
          type: "heading",
          text: "3. Bersihkan Filter Udara",
        },
        {
          type: "paragraph",
          text: "Filter udara yang kotor mengurangi performa mesin dan meningkatkan konsumsi bahan bakar. Bersihkan atau ganti filter udara setiap 5000 km atau ketika terlihat sangat kotor.",
        },
        {
          type: "heading",
          text: "4. Cek Rem Berkala",
        },
        {
          type: "paragraph",
          text: "Sistem rem adalah komponen keamanan paling penting. Periksa ketebalan kampas rem, kondisi cakram, dan respons pedal rem secara rutin. Jangan tunggu sampai rem berbunyi untuk menggantinya.",
        },
        {
          type: "heading",
          text: "5. Servis Berkala di Bengkel Resmi",
        },
        {
          type: "paragraph",
          text: "Lakukan servis berkala di bengkel resmi sesuai jadwal yang direkomendasikan. Teknisi profesional dapat mendeteksi masalah sejak dini sebelum menjadi kerusakan besar.",
        },
        {
          type: "heading",
          text: "6. Cuci Motor Secara Teratur",
        },
        {
          type: "paragraph",
          text: "Kotoran dan debu yang menumpuk dapat merusak cat dan komponen motor. Cuci motor minimal seminggu sekali dengan sabun khusus motor, jangan gunakan deterjen rumah tangga.",
        },
      ],
    },
  ];

  const article = articles.find((a) => String(a.id) === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <Card className="max-w-md w-full p-6 bg-neutral border border-border text-center space-y-4">
          <BookOpen
            className="w-10 h-10 mx-auto text-warning"
            strokeWidth={1.5}
          />
          <h2 className="text-xl font-bold text-foreground font-heading">
            Artikel tidak ditemukan
          </h2>
          <Button
            onClick={() => router.push("/dashboard")}
            className="bg-primary text-primary-foreground hover:bg-secondary font-normal w-full"
          >
            Kembali ke Dashboard
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-neutral border-b border-border">
        <div className="max-w-4xl mx-auto relative">
          <Button
            onClick={() => router.push("/dashboard")}
            className="absolute top-4 left-4 z-10 bg-white/90 hover:bg-white text-foreground rounded-full w-10 h-10 p-0"
          >
            <ChevronLeft className="w-6 h-6" strokeWidth={1.5} />
          </Button>
          <Image
            src={article.image}
            alt={article.title}
            width={1200}
            height={600}
            className="w-full h-80 object-cover"
          />
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8 space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground font-heading">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" strokeWidth={1.5} />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" strokeWidth={1.5} />
              <span>{article.readTime} baca</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" strokeWidth={1.5} />
              <span>{article.author}</span>
            </div>
          </div>
        </div>

        <Card className="p-8 bg-neutral border border-border">
          <div className="prose prose-lg max-w-none">
            {article.content.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={index}
                    className="text-2xl font-bold text-foreground font-heading mt-8 mb-4 first:mt-0"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "paragraph") {
                return (
                  <p
                    key={index}
                    className="text-gray-700 leading-relaxed mb-6 text-base"
                  >
                    {block.text}
                  </p>
                );
              }
              return null;
            })}
          </div>
        </Card>

        <Card className="p-6 bg-primary/5 border-primary/20">
          <div className="flex items-start gap-4">
            <BookOpen
              className="w-6 h-6 text-primary shrink-0 mt-1"
              strokeWidth={1.5}
            />
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Gunakan PartCheck
              </h3>
              <p className="text-gray-700 mb-4">
                Verifikasi keaslian sparepart motor Anda dengan teknologi AI
                dalam hitungan detik. Cukup scan, dan dapatkan hasil analisis
                lengkap.
              </p>
              <Button
                onClick={() => router.push("/scan")}
                className="bg-primary text-primary-foreground hover:bg-secondary font-normal"
              >
                Mulai Scan Sekarang
              </Button>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          <Button
            onClick={() => router.push("/dashboard")}
            className="bg-gray-200 text-foreground hover:bg-gray-300 font-normal"
          >
            Kembali ke Home
          </Button>
          <Button
            onClick={() => router.push("/scan")}
            className="bg-primary text-primary-foreground hover:bg-secondary font-normal"
          >
            Scan Sparepart
          </Button>
        </div>
      </div>
    </div>
  );
}
