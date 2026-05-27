import { ReactNode } from "react";

interface RetroBoxProps {
  children: ReactNode;
  title?: string;
  bgColor?: string;
  className?: string;
}

export default function RetroBox({
  children,
  title,
  bgColor = "bg-[#f4f4f1]/80",
  className = "",
}: RetroBoxProps) {
  return (
    <div
      className={`border-3 border-black shadow-[4px_4px_0px_#000] backdrop-blur-sm transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[6px_6px_0px_#000] ${bgColor} ${className}`}
      style={{ borderWidth: "3px" }}
    >
      {title && (
        <div className="border-b-2 border-black bg-[#f4f4f1]/85 px-4 py-2">
          <h3 className="font-bold">{title}</h3>
        </div>
      )}
      <div className="p-4">{children}</div>
    </div>
  );
}
