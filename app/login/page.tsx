"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function LoginScreen() {
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    toast({
      title: isSignUp ? "Membuat akun (demo)" : "Masuk (demo)",
      description: "Menyimulasikan proses autentikasi...",
    });

    setTimeout(() => {
      try {
        localStorage.setItem(
          "demo-auth",
          JSON.stringify({ email, isSignUp, at: Date.now() })
        );
      } catch {}

      toast({
        title: "Berhasil",
        description: isSignUp
          ? "Akun demo dibuat. Membawa ke dashboard..."
          : "Login demo berhasil. Membawa ke dashboard...",
      });

      setIsLoading(false);
      router.push("/dashboard");
    }, 800);
  };

  const handleGoogle = () => {
    setIsLoading(true);
    toast({ title: "Google OAuth (demo)", description: "Menghubungkan..." });

    setTimeout(() => {
      try {
        localStorage.setItem(
          "demo-auth",
          JSON.stringify({
            email: "user@gmail.com",
            provider: "google",
            at: Date.now(),
          })
        );
      } catch {}

      toast({ title: "Berhasil", description: "Login dengan Google (demo)." });
      setIsLoading(false);
      router.push("/dashboard");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16">
      <Card className="w-full max-w-md p-8 space-y-8 bg-neutral border border-border">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-primary font-heading">
            Otomotify
          </h1>
          <p className="text-gray-600">
            {isSignUp ? "Buat akun baru" : "Masuk ke akun Anda"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-foreground"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nama@email.com"
              required
              disabled={isLoading}
              className="bg-neutral text-foreground border-border"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-foreground"
            >
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              disabled={isLoading}
              className="bg-neutral text-foreground border-border"
            />
          </div>

          <div className="space-y-4">
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-secondary py-6 font-normal"
              size="lg"
              disabled={isLoading}
            >
              {isSignUp ? "Daftar" : "Masuk"}
            </Button>

            <Button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="w-full bg-accent text-accent-foreground hover:bg-gray-200 py-6 font-normal"
              size="lg"
              disabled={isLoading}
            >
              {isSignUp
                ? "Sudah punya akun? Masuk"
                : "Belum punya akun? Daftar"}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-neutral text-gray-500">atau</span>
              </div>
            </div>

            <Button
              type="button"
              onClick={handleGoogle}
              className="w-full bg-neutral text-foreground hover:bg-gray-100 border border-border py-6 font-normal"
              size="lg"
              disabled={isLoading}
            >
              Login dengan Google
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
