import Logo from "@/src/components/logo";
import { Button } from "@/src/components/ui/button";
import { CursorClickIcon } from "@/src/components/ui/cursor-click";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import Hint from "@/src/components/ui/hint";
import { RedoIcon } from "@/src/components/ui/redo-icon";
import { Separator } from "@/src/components/ui/separator";
import { UndoIcon } from "@/src/components/ui/undo-icon";
import { ChevronDown, File } from "lucide-react";
const Navbar = () => {
  return (
    <nav className="flex  items-center gap-x-6  h-16 px-4 bg-white shadow-md sticky top-0 z-50">
      <Logo />
      <DropdownMenu>
        <DropdownMenuTrigger className="flex cursor-pointer gap-x-2 items-center">
          <span className=" font-medium">File</span>

          <ChevronDown size={16} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="flex items-center">
            <File className=" size-6" />
            <div>
              <p>Open</p>
              <p className="text-muted-foreground text-xs">Open a JSON File</p>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Separator orientation="vertical" className="mx-2 " />
      <div className="flex items-center gap-x-2">
        <Hint label="Select" side="bottom" align="center" sideOffset={8}>
          <Button variant="ghost" size="icon">
            <CursorClickIcon size={24} />
          </Button>
        </Hint>
        <Hint label="Undo" side="bottom" align="center" sideOffset={8}>
          <Button variant="ghost" size="icon">
            <UndoIcon size={24} />
          </Button>
        </Hint>
        <Hint label="Redo" side="bottom" align="center" sideOffset={8}>
          <Button variant="ghost" size="icon">
            <RedoIcon size={24} />
          </Button>
        </Hint>
      </div>
      <Separator orientation="vertical" className="mx-2 " />
    </nav>
  );
};

export default Navbar;
