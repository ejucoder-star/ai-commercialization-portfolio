"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const options = [
  { code: "zh", label: "中" },
  { code: "en", label: "EN" },
  { code: "ja", label: "日" },
] as const;

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const current = parts[0] || "zh";
  const rest = parts.slice(1).join("/");

  return (
    <div className="lang">
      {options.map((o) => {
        const href = `/${o.code}${rest ? `/${rest}` : ""}`;
        const active = current === o.code;
        return (
          <Link key={o.code} className={`pill ${active ? "pillActive" : ""}`} href={href}>
            {o.label}
          </Link>
        );
      })}
    </div>
  );
}
