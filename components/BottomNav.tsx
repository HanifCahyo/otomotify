import { useNavigate, useLocation } from "react-router-dom";
import { HomeIcon, HistoryIcon, UserIcon, CameraIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: "/home", icon: HomeIcon, label: "Home" },
    { path: "/history", icon: HistoryIcon, label: "History" },
    { path: "/profile", icon: UserIcon, label: "Profile" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-neutral border-t border-border z-50 md:hidden">
      <div className="flex items-center justify-around h-20 px-4">
        {navItems.slice(0, 2).map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center justify-center gap-1 px-6 py-2 transition-colors ${
              isActive(item.path)
                ? "text-primary"
                : "text-gray-500 hover:text-primary"
            }`}
            aria-label={item.label}
          >
            <item.icon className="w-6 h-6" strokeWidth={1.5} />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}

        <Button
          onClick={() => navigate("/scan")}
          className="bg-primary text-primary-foreground hover:bg-secondary rounded-full w-16 h-16 flex items-center justify-center -mt-8 shadow-lg"
          aria-label="Scan"
        >
          <CameraIcon className="w-8 h-8" strokeWidth={1.5} />
        </Button>

        {navItems.slice(2).map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center justify-center gap-1 px-6 py-2 transition-colors ${
              isActive(item.path)
                ? "text-primary"
                : "text-gray-500 hover:text-primary"
            }`}
            aria-label={item.label}
          >
            <item.icon className="w-6 h-6" strokeWidth={1.5} />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
