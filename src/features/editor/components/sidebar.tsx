import SidebarItem from "@/src/features/editor/components/sidebar-item"
import { Image, LayoutTemplate,  Settings,  Shapes,  Sparkle,  Sparkles,  Type } from "lucide-react"

const Sidebar = () => {
  return (
    <aside className="fixed pt-[64px] shadow-sm left-0 top-0 w-[100px] bg-white z-40 h-full">
      <ul className="flex flex-col">
        <SidebarItem
          icon={LayoutTemplate}
          label="Design"
          onClick={() => {}}
        />
        <SidebarItem
          icon={Image}
          label="Image"
          onClick={() => {}}
        />
        <SidebarItem
          icon={Type}
          label="Text"
          onClick={() => {}}
        />
        <SidebarItem
          icon={Shapes}
          label="Shapes"
          onClick={() => {}}
        />
        <SidebarItem
          icon={Sparkles}
          label="AI"
          onClick={() => {}}
        />
        <SidebarItem
          icon={Settings}
          label="Settings"
          onClick={() => {}}
        />
      </ul>
    </aside>
  )
}

export default Sidebar