import SidebarItem from "@/features/editor/components/sidebar-item";
import {
  Image,
  LayoutTemplate,
  Settings,
  Shapes,
  Sparkle,
  Sparkles,
  Type,
} from "lucide-react";
import { ActiveTool } from "@/features/editor/types";

interface SidebarProps {
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}
const Sidebar = ({ activeTool, onChangeActiveTool }: SidebarProps) => {
  return (
    <aside className="fixed pt-[64px] shadow-sm left-0 top-0 w-[100px] bg-white z-40 h-full">
      <ul className="flex flex-col">
        <SidebarItem isActive={activeTool === "templates"} icon={LayoutTemplate} label="Design" onClick={()=>onChangeActiveTool("templates")} />
        <SidebarItem isActive={activeTool === "images"} icon={Image} label="Image" onClick={()=>onChangeActiveTool("images")} />
        <SidebarItem isActive={activeTool === "text"} icon={Type} label="Text" onClick={() => onChangeActiveTool("text")} />
        <SidebarItem isActive={activeTool === "shape"} icon={Shapes} label="Shapes" onClick={() => onChangeActiveTool("shape")} />
        <SidebarItem isActive={activeTool === "ai"} icon={Sparkles} label="AI" onClick={() => onChangeActiveTool("ai")} />
        <SidebarItem isActive={activeTool === "settings"} icon={Settings} label="Settings" onClick={() => onChangeActiveTool("settings")} />
      </ul>
    </aside>
  );
};

export default Sidebar;
