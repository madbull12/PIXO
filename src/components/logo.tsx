import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

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
        className="text-4xl px-4 italic font-black "
      >
        PIXO
      </AnimatedGradientText>
    </Link>
  );
};

export default Logo;
