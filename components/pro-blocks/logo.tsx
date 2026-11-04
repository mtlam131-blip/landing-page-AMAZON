import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <span
      className={cn(
        "relative block h-[28px] w-[140px] overflow-hidden md:h-[32px] md:w-[160px]",
        className,
      )}
    >
      <Image
        src="/images/creadecor-logo.png"
        alt="CreaDecor"
        fill
        priority
        sizes="160px"
        className="object-cover object-center"
      />
    </span>
  );
};
