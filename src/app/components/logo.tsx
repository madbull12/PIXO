import Link from "next/link";
import { usePathname } from "next/navigation";

const Logo = () => {
  const pathname = usePathname();
  return (
    <Link href={pathname} className="italic font-black tracking-wide text-3xl bg-gradient-to-r from-indigo-700 via-indigo-500 to-indigo-300 inline-block text-transparent bg-clip-text">
      PIXO
    </Link>
  );
};

export default Logo;
