interface BadgeProps {
  children: string;
  variant?: "new" | "limited" | "drop" | "default";
}

export default function Badge({ children, variant = "default" }: BadgeProps) {
  const variantStyles = {
    new: "bg-retro-orange",
    limited: "bg-retro-blue",
    drop: "bg-retro-green",
    default: "bg-retro-cream",
  };

  return (
    <span
      className={`inline-block px-2 py-1 border border-black text-xs font-bold uppercase ${variantStyles[variant]}`}
    >
      {children}
    </span>
  );
}
