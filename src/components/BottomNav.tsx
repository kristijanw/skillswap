import { useLocation, useNavigate } from "react-router-dom";
import { Flame, MessageCircle, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const allNavItems = [
  { path: "/discover", icon: Flame, label: "Otkrij", adminOnly: false },
  { path: "/matches", icon: MessageCircle, label: "Poruke", adminOnly: false },
  { path: "/profile", icon: User, label: "Profil", adminOnly: false },
];

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAdmin } = useAuth();

  const navItems = isAdmin
    ? allNavItems.filter((item) => item.path === "/profile")
    : allNavItems;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-md items-center justify-around py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        {navItems.map(({ path, icon: Icon, label }) => {
          const active = location.pathname.startsWith(path);
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`flex flex-col items-center gap-0.5 rounded-xl px-6 py-2 transition-all ${
                active
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className={`h-6 w-6 ${active ? "fill-primary/20" : ""}`} strokeWidth={active ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
