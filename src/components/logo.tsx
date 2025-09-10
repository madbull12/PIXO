import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatedGradientText } from "@/src/components/ui/animated-gradient-text";

const Logo = () => {
  const pathname = usePathname();
  return (
    <Link
      href={pathname}
    >
      <AnimatedGradientText
        speed={2}
        colorFrom="#ab55fc"
        colorTo="#ff7b00"
        className="text-4xl font-black italic"
      >
        PIXO
      </AnimatedGradientText>
    </Link>
  );
};

export default Logo;
