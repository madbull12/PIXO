import Logo from "@/src/components/logo";
import { Button } from "@/src/components/ui/button";
import { CursorClickIcon } from "@/src/components/ui/cursor-click";
import { DownloadIcon } from "@/src/components/ui/download-icon";
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
import { ChevronDown, CloudCheck, File } from "lucide-react";
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
      <div className="flex items-center gap-x-2">
        <CloudCheck size={20} className="shrink-0 text-muted-foreground" />
        <p className="text-muted-foreground text-sm">Saved</p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex ml-auto h-10 px-4 rounded-lg hover:bg-muted cursor-pointer gap-x-2 items-center">
          <span className=" font-medium">Export</span>

          <DownloadIcon size={18} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="flex items-center">
            <File className=" size-6" />
            <div>
              <p>JSON</p>
              <p className="text-muted-foreground text-xs">Saved for later editing</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center">
            <File className=" size-6" />
            <div>
              <p>PNG</p>
              <p className="text-muted-foreground text-xs">Best for sharing on the web</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center">
            <File className=" size-6" />
            <div>
              <p>JPG</p>
              <p className="text-muted-foreground text-xs">Best for printing</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center">
            <File className=" size-6" />
            <div>
              <p>SVG</p>
              <p className="text-muted-foreground text-xs">Best for editing in vector software</p>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default Navbar;
