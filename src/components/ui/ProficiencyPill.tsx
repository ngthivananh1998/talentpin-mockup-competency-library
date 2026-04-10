import { PROFICIENCY_COLORS, PROFICIENCY_LABELS } from "@/lib/types";

interface Props {
  level: 1 | 2 | 3 | 4 | 5;
  size?: "sm" | "md";
}

export default function ProficiencyPill({ level, size = "md" }: Props) {
  const color = PROFICIENCY_COLORS[level];
  const label = PROFICIENCY_LABELS[level];
  const px = size === "sm" ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-xs";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-semibold ${px}`}
      style={{ backgroundColor: `${color}20`, color }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
      Level {level} — {label}
    </span>
  );
}
