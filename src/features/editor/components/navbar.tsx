import Logo from "@/src/components/logo";
import { CursorClickIcon } from "@/src/components/ui/cursor-click";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { ChevronDown, File } from "lucide-react";
const Navbar = () => {
  return (
    <nav className="flex items-center gap-x-6  h-16 px-4 bg-white shadow-md sticky top-0 z-50">
      <Logo />
      <DropdownMenu>
        <DropdownMenuTrigger className="flex mr-auto cursor-pointer gap-x-2 items-center">
          <span className=" font-medium">File</span>

          <ChevronDown size={16} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="flex items-center">
            <File  className=" size-6" /> 
            <div>
              <p>Open</p>
              <p className="text-muted-foreground text-xs">Open a JSON File</p>
            </div>
          </DropdownMenuItem>
   
        </DropdownMenuContent>
      </DropdownMenu>
      <CursorClickIcon size={24} />
    </nav>
  );
};

export default Navbar;
