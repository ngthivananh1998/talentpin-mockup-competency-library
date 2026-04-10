import { Domain, DOMAIN_META } from "@/lib/types";

interface Props {
  domain: Domain;
  size?: "sm" | "md";
}

export default function DomainBadge({ domain, size = "md" }: Props) {
  const meta = DOMAIN_META[domain];
  const px = size === "sm" ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-xs";

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full font-medium ${px}`}
      style={{ backgroundColor: meta.lightColor, color: meta.color }}
    >
      <span>{meta.icon}</span>
      {meta.label}
    </span>
  );
}
