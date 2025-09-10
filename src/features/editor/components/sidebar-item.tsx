import { Button } from '@/src/components/ui/button';
import { cn } from '@/src/lib/utils';
import { LucideIcon } from 'lucide-react'
import React from 'react'

interface SidebarItemProps {
    icon:LucideIcon;
    label:string;
    isActive?:boolean;
    onClick:()=>void;
}
const SidebarItem = ({
    icon: Icon,
    label,
    isActive,
    onClick
}: SidebarItemProps) => {
  return (
    <Button
        onClick={onClick}
        variant={'ghost'}
        className={cn(
            "w-full h-full px-3 py-4  flex flex-col rounded-none",
            isActive && "bg-muted text-primary"
        )}
    >
        <Icon className='size-5 stroke-2 shrink-0' /> 
        <span className=' text-xs'>
            {label}
        </span>
    </Button>
  )
}

export default SidebarItem