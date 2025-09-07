import Logo from "@/src/app/components/logo"
import { CursorClickIcon } from "@/src/app/components/ui/cursor-click"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-16 px-4 bg-white shadow-md sticky top-0 z-50">
        <Logo />
        <CursorClickIcon size={24} />
    </nav>
  )
}

export default Navbar